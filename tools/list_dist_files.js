const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'dist', 'apps', 'web');
if (!fs.existsSync(dir)) { console.error('dist directory not found:', dir); process.exit(1); }
function walk(d){
  const items = [];
  for (const name of fs.readdirSync(d)){
    const full = path.join(d, name);
    const stat = fs.statSync(full);
    if (stat.isFile()) items.push({ fullName: full, length: stat.size });
    else if (stat.isDirectory()) items.push(...walk(full));
  }
  return items;
}
const arr = walk(dir).sort((a,b)=>b.length - a.length);
fs.writeFileSync(path.join(dir, 'file-sizes.json'), JSON.stringify(arr, null, 2), 'utf8');
console.log('wrote', path.join(dir, 'file-sizes.json'));
