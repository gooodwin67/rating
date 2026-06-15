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
import { AssetsManager } from './src/assets/assets-manager';
import { ScreenManager } from './src/main/screen-manager';
import { initI18n } from './src/utils/i18n';
import { GameClass } from './src/game/game';
import { WorldClass } from './src/game/world';
import { CharactersClass } from './src/game/persons';
import { EmotionsClass } from './src/game/emotions';
import { InstancesClass } from './src/game/instances';
import { AppController } from './src/main/app-controller';

console.clear();

const gameContext = {};
gameContext.clock = new THREE.Clock();

export async function startGame(ysdkInstance) {
  try {
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

  if (loaderLine) loaderLine.style.width = '100%';

  gameContext.paramsClass.gameInit = true;
  initializeBackdrop();
  initPodiumDebugGui();
  gameContext.appController.init();
  startAnimationLoop();
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
  gameContext.assetsManager = new AssetsManager(gameContext);
  gameContext.audioClass = new AudioClass(gameContext);
  gameContext.dataClass = new DataClass(gameContext);
  gameContext.controlClass = new ControlClass(gameContext);
  gameContext.gameClass = new GameClass(gameContext);
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
  initI18n('ru');

  await gameContext.assetsManager.loadTextures();

  for (let i = 0; i < gameContext.gameClass.characters.length; i++) {
    await gameContext.gameClass.characters[i].loadCharacter(gameContext.spectatorConfigs[i]);
    gameContext.emotionsClass.registerCharacter(gameContext.gameClass.characters[i], gameContext.spectatorConfigs[i]);
  }

  gameContext.emotionsClass.enterIdle();
  gameContext.gameClass.applySceneLayout('main_screen');

  await gameContext.audioClass.loadAudio();
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
