const {test,expect}=require('@playwright/test');
const fs=require('node:fs');
test.use({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const snapshot=page=>page.evaluate(()=>window.pocketWorlds.snapshot());
const text=page=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
async function open(page){await page.goto('/pocket-worlds/');await expect(page.locator('body')).toHaveAttribute('data-demo-state','ready');}
async function cursor(page){await page.locator('#world-canvas').focus();await page.keyboard.press('ArrowRight');return 13*24+12;}
test('all editing tools, undo/redo, brush boundaries and keyboard controls',async({page})=>{
    const errors=[];page.on('pageerror',e=>errors.push(String(e)));await open(page);
    const i=await cursor(page),initial=(await snapshot(page)).heights[i];
    await page.keyboard.press('Enter');expect((await snapshot(page)).heights[i]).toBe(initial+1);
    await page.keyboard.press('Control+z');expect((await snapshot(page)).heights[i]).toBe(initial);
    await page.keyboard.press('Control+Shift+z');expect((await snapshot(page)).heights[i]).toBe(initial+1);
    await page.keyboard.press('2');await page.keyboard.press('Enter');expect((await snapshot(page)).heights[i]).toBe(initial);
    await page.keyboard.press('3');await page.keyboard.press('Enter');expect((await snapshot(page)).heights[i]).toBe(0);
    await page.keyboard.press('5');await page.keyboard.press('Enter');expect((await snapshot(page)).buildings).not.toContain(i);await expect(page.locator('#notice')).toContainText('water');
    await page.keyboard.press('1');for(let j=0;j<3;j++)await page.keyboard.press('Enter');
    await page.keyboard.press('4');await page.keyboard.press('Enter');expect((await snapshot(page)).trees.some(t=>t[0]===i)).toBe(true);
    await page.keyboard.press('5');await page.keyboard.press('Enter');expect((await snapshot(page)).buildings).toContain(i);expect((await snapshot(page)).trees.some(t=>t[0]===i)).toBe(false);
    await page.keyboard.press('6');await page.keyboard.press('Enter');expect((await snapshot(page)).paths).toContain(i);expect((await snapshot(page)).buildings).not.toContain(i);
    await page.keyboard.press('7');await page.keyboard.press('Enter');expect((await snapshot(page)).paths).not.toContain(i);
    await page.locator('#brush-size').selectOption('3');await page.locator('#world-canvas').focus();await page.keyboard.press('3');await page.keyboard.press('Enter');
    const after=await snapshot(page);for(let z=12;z<=14;z++)for(let x=11;x<=13;x++)expect(after.heights[z*24+x]).toBe(0);
    await page.keyboard.press('8');await page.keyboard.press('Enter');expect((await text(page)).tool).toBe('view');
    await page.screenshot({path:test.info().outputPath('editor-desktop.png'),fullPage:true});expect(errors).toEqual([]);
});
test('pointer strokes paint once per tile and orbit/zoom leave terrain alone',async({page})=>{
    await open(page);await page.locator('#new-world').click();await page.locator('#world-template').selectOption('blank');await page.locator('#create-world').click();
    await page.locator('#brush-size').selectOption('3');const p=await page.evaluate(()=>window.pocketWorlds.cellScreen(12*24+12));expect(Number.isFinite(p.x)).toBe(true);
    await page.mouse.move(p.x,p.y);await page.mouse.down();await page.mouse.move(p.x+1,p.y);await page.mouse.move(p.x,p.y+1);await page.mouse.up();
    const before=await snapshot(page);expect(before.heights.filter(h=>h===1)).toHaveLength(9);expect(before.heights.filter(h=>h>1)).toHaveLength(0);
    await page.locator('#undo').click();expect((await snapshot(page)).heights.every(h=>h===0)).toBe(true);await page.locator('#redo').click();
    await page.locator('[data-tool="view"]').click();await page.mouse.move(p.x,p.y);await page.mouse.down();await page.mouse.move(p.x+65,p.y+20,{steps:5});await page.mouse.up();await page.mouse.wheel(0,-180);
    expect((await snapshot(page)).heights).toEqual(before.heights);expect((await text(page)).camera.yaw).not.toBe(.79);await page.locator('#reset-view').click();expect((await text(page)).camera.zoom).toBe(1.3);
});
test('growth, pause and all atmospheres are visible and deterministic',async({page})=>{
    await open(page);const before=await snapshot(page);await page.evaluate(()=>window.advanceTime(2000));expect((await snapshot(page)).elapsed).toBe(0);
    await page.locator('[data-weather="rain"]').click();await page.locator('#growth-speed').selectOption('4');await page.locator('#grow').click();await page.evaluate(()=>window.advanceTime(10000));await page.locator('#grow').click();const after=await snapshot(page);
    expect(after.elapsed).toBeGreaterThanOrEqual(40);expect(after.trees.length).toBeGreaterThan(before.trees.length);expect(after.trees[0][1]).toBeGreaterThan(before.trees[0][1]);
    await page.evaluate(()=>window.advanceTime(40000));expect((await snapshot(page)).elapsed).toBe(after.elapsed);
    for(const w of ['sunny','rain','snow','night']){await page.locator(`[data-weather="${w}"]`).click();expect((await text(page)).weather).toBe(w);await page.locator('#world-stage').screenshot({path:test.info().outputPath(`${w}.png`)});}
    await page.locator('#world-canvas').focus();await page.keyboard.press('Space');expect((await text(page)).running).toBe(true);await page.keyboard.press('Space');expect((await text(page)).running).toBe(false);
});
test('save/reload and sharing preserve the receiving browser draft',async({page,browser})=>{
    await open(page);await page.locator('#world-name').fill('Moss & Moon 🌲');await page.waitForTimeout(700);await page.locator('#save-world').click();await expect(page.locator('#saved-worlds')).toContainText('Moss & Moon 🌲');
    await page.reload();await expect(page.locator('#world-name')).toHaveValue('Moss & Moon 🌲');await page.locator('[data-weather="night"]').click();await page.locator('#share-world').click();const link=await page.locator('#share-url').inputValue(),source=await snapshot(page);
    const context=await browser.newContext({reducedMotion:'reduce'}),other=await context.newPage();await other.goto('/pocket-worlds/');await other.locator('#world-name').fill('My existing island');await other.locator('#save-world').click();await other.goto(link);await expect(other.locator('#shared-banner')).toBeVisible();
    expect((await snapshot(other)).heights).toEqual(source.heights);expect((await snapshot(other)).weather).toBe('night');await other.locator('[data-weather="snow"]').click();await other.waitForTimeout(600);expect(await other.evaluate(()=>JSON.parse(localStorage.getItem('ethan-pocket-world-draft-v1')).name)).toBe('My existing island');
    await other.goto('/pocket-worlds/');await expect(other.locator('#world-name')).toHaveValue('My existing island');await other.goto(link);await other.locator('#keep-world').click();await expect(other.locator('#shared-banner')).toBeHidden();await other.reload();await expect(other.locator('#world-name')).toHaveValue('Moss & Moon 🌲');await context.close();
});
test('export/import, invalid data, postcards and saved island management',async({page})=>{
    await open(page);const downloadPromise=page.waitForEvent('download');await page.locator('#export-world').click();const download=await downloadPromise,world=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
    expect(world.heights).toHaveLength(576);world.name='Imported retreat';world.weather='snow';page.on('dialog',d=>d.accept());
    await page.locator('#world-file').setInputFiles({name:'world.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(world))});await expect(page.locator('#world-name')).toHaveValue('Imported retreat');
    await page.locator('#world-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"v":1,"heights":[]}')});await expect(page.locator('#notice')).toContainText('not a valid');await expect(page.locator('#world-name')).toHaveValue('Imported retreat');
    const postcardPromise=page.waitForEvent('download');await page.locator('#postcard').click();const postcard=await postcardPromise;expect(fs.readFileSync(await postcard.path()).subarray(1,4).toString()).toBe('PNG');
    await page.locator('#save-world').click();await page.locator('#new-world').click();await page.locator('#world-template').selectOption('atoll');await page.locator('#create-world').click();expect((await snapshot(page)).name).toBe('The quiet ring');
    await page.getByRole('button',{name:'Open Imported retreat',exact:true}).click();expect((await snapshot(page)).weather).toBe('snow');await page.getByRole('button',{name:'Remove Imported retreat',exact:true}).click();await expect(page.locator('#saved-worlds')).toContainText('No islands saved');
    await page.goto('/pocket-worlds/#world=bad-link');await expect(page.locator('body')).toHaveAttribute('data-demo-state','ready');await expect(page.locator('#notice')).toContainText('invalid');
});
test('storage denial stays playable and never claims a successful save',async({page})=>{
    await page.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('Blocked','SecurityError');};});await open(page);await page.locator('#save-world').click();await expect(page.locator('#notice')).toContainText('Storage is unavailable');await page.locator('#world-canvas').focus();await page.keyboard.press('Enter');expect((await text(page)).undo).toBe(1);
});
test('catalog integration, favorites and continue-playing links work',async({page})=>{
    await page.goto('/');await expect(page.getByRole('link',{name:'Build a Pocket World'})).toHaveAttribute('href','pocket-worlds/');await page.goto('/projects/');const card=page.locator('.archive-grid:not(.archive-grid-reference) .archive-card').filter({has:page.getByRole('heading',{name:'Pocket Worlds'})});await expect(card).toBeVisible();await page.locator('[data-project-filter="play"]').click();await expect(card).toBeVisible();await card.getByRole('link',{name:'Open Pocket Worlds'}).click();await expect(page.locator('#world-canvas')).toBeVisible();
    await page.goto('/games/');const game=page.locator('[data-game-slug="pocket-worlds"]');await expect(game).toBeVisible();await game.getByRole('button',{name:'Add Pocket Worlds to favorites'}).click();await expect(game.getByRole('button',{name:'Remove Pocket Worlds from favorites'})).toHaveAttribute('aria-pressed','true');await expect(page.locator('#games-activity')).toContainText('Continue Pocket Worlds');await page.reload();await expect(game).toHaveClass(/is-favorite/);
});
test('generated artwork fits both catalogs at desktop and phone widths',async({page})=>{
    for(const width of [1440,390]){
        await page.setViewportSize({width,height:950});
        for(const route of ['projects','games']){
            await page.goto(`/${route}/`);
            const card=route==='games'?page.locator('.game-worlds'):page.locator('.archive-card').filter({has:page.getByRole('heading',{name:'Pocket Worlds',exact:true})});
            await card.scrollIntoViewIfNeeded();await expect.poll(()=>card.locator('img').evaluate(i=>i.complete&&i.naturalWidth>0)).toBe(true);
            await card.screenshot({path:test.info().outputPath(`${route}-${width}.png`)});
            expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
        }
    }
});
test('fullscreen, dialog focus and bounded world data',async({page})=>{
    await open(page);await page.locator('#world-canvas').focus();await page.keyboard.press('f');await expect.poll(()=>page.evaluate(()=>document.fullscreenElement?.id)).toBe('world-stage');await page.keyboard.press('f');await expect.poll(()=>page.evaluate(()=>Boolean(document.fullscreenElement))).toBe(false);
    await page.locator('#share-world').click();for(let i=0;i<7;i++){await page.keyboard.press('Tab');expect(await page.evaluate(()=>Boolean(document.activeElement.closest('#share-dialog')))).toBe(true);}await page.keyboard.press('Escape');await expect(page.locator('#share-dialog')).toBeHidden();await expect(page.locator('#share-world')).toBeFocused();
    const checks=await page.evaluate(async()=>{const m=await import('/pocket-worlds/model.js');const w=m.createWorld(7,'blank');w.heights.fill(16);for(let i=0;i<48;i++)w.buildings.push(i);for(let i=48;i<228;i++)w.trees.push([i,.7]);for(let i=228;i<576;i++)w.paths.push(i);w.name='🌲 🌴 Shared archipelago';const code=m.encodeWorld(w),restored=m.decodeWorld(code);let rejected=false;try{m.decodeWorld('a'.repeat(18001));}catch{rejected=true;}const bounded=m.validateWorld({...w,trees:[...w.trees,[99999,1],[-1,1],[1,Infinity]]});return {same:JSON.stringify(restored)===JSON.stringify(w),size:code.length,rejected,trees:bounded.trees.length};});expect(checks.same).toBe(true);expect(checks.size).toBeLessThan(18000);expect(checks.rejected).toBe(true);expect(checks.trees).toBe(180);
});
for(const width of [320,390,768])test(`touch layout is usable at ${width}px`,async({browser})=>{
    const context=await browser.newContext({viewport:{width,height:900},hasTouch:true,isMobile:width<500,reducedMotion:'reduce'}),page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));await open(page);expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);await page.locator('[data-weather="snow"]').tap();await expect(page.locator('[data-weather="snow"]')).toHaveAttribute('aria-pressed','true');await page.locator('[data-tool="tree"]').tap();await page.locator('#share-world').tap();await expect(page.locator('#share-dialog')).toBeVisible();await page.locator('#share-dialog .close-dialog').tap();await page.screenshot({path:test.info().outputPath(`touch-${width}.png`),fullPage:true});expect(errors).toEqual([]);await context.close();
});
