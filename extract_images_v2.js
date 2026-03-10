const fs = require('fs');

try {
    const html = fs.readFileSync('framer_work_raw.html', 'utf8');
    const imageRegex = /https:\/\/framerusercontent\.com\/images\/[^"'\s)]+\.(?:png|jpg|jpeg|webp)/g;
    const matches = html.match(imageRegex);
    
    if (matches) {
        const uniqueMatches = [...new Set(matches)];
        console.log(uniqueMatches.join('\n'));
    } else {
        console.log('No images found');
    }
} catch (err) {
    console.error(err);
}
