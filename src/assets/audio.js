import * as THREE from 'three';
import { getCharacterVoiceLines } from '../data/character-voice-lines';
import { resolveAssetPath } from '../utils/asset-path';

const AUDIO_UNLOCK_EVENTS = ['pointerdown', 'keydown', 'touchstart'];

export const GAME_SOUNDS = Object.freeze({
  BACKGROUND: 'background',
  UI_CLICK: 'ui-click',
  CHOICE_RECORDED: 'choice-recorded',
  SESSION_START: 'session-start',
  GUESS_CORRECT: 'guess-correct',
  GUESS_WRONG: 'guess-wrong',
  STREAK_UP: 'streak-up',
  SESSION_COMPLETE: 'session-complete',
});

export class AudioClass {
  constructor() {
    this.backgroundMusic = null;

    this._attached = false;
    this._loaded = false;
    this._backgroundRequested = false;
    this._pausedByVisibility = false;
    this._unlockHandler = this._unlockAudio.bind(this);
    this._soundToggle = null;
    this._interfaceSoundsBound = false;
    this._interfaceSoundHandler = this._handleInterfaceSound.bind(this);
    this._lastRandomEffects = new Map();
    this._voiceLoadPromises = new Map();
    this._audioLoader = new THREE.AudioLoader();

    this.listener = new THREE.AudioListener();
    this.musicOn = true;
    this.musics = [];
    this.musicNowPlaying = [];

    this._installAudioUnlock();
  }

  attachTo(camera) {
    if (this._attached || !camera) return;
    camera.add(this.listener);
    this._attached = true;
  }

  async loadAudio() {
    const loader = this._audioLoader;
    const sounds = [
      {
        key: 'backgroundMusic',
        name: GAME_SOUNDS.BACKGROUND,
        path: resolveAssetPath('/audio/background-music.mp3'),
        loop: true,
        volume: 0.24,
      },
      {
        name: GAME_SOUNDS.UI_CLICK,
        path: resolveAssetPath('/audio/ui-click.wav'),
        loop: false,
        volume: 0.9,
      },
      {
        name: GAME_SOUNDS.CHOICE_RECORDED,
        path: resolveAssetPath('/audio/choice-recorded.wav'),
        loop: false,
        volume: 0.58,
      },
      {
        name: GAME_SOUNDS.SESSION_START,
        path: resolveAssetPath('/audio/session-start.wav'),
        loop: false,
        volume: 0.54,
      },
      {
        name: GAME_SOUNDS.GUESS_CORRECT,
        path: resolveAssetPath('/audio/streak-up.wav'),
        loop: false,
        volume: 0.64,
      },
      {
        name: GAME_SOUNDS.GUESS_WRONG,
        path: resolveAssetPath('/audio/guess-wrong.wav'),
        loop: false,
        volume: 0.58,
      },
      {
        name: GAME_SOUNDS.STREAK_UP,
        path: resolveAssetPath('/audio/guess-correct.wav'),
        loop: false,
        volume: 0.68,
      },
      {
        name: GAME_SOUNDS.SESSION_COMPLETE,
        path: resolveAssetPath('/audio/session-complete.wav'),
        loop: false,
        volume: 0.7,
      },
    ];

    const buffers = await Promise.all(
      sounds.map((sound) => loader.loadAsync(sound.path).catch((error) => {
        console.error(`Не удалось загрузить звук ${sound.path}:`, error);
        return null;
      })),
    );

    buffers.forEach((buffer, index) => {
      const sound = sounds[index];
      if (!buffer) return;

      const audio = new THREE.Audio(this.listener);

      audio.setBuffer(buffer);
      audio.setLoop(sound.loop);
      audio.setVolume(sound.volume);

      if (sound.playbackRate) {
        audio.setPlaybackRate(sound.playbackRate);
      }

      if (sound.key) this[sound.key] = audio;
      this.musics.push({ name: sound.name, music: audio });
    });

    this._loaded = true;
    this.bindSoundToggle();
    this.bindInterfaceSounds();

    if (this._backgroundRequested) {
      await this.startBackgroundMusic();
    }
  }

  requestBackgroundMusic() {
    this._backgroundRequested = true;
    void this.startBackgroundMusic();
  }

  async startBackgroundMusic() {
    if (!this._loaded || !this.backgroundMusic || !this.musicOn || this._pausedByVisibility) {
      return;
    }

    try {
      if (this.listener.context.state === 'suspended') {
        await this.listener.context.resume();
      }

      if (this.listener.context.state === 'running' && !this.backgroundMusic.isPlaying) {
        this.backgroundMusic.play();
        this._removeAudioUnlock();
      }
    } catch {
      // Браузер ещё не получил пользовательский жест. Обработчик разблокировки
      // повторит запуск после первого клика, касания или нажатия клавиши.
    }
  }

  bindSoundToggle() {
    if (this._soundToggle) return;

    const input = document.querySelector('.volume-icon__input');
    if (!input) return;

    this._soundToggle = input;
    input.checked = this.musicOn;
    input.addEventListener('change', () => {
      this.toggleMute(!input.checked);
    });
  }

  bindInterfaceSounds() {
    if (this._interfaceSoundsBound) return;
    document.addEventListener('pointerdown', this._interfaceSoundHandler);
    this._interfaceSoundsBound = true;
  }

  playEffect(name, { restart = true, onStart = null, onEnd = null } = {}) {
    if (!this.musicOn || this._pausedByVisibility) return;

    const effect = this.musics.find((track) => track.name === name)?.music;
    if (!effect) return;

    const play = async () => {
      try {
        if (this.listener.context.state === 'suspended') {
          await this.listener.context.resume();
        }
        if (effect.isPlaying) {
          if (!restart) return;
          effect.stop();
        }
        const originalOnEnded = effect.onEnded;
        effect.onEnded = () => {
          originalOnEnded.call(effect);
          effect.onEnded = originalOnEnded;
          onEnd?.(effect);
        };

        effect.play();
        onStart?.(effect);
      } catch {
        // Первый пользовательский жест разблокирует Web Audio и следующий
        // игровой сигнал уже прозвучит штатно.
      }
    };

    void play();
  }

  playRandomEffect(names, groupName = 'default', options = {}) {
    const availableNames = names.filter((name) => (
      this.musics.some((track) => track.name === name)
    ));
    if (!availableNames.length) return null;

    const previousName = this._lastRandomEffects.get(groupName);
    const candidates = availableNames.length > 1
      ? availableNames.filter((name) => name !== previousName)
      : availableNames;
    const selectedName = candidates[Math.floor(Math.random() * candidates.length)];

    this._lastRandomEffects.set(groupName, selectedName);
    this.playEffect(selectedName, options);
    return selectedName;
  }

  playCharacterVoice(role, mood, options = {}) {
    const locale = localStorage.getItem('locale') === 'en' ? 'en' : 'ru';
    const paths = getCharacterVoiceLines(locale)[role]?.[mood] ?? [];
    if (!paths.length) return null;

    const groupName = `voice:${role}:${mood}`;
    const previousIndex = this._lastRandomEffects.get(groupName);
    const indexes = paths.map((_, index) => index);
    const candidates = indexes.length > 1
      ? indexes.filter((index) => index !== previousIndex)
      : indexes;
    const selectedIndex = candidates[Math.floor(Math.random() * candidates.length)];

    this._lastRandomEffects.set(groupName, selectedIndex);
    return this.playCharacterVoiceAt(role, mood, selectedIndex, options);
  }

  playCharacterVoiceAt(role, mood, index, options = {}) {
    const locale = localStorage.getItem('locale') === 'en' ? 'en' : 'ru';
    const voicePath = getCharacterVoiceLines(locale)[role]?.[mood]?.[index];
    if (!voicePath) return null;

    const name = `voice:${locale}:${role}:${mood}:${index}`;
    void this._ensureCharacterVoice(name, voicePath).then(() => {
      if (options.shouldPlay?.() === false) return;
      this.playEffect(name, options);
    });
    return name;
  }

  stopCharacterVoices() {
    this.musics
      .filter(({ name }) => name.startsWith('voice:'))
      .forEach(({ music }) => {
        if (music.isPlaying || music.offset > 0) music.stop();
      });
  }

  async _ensureCharacterVoice(name, voicePath) {
    if (this.musics.some((track) => track.name === name)) return;
    if (this._voiceLoadPromises.has(name)) return this._voiceLoadPromises.get(name);

    const loadPromise = this._audioLoader.loadAsync(voicePath)
      .then((buffer) => {
        const audio = new THREE.Audio(this.listener);
        audio.setBuffer(buffer);
        audio.setLoop(false);
        audio.setVolume(0.88);
        this.musics.push({ name, music: audio });
      })
      .catch((error) => {
        console.error(`Не удалось загрузить реплику ${voicePath}:`, error);
      })
      .finally(() => this._voiceLoadPromises.delete(name));

    this._voiceLoadPromises.set(name, loadPromise);
    return loadPromise;
  }

  toggleMute(isMuted) {
    this.musicOn = !isMuted;
    this.listener.setMasterVolume(isMuted ? 0 : 1);

    if (!isMuted) {
      this.requestBackgroundMusic();
    }
  }

  isMuted() {
    return !this.musicOn;
  }

  setVisibilityPaused(isPaused) {
    if (isPaused) {
      if (this._pausedByVisibility) return;
      this._pausedByVisibility = true;

      if (this.backgroundMusic?.isPlaying) {
        this.backgroundMusic.pause();
      }
      return;
    }

    if (!this._pausedByVisibility) return;
    this._pausedByVisibility = false;
    this.requestBackgroundMusic();
  }

  hardStopAll() {
    this.musics.forEach(({ music }) => {
      try {
        if (music.isPlaying || music.offset > 0) music.stop();
      } catch {
        // Звук мог ещё не успеть получить буфер.
      }
    });
    this.musicNowPlaying = [];
  }

  stopMusic(names = []) {
    const tracks = names.length === 0
      ? this.musics
      : this.musics.filter(({ name }) => names.includes(name));

    tracks.forEach(({ music }) => {
      if (music.isPlaying || music.offset > 0) music.stop();
    });
  }

  pauseMusic(names = []) {
    this.musics
      .filter(({ name }) => names.includes(name))
      .forEach(({ music }) => {
        if (music.isPlaying) music.pause();
      });
  }

  playMusic(names = []) {
    if (!this.musicOn) return;

    this.musics
      .filter(({ name }) => names.includes(name))
      .forEach(({ music }) => {
        if (!music.isPlaying) music.play();
      });
  }

  togglePauseAll(isPaused) {
    if (isPaused) {
      this.musicNowPlaying = this.musics
        .map(({ music }) => music)
        .filter((music) => music.isPlaying);
      this.musicNowPlaying.forEach((music) => music.pause());
      return;
    }

    if (!this.musicOn) return;
    this.musicNowPlaying.forEach((music) => {
      if (!music.isPlaying) music.play();
    });
    this.musicNowPlaying = [];
  }

  _installAudioUnlock() {
    AUDIO_UNLOCK_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, this._unlockHandler, { passive: true });
    });
  }

  _removeAudioUnlock() {
    AUDIO_UNLOCK_EVENTS.forEach((eventName) => {
      window.removeEventListener(eventName, this._unlockHandler);
    });
  }

  async _unlockAudio() {
    if (this.listener.context.state === 'suspended') {
      try {
        await this.listener.context.resume();
      } catch {
        return;
      }
    }

    if (this._backgroundRequested) {
      await this.startBackgroundMusic();
    }
  }

  _handleInterfaceSound(event) {
    const interactive = event.target.closest(
      'button, [role="button"], .sound_btn_wrap, .lang-toggle',
    );
    if (!interactive || interactive.matches(':disabled, [aria-disabled="true"]')) return;

    const hasOwnGameSound = interactive.closest(
      '.category-card, [data-role="choice-left"], [data-role="choice-right"], '
      + '[data-role="guess-left"], [data-role="guess-right"]',
    );
    if (hasOwnGameSound) return;

    this.playEffect(GAME_SOUNDS.UI_CLICK);
  }
}
