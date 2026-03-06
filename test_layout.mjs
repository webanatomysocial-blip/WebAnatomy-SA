import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/about', { waitUntil: 'load' });
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const cardsCount = await page.evaluate(() => {
    // Look for elements containing MISSION and VISION text
    const texts = document.body.innerText;
    return {
      hasVision: texts.includes('VISION'),
      hasMission: texts.includes('MISSION'),
      cards: document.querySelectorAll('[class*="vm-card"]').length
    };
  });
  
  console.log('Vision/Mission check:', cardsCount);
  await browser.close();
})();
