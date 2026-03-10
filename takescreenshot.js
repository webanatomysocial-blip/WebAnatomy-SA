const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://webanatomy.in/success-stories/eco-root-a-branding-showcase/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'eco_root_live.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved as eco_root_live.png');
})();
