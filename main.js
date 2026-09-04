import * as THREE from 'three';
import GUI from 'three/addons/libs/lil-gui.module.min.js';

import { SdkManager } from './src/utils/yan';
import { yanNeed } from './src/utils/functions';
import { EventEmitter } from './src/utils/events';
import { InitClass } from './src/main/init';
import { ParamsClass } from './src/game/params';
import { AudioClass } from './src/assets/audio';
import { ControlClass } from './src/utils/control';
import { DataClass } from './src/main/data';
import { ScreenManager } from './src/main/screen-manager';
import { initI18n } from './src/utils/i18n';
import { GameClass } from './src/game/game';
import { WorldClass } from './src/game/world';
import { CharactersClass } from './src/game/persons';
import { BlockFlyCharacterClass, FlyCharacterClass } from './src/game/fly-character';
import { EmotionsClass } from './src/game/emotions';
import { InstancesClass } from './src/game/instances';
import { AppController } from './src/main/app-controller';
import { Those3DTexts } from './src/vendor/that-3d-text-library';
import { getCharacterVoicePhrases } from './src/data/character-voice-lines';

console.clear();

const gameContext = {};
gameContext.clock = new THREE.Clock();
const OPENING_GREETING_SEEN_KEY = 'rating:opening-greeting-seen:v1';
const RETURNING_GREETING_ROLES = ['angry', 'kind', 'silly', 'coward'];

export async function startGame(ysdkInstance) {
  try {
    gameContext.sdkManager = sdkManager;
    await BeforeStart();
  } catch (error) {
    if (window.showInitError) {
      window.showInitError(error);
    } else {
      console.error('Init error', error);
    }
  }
}

async function BeforeStart() {
  const loaderLine = document.querySelector('.loader_line');
  if (loaderLine) loaderLine.style.width = '30%';

  await initClases();
  initBackgroundDebugGui();
  await initFunctions();
  initCharacterVoiceDebugGui();
  init3DLogo();
  initGlassMenuCards();
  initGlobalNeonStars();
  initButtonBackDebugGui();

  if (loaderLine) loaderLine.style.width = '100%';

  gameContext.paramsClass.gameInit = true;
  initializeBackdrop();
  initPodiumDebugGui();
  gameContext.appController.init();
  playOpeningGreeting();
  startAnimationLoop();
  initializeAudioStartGate();
  gameContext.sdkManager?.notifyGameReady();
  gameContext.sdkManager?.initializeMobileStickyBanner();
}

function initializeAudioStartGate() {
  const gate = document.querySelector('[data-role="audio-start-gate"]');
  const button = document.querySelector('[data-role="audio-start-button"]');
  const audio = gameContext.audioClass;
  if (!gate || !button || !audio?.needsUserGesture()) return;

  const closeGate = () => {
    gate.hidden = true;
    window.removeEventListener('rating-audio-unlocked', closeGate);
  };

  gate.hidden = false;
  window.addEventListener('rating-audio-unlocked', closeGate);
  button.addEventListener('click', async () => {
    button.disabled = true;
    const unlocked = await audio.unlockFromUserGesture();
    button.disabled = false;
    if (unlocked) closeGate();
  });
}

function playOpeningGreeting() {
  const isReturningPlayer = localStorage.getItem(OPENING_GREETING_SEEN_KEY) === '1';
  const role = isReturningPlayer
    ? RETURNING_GREETING_ROLES[Math.floor(Math.random() * RETURNING_GREETING_ROLES.length)]
    : 'angry';
  const variant = isReturningPlayer ? 'greeting2' : 'greeting';

  const scheduled = gameContext.audioClass.playCharacterGreeting(role, variant, {
    onStart: () => gameContext.emotionsClass.startSpeaking(role),
    onEnd: () => gameContext.emotionsClass.stopSpeaking(role),
  });

  if (scheduled) localStorage.setItem(OPENING_GREETING_SEEN_KEY, '1');
}

function initBackgroundDebugGui() {
  if (!new URLSearchParams(location.search).has('debug2')) return;

  const root = document.documentElement;
  const defaults = {
    artOpacity: 1,
    artScale: 1,
    artX: 0,
    artY: 0,
    artBlur: 0,
    artBrightness: 1,
    artSaturation: 1,
  };
  const state = { ...defaults };

  const apply = () => {
    root.style.setProperty('--main-bg-art-opacity', state.artOpacity);
    root.style.setProperty('--main-bg-art-scale', state.artScale);
    root.style.setProperty('--main-bg-art-x', `${state.artX}px`);
    root.style.setProperty('--main-bg-art-y', `${state.artY}px`);
    root.style.setProperty('--main-bg-art-blur', `${state.artBlur}px`);
    root.style.setProperty('--main-bg-art-brightness', state.artBrightness);
    root.style.setProperty('--main-bg-art-saturation', state.artSaturation);
  };

  const backgroundGui = new GUI({ title: 'Фон главного экрана' });
  backgroundGui.domElement.style.right = gameContext.gui ? '260px' : '0';

  const imageDecor = backgroundGui.addFolder('Фоновая картинка');
  imageDecor.add(state, 'artOpacity', 0, 1, 0.01).name('Прозрачность').onChange(apply);
  imageDecor.add(state, 'artScale', 0.5, 1.8, 0.01).name('Масштаб').onChange(apply);
  imageDecor.add(state, 'artX', -500, 500, 1).name('Смещение X').onChange(apply);
  imageDecor.add(state, 'artY', -500, 500, 1).name('Смещение Y').onChange(apply);
  imageDecor.add(state, 'artBlur', 0, 20, 0.1).name('Размытие').onChange(apply);
  imageDecor.add(state, 'artBrightness', 0.3, 2, 0.01).name('Яркость').onChange(apply);
  imageDecor.add(state, 'artSaturation', 0, 2, 0.01).name('Насыщенность').onChange(apply);

  const actions = {
    reset: () => {
      Object.assign(state, defaults);
      apply();
      backgroundGui.controllersRecursive().forEach((controller) => controller.updateDisplay());
    },
  };
  backgroundGui.add(actions, 'reset').name('Сбросить фон');
  apply();
  gameContext.backgroundGui = backgroundGui;
}

function init3DLogo() {
  const logo = document.querySelector('.logo-duck');
  if (!logo) return;

  const words = new Those3DTexts('.logo-duck').words;
  const word = words[0];
  if (!word) return;

  let frame = 0;
  const tick = () => {
    frame += 1;
    const phaseStep = 360 / Math.max(word.letters.length, 1);

    for (let index = 0; index < 5; index += 1) {
      logo.style.setProperty(
        `--sin-${index}`,
        String(Math.sin((frame + phaseStep * index) * 0.05)),
      );
    }

    window.requestAnimationFrame(tick);
  };

  window.addEventListener('locale-changed', () => word.reset());
  tick();
}

function initCharacterVoiceDebugGui() {
  if (!new URLSearchParams(location.search).has('debug4')) return;

  const roleLabels = {
    'Жёлтый · Злой мужик': 'angry',
    'Зелёная · Милая девушка': 'kind',
    'Фиолетовый · Дурачок': 'silly',
    'Красная · Скромная девочка': 'coward',
  };
  const moodLabels = {
    'Радостная реакция': 'happy',
    'Грустная реакция': 'unhappy',
  };
  const state = {
    role: 'angry',
    mood: 'happy',
    phrase: 0,
    play: () => playSelectedPhrase(),
    previous: () => stepPhrase(-1),
    next: () => stepPhrase(1),
    stop: () => stopPlayback(),
  };
  const greetingState = {
    locale: localStorage.getItem('locale') === 'en' ? 'en' : 'ru',
    role: 'angry',
    playFirst: () => playGreeting('greeting'),
    playReturning: () => playGreeting('greeting2'),
  };
  let playbackToken = 0;
  let phraseRefreshToken = 0;

  const phraseOptions = () => Object.fromEntries(
    getCharacterVoicePhrases(localStorage.getItem('locale'))[state.role][state.mood].map((text, index) => [
      `${String(index + 1).padStart(2, '0')}. ${text}`,
      index,
    ]),
  );

  const stopPlayback = () => {
    playbackToken += 1;
    gameContext.audioClass.stopCharacterVoices();
    gameContext.emotionsClass.stopAllSpeaking();
  };

  const playSelectedPhrase = () => {
    stopPlayback();
    const token = playbackToken;
    const role = state.role;
    const mood = state.mood;

    gameContext.audioClass.playCharacterVoiceAt(role, mood, Number(state.phrase), {
      shouldPlay: () => token === playbackToken,
      onStart: () => {
        if (token !== playbackToken) return;
        gameContext.emotionsClass.startSpeaking(role, mood);
      },
      onEnd: () => {
        if (token !== playbackToken) return;
        gameContext.emotionsClass.stopSpeaking(role);
      },
    });
  };

  const playGreeting = (variant) => {
    stopPlayback();
    const token = playbackToken;
    const role = variant === 'greeting' ? 'angry' : greetingState.role;

    gameContext.audioClass.playCharacterGreeting(role, variant, {
      locale: greetingState.locale,
      shouldPlay: () => token === playbackToken,
      onStart: () => {
        if (token !== playbackToken) return;
        gameContext.emotionsClass.startSpeaking(role);
      },
      onEnd: () => {
        if (token !== playbackToken) return;
        gameContext.emotionsClass.stopSpeaking(role);
      },
    });
  };

  const debugGui = new GUI({ title: 'Debug 4 · Голоса персонажей' });
  debugGui.domElement.style.width = '390px';
  const roleController = debugGui.add(state, 'role', roleLabels).name('Персонаж');
  const moodController = debugGui.add(state, 'mood', moodLabels).name('Эмоция');
  let phraseController = debugGui.add(state, 'phrase', phraseOptions()).name('Реплика');

  const refreshPhrases = () => {
    stopPlayback();
    state.phrase = 0;
    const refreshToken = ++phraseRefreshToken;
    window.requestAnimationFrame(() => {
      if (refreshToken !== phraseRefreshToken) return;
      phraseController = phraseController.options(phraseOptions());
      phraseController.name('Реплика');
      phraseController.updateDisplay();
    });
  };
  roleController.onChange(refreshPhrases);
  moodController.onChange(refreshPhrases);

  const stepPhrase = (direction) => {
    const phrases = getCharacterVoicePhrases(localStorage.getItem('locale'))[state.role][state.mood];
    state.phrase = (Number(state.phrase) + direction + phrases.length) % phrases.length;
    phraseController.updateDisplay();
    playSelectedPhrase();
  };

  debugGui.add(state, 'play').name('▶ Проиграть');
  debugGui.add(state, 'previous').name('← Предыдущая');
  debugGui.add(state, 'next').name('Следующая →');
  debugGui.add(state, 'stop').name('■ Остановить');
  const greetingsFolder = debugGui.addFolder('Приветствия');
  greetingsFolder.add(greetingState, 'locale', { Русский: 'ru', English: 'en' }).name('Язык');
  greetingsFolder.add(greetingState, 'role', roleLabels).name('Персонаж');
  greetingsFolder.add(greetingState, 'playFirst').name('▶ Первое · жёлтый');
  greetingsFolder.add(greetingState, 'playReturning').name('▶ Повторное');
  greetingsFolder.open();
  debugGui.open();
  gameContext.characterVoiceDebugGui = debugGui;
}

function initGlassMenuCards() {
  if (window.matchMedia('(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)').matches) return;

  document.querySelectorAll('.main_screen .new_game_btn').forEach((card) => {
    const resetTilt = () => {
      card.style.setProperty('--pointer-x', '0.5');
      card.style.setProperty('--glass-rotate-x', '0deg');
      card.style.setProperty('--glass-rotate-y', '0deg');
    };

    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const pointerX = (event.clientX - bounds.left) / bounds.width;
      const pointerY = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (pointerX - 0.5) * 6;
      const rotateX = (0.5 - pointerY) * 6;

      card.style.setProperty('--pointer-x', pointerX.toFixed(3));
      card.style.setProperty('--glass-rotate-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--glass-rotate-y', `${rotateY.toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave', resetTilt);
    card.addEventListener('pointercancel', resetTilt);
  });
}

function initGlobalNeonStars() {
  const stars = document.querySelectorAll('.global-neon-star');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const palette = [
    { color: '#fff1b8', glow: '#ffb743' },
    { color: '#e8faff', glow: '#71e0ff' },
    { color: '#ffd8fa', glow: '#ff52cf' },
    { color: '#f6e8ff', glow: '#b970ff' },
    { color: '#ffffff', glow: '#8f9cff' },
  ];

  const randomizeStar = (star, setTiming = false) => {
    const paletteEntry = palette[Math.floor(Math.random() * palette.length)];
    const glowNear = 5 + Math.random() * 6;

    star.style.left = `${2 + Math.random() * 96}%`;
    star.style.top = `${2 + Math.random() * 96}%`;
    star.style.right = 'auto';
    star.style.bottom = 'auto';
    star.style.setProperty('--star-size', `${7 + Math.random() * 22}px`);
    star.style.setProperty('--star-color', paletteEntry.color);
    star.style.setProperty('--star-glow', paletteEntry.glow);
    star.style.setProperty('--star-max-opacity', (0.46 + Math.random() * 0.54).toFixed(2));
    star.style.setProperty('--star-glow-near', `${glowNear.toFixed(1)}px`);
    star.style.setProperty('--star-glow-mid', `${(glowNear * 2.25).toFixed(1)}px`);
    star.style.setProperty('--star-glow-far', `${(glowNear * 4).toFixed(1)}px`);
    star.style.setProperty('--star-peak-scale', (1.02 + Math.random() * 0.48).toFixed(2));

    if (setTiming) {
      const duration = 2.4 + Math.random() * 2.8;
      star.style.setProperty('--star-duration', `${duration.toFixed(2)}s`);
      star.style.setProperty('--star-delay', `${(-Math.random() * duration).toFixed(2)}s`);
    }
  };

  stars.forEach((star) => {
    star.className = 'global-neon-star';
    randomizeStar(star, true);

    if (!reducedMotion) {
      star.addEventListener('animationiteration', () => randomizeStar(star));
    }
  });
}

function initButtonBackDebugGui() {
  if (!new URLSearchParams(location.search).has('debug3')) return;

  const root = document.documentElement;

  const defaults = {
    backX: 0,
    backY: 8,
    backBlur: 0,
    backSpread: 0,
    backColor: 'rgba(46, 19, 151, 0.52)',
    shadowX: 0,
    shadowY: 18,
    shadowBlur: 34,
    shadowSpread: 0,
    shadowColor: 'rgba(24, 8, 91, 0.34)',
    bottomInsetY: -8,
    bottomInsetBlur: 18,
    bottomInsetColor: 'rgba(79, 25, 178, 0.14)',
    topInsetBlur: 6,
    topInsetColor: 'rgba(255, 255, 255, 0.36)',
  };
  const state = { ...defaults };

  const setPx = (name, value) => root.style.setProperty(name, `${value}px`);
  const apply = () => {
    setPx('--button-back-x', state.backX);
    setPx('--button-back-y', state.backY);
    setPx('--button-back-blur', state.backBlur);
    setPx('--button-back-spread', state.backSpread);
    root.style.setProperty('--button-back-color', state.backColor);
    setPx('--button-shadow-x', state.shadowX);
    setPx('--button-shadow-y', state.shadowY);
    setPx('--button-shadow-blur', state.shadowBlur);
    setPx('--button-shadow-spread', state.shadowSpread);
    root.style.setProperty('--button-shadow-color', state.shadowColor);
    setPx('--button-bottom-inset-y', state.bottomInsetY);
    setPx('--button-bottom-inset-blur', state.bottomInsetBlur);
    root.style.setProperty('--button-bottom-inset-color', state.bottomInsetColor);
    setPx('--button-top-inset-blur', state.topInsetBlur);
    root.style.setProperty('--button-top-inset-color', state.topInsetColor);
  };

  const buttonGui = new GUI({ title: 'Button back debug' });
  buttonGui.domElement.style.right = gameContext.backgroundGui ? '520px' : (gameContext.gui ? '260px' : '0');

  const plate = buttonGui.addFolder('3D back plate');
  plate.add(state, 'backX', -40, 40, 1).name('X').onChange(apply);
  plate.add(state, 'backY', -20, 50, 1).name('Depth Y').onChange(apply);
  plate.add(state, 'backBlur', 0, 40, 1).name('Blur').onChange(apply);
  plate.add(state, 'backSpread', -20, 30, 1).name('Spread').onChange(apply);
  plate.addColor(state, 'backColor').name('Color').onChange(apply);

  const cast = buttonGui.addFolder('Soft cast shadow');
  cast.add(state, 'shadowX', -50, 50, 1).name('X').onChange(apply);
  cast.add(state, 'shadowY', -10, 90, 1).name('Y').onChange(apply);
  cast.add(state, 'shadowBlur', 0, 90, 1).name('Blur').onChange(apply);
  cast.add(state, 'shadowSpread', -30, 40, 1).name('Spread').onChange(apply);
  cast.addColor(state, 'shadowColor').name('Color').onChange(apply);

  const inset = buttonGui.addFolder('Inner bevel');
  inset.add(state, 'bottomInsetY', -40, 20, 1).name('Bottom y').onChange(apply);
  inset.add(state, 'bottomInsetBlur', 0, 50, 1).name('Bottom blur').onChange(apply);
  inset.addColor(state, 'bottomInsetColor').name('Bottom color').onChange(apply);
  inset.add(state, 'topInsetBlur', 0, 30, 1).name('Top blur').onChange(apply);
  inset.addColor(state, 'topInsetColor').name('Top color').onChange(apply);

  const actions = {
    reset: () => {
      Object.assign(state, defaults);
      apply();
      buttonGui.controllersRecursive().forEach((controller) => controller.updateDisplay());
    },
    print: () => {
      console.log('Button back debug settings', { ...state });
    },
  };
  buttonGui.add(actions, 'reset').name('Reset button');
  buttonGui.add(actions, 'print').name('Print settings');
  plate.open();
  cast.open();
  apply();
  gameContext.buttonBackGui = buttonGui;
}

function initPodiumDebugGui() {
  if (!new URLSearchParams(location.search).has('debug2')) return;

  const gui = gameContext.backgroundGui;
  const game = gameContext.gameClass;
  if (!gui || !game?.podium) return;

  const state = game.podiumSettings;
  const apply = () => {
    game.applySceneLayout(game.currentSceneMode);
  };
  const controlsState = {
    orbitEnabled: gameContext.initClass.controls.enabled,
  };
  const cameraFolder = gui.addFolder('Камера');
  cameraFolder.add(controlsState, 'orbitEnabled').name('OrbitControls').onChange((value) => {
    gameContext.initClass.controls.enabled = value;
  });

  const folder = gui.addFolder('Подиум');
  const position = folder.addFolder('Положение');
  position.add(state, 'x', -8, 8, 0.01).name('X').onChange(apply);
  position.add(state, 'y', -5, 5, 0.01).name('Y').onChange(apply);
  position.add(state, 'z', -5, 5, 0.01).name('Z').onChange(apply);

  const topLayer = folder.addFolder('Верхний ярус');
  topLayer.add(state, 'topWidth', 3, 18, 0.01).name('Ширина').onChange(apply);
  topLayer.add(state, 'topDepth', 1, 12, 0.01).name('Длина').onChange(apply);
  topLayer.add(state, 'topHeight', 0.04, 1.5, 0.01).name('Высота').onChange(apply);
  topLayer.add(state, 'topRounding', 0, 0.35, 0.005).name('Скругление').onChange(apply);

  const baseLayer = folder.addFolder('Основной ярус');
  baseLayer.add(state, 'baseWidth', 3, 18, 0.01).name('Ширина').onChange(apply);
  baseLayer.add(state, 'baseDepth', 1, 12, 0.01).name('Длина').onChange(apply);
  baseLayer.add(state, 'baseHeight', 0.04, 1.5, 0.01).name('Высота').onChange(apply);
  baseLayer.add(state, 'baseRounding', 0, 0.35, 0.005).name('Скругление').onChange(apply);

  const lowerLayer = folder.addFolder('Нижний ярус');
  lowerLayer.add(state, 'lowerWidth', 3, 18, 0.01).name('Ширина').onChange(apply);
  lowerLayer.add(state, 'lowerDepth', 1, 12, 0.01).name('Длина').onChange(apply);
  lowerLayer.add(state, 'lowerHeight', 0.02, 1.5, 0.01).name('Высота').onChange(apply);
  lowerLayer.add(state, 'lowerRounding', 0, 0.35, 0.005).name('Скругление').onChange(apply);
  lowerLayer.add(state, 'baseDrop', 0, 1.5, 0.01).name('Отступ').onChange(apply);

  const rim = folder.addFolder('Светящийся кант');
  rim.add(state, 'rimLift', -0.3, 0.5, 0.005).name('Высота').onChange(apply);
  rim.add(state, 'rimThickness', 0.005, 0.15, 0.001).name('Толщина').onChange(apply);
  rim.add(state, 'glow', 0, 5, 0.01).name('Свечение').onChange(apply);
  rim.addColor(state, 'rimColor').name('Цвет').onChange(apply);

  const materials = folder.addFolder('Материалы');
  materials.addColor(state, 'topColor').name('Верх').onChange(apply);
  materials.addColor(state, 'sideColor').name('Бок').onChange(apply);
  materials.addColor(state, 'lowerColor').name('Низ').onChange(apply);
  materials.add(state, 'roughness', 0, 1, 0.01).name('Шероховатость').onChange(apply);
  materials.add(state, 'metalness', 0, 1, 0.01).name('Металличность').onChange(apply);

  const shadow = folder.addFolder('Тень');
  shadow.add(state, 'shadowOpacity', 0, 1, 0.01).name('Прозрачность').onChange(apply);
  shadow.add(state, 'shadowScale', 0.7, 1.8, 0.01).name('Размер').onChange(apply);

  const defaults = { ...state };
  const actions = {
    reset: () => {
      Object.assign(state, defaults);
      apply();
      folder.controllersRecursive().forEach((controller) => controller.updateDisplay());
    },
  };
  folder.add(actions, 'reset').name('Сбросить подиум');
  folder.open();

  const characterState = game.menuCharacterSettings;
  const charactersFolder = gui.addFolder('Персонажи');
  charactersFolder.add(characterState, 'desktopSpacing', 1.4, 3, 0.01)
    .name('Интервал desktop')
    .onChange(apply);
  charactersFolder.add(characterState, 'mobileSpacing', 0.9, 2.4, 0.01)
    .name('Интервал mobile')
    .onChange(apply);

  const world = gameContext.worldClass;
  const shadowState = world.shadowSettings;
  const shadowFolder = gui.addFolder('Тени персонажей');
  const applyShadow = () => world.applyShadowSettings();
  shadowFolder.add(shadowState, 'radius', 0, 20, 0.1).name('Размытие').onChange(applyShadow);
  shadowFolder.add(shadowState, 'blurSamples', 1, 32, 1).name('Сэмплы').onChange(applyShadow);
  shadowFolder.add(shadowState, 'bias', -0.02, 0.02, 0.0001).name('Bias').onChange(applyShadow);
  shadowFolder.add(shadowState, 'normalBias', 0, 0.2, 0.001).name('Normal bias').onChange(applyShadow);
  shadowFolder.add(shadowState, 'mapSize', {
    512: 512,
    1024: 1024,
    2048: 2048,
  }).name('Карта тени').onChange(applyShadow);
}

function initializeBackdrop() {
  gameContext.gameClass.loadMesh();
  gameContext.instancesClass.init();
  gameContext.worldClass.loadLight(true, true);
  gameContext.paramsClass.startGame();
  gameContext.emotionsClass.react('pair_presented');
}

async function initClases() {
  gameContext.initClass = new InitClass(gameContext);
  gameContext.events = new EventEmitter();

  gameContext.scene = gameContext.initClass.scene;
  gameContext.camera = gameContext.initClass.camera;
  gameContext.renderer = gameContext.initClass.renderer;
  gameContext.debugUiEnabled = gameContext.initClass.debugUiEnabled;
  gameContext.gui = gameContext.debugUiEnabled ? new GUI() : null;

  if (gameContext.gui) {
    const cameraDebug = gameContext.gui.addFolder('Камера');
    const cameraDebugState = {
      orbitEnabled: gameContext.initClass.controls.enabled,
    };
    cameraDebug.add(cameraDebugState, 'orbitEnabled').name('OrbitControls').onChange((value) => {
      gameContext.initClass.controls.enabled = value;
    });
  }

  gameContext.ui = new ScreenManager(gameContext);
  gameContext.paramsClass = new ParamsClass(gameContext);
  gameContext.audioClass = new AudioClass(gameContext);
  gameContext.dataClass = new DataClass(gameContext);
  gameContext.controlClass = new ControlClass(gameContext);
  gameContext.gameClass = new GameClass(gameContext);
  gameContext.beeCharacter = new FlyCharacterClass(gameContext);
  gameContext.flyCharacter = new BlockFlyCharacterClass(gameContext);
  gameContext.gameClass.flyingCharacters.push(
    gameContext.beeCharacter,
    gameContext.flyCharacter,
  );
  gameContext.worldClass = new WorldClass(gameContext);
  gameContext.instancesClass = new InstancesClass(gameContext);
  gameContext.emotionsClass = new EmotionsClass(gameContext);
  gameContext.emotionsClass.attachGui(gameContext.gui);
  gameContext.appController = new AppController(gameContext);

  const spectatorConfigs = gameContext.emotionsClass.getConfigs();
  gameContext.spectatorConfigs = spectatorConfigs;

  spectatorConfigs.forEach(() => {
    const character = new CharactersClass(gameContext);
    gameContext.gameClass.characters.push(character);
  });
}

async function initFunctions() {
  if (typeof yanNeed === 'function') await yanNeed();
  gameContext.paramsClass.initCustomScroll();
  initI18n(gameContext.sdkManager?.getLanguage());

  gameContext.gameClass.flyingCharacters.forEach((character) => character.loadCharacter());

  for (let i = 0; i < gameContext.gameClass.characters.length; i++) {
    await gameContext.gameClass.characters[i].loadCharacter(gameContext.spectatorConfigs[i]);
    gameContext.emotionsClass.registerCharacter(gameContext.gameClass.characters[i], gameContext.spectatorConfigs[i]);
  }

  gameContext.emotionsClass.enterIdle();
  gameContext.gameClass.applySceneLayout('main_screen');

  gameContext.audioClass.attachTo(gameContext.camera);
  await gameContext.audioClass.loadAudio();
  gameContext.audioClass.requestBackgroundMusic();
  await gameContext.controlClass.addKeyListeners();

  if (gameContext.gui) {
    gameContext.gui.addFolder('Физика');
  }
}

function update(delta) {
  if (!gameContext.paramsClass) return;

  gameContext.gameClass.update(delta, gameContext.emotionsClass.roundActive);

  switch (gameContext.paramsClass.currentGameState) {
    case gameContext.paramsClass.gameState.play:
      gameContext.emotionsClass.update(delta);
      break;
  }
}

function render() {
  if (gameContext.initClass && gameContext.initClass.stats) {
    gameContext.initClass.stats.update();
  }

  if (gameContext.initClass && gameContext.initClass.controls) {
    gameContext.initClass.controls.update();
    gameContext.initClass.updateOrbitDebugHud();
  }

  if (gameContext.renderer && gameContext.scene && gameContext.camera) {
    gameContext.renderer.render(gameContext.scene, gameContext.camera);
  }
}

function startAnimationLoop() {
  let accumulator = 0;
  const dt = 1 / 60;
  const maxFrame = 0.1;

  gameContext.renderer.setAnimationLoop(() => {
    let frameDelta = gameContext.clock.getDelta();
    if (frameDelta > maxFrame) frameDelta = maxFrame;
    accumulator += frameDelta;

    let maxSteps = 5;
    while (accumulator >= dt && maxSteps > 0) {
      update(dt);
      accumulator -= dt;
      maxSteps--;
    }

    if (accumulator > dt) accumulator = 0;
    render();
  });
}

const sdkManager = new SdkManager(startGame);
sdkManager.init();
