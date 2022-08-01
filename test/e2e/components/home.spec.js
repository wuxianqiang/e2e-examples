/**
 * @file e2e test example
 * 首先开启工具安全设置中的 CLI/HTTP 调用功能
 * docs of miniprogram-automator: https://developers.weixin.qq.com/miniprogram/dev/devtools/auto/quick-start.html
 */
 import automator from '@mpxjs/e2e/src/index'

 automator.screenshotHandler({ tapSave: true })
 describe('index', () => {
   let miniProgram
   let page
 
   beforeAll(async () => {
     try {
       miniProgram = await automator.connect({ wsEndpoint: 'ws://localhost:9420' })
     } catch (e) {
       miniProgram = await automator.launch({
         projectPath: './dist/wx'
       })
     }
     page = await miniProgram.reLaunch('/pages/index')
     await page.waitFor(500)
   }, 30000)
 
   it('desc', async () => {
    // const list = await page.$$('item', 'components/list2271575d/index')
    // console.log(list)
    // list[0].tap()
     const dialog = await page.$('dialog', 'components/list2271575d/index')
    //  await miniProgram.screenshot({
    //    path: 'test/e2e/screenshot/homePage1.png'
    //  })
     
     await dialog.tap()
     await page.waitFor(300)
     const close = await page.$('box-close', 'components/list2271575d/index')
    //  await miniProgram.screenshot({
    //    path: 'test/e2e/screenshot/homePage2.png'
    //  })
     const desc = await page.$('list', 'components/list2271575d/index')
     expect(desc.tagName).toBe('view')
     await close.tap()
     await page.waitFor(300)


     await dialog.tap()
     await page.waitFor(300)
     const close2 = await page.$('box-close', 'components/list2271575d/index')
    //  await miniProgram.screenshot({
    //   path: 'test/e2e/screenshot/homePage3.png'
    // })
    await close2.tap()
    await page.waitFor(300)
   })
 
   afterAll(async () => {
     await miniProgram.close()
   })
 })
 