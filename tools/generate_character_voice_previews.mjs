import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const KEY_FILE = path.join(ROOT, 'k.js');
const OUTPUT_DIR = path.join(ROOT, 'public', 'audio', 'voices', 'previews');
const FORCE = process.argv.includes('--force');
const characterArg = process.argv.find((argument) => argument.startsWith('--character='));
const SELECTED_CHARACTER = characterArg?.split('=')[1] ?? null;
const PREVIEW_TEXT = 'Привет! Ну что, сыграем и проверим твою интуицию?';

const CHARACTERS = [
  {
    id: 'pink',
    referenceId: 'bec9613a6f104651b8381a6ec0746956',
    label: 'Игривый юный голос',
    source: 'https://fish.audio/ru/m/bec9613a6f104651b8381a6ec0746956/',
  },
  {
    id: 'lilac',
    referenceId: 'c6892c3466ff42fdb1e91e727de6eb0e',
    label: 'Мягкий русский голос',
    source: 'https://fish.audio/ru/m/c6892c3466ff42fdb1e91e727de6eb0e/',
  },
  {
    id: 'cyan',
    referenceId: '9e83ecd9bc234dffbdf37253d3d791a3',
    label: 'Молодой разговорный русский голос',
    source: 'https://fish.audio/m/9e83ecd9bc234dffbdf37253d3d791a3/',
  },
  {
    id: 'yellow',
    referenceId: '1e1b0d3364bf4513aa500fab839f3d92',
    label: 'Выбранный голос жёлтого персонажа',
    source: 'https://fish.audio/m/1e1b0d3364bf4513aa500fab839f3d92/',
  },
];

function extractApiKey(source) {
  const match = source.match(/\bk\s*:\s*(["'])(.*?)\1/s);
  if (!match?.[2]) {
    throw new Error('Не удалось прочитать ключ: ожидается запись k: "ключ" в k.js.');
  }
  return match[2].trim();
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generatePreview(apiKey, character) {
  const response = await fetch('https://api.fish.audio/v1/tts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      model: 's2.1-pro-free',
    },
    body: JSON.stringify({
      text: PREVIEW_TEXT,
      reference_id: character.referenceId,
      format: 'mp3',
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`${character.id}: Fish Audio вернул ${response.status}: ${message}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  const keySource = await readFile(KEY_FILE, 'utf8');
  const apiKey = extractApiKey(keySource);
  await mkdir(OUTPUT_DIR, { recursive: true });

  const selectedCharacters = SELECTED_CHARACTER
    ? CHARACTERS.filter((character) => character.id === SELECTED_CHARACTER)
    : CHARACTERS;

  if (!selectedCharacters.length) {
    throw new Error(`Неизвестный персонаж: ${SELECTED_CHARACTER}`);
  }

  let previousManifest = null;
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  if (await fileExists(manifestPath)) {
    previousManifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    model: 's2.1-pro-free',
    language: 'ru',
    previewText: PREVIEW_TEXT,
    characters: SELECTED_CHARACTER ? [...(previousManifest?.characters ?? [])] : [],
  };

  for (const character of selectedCharacters) {
    const outputPath = path.join(OUTPUT_DIR, `${character.id}.mp3`);
    if (!FORCE && await fileExists(outputPath)) {
      throw new Error(`${character.id}.mp3 уже существует. Для замены передайте --force.`);
    }

    process.stdout.write(`Генерирую ${character.id}... `);
    const audio = await generatePreview(apiKey, character);
    await writeFile(outputPath, audio);
    const manifestEntry = {
      id: character.id,
      file: `/audio/voices/previews/${character.id}.mp3`,
      referenceId: character.referenceId,
      label: character.label,
      source: character.source,
    };
    const previousIndex = manifest.characters.findIndex((entry) => entry.id === character.id);
    if (previousIndex >= 0) {
      manifest.characters[previousIndex] = manifestEntry;
    } else {
      manifest.characters.push(manifestEntry);
    }
    console.log('готово');
  }

  await writeFile(
    manifestPath,
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  );
  console.log(`Превью сохранены в ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
