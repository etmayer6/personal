// Fictional Apex GT dynamics. SI units, fixed-step integration; no real-car claims.
export const paints = {
    obsidian: { label: 'Obsidian', color: '#34494e' },
    signal: { label: 'Signal orange', color: '#d46e3d' },
    mineral: { label: 'Mineral green', color: '#6c9e83' },
    cobalt: { label: 'Cobalt blue', color: '#4875b3' },
    pearl: { label: 'Pearl white', color: '#e6e4d9' }
};
export const engines = {
    stock: { hp: 320, mass: 1430, force: 8700, note: 'predictable power delivery' },
    sport: { hp: 420, mass: 1455, force: 10200, note: 'more pull out of every corner' },
    race: { hp: 540, mass: 1480, force: 12300, note: 'brake early; power needs room' }
};
export const wheels = {
    street: { label: 'Street forged', code: '19 STREET', grip: 1.05, mass: 0, roll: 0.14 },
    aero: { label: 'Aero disc', code: '19 AERO', grip: 0.94, mass: 12, roll: 0.1 },
    track: { label: 'Track mesh', code: '20 TRACK', grip: 1.25, mass: -16, roll: 0.18 }
};
export const defaultBuild = { paint: 'obsidian', wheel: 'street', engine: 'stock', suspension: 50, lower: false, lights: true, scene: 'golden' };
export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
export function validBuild(raw = {}) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) raw = {};
    return {
        paint: Object.hasOwn(paints, raw.paint) ? raw.paint : defaultBuild.paint,
        wheel: Object.hasOwn(wheels, raw.wheel) ? raw.wheel : defaultBuild.wheel,
        engine: Object.hasOwn(engines, raw.engine) ? raw.engine : defaultBuild.engine,
        suspension: Number.isFinite(raw.suspension) ? clamp(Math.round(raw.suspension), 0, 100) : 50,
        lower: raw.lower === true, lights: raw.lights !== false,
        scene: ['golden', 'studio', 'night'].includes(raw.scene) ? raw.scene : 'golden'
    };
}
export function specifications(build) {
    const tire = wheels[build.wheel], engine = engines[build.engine];
    return { hp: engine.hp, mass: engine.mass + tire.mass, grip: tire.grip * (build.lower ? 1.025 : 1), height: build.lower ? 132 : 146 };
}
export function surfaceAt(x, z, course) {
    if (course === 'sprint') return Math.abs(x - 70) <= 6 && z > -565 && z < 78 ? 'tarmac' : 'grass';
    const distance = Math.abs(z) <= 65 ? Math.abs(x) : Math.hypot(x, Math.abs(z) - 65);
    return Math.abs(distance - 34) < 5.5 ? 'tarmac' : Math.abs(distance - 34) < 6.3 ? 'curb' : 'grass';
}
export function newRun(course = 'circuit') {
    return { course, x: course === 'sprint' ? 70 : 34, z: 40, yaw: 0, speed: 0, steer: 0, yawRate: 0,
        slip: 0, spin: 0, pitch: 0, roll: 0, gear: 'N', rpm: 900, surface: 'tarmac',
        elapsed: 0, started: false, distance: 0, zeroSixty: null, quarter: null, sprintInvalid: false,
        lap: 1, checkpoint: 0, lapTime: 0, lastLap: null, lapInvalid: false, finished: false, event: null };
}
const checkpoints = [[34, -55], [-34, -55], [-34, 55], [34, 55]];
export function stepCar(car, build, input, dt) {
    car.event = null;
    if (car.finished) return;
    const previousZ = car.z, previousSpeed = car.speed;
    const spec = specifications(build), power = engines[build.engine], tire = wheels[build.wheel];
    car.surface = surfaceAt(car.x, car.z, car.course);
    const throttle = input.up ? 1 : 0, brake = input.down ? 1 : 0;
    const requestedSteer = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    car.steer += (requestedSteer - car.steer) * Math.min(1, dt * 6);
    if (!car.started && throttle && !brake) { car.started = true; car.event = 'start'; }
    if (car.started) { car.elapsed += dt; car.lapTime += dt; }
    const speed = Math.abs(car.speed);
    const grip = spec.grip * 9.81 * (car.surface === 'grass' ? 0.42 : car.surface === 'curb' ? 0.83 : 1);
    const traction = grip * (input.handbrake ? 0.55 : 0.87);
    const engineForce = Math.min(power.force, power.hp * 745.7 * 0.83 / Math.max(8, speed));
    let acceleration = 0;
    if (throttle) acceleration += car.speed < -0.4 ? 9 : Math.min(traction, engineForce / spec.mass);
    if (brake) acceleration -= car.speed > 0.35 ? Math.min(11.5, grip) : Math.min(3, 3 - speed * 0.13);
    if (input.handbrake) acceleration -= Math.sign(car.speed) * Math.min(speed / dt, 4.5);
    if (speed > 0.01) acceleration -= Math.sign(car.speed) * (tire.roll + 0.00029 * speed * speed + (car.surface === 'grass' ? 1.1 + speed * 0.12 : 0));
    car.speed = clamp(car.speed + acceleration * dt, -8, 85);
    if (!throttle && !brake && Math.sign(previousSpeed) !== Math.sign(car.speed)) car.speed = 0;
    // A speed-sensitive bicycle model: excess lateral demand becomes understeer/slip,
    // rather than allowing impossible high-speed instant turns.
    const steeringAngle = car.steer * (0.48 / (1 + speed * 0.023));
    const desiredYawRate = -Math.tan(steeringAngle) * car.speed / 2.72;
    const maxYawRate = grip / Math.max(2.5, speed);
    const limitedYawRate = clamp(desiredYawRate, -maxYawRate, maxYawRate);
    const stiffness = 3.4 + build.suspension * 0.052;
    const targetYawRate = limitedYawRate * (input.handbrake ? 1.45 : 1);
    car.yawRate += (targetYawRate - car.yawRate) * Math.min(1, dt * stiffness);
    car.slip += ((desiredYawRate - limitedYawRate) * speed * 0.075 + (input.handbrake ? car.steer * -0.22 : 0) - car.slip) * Math.min(1, dt * 4);
    car.yaw += car.yawRate * dt;
    const direction = car.yaw + car.slip;
    car.x -= Math.sin(direction) * car.speed * dt;
    car.z -= Math.cos(direction) * car.speed * dt;
    if (car.course === 'circuit') {
        // Pit building and outside guardrail are solid; grass is a forgiving runoff.
        const inPit = car.x > 3 && car.x < 17 && car.z > 23 && car.z < 47;
        const inRail = car.x > 41.8 && car.x < 44.2 && Math.abs(car.z) < 64;
        if (inPit || inRail) {
            if (inPit) car.x = car.x > 10 ? 17.1 : 2.9;
            else car.x = 41.7;
            car.speed *= -0.18; car.yawRate = 0; car.event = 'collision';
        }
    }
    car.spin += car.speed * dt / 0.35;
    const compliance = 1 - build.suspension / 150;
    car.pitch += (acceleration * -0.006 * compliance - car.pitch) * Math.min(1, dt * 7);
    car.roll += (car.yawRate * car.speed * 0.007 * compliance - car.roll) * Math.min(1, dt * 7);
    const mph = speed * 2.23694;
    car.gear = car.speed < -0.2 ? 'R' : speed < 0.2 ? 'N' : String(Math.min(6, 1 + Math.floor(mph / 28)));
    car.rpm = car.gear === 'N' ? 900 : Math.round(1500 + mph % 28 / 28 * 5100);
    if (car.course === 'sprint') {
        // Timing is displacement along the measured strip, not distance from donuts.
        car.distance = Math.max(0, 40 - car.z);
        if (car.started && car.surface !== 'tarmac') car.sprintInvalid = true;
        if (!car.sprintInvalid && !car.zeroSixty && car.speed >= 26.8224) {
            const fraction = clamp((26.8224 - previousSpeed) / Math.max(0.0001, car.speed - previousSpeed), 0, 1);
            car.zeroSixty = car.elapsed - dt + fraction * dt; car.event = 'sixty';
        }
        if (!car.sprintInvalid && !car.quarter && car.distance >= 402.336) {
            const fraction = clamp((402.336 - (40 - previousZ)) / Math.max(0.0001, previousZ - car.z), 0, 1);
            car.quarter = car.elapsed - dt + fraction * dt; car.event = 'quarter';
        }
    } else {
        if (car.started && car.surface === 'grass') car.lapInvalid = true;
        if (car.checkpoint < 4 && Math.hypot(car.x - checkpoints[car.checkpoint][0], car.z - checkpoints[car.checkpoint][1]) < 16 && car.speed > 0) car.checkpoint++;
        if (car.checkpoint === 4 && previousZ >= 40 && car.z < 40 && car.x > 28 && car.x < 40 && car.speed > 0) {
            car.lastLap = car.lapTime; car.event = car.lapInvalid ? 'invalid-lap' : 'lap';
            car.lap++; car.checkpoint = 0; car.lapTime = 0; car.lapInvalid = false;
        }
    }
    if (car.course === 'sprint' && car.z < -550) {
        car.z = -550; car.speed = 0; car.gear = 'N'; car.rpm = 900; car.finished = true; car.event = 'end';
    } else if (Math.abs(car.x) > 230 || car.z > 180 || car.z < -180 && car.course !== 'sprint') {
        Object.assign(car, newRun(car.course)); car.event = 'boundary';
    }
}
