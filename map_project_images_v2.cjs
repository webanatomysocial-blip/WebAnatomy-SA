const fs = require('fs');
const filename = process.argv[2] || 'framer_work_raw.html';
const outputFilename = process.argv[3] || 'mapped.json';

try {
    const html = fs.readFileSync(filename, 'utf8');
    const projects = ["Erynits", "AGIL", "Mudra Yoga", "Soniva Dental", "Eco root", "Tekninja"];
    const results = {};

    projects.forEach(project => {
        const index = html.indexOf(project);
        if (index !== -1) {
            const windowSize = 2500; // Increased window size
            const start = Math.max(0, index - windowSize);
            const end = Math.min(html.length, index + windowSize);
            const context = html.substring(start, end);
            
            const imageRegex = /https:\/\/framerusercontent\.com\/images\/[^"'\s)]+\.(?:png|jpg|jpeg|webp)/g;
            const matches = [...context.matchAll(imageRegex)];
            
            if (matches.length > 0) {
                // Return unique matches in the window
                results[project] = [...new Set(matches.map(m => m[0]))];
            } else {
                results[project] = "No images found in context";
            }
        } else {
            results[project] = "Project not found in HTML";
        }
    });

    fs.writeFileSync(outputFilename, JSON.stringify(results, null, 2), 'utf8');
    console.log(`Results written to ${outputFilename}`);
} catch (err) {
    console.error(err);
}
