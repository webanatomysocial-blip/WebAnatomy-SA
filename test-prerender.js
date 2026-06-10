import { chromium } from 'playwright';
import { preview } from 'vite';

async function run() {
  console.log("Starting preview server...");
  const server = await preview({
    preview: { port: 4173 }
  });
  
  // Get the actual resolved port since it could be different
  const port = server.httpServer.address().port;
  console.log("Server listening on port:", port);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log("Navigating to /services ...");
  await page.goto(`http://localhost:${port}/services`, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(2000); // wait 2s for React/GSAP/useEffect to settle
  const html = await page.content();
  console.log("HTML length:", html.length);
  console.log("Has canonical?", html.includes('rel="canonical"'));
  if (html.includes('rel="canonical"')) {
    const match = html.match(/<link[^>]*rel="canonical"[^>]*>/);
    console.log("Tag:", match ? match[0] : "Not found");
  }

  await browser.close();
  server.httpServer.close();
}

run().catch(console.error);
