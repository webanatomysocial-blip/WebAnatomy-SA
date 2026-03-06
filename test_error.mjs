import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER CONSOLE ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.log('UNCAUGHT EXCEPTION:', error.message, error.stack?.slice(0, 500));
  });

  try {
    await page.goto('http://localhost:5173/about', { waitUntil: 'load' });
    await new Promise(resolve => setTimeout(resolve, 2000));
    const hasContent = await page.evaluate(() => document.body.innerText.length > 100);
    console.log('About page has content:', hasContent);
  } catch (err) {
    console.log('Navigation error:', err.message);
  } finally {
    await browser.close();
  }
})();
