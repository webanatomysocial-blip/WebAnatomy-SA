import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://businessanatomyza.framer.website/about', { waitUntil: 'networkidle' });
  
  // Find images that look like the certifications (logos)
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => ({ 
        src: img.src, 
        width: img.naturalWidth, 
        height: img.naturalHeight, 
        alt: img.alt 
      }))
      .filter(img => img.src.startsWith('http'));
  });
  
  console.log('ALL IMAGES ON PAGE:');
  images.forEach((img, i) => {
    console.log(`${i}: ${img.src} alt="${img.alt}"`);
  });
  
  await browser.close();
})();
