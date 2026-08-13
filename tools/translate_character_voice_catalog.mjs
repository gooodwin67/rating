import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const source = JSON.parse(await readFile(path.join(ROOT, 'src', 'data', 'character-voice-catalog.json'), 'utf8'));
const voices = {
  silly: '93de3fefe13744a59d2f34f70aaa1acc',
  coward: 'c333c7de8a71474bb6091f65be538734',
  angry: 'd13f84b987ad4f22b56d2b47f4eb838e',
  kind: '85d6a6c915f545b399b0bfb358244fb9',
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function translate(text) {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  Object.entries({ client: 'gtx', sl: 'ru', tl: 'en', dt: 't', q: text })
    .forEach(([key, value]) => url.searchParams.set(key, value));
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Google Translate ${response.status}`);
      const body = await response.json();
      return body[0].map((part) => part[0]).join('').trim();
    } catch (error) {
      lastError = error;
      if (attempt < 4) await wait(attempt * 1000);
    }
  }
  throw lastError;
}

const output = {};
let completed = 0;
const total = Object.values(source).reduce((sum, character) => (
  sum + character.moods.happy.length + character.moods.unhappy.length
), 0);

for (const [role, character] of Object.entries(source)) {
  output[role] = { folder: character.folder, referenceId: voices[role], moods: { happy: [], unhappy: [] } };
  for (const mood of ['happy', 'unhappy']) {
    for (const line of character.moods[mood]) {
      const text = await translate(line.text);
      const tags = line.synthesisText.match(/^(?:\s*\[[^\]]+\])+/)?.[0]?.trim() ?? '';
      output[role].moods[mood].push({ text, synthesisText: `${tags} ${text}`.trim() });
      completed += 1;
      console.log(`[${completed}/${total}] ${role}/${mood}: ${text}`);
      await wait(80);
    }
  }
}

const destination = path.join(ROOT, 'src', 'data', 'character-voice-catalog-en.json');
await writeFile(destination, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(`English catalog saved to ${destination}`);
