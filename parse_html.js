const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('eco_root_raw.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

const mainContent = document.querySelector('main') || document.body;

let output = [];
mainContent.querySelectorAll('.elementor-section').forEach((section, i) => {
  let sectionContent = `Section ${i}:\n`;
  section.querySelectorAll('img, h2, p, .elementor-text-editor').forEach(el => {
    if (el.tagName === 'IMG') {
      sectionContent += `  IMG: ${el.src}\n`;
    } else {
      sectionContent += `  TEXT: ${el.textContent.trim().replace(/\n/g, ' ')}\n`;
    }
  });
  if (sectionContent.trim() !== `Section ${i}:`) {
    output.push(sectionContent);
  }
});

fs.writeFileSync('layout_analysis.txt', output.join('\n'));
console.log('Layout extracted to layout_analysis.txt');
