import { resolveAssetPath } from '../utils/asset-path.js';
import CATALOG_RU from './character-voice-catalog.json' with { type: 'json' };
import CATALOG_EN from './character-voice-catalog-en.json' with { type: 'json' };

const createPhrases = (catalog) => Object.freeze(
  Object.fromEntries(Object.entries(catalog).map(([role, character]) => [role, Object.freeze({
    folder: character.folder,
    happy: Object.freeze(character.moods.happy.map(({ text }) => text)),
    unhappy: Object.freeze(character.moods.unhappy.map(({ text }) => text)),
  })])),
);
const phrasesByLocale = Object.freeze({ ru: createPhrases(CATALOG_RU), en: createPhrases(CATALOG_EN) });
const normalizeLocale = (locale) => (locale === 'en' ? 'en' : 'ru');

export const CHARACTER_VOICE_PHRASES = phrasesByLocale.ru;
export function getCharacterVoicePhrases(locale = 'ru') {
  return phrasesByLocale[normalizeLocale(locale)];
}

export function getCharacterVoicePath(role, mood, index, locale = 'ru') {
  const normalizedLocale = normalizeLocale(locale);
  const character = phrasesByLocale[normalizedLocale][role];
  const localeFolder = normalizedLocale === 'en' ? '/en' : '';
  return resolveAssetPath(`/audio/voices${localeFolder}/${character.folder}/${mood}/${String(index + 1).padStart(2, '0')}.mp3`);
}

export function getCharacterVoiceLines(locale = 'ru') {
  const normalizedLocale = normalizeLocale(locale);
  const phrases = phrasesByLocale[normalizedLocale];
  return Object.freeze(Object.fromEntries(Object.entries(phrases).map(([role, character]) => [role, Object.freeze({
    happy: Object.freeze(character.happy.map((_, index) => getCharacterVoicePath(role, 'happy', index, normalizedLocale))),
    unhappy: Object.freeze(character.unhappy.map((_, index) => getCharacterVoicePath(role, 'unhappy', index, normalizedLocale))),
  })])));
}

export const CHARACTER_VOICE_LINES = getCharacterVoiceLines('ru');
export const RESULT_VOICE_ROLES = Object.freeze({
  correct: Object.freeze({ happy: Object.freeze(['kind', 'coward']), unhappy: Object.freeze(['angry', 'silly']) }),
  wrong: Object.freeze({ happy: Object.freeze(['angry', 'silly']), unhappy: Object.freeze(['kind', 'coward']) }),
});
