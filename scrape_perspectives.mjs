import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://businessanatomyza.framer.website/about', { waitUntil: 'networkidle' });
  
  const perspectives = await page.evaluate(() => {
    // Find images with specific alt texts or nearby headings
    const result = {};
    const alts = ["Human x Machine", "Vibe Coding", "Future-First Thinking", "Ethical Intelligence"];
    
    alts.forEach(alt => {
      const img = document.querySelector(`img[alt*="${alt}"]`);
      if (img) {
        result[alt] = img.src;
      } else {
        // Fallback: look for headings and find nearest image
        const h3 = Array.from(document.querySelectorAll('h3')).find(h => h.innerText.includes(alt));
        if (h3) {
          const parent = h3.closest('div'); // Adjust as needed for Framer structure
          const imgChild = parent ? parent.querySelector('img') : null;
          if (imgChild) result[alt] = imgChild.src;
        }
      }
    });
    return result;
  });
  
  console.log(JSON.stringify(perspectives, null, 2));
  
  await browser.close();
})();
