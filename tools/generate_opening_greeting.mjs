import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import CATALOG_RU from '../src/data/character-voice-catalog.json' with { type: 'json' };
import CATALOG_EN from '../src/data/character-voice-catalog-en.json' with { type: 'json' };

const ROOT = process.cwd();
const KEY_FILE = path.join(ROOT, 'k.js');
const FIRST_GREETING = {
  ru: '[angry] [laughing] [breathy] Приветствую тебя, здесь мы собираем мировую статистику всего на свете. [embarrassed] Ты станешь частью [emphasis] истории!',
  en: '[angry] [laughing] [breathy] Welcome! Here we collect global statistics about everything in the world. [embarrassed] You will become part of [emphasis] history!',
};
const RETURNING_GREETING = {
  ru: '[angry] Аааа, опять ты? [laughing] Ну что ж. [angry] [excited] Готов творить историю?',
  en: '[angry] Ahhh, you again? [laughing] Well then. [angry] [excited] Ready to make history?',
};

const OUTPUTS = [
  {
    locale: 'ru',
    referenceId: CATALOG_RU.angry.referenceId,
    text: FIRST_GREETING.ru,
    outputPath: path.join(ROOT, 'public', 'audio', 'voices', 'yellow', 'greeting.mp3'),
  },
  {
    locale: 'en',
    referenceId: CATALOG_EN.angry.referenceId,
    text: FIRST_GREETING.en,
    outputPath: path.join(ROOT, 'public', 'audio', 'voices', 'en', 'yellow', 'greeting.mp3'),
  },
  ...['angry', 'kind', 'silly', 'coward'].flatMap((role) => [
    {
      locale: 'ru',
      role,
      referenceId: CATALOG_RU[role].referenceId,
      text: RETURNING_GREETING.ru,
      outputPath: path.join(ROOT, 'public', 'audio', 'voices', CATALOG_RU[role].folder, 'greeting2.mp3'),
    },
    {
      locale: 'en',
      role,
      referenceId: CATALOG_EN[role].referenceId,
      text: RETURNING_GREETING.en,
      outputPath: path.join(ROOT, 'public', 'audio', 'voices', 'en', CATALOG_EN[role].folder, 'greeting2.mp3'),
    },
  ]),
];
const FORCE = process.argv.includes('--force');

function extractApiKey(source) {
  const match = source.match(/\bk\s*:\s*(["'])(.*?)\1/s);
  if (!match?.[2]) throw new Error('В k.js ожидается запись k: "ключ".');
  return match[2].trim();
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function synthesize(apiKey, { referenceId, text }) {
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
          text,
          reference_id: referenceId,
          format: 'mp3',
          mp3_bitrate: 64,
          temperature: 0.76,
          top_p: 0.72,
          prosody: {
            speed: 0.96,
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

async function main() {
  const apiKey = extractApiKey(await readFile(KEY_FILE, 'utf8'));

  for (const output of OUTPUTS) {
    if (!FORCE && await fileExists(output.outputPath)) {
      console.log(`Keeping ${path.relative(ROOT, output.outputPath)}`);
      continue;
    }

    process.stdout.write(`Generating ${output.locale} ${output.role ?? 'angry'} ${path.basename(output.outputPath, '.mp3')}... `);
    const audio = await synthesize(apiKey, output);
    await mkdir(path.dirname(output.outputPath), { recursive: true });
    await writeFile(output.outputPath, audio);
    console.log('done');
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
