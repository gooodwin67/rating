import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { items } from '../../src/data/items.js';

const currentDir = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(currentDir, '../catalog.js');
const categories = {};

for (const item of items) {
  if (!categories[item.categoryId]) categories[item.categoryId] = [];
  categories[item.categoryId].push(item.id);
}

const source = `// Generated from src/data/items.js. Do not edit by hand.\nexport const catalog = ${JSON.stringify(categories, null, 2)};\n`;
await writeFile(outputPath, source, 'utf8');
