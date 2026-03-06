import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/about', { waitUntil: 'load' });
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const certsCount = await page.evaluate(() => {
    const certsWrapper = document.querySelector('[class*="rec-logos-wrapper"]');
    return certsWrapper ? certsWrapper.children.length : 0;
  });
  
  console.log('Recognised Certifications count:', certsCount);
  if (certsCount === 5) {
    console.log('SUCCESS: Found exactly 5 certifications.');
  } else {
    console.log('FAILURE: Found ' + certsCount + ' certifications instead of 5.');
  }
  
  await browser.close();
})();
