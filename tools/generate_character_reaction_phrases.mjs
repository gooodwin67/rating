import {
  access,
  copyFile,
  mkdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

import {
  CHARACTER_VOICE_PHRASES,
  getCharacterVoicePath,
} from '../src/data/character-voice-lines.js';

const ROOT = process.cwd();
const KEY_FILE = path.join(ROOT, 'k.js');
const VOICES_ROOT = path.join(ROOT, 'public', 'audio', 'voices');
const STAGING_ROOT = path.join(ROOT, 'tmp', 'character-voices-240');
const FORCE = process.argv.includes('--force');
const REPLACE_BASE_TAIL = process.argv.includes('--replace-base-tail');
const REPLACE_ORIGINAL_TAIL = process.argv.includes('--replace-original-tail');
const REPLACE_ORIGINAL_MIDDLE = process.argv.includes('--replace-original-middle');

const VOICE_SETTINGS = Object.freeze({
  angry: {
    referenceId: '1e1b0d3364bf4513aa500fab839f3d92',
    tags: { happy: '[angry]', unhappy: '[angry]' },
    speed: 0.96,
  },
  kind: {
    referenceId: '832bfb4965164858b443ea6ddcce715d',
    tags: { happy: '[excited]', unhappy: '[sad] [soft]' },
    speed: 0.95,
  },
  silly: {
    referenceId: 'fe55f306729e4c8780b4628b4b8c4e4e',
    tags: { happy: '[excited]', unhappy: '[embarrassed]' },
    speed: 1.02,
  },
  coward: {
    referenceId: 'b63d51084669485dbb5a66254fe7b81b',
    tags: { happy: '[excited] [soft]', unhappy: '[sad] [soft]' },
    speed: 0.95,
  },
});

function extractApiKey(source) {
  const match = source.match(/\bk\s*:\s*(["'])(.*?)\1/s);
  if (!match?.[2]) throw new Error('В k.js ожидается запись k: "ключ".');
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

function validatePhrases() {
  const allPhrases = [];

  Object.entries(CHARACTER_VOICE_PHRASES).forEach(([role, character]) => {
    ['happy', 'unhappy'].forEach((mood) => {
      const phrases = character[mood];
      if (phrases.length !== 45) {
        throw new Error(`${role}/${mood}: ожидалось 45 реплик, найдено ${phrases.length}.`);
      }

      phrases.forEach((text, index) => {
        const words = text.match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu) ?? [];
        if (words.length < 2 || words.length > 5) {
          throw new Error(`${role}/${mood}/${index + 1}: ${words.length} слов — «${text}».`);
        }
        allPhrases.push(`${role}\u0000${text.toLocaleLowerCase('ru')}`);
      });
    });
  });

  if (new Set(allPhrases).size !== allPhrases.length) {
    throw new Error('У одного из персонажей обнаружены одинаковые реплики.');
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generatePhrase(apiKey, settings, synthesisText) {
  let lastError = null;

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch('https://api.fish.audio/v1/tts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          model: 's2.1-pro-free',
        },
        body: JSON.stringify({
          text: synthesisText,
          reference_id: settings.referenceId,
          format: 'mp3',
          mp3_bitrate: 192,
          temperature: 0.76,
          top_p: 0.72,
          prosody: {
            speed: settings.speed,
            volume: 0,
            normalize_loudness: true,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Fish Audio ${response.status}: ${await response.text()}`);
      }
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      if (attempt < 4) await wait(attempt * 1800);
    }
  }

  throw lastError;
}

async function generateAll(apiKey) {
  let completed = 0;
  const total = Object.values(CHARACTER_VOICE_PHRASES).reduce(
    (sum, character) => sum + character.happy.length + character.unhappy.length,
    0,
  );

  for (const [role, character] of Object.entries(CHARACTER_VOICE_PHRASES)) {
    const settings = VOICE_SETTINGS[role];
    const manifest = {
      generatedAt: new Date().toISOString(),
      model: 's2.1-pro-free',
      character: character.folder,
      role,
      referenceId: settings.referenceId,
      moods: { happy: [], unhappy: [] },
    };

    for (const mood of ['happy', 'unhappy']) {
      const outputDir = path.join(STAGING_ROOT, character.folder, mood);
      await mkdir(outputDir, { recursive: true });

      for (const [index, text] of character[mood].entries()) {
        const filename = `${String(index + 1).padStart(2, '0')}.mp3`;
        const outputPath = path.join(outputDir, filename);
        const synthesisText = `${settings.tags[mood]} ${text}`;

        const replaceBaseTail = REPLACE_BASE_TAIL && index >= 25 && index < 30;
        const replaceOriginalTail = REPLACE_ORIGINAL_TAIL && index >= 15 && index < 25;
        const replaceOriginalMiddle = REPLACE_ORIGINAL_MIDDLE && index >= 5 && index < 15;
        const replaceTransferredMeme = REPLACE_ORIGINAL_MIDDLE
          && role === 'kind'
          && mood === 'unhappy'
          && index === 30;
        if (
          FORCE
          || replaceBaseTail
          || replaceOriginalTail
          || replaceOriginalMiddle
          || replaceTransferredMeme
          || !await fileExists(outputPath)
        ) {
          process.stdout.write(`[${completed + 1}/${total}] ${character.folder}/${mood}: «${text}»... `);
          const audio = await generatePhrase(apiKey, settings, synthesisText);
          await writeFile(outputPath, audio);
          console.log('готово');
        } else {
          console.log(`[${completed + 1}/${total}] ${character.folder}/${mood}/${filename} уже готов`);
        }

        manifest.moods[mood].push({
          text,
          synthesisText,
          file: getCharacterVoicePath(role, mood, index),
        });
        completed += 1;
      }
    }

    await writeFile(
      path.join(STAGING_ROOT, character.folder, 'manifest.json'),
      `${JSON.stringify(manifest, null, 2)}\n`,
      'utf8',
    );
  }
}

async function publishAll() {
  for (const character of Object.values(CHARACTER_VOICE_PHRASES)) {
    const destinationRoot = path.join(VOICES_ROOT, character.folder);

    for (const mood of ['happy', 'unhappy']) {
      const destinationDir = path.join(destinationRoot, mood);
      const stagingDir = path.join(STAGING_ROOT, character.folder, mood);
      await rm(destinationDir, { recursive: true, force: true });
      await mkdir(destinationDir, { recursive: true });

      for (let index = 0; index < character[mood].length; index += 1) {
        const filename = `${String(index + 1).padStart(2, '0')}.mp3`;
        await copyFile(path.join(stagingDir, filename), path.join(destinationDir, filename));
      }
    }

    await copyFile(
      path.join(STAGING_ROOT, character.folder, 'manifest.json'),
      path.join(destinationRoot, 'manifest.json'),
    );
  }
}

async function main() {
  validatePhrases();
  const apiKey = extractApiKey(await readFile(KEY_FILE, 'utf8'));
  await generateAll(apiKey);
  await publishAll();
  console.log('Все 360 реплик сгенерированы и опубликованы.');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
