import { chromium } from 'playwright';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/contact',
  '/careers',
  '/about',
  '/projects',
  '/projects/eryntis',
  '/projects/agil',
  '/projects/mudra',
  '/projects/soniva',
  '/projects/eco-root',
  '/projects/tekninja',
  '/services',
  '/solutions',
  '/industries',
  '/faqs',
  '/privacy',
  '/terms'
];

async function run() {
  console.log("Starting preview server for pre-rendering...");
  const server = await preview({
    preview: { port: 4173 }
  });
  
  const port = server.httpServer.address().port;
  console.log(`Server listening on port: ${port}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering route: ${route}`);
    try {
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'load', timeout: 60000 });
      // Wait for any animations or dynamic hooks (like useCanonical) to settle
      await page.waitForTimeout(2000); 
      
      const html = await page.content();
      
      // Determine file path
      const filePath = route === '/' 
        ? path.join(process.cwd(), 'dist', 'index.html')
        : path.join(process.cwd(), 'dist', route, 'index.html');
      
      // Ensure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      
      // Save HTML
      fs.writeFileSync(filePath, html);
      console.log(`Saved: ${filePath}`);
    } catch (e) {
      console.error(`Error prerendering ${route}:`, e);
    }
  }

  console.log("Pre-rendering complete.");
  await browser.close();
  server.httpServer.close();
}

run().catch(console.error);
