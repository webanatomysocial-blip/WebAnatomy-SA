fetch("https://webanatomy.in/success-stories/soniva-dental-modern-and-user-friendly-website-design/")
  .then(r => r.text())
  .then(html => {
    const matches = html.match(/https:\/\/webanatomy\.in\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/Soniva-dental-[0-9]{2}[^"'\s]*/g);
    console.log([...new Set(matches)]);
  })
