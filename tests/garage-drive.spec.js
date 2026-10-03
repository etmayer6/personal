const { test, expect } = require('@playwright/test');
const state = page => page.evaluate(() => JSON.parse(window.render_game_to_text()));
async function advance(page, key, ms) {
    if (key) await page.keyboard.down(key);
    await page.evaluate(ms => window.advanceTime(ms), ms);
    if (key) await page.keyboard.up(key);
    return state(page);
}
test.beforeEach(async ({ page }) => {
    await page.goto('/garage/');
    await expect(page.locator('body')).toHaveAttribute('data-demo-state', 'ready');
});

test('configuration, orbit, zoom, lighting, save, reload and removal', async ({ page }, testInfo) => {
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.getByRole('button', { name: 'Signal orange', exact: true }).click();
    await page.locator('[data-wheel="track"]').click();
    await page.locator('[data-engine="race"]').click();
    await page.getByLabel('Lower stance').check();
    await page.getByLabel('Compliance').fill('85');
    const configured = await state(page);
    expect(configured.specifications).toMatchObject({ hp: 540, mass: 1464, height: 132 });
    expect(configured.build.suspension).toBe(85);
    await page.getByRole('button', { name: 'Side', exact: true }).click();
    await expect(page.locator('#viewport-label')).toHaveText('Profile / side');
    await page.locator('.scene-options summary').click();
    await page.locator('[data-scene="night"]').click();
    await page.getByLabel('Headlights').uncheck();
    await page.getByRole('button', { name: 'Auto orbit' }).click();
    const before = await state(page); await page.evaluate(() => window.advanceTime(1000));
    expect((await state(page)).camera.yaw).toBeGreaterThan(before.camera.yaw);
    await page.getByRole('button', { name: 'Save build', exact: true }).click();
    await expect(page.locator('#save-state')).toHaveText('Saved in this browser');
    await page.reload(); expect((await state(page)).build).toMatchObject({ paint: 'signal', wheel: 'track', engine: 'race', lower: true, lights: false, scene: 'night' });
    await page.getByRole('button', { name: 'Reset build' }).click();
    expect((await state(page)).build.engine).toBe('stock');
    await page.getByRole('button', { name: 'Load build' }).click();
    expect((await state(page)).build.engine).toBe('race');
    await page.screenshot({ path: testInfo.outputPath('configured-studio.png'), fullPage: true });
    await page.getByRole('button', { name: /Remove Signal/ }).click();
    expect((await state(page)).savedBuilds).toBe(0);
    expect(errors).toEqual([]);
});

test('public link carries a build to another browser without replacing saved cars', async ({ page, browser }) => {
    await page.locator('[data-paint="cobalt"]').click(); await page.locator('[data-engine="sport"]').click();
    await page.locator('#share-button').click();
    const link = await page.locator('#share-url').inputValue();
    await page.keyboard.press('Tab'); expect(await page.evaluate(() => !!document.activeElement.closest('#share-dialog'))).toBe(true);
    await page.keyboard.press('Escape'); await expect(page.locator('#share-button')).toBeFocused();
    const guest = await browser.newContext(); const other = await guest.newPage();
    await other.goto('/garage/'); await other.locator('#save-button').click();
    await other.goto(link); await expect(other.locator('#save-state')).toHaveText('Shared build');
    expect((await state(other)).build).toMatchObject({ paint: 'cobalt', engine: 'sport' });
    expect((await state(other)).savedBuilds).toBe(1);
    await other.locator('#drive-button').click(); expect((await advance(other, 'ArrowUp', 1000)).car.speedMps).toBeGreaterThan(3);
    await guest.close();
});

test('accelerate, brake, reverse, steer, handbrake, pause, reset and return', async ({ page }, testInfo) => {
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await page.locator('#drive-button').click();
    await page.locator('#sound-button').click();expect((await state(page)).sound).toBe(true);
    await page.locator('#sound-button').click();expect((await state(page)).sound).toBe(false);
    const accelerated = await advance(page, 'ArrowUp', 2400);
    expect(accelerated.car.speedMps).toBeGreaterThan(12); expect(accelerated.car.z).toBeLessThan(25);
    const braked = await advance(page, 'ArrowDown', 1000); expect(braked.car.speedMps).toBeLessThan(accelerated.car.speedMps - 5);
    await page.locator('#pause-button').click(); const stopped = await state(page);
    await advance(page, 'ArrowUp', 2000); expect((await state(page)).car).toEqual(stopped.car);
    await page.locator('#resume-button').click();
    await page.keyboard.down('ArrowLeft'); const turned = await advance(page, 'ArrowUp', 1200); await page.keyboard.up('ArrowLeft');
    expect(turned.car.yaw).toBeGreaterThan(.1); expect(turned.car.x).toBeLessThan(34);
    const slide = await advance(page, 'Space', 500); expect(slide.car.speedMps).toBeLessThan(turned.car.speedMps);
    await page.screenshot({ path: testInfo.outputPath('driving.png') });
    await page.keyboard.press('r'); const reset = await state(page); expect(reset.car).toMatchObject({ x: 34, z: 40, speedMps: 0 }); expect(reset.run.started).toBe(false);
    const reverse = await advance(page, 'ArrowDown', 1500); expect(reverse.car.speedMps).toBeLessThan(-2); expect(reverse.car.gear).toBe('R'); expect(reverse.car.z).toBeGreaterThan(40);
    await page.locator('#camera-button').click(); expect((await state(page)).camera).toBe('hood');
    await page.screenshot({ path: testInfo.outputPath('hood.png') });
    await page.locator('#return-button').click(); expect((await state(page)).mode).toBe('studio');
    await page.locator('#drive-button').click(); expect((await state(page)).car.speedMps).toBe(0);
    expect(errors).toEqual([]);
});

test('sprint reaches both timing milestones and keeps build-specific personal bests', async ({ page }, testInfo) => {
    await page.locator('#drive-mode').selectOption('sprint'); await page.locator('#drive-button').click();
    const finished = await advance(page, 'ArrowUp', 18000);
    expect(finished.run.zeroSixty).toBeGreaterThan(4); expect(finished.run.zeroSixty).toBeLessThan(8);
    expect(finished.run.quarter).toBeGreaterThan(11); expect(finished.run.quarter).toBeLessThan(18); expect(finished.run.invalid).toBe(false);
    expect(finished.records.sixty).toBe(finished.run.zeroSixty);
    expect(finished.run.finished).toBe(true);expect(finished.car.gear).toBe('N');await expect(page.locator('.track-map')).toBeHidden();
    await page.screenshot({ path: testInfo.outputPath('sprint.png') });
    await page.locator('#return-button').click(); await page.locator('[data-engine="race"]').click();
    await page.locator('#drive-button').click(); const race = await advance(page, 'ArrowUp', 17000);
    expect(race.run.zeroSixty).toBeLessThan(finished.run.zeroSixty); expect(race.run.quarter).toBeLessThan(finished.run.quarter);
    await page.locator('#return-button').click(); await page.locator('[data-engine="stock"]').click(); await page.locator('#drive-button').click();
    expect((await state(page)).records.sixty).toBe(finished.records.sixty);
});

test('off-strip runs are invalid, edge reset is safe, and focus loss pauses', async ({ page }) => {
    await page.locator('#drive-mode').selectOption('sprint'); await page.locator('#drive-button').click();
    await page.keyboard.down('ArrowLeft');const off=await advance(page,'ArrowUp',4000);await page.keyboard.up('ArrowLeft');
    expect(off.run.invalid).toBe(true); expect(off.records.sixty).toBeUndefined();
    await page.evaluate(() => window.dispatchEvent(new Event('blur'))); expect((await state(page)).paused).toBe(true);
    await page.locator('#resume-button').click(); await page.locator('#restart-button').click();
    await advance(page,'ArrowUp',30000);expect((await state(page)).car.speedMps).toBeLessThan(20);
});

test('model grip, stiffness, surface penalty and ordered lap validation', async ({ page }) => {
    const result = await page.evaluate(async () => {
        const {newRun,stepCar,defaultBuild,specifications}=await import('/garage/model.js');
        const input={up:true,left:true};
        const simulate=changes=>{const car=newRun();car.speed=27;for(let i=0;i<60;i++)stepCar(car,{...defaultBuild,...changes},input,1/120);return car;};
        const road=newRun();road.speed=20;const grass={...road,x:0};
        for(let i=0;i<120;i++){stepCar(road,defaultBuild,{},1/120);stepCar(grass,defaultBuild,{},1/120);}
        const lap=newRun();lap.started=true;lap.speed=1;
        for(const [x,z] of [[34,-55],[-34,-55],[-34,55],[34,55]]){lap.x=x;lap.z=z;stepCar(lap,defaultBuild,{},1/120);}
        lap.x=34;lap.z=40.005;stepCar(lap,defaultBuild,{},1/120);
        const skipped=newRun();skipped.speed=1;skipped.z=40.005;stepCar(skipped,defaultBuild,{},1/120);
        // Complete a real physics-driven lap, not just checkpoint fixtures.
        const driven=newRun(),points=[];
        for(let z=35;z>=-65;z-=5)points.push([34,z]);
        for(let i=1;i<=40;i++){const t=i*Math.PI/40;points.push([34*Math.cos(t),-65-34*Math.sin(t)]);}
        for(let z=-60;z<=65;z+=5)points.push([-34,z]);
        for(let i=1;i<=40;i++){const t=i*Math.PI/40;points.push([-34*Math.cos(t),65+34*Math.sin(t)]);}
        for(let z=60;z>=30;z-=5)points.push([34,z]);
        let point=0;
        for(let i=0;i<14000&&driven.lap===1;i++){
            while(point<points.length-1&&Math.hypot(points[point][0]-driven.x,points[point][1]-driven.z)<7)point++;
            const target=points[point];let angle=Math.atan2(-(target[0]-driven.x),-(target[1]-driven.z))-driven.yaw;angle=Math.atan2(Math.sin(angle),Math.cos(angle));
            stepCar(driven,defaultBuild,{up:driven.speed<9.5,down:driven.speed>10.5,left:angle>.045,right:angle<-.045},1/120);
        }
        return{street:simulate({wheel:'street'}),track:simulate({wheel:'track'}),soft:simulate({suspension:0}),firm:simulate({suspension:100}),road:road.speed,grass:grass.speed,lap:lap.lap,lastLap:lap.lastLap,skipped:skipped.lap,low:specifications({...defaultBuild,lower:true}),driven:{lap:driven.lap,event:driven.event,lastLap:driven.lastLap}};
    });
    expect(Math.abs(result.track.yawRate)).toBeGreaterThan(Math.abs(result.street.yawRate));
    expect(Math.abs(result.firm.yawRate)).toBeGreaterThan(Math.abs(result.soft.yawRate));
    expect(result.grass).toBeLessThan(result.road-2);expect(result.lap).toBe(2);expect(result.lastLap).toBeGreaterThan(0);expect(result.skipped).toBe(1);expect(result.low.height).toBe(132);
    expect(result.driven.lap).toBe(2);expect(result.driven.event).toBe('lap');expect(result.driven.lastLap).toBeGreaterThan(40);expect(result.driven.lastLap).toBeLessThan(70);
});

test('corrupt data, hostile links, unavailable storage and WebGL fail gracefully', async ({ browser }) => {
    const context=await browser.newContext();
    await context.addInitScript(()=>{localStorage.setItem('garage-bay-builds-v2','{broken');localStorage.setItem('garage-bay-records-v1','null');});
    const page=await context.newPage();await page.goto('/garage/#build=%7B%22v%22%3A1%2C%22build%22%3A%7B%22paint%22%3A%22__proto__%22%7D%7D');
    expect((await state(page)).build.paint).toBe('obsidian');
    await page.evaluate(()=>{Storage.prototype.setItem=()=>{throw new Error('unavailable');};});await page.locator('#save-button').click();
    await expect(page.locator('#save-state')).toHaveText('Storage unavailable');await page.locator('#share-button').click();await expect(page.locator('#share-url')).toHaveValue(/#build=/);
    await context.close();
    const fallback=await browser.newContext();await fallback.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=()=>null;});
    const other=await fallback.newPage();await other.goto('/garage/');await expect(other.locator('#render-error')).toBeVisible();await expect(other.locator('#drive-button')).toBeDisabled();await other.locator('[data-paint="signal"]').click();await other.locator('#save-button').click();expect((await state(other)).savedBuilds).toBe(1);await fallback.close();
});

test('phone touch controls release, no overflow, fullscreen enter and exit', async ({ page }, testInfo) => {
    await page.setViewportSize({width:390,height:844});await page.reload();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    await page.screenshot({path:testInfo.outputPath('mobile-studio.png'),fullPage:true});
    await page.locator('#drive-button').click();const go=page.locator('[data-key="ArrowUp"]');
    await go.dispatchEvent('pointerdown',{pointerId:1});await page.evaluate(()=>window.advanceTime(1500));await go.dispatchEvent('pointerup',{pointerId:1});
    expect((await state(page)).car.speedMps).toBeGreaterThan(7);
    const speed=(await state(page)).car.speedMps;await page.evaluate(()=>window.advanceTime(500));expect((await state(page)).car.speedMps).toBeLessThan(speed);
    await page.screenshot({path:testInfo.outputPath('mobile-drive.png'),fullPage:true});
    await page.locator('#fullscreen-button').click();await expect.poll(()=>page.evaluate(()=>!!document.fullscreenElement)).toBe(true);
    await page.locator('#fullscreen-button').click();await expect.poll(()=>page.evaluate(()=>!!document.fullscreenElement)).toBe(false);
});
