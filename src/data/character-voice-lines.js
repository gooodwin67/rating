import { resolveAssetPath } from '../utils/asset-path.js';
import CHARACTER_VOICE_CATALOG from './character-voice-catalog.json' with { type: 'json' };

export const CHARACTER_VOICE_PHRASES = Object.freeze(
  Object.fromEntries(Object.entries(CHARACTER_VOICE_CATALOG).map(([role, character]) => [
    role,
    Object.freeze({
      folder: character.folder,
      happy: Object.freeze(character.moods.happy.map(({ text }) => text)),
      unhappy: Object.freeze(character.moods.unhappy.map(({ text }) => text)),
    }),
  ])),
);

export function getCharacterVoicePath(role, mood, index) {
  const character = CHARACTER_VOICE_PHRASES[role];
  return resolveAssetPath(
    `/audio/voices/${character.folder}/${mood}/${String(index + 1).padStart(2, '0')}.mp3`,
  );
}

export const CHARACTER_VOICE_LINES = Object.freeze(
  Object.fromEntries(Object.entries(CHARACTER_VOICE_PHRASES).map(([role, character]) => [
    role,
    Object.freeze({
      happy: Object.freeze(character.happy.map((_, index) => getCharacterVoicePath(role, 'happy', index))),
      unhappy: Object.freeze(character.unhappy.map((_, index) => getCharacterVoicePath(role, 'unhappy', index))),
    }),
  ])),
);

export const RESULT_VOICE_ROLES = Object.freeze({
  correct: Object.freeze({
    happy: Object.freeze(['kind', 'coward']),
    unhappy: Object.freeze(['angry', 'silly']),
  }),
  wrong: Object.freeze({
    happy: Object.freeze(['angry', 'silly']),
    unhappy: Object.freeze(['kind', 'coward']),
  }),
});
