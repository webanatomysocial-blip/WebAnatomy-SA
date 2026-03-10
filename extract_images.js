const fs = require('fs');
const html = fs.readFileSync('framer_work_raw.html', 'utf8');

const projects = ["Erynits", "AGIL", "Mudra Yoga", "Soniva Dental", "Eco root", "Tekninja"];
const results = {};

projects.forEach(project => {
    // Find the project name and look for the nearest image URL after it
    // Framer often puts the image in a div before or after the title
    // but in the DOM order it's usually near.
    
    const index = html.indexOf(project);
    if (index !== -1) {
        // Search in a reasonable window around the project name
        const windowSize = 5000;
        const start = Math.max(0, index - windowSize);
        const end = Math.min(html.length, index + windowSize);
        const context = html.substring(start, end);
        
        // Match framer image URLs
        const imageRegex = /https:\/\/framerusercontent\.com\/images\/[^"'\s)]+\.(?:png|jpg|jpeg|webp)/g;
        const matches = [...context.matchAll(imageRegex)];
        
        if (matches.length > 0) {
            results[project] = matches.map(m => m[0]);
        } else {
            results[project] = "No images found in context";
        }
    } else {
        results[project] = "Project not found in HTML";
    }
});

console.log(JSON.stringify(results, null, 2));
