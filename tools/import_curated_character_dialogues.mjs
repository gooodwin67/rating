import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourcePath = process.argv[2];
if (!sourcePath) {
  throw new Error('Передайте путь к dialogues-curated.json.');
}

const raw = await readFile(sourcePath, 'utf8');
// The supplied export contains a couple of trailing commas. They are harmless
// for its data model, so normalize them while importing without touching it.
const source = JSON.parse(raw.replace(/,\s*([\]}])/g, '$1'));
const roleOrder = ['angry', 'kind', 'silly', 'coward'];
const byRole = Object.fromEntries(
  Object.values(source.characters).map((character) => [character.role, character]),
);

const catalog = Object.fromEntries(roleOrder.map((role) => {
  const character = byRole[role];
  if (!character) throw new Error(`В файле отсутствует роль ${role}.`);

  const moods = Object.fromEntries(['happy', 'unhappy'].map((mood) => [
    mood,
    character.moods[mood].map(({ text, synthesisText }) => ({ text, synthesisText })),
  ]));

  return [role, {
    folder: character.character,
    referenceId: role === 'kind'
      ? '703b7082bd6943bfae2ddf97c5064aa6'
      : character.referenceId,
    moods,
  }];
}));

const destination = path.join(process.cwd(), 'src', 'data', 'character-voice-catalog.json');
await writeFile(destination, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');

const count = Object.values(catalog).reduce(
  (total, character) => total + character.moods.happy.length + character.moods.unhappy.length,
  0,
);
console.log(`Импортировано ${count} реплик в ${destination}`);
