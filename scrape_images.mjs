import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://businessanatomyza.framer.website/about', { waitUntil: 'networkidle' });
  
  // Get the first 8 images — these are the ones in the hero/first section
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => ({ src: img.src, width: img.naturalWidth, height: img.naturalHeight, alt: img.alt }))
      .filter(img => img.src.startsWith('http'));
  });
  
  console.log('FOUND IMAGES:');
  images.slice(0, 30).forEach((img, i) => {
    console.log(`${i}: ${img.src} (${img.width}x${img.height}) alt="${img.alt}"`);
  });
  
  await browser.close();
})();
