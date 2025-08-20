const { minify } = require('html-minifier-terser');
const fs = require('fs');

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