const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function ensureSharp() {
  try {
    return require('sharp');
  } catch (e) {
    console.error('\n`sharp` is not installed.');
    console.error('Run `npm install --save-dev sharp` in the repository root, then re-run this script.');
    return null;
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('Usage: node optimize_images.js <public_dir>');
    process.exit(1);
  }
  const publicDir = path.resolve(process.cwd(), args[0]);
  if (!fs.existsSync(publicDir)) {
    console.error('Public directory not found:', publicDir);
    process.exit(1);
  }

  const sharp = ensureSharp();
  if (!sharp) process.exit(2);

  const targets = ['.jpg', '.jpeg', '.png'];
  const widths = [320, 640, 1024];
  const files = fs.readdirSync(publicDir).filter(f => targets.includes(path.extname(f).toLowerCase()));
  if (files.length === 0) {
    console.log('No JPG/PNG files found in', publicDir);
    process.exit(0);
  }

  for (const file of files) {
    const input = path.join(publicDir, file);
    const name = path.parse(file).name;
    console.log('Processing', file);
    for (const w of widths) {
      const out = path.join(publicDir, `${name}-${w}.webp`);
      try {
        await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(out);
        console.log('  wrote', path.basename(out));
      } catch (err) {
        console.error('  failed to write', out, err.message);
      }
    }
    // also create a baseline webp at original size
    const outFull = path.join(publicDir, `${name}.webp`);
    try {
      await sharp(input).webp({ quality: 80 }).toFile(outFull);
      console.log('  wrote', path.basename(outFull));
    } catch (err) {
      console.error('  failed to write', outFull, err.message);
    }
  }

  console.log('\nOptimization complete.');
}

main();
