const fs = require('fs');
const parser = require('@babel/parser');
const src = fs.readFileSync('src/components/Header.jsx', 'utf8');
try {
  parser.parse(src, { sourceType: 'module', plugins: ['jsx'] });
  console.log('OK');
} catch (e) {
  console.error(e.message);
  console.error('Line:', e.loc && e.loc.line, 'Column:', e.loc && e.loc.column);
  console.error('Snippet:');
  const lines = src.split(/\r?\n/);
  const line = e.loc && lines[e.loc.line - 1];
  console.error(line);
}