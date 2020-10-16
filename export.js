const puppeteer = require('puppeteer-core');

const launch_options = {
  // 启动模式： true 无头模式
  headless: true,
  // 可运行 Chromium 或 Chrome 可执行文件的路径
  executablePath:
    "/Users/zhaowei/.chromium-browser-snapshots/mac-800071/chrome-mac/Chromium.app/Contents/MacOS/Chromium"
};

(async () => {
  // 开启浏览器
  const browser = await puppeteer.launch(launch_options)
  // 开启一个tab页
  const page = await browser.newPage()
  // 跳转到百度首页
  await page.goto('http:/www.baidu.com')

  // 截图
  await page.screenshot({
    path: './baidu.png'
  })

  // pdf
  await page.pdf({
    path: './baidu.pdf'
  })

  // // 关闭页面
  // await page.close()
  // // 关闭浏览器
  // await browser.close()
})();
