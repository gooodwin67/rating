import {
  FACE_DEFAULTS,
  LOOK_PRESETS,
  SPECTATOR_DEFINITIONS,
  SPECTATOR_PROFILES,
  SPECTATOR_SCENE_EVENTS,
  composeFaceState,
} from './emotions-data';
import { getRandomNumber } from '../utils/functions';

const LOOK_DELAY_MIN_MS = 0;
const LOOK_DELAY_MAX_MS = 2000;

export class EmotionsClass {
  constructor(gameContext) {
    this.gameContext = gameContext;
    this.gui = null;
    this.spectators = [];
    this.focus = 'center';
    this.roundActive = false;
    this.debugMouthOverride = null;
    this.charactersGuiFolder = null;
    this.pendingReactionTimer = null;
  }

  getConfigs() {
    return SPECTATOR_DEFINITIONS.map((config) => ({ ...config }));
  }

  registerCharacter(character, config) {
    const profile = SPECTATOR_PROFILES[config.role];
    if (!profile) {
      throw new Error(`Unknown spectator role: ${config.role}`);
    }

    const now = performance.now();
    const entry = {
      character,
      config,
      profile,
      role: config.role,
      currentState: 'idle',
      focus: 'center',
      stickyState: 'idle',
      tempUntil: 0,
      nextLookAt: now + this.getLookDelay(),
      nextBlinkAt: now + getRandomNumber(config.blinkRange[0], config.blinkRange[1]),
      nextAmbientAt: now + this.getAmbientDelay(config, false),
    };

    this.spectators.push(entry);
    this.applyEntryState(entry, 'idle', { duration: 0.4, sticky: true, resetFocus: true });
    this.attachCharacterGui(entry, this.spectators.length - 1);
  }

  attachGui(gui) {
    this.gui = gui;

    if (!gui) return;

    const debugState = {
      focus: 'center',
      event: 'pair_presented',
      followDot: this.gameContext.gameClass.eyeTrackingEnabled,
      eyeTrackingMode: this.gameContext.gameClass.eyeTrackingMode,
      mouthMode: FACE_DEFAULTS.mouth.mode,
      mouthWidth: FACE_DEFAULTS.mouth.width,
      mouthHeight: FACE_DEFAULTS.mouth.height,
      mouthThickness: FACE_DEFAULTS.mouth.thickness,
      mouthCurve: FACE_DEFAULTS.mouth.curve,
      mouthX: FACE_DEFAULTS.mouth.x,
      mouthY: FACE_DEFAULTS.mouth.y,
      mouthScaleX: FACE_DEFAULTS.mouth.scaleX,
      mouthScaleY: FACE_DEFAULTS.mouth.scaleY,
      mouthRotationZ: FACE_DEFAULTS.mouth.rotationZ,
      triggerEvent: () => {
        this.react(debugState.event);
      },
      startRound: () => {
        this.react('pair_presented');
      },
      enterIdle: () => {
        this.enterIdle();
      },
      resetRound: () => {
        this.resetRound();
      },
      resetMouth: () => {
        debugState.mouthMode = FACE_DEFAULTS.mouth.mode;
        debugState.mouthWidth = FACE_DEFAULTS.mouth.width;
        debugState.mouthHeight = FACE_DEFAULTS.mouth.height;
        debugState.mouthThickness = FACE_DEFAULTS.mouth.thickness;
        debugState.mouthCurve = FACE_DEFAULTS.mouth.curve;
        debugState.mouthX = FACE_DEFAULTS.mouth.x;
        debugState.mouthY = FACE_DEFAULTS.mouth.y;
        debugState.mouthScaleX = FACE_DEFAULTS.mouth.scaleX;
        debugState.mouthScaleY = FACE_DEFAULTS.mouth.scaleY;
        debugState.mouthRotationZ = FACE_DEFAULTS.mouth.rotationZ;
        this.debugMouthOverride = this.buildDebugMouthOverride(debugState);
        mouthControllers.forEach((controller) => controller.updateDisplay());
        this.refreshCurrentStates();
      },
    };

    const mouthControllers = [];

    const focusOptions = {
      Центр: 'center',
      Влево: 'left',
      Вправо: 'right',
      Вверх: 'top',
      Вниз: 'bottom',
    };

    const eventOptions = {
      'Появилась пара': 'pair_presented',
      'Выбор игрока': 'player_choice',
      'Угадал верно': 'guess_correct',
      'Угадал неверно': 'guess_wrong',
      'Рост серии': 'streak_up',
      'Конец категории': 'category_complete',
      Спокойствие: 'neutral',
    };

    const eyeTrackingOptions = {
      Шар: 'dot',
      Мышь: 'mouse',
    };

    const folder = gui.addFolder('Зрители');
    folder.add(debugState, 'focus', focusOptions).name('Фокус').onChange((value) => {
      this.setFocus(value);
    });
    folder.add(debugState, 'followDot').name('Следить за шаром').onChange((value) => {
      this.gameContext.gameClass.eyeTrackingEnabled = value;

      if (!value) {
        this.spectators.forEach((entry) => {
          entry.character.clearLookTarget();
          entry.nextLookAt = performance.now() + this.getLookDelay();
          entry.character.update(1 / 60);
        });
      }
    });
    folder.add(debugState, 'eyeTrackingMode', eyeTrackingOptions).name('Следить за').onChange((value) => {
      this.gameContext.gameClass.eyeTrackingMode = value;
    });
    folder.add(debugState, 'event', eventOptions).name('Событие');
    folder.add(debugState, 'triggerEvent').name('Запустить');
    folder.add(debugState, 'startRound').name('Старт раунда');
    folder.add(debugState, 'enterIdle').name('В покой');
    folder.add(debugState, 'resetRound').name('Сбросить');

    this.charactersGuiFolder = folder.addFolder('Анимации каждого персонажа');

    const mouthFolder = gui.addFolder('Рот');
    const syncMouth = () => {
      this.debugMouthOverride = this.buildDebugMouthOverride(debugState);
      this.refreshCurrentStates();
    };

    mouthControllers.push(
      mouthFolder.add(debugState, 'mouthMode', { Линия: 'curve', Овал: 'oval' }).name('Тип').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthWidth', 0.005, 1.2, 0.005).name('Ширина').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthHeight', 0.001, 0.8, 0.005).name('Высота').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthThickness', 0.001, 0.3, 0.002).name('Толщина').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthCurve', -0.8, 0.8, 0.005).name('Изгиб').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthX', -0.8, 0.8, 0.005).name('X').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthY', -0.2, 2, 0.005).name('Y').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthScaleX', 0.1, 5, 0.01).name('Масштаб X').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthScaleY', 0.1, 5, 0.01).name('Масштаб Y').onChange(syncMouth),
      mouthFolder.add(debugState, 'mouthRotationZ', -3.14, 3.14, 0.01).name('Поворот').onChange(syncMouth),
    );
    mouthFolder.add(debugState, 'resetMouth').name('Сбросить рот');
  }

  attachCharacterGui(entry, index) {
    if (!this.charactersGuiFolder || entry.debugGuiAttached) return;

    const characterLabels = [
      'Розовый · Трусишка',
      'Фиолетовый · Чудак',
      'Мятный · Добряк',
      'Жёлтый · Ворчун',
    ];
    const stateLabels = {
      idle: 'Спокойствие',
      watching: 'Наблюдает',
      anticipation: 'Ожидание',
      approve: 'Одобряет',
      disapprove: 'Не одобряет',
      surprised: 'Удивление',
      confused: 'Замешательство',
      tense: 'Напряжение',
      celebrate: 'Празднует',
      sad: 'Грусть',
    };

    const folder = this.charactersGuiFolder.addFolder(
      `${index + 1}. ${characterLabels[index] ?? entry.config.label}`,
    );
    const actions = {};

    Object.keys(entry.profile.states).forEach((stateName) => {
      actions[stateName] = () => {
        entry.tempUntil = 0;
        entry.nextAmbientAt = performance.now() + 5000;
        this.applyEntryState(entry, stateName, {
          duration: 0.55,
          sticky: true,
          resetFocus: stateName === 'idle',
        });
      };
      folder.add(actions, stateName).name(stateLabels[stateName] ?? stateName);
    });

    actions.blink = () => entry.character.blink();
    folder.add(actions, 'blink').name('Моргнуть');
    entry.debugGuiAttached = true;
  }

  update(delta) {
    const now = performance.now();
    const eyeTrackingTarget = this.gameContext.gameClass.getSpectatorFocusTarget();

    this.spectators.forEach((entry) => {
      if (eyeTrackingTarget) {
        if (now >= entry.nextLookAt) {
          entry.character.setLookTarget(eyeTrackingTarget);
          entry.nextLookAt = now + this.getLookDelay();
        }
      } else {
        entry.character.clearLookTarget();
        entry.nextLookAt = now + this.getLookDelay();
      }

      entry.character.update(delta);

      if (now >= entry.nextBlinkAt) {
        entry.character.blink();
        entry.nextBlinkAt = now + getRandomNumber(entry.config.blinkRange[0], entry.config.blinkRange[1]);
      }

      if (entry.tempUntil && now >= entry.tempUntil) {
        entry.tempUntil = 0;
        this.applyEntryState(entry, entry.stickyState, { duration: 0.7 });
      }

      if (entry.tempUntil) return;

      if (!this.roundActive) return;

      if (now >= entry.nextAmbientAt) {
        const pool = this.roundActive ? entry.profile.watchingStates : entry.profile.idleStates;
        const nextState = pool[Math.floor(Math.random() * pool.length)] || entry.stickyState;
        this.applyEntryState(entry, nextState, { duration: 0.9 });
        entry.nextAmbientAt = now + this.getAmbientDelay(entry.config, this.roundActive);
      }
    });
  }

  updateEmotions(delta) {
    this.update(delta);
  }

  getLookDelay() {
    return getRandomNumber(LOOK_DELAY_MIN_MS, LOOK_DELAY_MAX_MS);
  }

  setFocus(side = 'center') {
    this.focus = LOOK_PRESETS[side] ? side : 'center';

    this.spectators.forEach((entry) => {
      entry.focus = this.focus;
      this.applyEntryState(entry, entry.currentState, { duration: 0.45 });
    });
  }

  react(eventName, payload = {}) {
    if (this.pendingReactionTimer) {
      window.clearTimeout(this.pendingReactionTimer);
      this.pendingReactionTimer = null;
    }

    if (eventName === 'neutral') {
      this.enterIdle();
      return;
    }

    if (eventName === 'pair_presented') {
      this.roundActive = true;
    }

    const now = performance.now();

    this.spectators.forEach((entry) => {
      const reaction = entry.profile.reactions[eventName];
      if (!reaction) return;

      const stateName = typeof reaction === 'function' ? reaction(payload, entry) : reaction.state;
      const holdDuration = (typeof reaction === 'function' ? 1.4 : reaction.duration ?? 1.4)
        / (entry.config.reactionSpeed ?? 1);
      const transitionDuration = Math.min(0.52, holdDuration * 0.4);

      this.applyEntryState(entry, stateName, { duration: transitionDuration });
      entry.tempUntil = now + (transitionDuration + holdDuration) * 1000;
      entry.nextAmbientAt = entry.tempUntil + this.getAmbientDelay(entry.config, this.roundActive);
    });
  }

  reactAfter(eventName, delayMs, payload = {}) {
    if (this.pendingReactionTimer) {
      window.clearTimeout(this.pendingReactionTimer);
    }

    this.pendingReactionTimer = window.setTimeout(() => {
      this.pendingReactionTimer = null;
      this.react(eventName, payload);
    }, delayMs);
  }

  holdCurrentStates() {
    if (this.pendingReactionTimer) {
      window.clearTimeout(this.pendingReactionTimer);
      this.pendingReactionTimer = null;
    }

    this.spectators.forEach((entry) => {
      entry.tempUntil = 0;
      entry.stickyState = entry.currentState;
      entry.nextAmbientAt = Number.POSITIVE_INFINITY;
    });
  }

  enterIdle() {
    if (this.pendingReactionTimer) {
      window.clearTimeout(this.pendingReactionTimer);
      this.pendingReactionTimer = null;
    }

    this.roundActive = false;
    this.focus = 'center';

    this.spectators.forEach((entry) => {
      entry.tempUntil = 0;
      this.applyEntryState(entry, 'idle', {
        duration: 0.7,
        sticky: true,
        resetFocus: true,
      });
      entry.nextAmbientAt = performance.now() + this.getAmbientDelay(entry.config, false);
    });
  }

  resetRound() {
    this.enterIdle();
  }

  applyEntryState(entry, stateName, options = {}) {
    const lookPreset = LOOK_PRESETS[options.resetFocus ? 'center' : entry.focus] || LOOK_PRESETS.center;
    const pose = composeFaceState(
      entry.profile.basePose,
      entry.profile.states[stateName] || entry.profile.states.idle,
      lookPreset,
      this.debugMouthOverride,
    );

    pose.color = entry.config.color;
    entry.currentState = stateName;

    if (options.sticky) {
      entry.stickyState = stateName;
    } else if (this.roundActive) {
      entry.stickyState = 'watching';
    } else {
      entry.stickyState = 'idle';
    }

    if (options.resetFocus) {
      entry.focus = 'center';
    }

    entry.character.applyState(pose, { duration: options.duration ?? 1 });
  }

  buildDebugMouthOverride(debugState) {
    return {
      mouth: {
        mode: debugState.mouthMode,
        width: debugState.mouthWidth,
        height: debugState.mouthHeight,
        thickness: debugState.mouthThickness,
        curve: debugState.mouthCurve,
        x: debugState.mouthX,
        y: debugState.mouthY,
        scaleX: debugState.mouthScaleX,
        scaleY: debugState.mouthScaleY,
        rotationZ: debugState.mouthRotationZ,
      },
    };
  }

  refreshCurrentStates() {
    this.spectators.forEach((entry) => {
      this.applyEntryState(entry, entry.currentState, { duration: 0.18 });
    });
  }

  getAmbientDelay(config, isRoundActive) {
    const range = isRoundActive ? config.ambientInterval : (config.idleInterval || config.ambientInterval);
    return getRandomNumber(range[0], range[1]);
  }
}
