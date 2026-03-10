const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://webanatomy.in/success-stories/eco-root-a-branding-showcase/', { waitUntil: 'networkidle2' });

        const analysis = await page.evaluate(() => {
            const getStyles = (selector) => {
                const el = document.querySelector(selector);
                if (!el) return null;
                const style = window.getComputedStyle(el);
                return {
                    backgroundColor: style.backgroundColor,
                    color: style.color,
                    fontFamily: style.fontFamily,
                    fontSize: style.fontSize,
                    fontWeight: style.fontWeight,
                    textAlign: style.textAlign,
                    padding: style.padding,
                    margin: style.margin,
                    maxWidth: style.maxWidth,
                    display: style.display
                };
            };

            return {
                introSection: getStyles('.elementor-element-ee5fcc8'),
                introColumn: getStyles('.elementor-element-ed423ba'),
                introHeading: getStyles('.elementor-element-f7ab504 h2'),
                introText: getStyles('.elementor-element-c9e395f'),
                logoShowcase: getStyles('.elementor-element-a1057b5'),
                colorPalette: getStyles('.elementor-element-1abab17'),
                paletteColumn: getStyles('.elementor-element-df6c3ad'),
                mainBackground: window.getComputedStyle(document.body).backgroundColor
            };
        });

        fs.writeFileSync('rendered_styles.json', JSON.stringify(analysis, null, 2));
        console.log('Styles extracted to rendered_styles.json');
        await browser.close();
    } catch (err) {
        console.error('Error during style extraction:', err);
        process.exit(1);
    }
})();
