import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public/images');

const sizes = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' },
];

async function processImage(imagePath, outputDir) {
  const ext = extname(imagePath);
  const name = basename(imagePath, ext);

  // Skip if already a sized variant
  if (name.match(/-\d+w$/)) {
    return;
  }

  console.log(`Processing: ${imagePath}`);

  try {
    for (const { width, suffix } of sizes) {
      const outputPath = join(outputDir, `${name}${suffix}.webp`);

      await sharp(imagePath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`  Created: ${basename(outputPath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);

    if (file.isDirectory()) {
      await walkDirectory(fullPath);
    } else if (file.isFile()) {
      const ext = extname(file.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        await processImage(fullPath, dir);
      }
    }
  }
}

console.log('Generating responsive image variants...\n');
await walkDirectory(publicDir);
console.log('\nDone!');
