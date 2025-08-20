const { minify } = require('html-minifier-terser');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('src/index.html', 'utf8');

minify(html, {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  useShortDoctype: true,
}).then((result) => {
  fs.writeFileSync('docs/index.html', result);
  console.log('HTML minified successfully!');
});

// Copy fonts from src/fonts to docs/fonts

const srcFontsDir = path.join('src', 'fonts');
const destFontsDir = path.join('docs', 'fonts');

if (fs.existsSync(srcFontsDir)) {
  fs.mkdirSync(destFontsDir, { recursive: true });
  fs.readdirSync(srcFontsDir).forEach(file => {
    const srcFile = path.join(srcFontsDir, file);
    const destFile = path.join(destFontsDir, file);
    fs.copyFileSync(srcFile, destFile);
  });
  console.log('Fonts copied successfully!');
} else {
  console.log('No fonts directory found to copy.');
}