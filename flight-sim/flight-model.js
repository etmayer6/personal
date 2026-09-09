const DEG = Math.PI / 180;

const MODEL = Object.freeze({
  massKg: 1100,
  wingAreaM2: 16.2,
  seaLevelAirDensityKgM3: 1.225,
  seaLevelTemperatureK: 288.15,
  seaLevelPressurePa: 101325,
  temperatureLapseRateKPerM: 0.0065,
  gasConstantAir: 287.05,
  gravityMps2: 9.81,
  referenceSpeedMps: 58,
  maxThrustN: 2700,
  idleRpm: 760,
  maxRpm: 2850,
  cleanStallSpeedMps: 29.8,
  criticalAoaRad: 15.5 * DEG,
  stallDropRad: 7 * DEG,
  aspectRatio: 7.2,
  oswaldEfficiency: 0.78,
  minimumSpeedMps: 22,
  maximumSpeedMps: 102,
  maximumVerticalSpeedMps: 24
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function smoothToward(current, target, response, dt) {
  return current + (target - current) * (1 - Math.exp(-response * dt));
}

function normalizedFlapPosition(flaps) {
  return clamp(flaps / 2, 0, 1);
}

/**
 * Advance the simplified trainer aircraft by one fixed simulation step.
 *
 * The game is intentionally not a certified flight model, but the important
 * relationships are physical: controls create angular acceleration, lift is
 * driven by angle of attack and dynamic pressure, induced/parasite drag rob
 * energy, and thrust must pay for both drag and climb. Wind is applied to the
 * air-mass-relative velocity so IAS and ground speed can disagree naturally.
 */
export function stepFlightModel(state, { dt, controls, wind, groundHeight, runway }) {
  const altitudeM = Math.max(0, state.position.y);
  const temperatureK = clamp(
    MODEL.seaLevelTemperatureK - MODEL.temperatureLapseRateKPerM * altitudeM,
    216.65,
    MODEL.seaLevelTemperatureK
  );
  const pressurePa = MODEL.seaLevelPressurePa * Math.pow(
    temperatureK / MODEL.seaLevelTemperatureK,
    MODEL.gravityMps2 / (MODEL.gasConstantAir * MODEL.temperatureLapseRateKPerM)
  );
  const airDensityKgM3 = pressurePa / (MODEL.gasConstantAir * temperatureK);
  const speed = Math.max(1, state.speed);
  const indicatedSpeedMps = speed * Math.sqrt(airDensityKgM3 / MODEL.seaLevelAirDensityKgM3);
  const flapPosition = normalizedFlapPosition(state.flaps);
  const windVector = wind || { x: 0, y: 0, z: 0 };
  const controlAuthority = clamp(
    Math.sqrt(speed / MODEL.referenceSpeedMps) * (1 - state.stall * 0.42),
    0.28,
    1.18
  );
  const flightPathAngle = Math.atan2(
    state.verticalVelocity - windVector.y,
    Math.max(22, speed)
  );

  const pitchTrim = 0.015 + state.trim * 0.34;
  const stallRatio = clamp(
    (Math.abs(state.angleOfAttack || 0) - MODEL.criticalAoaRad) / MODEL.stallDropRad,
    0,
    1
  );
  const pitchBuffet = stallRatio > 0 ? Math.sin(state.time * 48) * stallRatio * 0.035 : 0;
  const stallNoseDrop = stallRatio * 0.9;
  const gustPitch = (
    Math.sin(state.time * 1.42 + state.position.x * 0.0014) +
    Math.cos(state.time * 0.96 + state.position.z * 0.0018)
  ) * 0.006;
  const gustRoll = (
    Math.cos(state.time * 1.14 + state.position.z * 0.0012) +
    Math.sin(state.time * 0.88 + state.position.x * 0.0011)
  ) * 0.009;

  state.rollRate += (
    controls.roll * 1.92 * controlAuthority -
    state.rollRate * 2.15 -
    state.roll * 0.24 -
    controls.rudder * 0.08 +
    gustRoll
  ) * dt;
  state.pitchRate += (
    controls.pitch * 1.04 * controlAuthority -
    state.pitchRate * 1.72 -
    (state.pitch - pitchTrim) * 0.3 -
    pitchBuffet -
    stallNoseDrop +
    gustPitch
  ) * dt;
  state.yawRate += (
    controls.rudder * 0.92 * controlAuthority -
    state.yawRate * 1.85 -
    state.slip * 0.82 -
    controls.roll * 0.12 +
    Math.sin(state.roll) * 0.16
  ) * dt;

  state.roll += state.rollRate * dt;
  state.roll = clamp(state.roll, -1.05, 1.05);
  state.pitch += state.pitchRate * dt;
  state.pitch = clamp(state.pitch, -0.3, 0.42);

  state.throttle = clamp(state.throttle + controls.throttle * 0.34 * dt, 0, 1);
  state.trim = clamp(state.trim + controls.trim * 0.078 * dt, -0.18, 0.18);

  const enginePower = clamp(state.engineHealth, 0, 1);
  const throttleRpm = MODEL.idleRpm + (100 + state.throttle * (MODEL.maxRpm - MODEL.idleRpm - 100)) * enginePower;
  state.engineRpm = smoothToward(state.engineRpm, throttleRpm, 4.2, dt);
  const rpmFraction = clamp(
    (state.engineRpm - MODEL.idleRpm) / (MODEL.maxRpm - MODEL.idleRpm),
    0,
    1
  );
  const enginePowerFraction = rpmFraction * enginePower;
  state.fuel = clamp(
    state.fuel - dt * 1.18 * (0.08 + enginePowerFraction * 0.92),
    0,
    100
  );

  const angleOfAttack = clamp(state.pitch - flightPathAngle, -0.34, 0.56);
  const absoluteAoa = Math.abs(angleOfAttack);
  const stallAmount = clamp(
    (absoluteAoa - MODEL.criticalAoaRad) / MODEL.stallDropRad,
    0,
    1
  );
  const liftCoefficient = clamp(
    (0.1 + angleOfAttack * 4.8 + flapPosition * 0.23) * (1 - stallAmount * 0.7),
    -0.72,
    1.52
  );
  const dynamicPressure = 0.5 * airDensityKgM3 * speed * speed;
  const nearGround = clamp((14 - Math.max(0, state.position.y - groundHeight)) / 14, 0, 1);
  const groundEffect = 1 + nearGround * 0.18;
  const liftN = dynamicPressure * MODEL.wingAreaM2 * liftCoefficient * groundEffect;
  const inducedDrag = liftCoefficient * liftCoefficient / (
    Math.PI * MODEL.aspectRatio * MODEL.oswaldEfficiency
  );
  const dragCoefficient = clamp(
    0.032 + inducedDrag + flapPosition * 0.022 + stallAmount * 0.085 + Math.abs(state.slip) * 0.035,
    0.025,
    1.2
  );
  const dragN = dynamicPressure * MODEL.wingAreaM2 * dragCoefficient * (1 - nearGround * 0.1);
  const propEfficiency = clamp(0.9 - speed / 230, 0.46, 0.9);
  const thrustN = MODEL.maxThrustN * enginePowerFraction * propEfficiency;
  const weightN = MODEL.massKg * MODEL.gravityMps2;
  const climbForceN = weightN * Math.sin(flightPathAngle);
  const longitudinalAcceleration = (thrustN - dragN - climbForceN) / MODEL.massKg;
  const verticalAcceleration = (
    liftN * Math.cos(state.roll) +
    thrustN * Math.sin(state.pitch) -
    weightN * Math.cos(flightPathAngle)
  ) / MODEL.massKg;

  state.speed = clamp(
    state.speed + longitudinalAcceleration * dt,
    MODEL.minimumSpeedMps,
    MODEL.maximumSpeedMps
  );
  state.verticalVelocity = clamp(
    state.verticalVelocity + verticalAcceleration * dt,
    -MODEL.maximumVerticalSpeedMps,
    MODEL.maximumVerticalSpeedMps
  );
  state.slip = clamp(
    state.slip + (
      Math.sin(state.roll) * 0.32 -
      state.yawRate * 0.46 -
      controls.rudder * 0.24 -
      state.slip * 2.2 +
      controls.roll * 0.02
    ) * dt,
    -0.5,
    0.5
  );

  const coordinatedTurnRate = MODEL.gravityMps2 * Math.tan(state.roll) / Math.max(30, state.speed);
  const slipTurnRate = state.yawRate * 0.12 + state.slip * 0.045;
  state.heading = state.heading + (coordinatedTurnRate + slipTurnRate) * dt;

  const horizontalSpeed = Math.max(18, state.speed * Math.cos(flightPathAngle));
  const forwardX = Math.sin(state.heading) * horizontalSpeed;
  const forwardY = Math.sin(flightPathAngle) * state.speed;
  const forwardZ = -Math.cos(state.heading) * horizontalSpeed;
  const groundVelocityX = forwardX + windVector.x;
  const groundVelocityY = forwardY + windVector.y;
  const groundVelocityZ = forwardZ + windVector.z;

  state.position.x += groundVelocityX * dt;
  state.position.y += groundVelocityY * dt;
  state.position.z += groundVelocityZ * dt;
  state.groundSpeed = Math.hypot(groundVelocityX, groundVelocityZ);
  state.verticalVelocity = groundVelocityY;
  state.time += dt;

  state.angleOfAttack = angleOfAttack;
  state.gLoad = clamp(liftN * Math.cos(state.roll) / weightN, 0, 3.8);
  const maneuverLoadFactor = clamp(
    Math.max(1 / Math.max(0.4, Math.cos(state.roll)), state.gLoad),
    1,
    3.8
  );
  const flapStallFactor = 1 + flapPosition * 0.14;
  const stallSpeedMps = MODEL.cleanStallSpeedMps *
    Math.sqrt(MODEL.seaLevelAirDensityKgM3 / airDensityKgM3) *
    Math.sqrt(maneuverLoadFactor) / flapStallFactor;
  const stallSpeedIasMps = MODEL.cleanStallSpeedMps * Math.sqrt(maneuverLoadFactor) / flapStallFactor;
  state.stall = stallAmount > 0.05 || state.speed < stallSpeedMps;
  state.stallMarginDeg = (MODEL.criticalAoaRad - absoluteAoa) / DEG;
  state.stallSpeedMarginKts = (indicatedSpeedMps - stallSpeedIasMps) * 1.94384;
  state.indicatedSpeedMps = indicatedSpeedMps;
  state.stallSpeedMps = stallSpeedMps;
  state.stallSpeedIasMps = stallSpeedIasMps;
  state.airDensityKgM3 = airDensityKgM3;
  state.temperatureC = temperatureK - 273.15;
  state.pressureAltitudeM = altitudeM;
  state.enginePowerFraction = enginePowerFraction;
  state.liftCoefficient = liftCoefficient;
  state.dragCoefficient = dragCoefficient;
  state.thrustNewtons = thrustN;
  state.dragNewtons = dragN;
  state.verticalAccelerationMps2 = verticalAcceleration;
  state.groundEffect = groundEffect;
  state.buffet = stallAmount;

  if (state.position.y <= groundHeight + 4) {
    state.position.y = groundHeight + 4;
  }

  // Keep the final few metres forgiving without hiding the energy model.
  if (
    runway &&
    Math.abs(state.position.x) <= runway.halfWidth + 16 &&
    state.position.z <= runway.end + 40 &&
    state.position.z >= runway.start - 40 &&
    state.position.y - groundHeight < 20 &&
    state.pitch > 0
  ) {
    const flareBlend = clamp((20 - (state.position.y - groundHeight)) / 20, 0, 1) * (0.2 + flapPosition * 0.04);
    state.verticalVelocity = smoothToward(state.verticalVelocity, -1.5 + state.pitch * 3.4, 2.6 * flareBlend, dt);
  }

  return state;
}
