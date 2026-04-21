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
  await initFunctions();

  if (loaderLine) loaderLine.style.width = '100%';

  gameContext.paramsClass.gameInit = true;
  initializeBackdrop();
  gameContext.appController.init();
  startAnimationLoop();
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
  gameContext.gui = new GUI();

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

  await gameContext.audioClass.loadAudio();
  await gameContext.controlClass.addKeyListeners();

  if (location.hostname === 'localhost') {
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
