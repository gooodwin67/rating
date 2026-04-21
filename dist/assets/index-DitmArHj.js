import { B as re, V as f, M as ce, S as le, C as te, P as he, a as de, W as ue, b as me, c as pe, A as ye, O as ge, d as S, e as fe, f as we, g as be, R as ke, T as ve, h as I, G as Se, i as Ce, j as se, k as Ee, l as $, D as A, m as v, n as X, o as _e, p as Ie, q as xe, r as Y, s as Me, t as K, u as H, v as Te, w as Le, x as oe, E as Re, I as Ae, y as Ye, z as De } from "./three-B0wySeXh.js";
import { g as _ } from "./gsap-Cy3i8ghA.js";
let kt;
let __tla = (async () => {
  kt = function() {
    import.meta.url, import("_").then(async (m) => {
      await m.__tla;
      return m;
    }).catch(() => 1), async function* () {
    }().next();
  };
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
    new MutationObserver((o) => {
      for (const i of o) if (i.type === "childList") for (const c of i.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function s(o) {
      if (o.ep) return;
      o.ep = true;
      const i = t(o);
      fetch(o.href, i);
    }
  })();
  class Pe {
    constructor(e) {
      this.startGameCallback = e, this.ysdk = null, this._setupGlobalErrorListeners();
    }
    init() {
      document.readyState === "complete" ? this._initYaGames() : window.addEventListener("load", () => {
        this._initYaGames();
      });
    }
    showFullscreenAdv() {
      this.ysdk && this.ysdk.adv.showFullscreenAdv({
        callbacks: {
          onClose: function(e) {
          },
          onError: function(e) {
          }
        }
      });
    }
    showRewardedVideo(e) {
      this.ysdk && this.ysdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: () => {
            e.onOpen && e.onOpen();
          },
          onRewarded: () => {
            e.onRewarded && e.onRewarded();
          },
          onClose: () => {
            e.onClose && e.onClose();
          },
          onError: (t) => {
            console.error("Reward error:", t), e.onError && e.onError(t);
          }
        }
      });
    }
    _initYaGames() {
      typeof YaGames < "u" ? YaGames.init().then((e) => {
        console.log("YaGames SDK initialized"), this.ysdk = e, window.ysdk = e, this.startGameCallback && this.startGameCallback(e);
      }).catch((e) => {
        this.showInitError(e);
      }) : (console.warn("YaGames is not defined (running in offline/dev mode?)"), this.startGameCallback && this.startGameCallback(null));
    }
    showInitError(e) {
      let t = "Init error";
      e && (e.message ? t += ": " + e.message : t += ": " + String(e)), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
        this._renderInitError(t);
      }, {
        once: true
      }) : this._renderInitError(t);
    }
    _renderInitError(e) {
      const t = document.body || document.documentElement;
      if (!t) return;
      let s = document.getElementById("debug-error-overlay");
      s || (s = document.createElement("div"), s.id = "debug-error-overlay", s.className = "debug_error_overlay", s.style.position = "fixed", s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.background = "rgba(0,0,0,0.85)", s.style.color = "red", s.style.zIndex = "9999", s.style.padding = "20px", s.style.whiteSpace = "pre-wrap", s.style.fontFamily = "monospace", t.appendChild(s)), s.textContent = e;
    }
    _setupGlobalErrorListeners() {
      window.addEventListener("error", (e) => {
        if (!e) return;
        const t = [];
        e.message && t.push(e.message), e.filename && t.push("at " + e.filename + ":" + e.lineno + ":" + e.colno), e.error && e.error.stack && t.push(e.error.stack), this.showInitError(t.join("\n"));
      }), window.addEventListener("unhandledrejection", (e) => {
        if (!e) return;
        const t = e.reason || "unhandledrejection";
        t.stack ? this.showInitError(t.stack) : this.showInitError(String(t));
      });
    }
  }
  function E(a, e) {
    return Math.random() * (e - a) + a;
  }
  async function j() {
    document.addEventListener("contextmenu", (e) => (e.preventDefault(), false), {
      capture: true
    }), document.addEventListener("selectstart", (e) => (e.preventDefault(), false), {
      capture: true
    }), document.addEventListener("dragstart", (e) => (e.preventDefault(), false), {
      capture: true
    }), document.addEventListener("touchstart", (e) => {
      e.touches.length > 1 && e.preventDefault();
    }, {
      passive: false
    });
    let a;
    document.addEventListener("touchstart", (e) => {
      a = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }, {
      passive: false
    }), document.addEventListener("touchend", () => {
      clearTimeout(a);
    }), document.addEventListener("touchmove", () => {
      clearTimeout(a);
    }), document.addEventListener("dblclick", (e) => (e.preventDefault(), false), {
      capture: true
    }), (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (e) => {
      e.target.closest(".new_game_btn, .category-card, .choice-card, .small-pill, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || e.preventDefault();
    }, {
      passive: false
    });
  }
  new re(new f(-0.5, -0.5, -0.5), new f(0.5, 0.5, 0.5));
  new ce();
  class Oe {
    constructor() {
      this.events = {};
    }
    on(e, t) {
      this.events[e] || (this.events[e] = []), this.events[e].push(t);
    }
    off(e, t) {
      this.events[e] && (this.events[e] = this.events[e].filter((s) => s !== t));
    }
    emit(e, t) {
      this.events[e] && this.events[e].forEach((s) => s(t));
    }
  }
  class Ge {
    constructor(e) {
      var _a;
      this.gameContext = e, this.onWindowResize = this.onWindowResize.bind(this), this.setVhVar = this.setVhVar.bind(this), this.onVisibilitychange = this.onVisibilitychange.bind(this), this.scene = new le(), this.scene.background = new te(10392058), this.camera = new he(25, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.x = 2, this.camera.position.y = 5, this.camera.position.z = 26;
      const t = 16 / 9, s = S.degToRad(25);
      this.FIXED_HFOV = 2 * Math.atan(Math.tan(s / 2) * t), this.stats = new de(), document.body.appendChild(this.stats.dom), this.stats.dom.style.top = "0", this.stats.dom.style.left = "0", this.renderer = new ue({
        antialias: true
      }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = me, this.renderer.outputColorSpace = pe, this.renderer.toneMapping = ye, this.renderer.toneMappingExposure = 1.05, this.controls = new ge(this.camera, this.renderer.domElement), this.setVhVar(), window.addEventListener("resize", this.setVhVar), window.addEventListener("orientationchange", this.setVhVar), (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", this.setVhVar), window.addEventListener("resize", this.onWindowResize), window.addEventListener("visibilitychange", this.onVisibilitychange), this.onWindowResize(), this.onVisibilitychange();
    }
    setVhVar() {
      var _a;
      const e = (((_a = window.visualViewport) == null ? void 0 : _a.height) || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
    }
    onVisibilitychange() {
      this.gameContext.audioClass;
    }
    onWindowResize() {
      const e = document.body.offsetWidth, t = document.body.offsetHeight, s = e / t;
      let o = 2 * Math.atan(Math.tan(this.FIXED_HFOV / 2) / s);
      const i = S.degToRad(4), c = S.degToRad(90);
      o = S.clamp(o, i, c), this.camera.fov = S.radToDeg(o), this.camera.aspect = s, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
    }
  }
  class Be {
    constructor() {
      this.gameInit = false, this.isMobileDevice = this.detectDevice(), this.gameState = {
        menu: 1,
        play: 2,
        pause: 3
      }, this.currentGameState = this.gameState.menu;
    }
    setGameState(e) {
      this.currentGameState = e;
    }
    goToMenu() {
      this.setGameState(this.gameState.menu);
    }
    startGame() {
      this.setGameState(this.gameState.play);
    }
    pauseGame() {
      this.setGameState(this.gameState.pause);
    }
    resumeGame() {
      this.setGameState(this.gameState.play);
    }
    detectDevice() {
      let e = window.matchMedia || window.msMatchMedia;
      return e ? e("(pointer:coarse)").matches : false;
    }
    initCustomScroll() {
      const e = [
        ".main_screen",
        ".categories_screen",
        ".choice_screen",
        ".session_complete_screen",
        ".settings_screen"
      ];
      let t = null, s = null, o = null, i = false, c = 0, n = 0;
      const l = () => {
        for (const m of e) {
          const k = document.querySelector(m);
          if (k && !k.classList.contains("hidden_screen")) return k;
        }
        return null;
      }, d = () => {
        const m = l();
        m !== t && (t && t.removeEventListener("scroll", p, {
          passive: true
        }), o && (o.removeEventListener("mousedown", y), o.removeEventListener("touchstart", y)), t = m, s = t ? t.querySelector(".scroll-progress") : null, o = s ? s.querySelector(".scroll-progress__bar") : null, t && t.addEventListener("scroll", p, {
          passive: true
        }), o && (o.addEventListener("mousedown", y), o.addEventListener("touchstart", y)), p());
      }, p = () => {
        if (!t || !s || !o) return;
        const m = t.clientHeight, k = t.scrollHeight, G = t.scrollTop;
        if (k <= m + 1) {
          s.classList.remove("visible");
          return;
        }
        s.classList.add("visible");
        const x = s.getBoundingClientRect().height, M = Math.max(m / k * x, 24), T = k - m, B = x - M, ne = T > 0 ? G / T * B : 0;
        o.style.height = "".concat(M, "px"), o.style.top = "".concat(ne, "px");
      }, y = (m) => {
        !t || !o || (i = true, c = m.touches ? m.touches[0].clientY : m.clientY, n = t.scrollTop, document.body.style.userSelect = "none", m.preventDefault());
      }, w = (m) => {
        if (!i || !t || !o || !s) return;
        const G = (m.touches ? m.touches[0].clientY : m.clientY) - c, x = s.getBoundingClientRect().height, V = t.clientHeight, M = t.scrollHeight, T = Math.max(1, x - o.offsetHeight), B = (M - V) / T;
        t.scrollTop = n + G * B;
      }, b = () => {
        i = false, document.body.style.userSelect = "";
      };
      window.addEventListener("resize", () => {
        d(), p();
      }), window.addEventListener("mousemove", w, {
        passive: false
      }), window.addEventListener("touchmove", w, {
        passive: false
      }), window.addEventListener("mouseup", b), window.addEventListener("touchend", b), new MutationObserver(() => {
        d();
      }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          "class"
        ]
      }), d();
    }
  }
  class ze {
    constructor() {
      this.takeAudio, this._attached = false, this.listener = new fe(), this.musicOn = true, this.musics = [];
    }
    hardStopAll() {
      this.musics.forEach(({ music: e }) => {
        try {
          e.stop();
        } catch (e2) {
        }
      }), this.quacks.forEach((e) => {
        try {
          e.stop();
        } catch (e2) {
        }
      }), this.thundersAudio.forEach((e) => {
        try {
          e.music.stop();
        } catch (e2) {
        }
      }), this.musicNowPlaying = [];
    }
    toggleMute(e) {
      e ? (this.musicOn = false, this.listener.context.suspend()) : (this.musicOn = true, this.listener.context.resume(), this.playMusic([
        "back"
      ]));
    }
    isMuted() {
      return this.listener.context.state === "suspended";
    }
    attachTo(e) {
      this._attached || (e.add(this.listener), this._attached = true);
    }
    async loadAudio() {
      const e = new we(), t = [
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        }
      ];
      (await Promise.all(t.map((o) => e.loadAsync(o.path).catch((i) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(o.path, ":"), i), null))))).forEach((o, i) => {
        const c = t[i];
        if (!o) return;
        const n = new be(this.listener);
        n.setBuffer(o), n.setLoop(c.loop), n.setRefDistance(c.ref), n.setVolume(c.vol), c.rate && n.setPlaybackRate(c.rate), this[c.key] = n, this.musics.push({
          name: c.name,
          music: n
        });
      });
    }
    stopMusic(e) {
      this.musicOn && (e == 0 ? this.musics.forEach((t, s, o) => {
        t.music.stop();
      }) : e.forEach((t, s, o) => {
        this.musics.find((i) => i.name === t).music.stop();
      }));
    }
    pauseMusic(e) {
      this.musicOn && e.forEach((t, s, o) => {
        this.musics.find((i) => i.name === t).music.pause();
      });
    }
    playMusic(e) {
      e.forEach((t, s, o) => {
        let i = this.musics.find((c) => c.name === t).music;
        !i.isPlaying && this.musicOn && i.play();
      });
    }
    togglePauseAll(e) {
      this.musicOn && (e ? (this.musicNowPlaying = [], this.musics.forEach(({ music: t }) => {
        t.isPlaying && (t.pause(), this.musicNowPlaying.push(t));
      })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((t) => {
        t.isPlaying || t.play();
      }), this.musicNowPlaying = []));
    }
  }
  class Ue {
    constructor(e) {
      this.renderer = e.renderer, this.camera = e.camera, this.events = e.events, this.mouse = new f(), this.raycaster = new ke(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
    }
    async addKeyListeners() {
      const e = this.renderer.domElement;
      window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), e.addEventListener("mousedown", this.onKeyDown), e.addEventListener("mouseup", this.onKeyUp), e.addEventListener("touchstart", this.onTapDown, {
        passive: false
      }), e.addEventListener("touchend", this.onTapUp);
    }
    removedKeyListeners() {
      const e = this.renderer.domElement;
      window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), e.removeEventListener("mousedown", this.onKeyDown), e.removeEventListener("mouseup", this.onKeyUp), e.removeEventListener("touchstart", this.onTapDown), e.removeEventListener("touchend", this.onTapUp);
    }
    onTapDown(e) {
      let t = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
    }
    onTapUp(e) {
      let t = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
    }
    onKeyDown(e) {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          this.events.emit("player_forward", 1);
          break;
        case "KeyS":
        case "ArrowDown":
          this.events.emit("player_backward", 1);
          break;
        case "KeyA":
        case "ArrowLeft":
          this.events.emit("player_left", 1);
          break;
        case "KeyD":
        case "ArrowRight":
          this.events.emit("player_right", 1);
          break;
      }
    }
    onKeyUp(e) {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          this.events.emit("player_forward", 0);
          break;
        case "KeyS":
        case "ArrowDown":
          this.events.emit("player_backward", 0);
          break;
        case "KeyA":
        case "ArrowLeft":
          this.events.emit("player_left", 0);
          break;
        case "KeyD":
        case "ArrowRight":
          this.events.emit("player_right", 0);
          break;
      }
    }
  }
  const D = {
    ru: {
      ui: {
        langToggle: "EN"
      },
      title: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0432\u0441\u0435\u0433\u043E",
      menuEyebrow: "\u0418\u0433\u0440\u0430 \u0432\u043A\u0443\u0441\u0430 \u0438 \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u0438",
      menuSubtitle: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0438\u0440\u0430\u0439, \u0447\u0442\u043E \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0442\u0435\u0431\u0435. \u041F\u043E\u0442\u043E\u043C \u043F\u0440\u043E\u0431\u0443\u0439 \u0443\u0433\u0430\u0434\u0430\u0442\u044C, \u0447\u0442\u043E \u043B\u044E\u0431\u044F\u0442 \u0434\u0440\u0443\u0433\u0438\u0435.",
      btnChoiceMode: "\u0427\u0442\u043E \u043B\u044E\u0431\u0438\u0448\u044C \u0442\u044B?",
      btnChoiceModeSub: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439 \u043F\u0430\u0440\u044B \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F",
      settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      settingsSub: "\u042F\u0437\u044B\u043A \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
      settingsEyebrow: "\u0421\u0435\u0440\u0432\u0438\u0441",
      settingsSubtitle: "\u041F\u043E\u043A\u0430 \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u044F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.",
      settingsStorageTitle: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
      settingsStorageText: "\u041C\u043E\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0435 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0438 \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u0441\u0442 \u0437\u0430\u043D\u043E\u0432\u043E.",
      resetProgress: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
      back: "\u041D\u0430\u0437\u0430\u0434",
      categoriesEyebrow: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
      categoriesTitle: "\u0412\u044B\u0431\u0435\u0440\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
      categoriesSubtitle: "\u041F\u0440\u043E\u0445\u043E\u0434\u0438 \u043F\u0430\u0440\u044B, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0439 \u0432\u043A\u0443\u0441 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0440\u0435\u0436\u0438\u043C\u0430 \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F.",
      roundLabel: "\u0420\u0430\u0443\u043D\u0434",
      roundOf: "\u0438\u0437",
      roundsShort: "\u0440\u0430\u0443\u043D\u0434\u043E\u0432",
      itemsLabel: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      choiceQuestion: "\u0427\u0442\u043E \u0442\u0435\u0431\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0435?",
      tapToChoose: "\u041D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C",
      guessModeLocked: "\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F:",
      guessModeUnlocked: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u0434\u043B\u044F \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F",
      sessionCompleteEyebrow: "\u0421\u0435\u0441\u0441\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
      sessionCompleteTitle: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430",
      sessionCompleteSaved: "\u0422\u0432\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F.",
      sessionCompleteUnlocked: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430. \u0412\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0432\u043A\u0443\u0441\u044B \u0434\u0440\u0443\u0433\u0438\u0445.",
      playAgain: "\u041F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437",
      backToCategories: "\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C",
      loader: {
        loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
      }
    },
    en: {
      ui: {
        langToggle: "RU"
      },
      title: "Rating of Everything",
      menuEyebrow: "A game of taste and intuition",
      menuSubtitle: "First choose what you like. Then try to guess what other people like.",
      btnChoiceMode: "What do you like?",
      btnChoiceModeSub: "Pick pairs and unlock categories for guessing",
      settings: "Settings",
      settingsSub: "Language and local progress",
      settingsEyebrow: "Service",
      settingsSubtitle: "For now this screen contains language and local saved data only.",
      settingsStorageTitle: "Local progress",
      settingsStorageText: "You can reset all saved ratings and start testing again.",
      resetProgress: "Reset progress",
      back: "Back",
      categoriesEyebrow: "First mode",
      categoriesTitle: "Choose a category",
      categoriesSubtitle: "Play through pairs, save your taste, and unlock categories for the guessing mode.",
      roundLabel: "Round",
      roundOf: "of",
      roundsShort: "rounds",
      itemsLabel: "items",
      choiceQuestion: "Which one do you like more?",
      tapToChoose: "Tap to choose",
      guessModeLocked: "Unlock guessing:",
      guessModeUnlocked: "Category unlocked for guessing",
      sessionCompleteEyebrow: "Session complete",
      sessionCompleteTitle: "Category completed",
      sessionCompleteSaved: "Your choices were saved. Keep collecting data for guessing mode.",
      sessionCompleteUnlocked: "Category unlocked. In the second mode you will be able to guess other players' tastes.",
      playAgain: "Play again",
      backToCategories: "Back to categories",
      loader: {
        loading: "Loading..."
      }
    }
  };
  function z(a, e) {
    return e.split(".").reduce((t, s) => t && t[s], a);
  }
  function W(a = "ru", e = document) {
    const t = D[a] || D.ru;
    if (e.querySelectorAll("[data-i18n]").forEach((o) => {
      const i = o.dataset.i18n, c = z(t, i);
      c != null && (o.textContent = c);
    }), e.querySelectorAll("[data-text]").forEach((o) => {
      const i = o.dataset.i18n, c = z(t, i);
      c != null && (o.dataset.text = c);
    }), document.documentElement.lang = a, localStorage.setItem("locale", a), document.getElementById("lang-toggle")) {
      const o = document.getElementById("flag");
      z(t, "ui.langToggle") === "ru" || a === "ru" ? (o.classList.remove("us"), o.classList.add("ru"), o.src = "images/ru.svg", o.alt = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u0444\u043B\u0430\u0433") : (o.classList.remove("ru"), o.classList.add("us"), o.src = "images/us.svg", o.alt = "US flag");
    }
  }
  function Fe(a) {
    W(a);
    const e = document.getElementById("lang-toggle");
    e && e.addEventListener("click", () => {
      const s = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      W(s), window.dispatchEvent(new CustomEvent("locale-changed", {
        detail: {
          locale: s
        }
      }));
    });
  }
  function g(a, e = "") {
    var _a;
    const t = localStorage.getItem("locale") || "ru", s = D[t] || D.ru;
    return (_a = a.split(".").reduce((i, c) => i && i[c], s)) != null ? _a : e;
  }
  class Xe {
    constructor(e) {
      this.events = e.events, this.yandexPlayer = {
        id: 0,
        player: null,
        isAuthorized: false
      };
    }
    async clearData() {
      localStorage.clear();
    }
    async initYandexPlayer({ force: e = false } = {}) {
      try {
        (!this.yandexPlayer.player || e) && typeof ysdk < "u" && (this.yandexPlayer.player = await ysdk.getPlayer()), this.yandexPlayer.player && (this.yandexPlayer.isAuthorized = await this.yandexPlayer.player.isAuthorized());
      } catch (e2) {
        this.yandexPlayer.isAuthorized = false;
      }
      this.events.emit("player_auth_checked", this.yandexPlayer.isAuthorized), this.yandexPlayer.isAuthorized && console.log("DataClass: \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C");
    }
    async loadTableFromCloud() {
      await this.initYandexPlayer();
      try {
        const e = await this.yandexPlayer.player.getData([
          "table"
        ]);
        e && e.table && typeof e.table == "object" ? this.table = e.table : (console.log("\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0445\u043E\u0434: \u0441\u043E\u0437\u0434\u0430\u0451\u043C \u043D\u043E\u0432\u0443\u044E table"), this.table = this.createDefaultTable(), await this.saveTableToCloud());
      } catch (e) {
        console.warn("Cloud load failed:", e), this.table = this.createDefaultTable();
      }
    }
    createDefaultTable() {
      return {
        updateDate: Date.now(),
        player: {
          levels: [
            0,
            0,
            0
          ],
          bonusHat: [
            false,
            false,
            false
          ]
        }
      };
    }
    async saveTableToCloud({ flush: e = false } = {}) {
      await this.initYandexPlayer();
      try {
        await this.yandexPlayer.player.setData({}, e);
      } catch (t) {
        console.warn("Cloud save failed:", t);
      }
    }
  }
  class Ve {
    constructor() {
      this.planeGrass = {
        texture: null,
        material: null
      }, this.model = null;
    }
    async loadTextures() {
      const e = new ve(), [t] = await Promise.all([
        e.loadAsync("textures/grass.jpg")
      ]);
      this.planeGrass.texture = t, this.planeGrass.material = new I({
        map: t
      });
    }
    async loadModels() {
      await new Se().loadAsync("models/model.glb").then((s) => {
        const o = s.scene, i = s.animations;
        o.scale.x = 2, o.scale.y = 2, o.scale.z = 2, o.position.y = 0, o.rotation.y = -Math.PI / 3, this.model = o, this.model.userData.mixer = new Ce(this.model), this.model.userData.action = this.model.userData.mixer.clipAction(i[0]), this.model.userData.action.play(), this.model.userData.clock = new se();
      });
    }
  }
  class $e {
    constructor(e) {
      this.events = e.events, this.gameContext = e, this.screens = document.querySelectorAll(".screen"), this.currentScreen = null, document.querySelector("body").addEventListener("click", (t) => {
        var _a, _b, _c, _d, _e2, _f;
        const s = t.target.closest("[data-action]");
        if (!s) return;
        const o = s.dataset.action, i = s.dataset.categoryId;
        switch (o) {
          case "open_categories":
          case "open_main_mode":
            (_a = e.appController) == null ? void 0 : _a.showCategories();
            break;
          case "open_settings":
            e.ui.show("settings_screen");
            break;
          case "back_main":
            (_b = e.appController) == null ? void 0 : _b.showMainMenu();
            break;
          case "back_to_categories":
            (_c = e.appController) == null ? void 0 : _c.showCategories();
            break;
          case "start_category_session":
            i && ((_d = e.appController) == null ? void 0 : _d.startCategorySession(i));
            break;
          case "choose_item":
            s.dataset.itemId && ((_e2 = e.appController) == null ? void 0 : _e2.chooseItem(s.dataset.itemId));
            break;
          case "replay_last_category":
            ((_f = e.appController) == null ? void 0 : _f.lastCompletedCategoryId) && e.appController.startCategorySession(e.appController.lastCompletedCategoryId);
            break;
        }
      }), this.initListeners();
    }
    initListeners() {
      this.events.on("player_auth_checked", (e) => {
        this.updateAuthUI(e);
      });
    }
    updateAuthUI(e) {
      const t = document.querySelector(".autoriz");
      t && (t.classList.toggle("hidden_screen", e === true), e === true ? (t.setAttribute("aria-hidden", "true"), t.style.display = "none") : (t.setAttribute("aria-hidden", "false"), t.style.display = ""));
    }
    show(e) {
      const t = document.getElementById(e);
      if (!t) {
        console.warn("Screen ".concat(e, " not found"));
        return;
      }
      this.screens.forEach((s) => s.classList.remove("active")), t.classList.add("active"), this.currentScreen = e;
    }
    hideAll() {
      this.screens.forEach((e) => e.classList.remove("active")), this.currentScreen = null;
    }
  }
  class Ke {
    constructor(e) {
      this.scene = e.scene, this.ground = null, this.options = {
        size: {
          w: 10,
          h: 10,
          d: 0.2
        },
        name: "ground"
      }, this.characters = [], this.dot = null, this.dotBasePosition = new f(-4.2, 0.8, 0.3), this.dotTime = 0, this.eyeTrackingEnabled = true, this._dotWorldPosition = new f();
    }
    loadMesh() {
      let e = new Ee(this.options.size.w, this.options.size.h, this.options.size.d), t = new $({
        color: 10392058,
        side: A
      });
      this.ground = new v(e, t), this.ground.userData = {
        ...this.options
      }, this.ground.rotateX(Math.PI / 2), this.ground.position.y = -2.2, this.ground.receiveShadow = true, this.scene.add(this.ground);
      let s = new X(0.2), o = new $({
        color: 10392058,
        side: A
      });
      this.dot = new v(s, o), this.dot.userData = {
        ...this.options
      }, this.dot.position.copy(this.dotBasePosition), this.scene.add(this.dot);
    }
    update(e, t = false) {
      if (!this.dot || !this.eyeTrackingEnabled) return;
      this.dotTime += e;
      const s = this.dotBasePosition.x + Math.sin(this.dotTime * 0.9) * 7.1, o = this.dotBasePosition.y + Math.sin(this.dotTime * 1.6) * 0.7 + Math.cos(this.dotTime * 0.55) * 10.45, i = this.dotBasePosition.z + Math.cos(this.dotTime * 1.15) * 0.75 + 1;
      this.dot.position.set(s, o, i);
    }
    getSpectatorFocusTarget() {
      return !this.dot || !this.eyeTrackingEnabled ? null : this.dot.getWorldPosition(this._dotWorldPosition);
    }
  }
  class He {
    constructor(e) {
      this.scene = e.scene, this.dirLight = null, this.ambientLight = null;
    }
    loadLight(e = true, t = true) {
      this.ambientLight = new _e(16777215, 1), this.dirLight = new Ie(16777215, 1), this.dirLight.position.set(-3, 5, 1), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 100, e && this.scene.add(this.ambientLight), t && this.scene.add(this.dirLight);
    }
  }
  const je = (a) => JSON.parse(JSON.stringify(a)), u = {
    bodyRotate: 0,
    color: "#8EE4AF",
    eyesBack: {
      x: [
        -0.4,
        0.4
      ],
      y: [
        1.2,
        1.2
      ],
      scaleX: [
        1,
        1
      ],
      scaleY: [
        1,
        1
      ]
    },
    eyes: {
      x: [
        -0.4,
        0.4
      ],
      y: [
        1.2,
        1.2
      ],
      scaleX: [
        1,
        1
      ],
      scaleY: [
        1,
        1
      ]
    },
    brows: {
      x: [
        -0.4,
        0.4
      ],
      y: [
        1.6,
        1.6
      ],
      scaleX: [
        1,
        1
      ],
      scaleY: [
        1,
        1
      ],
      rotation: [
        0,
        0
      ]
    },
    cheeks: {
      x: [
        -0.5,
        0.5
      ],
      y: [
        0.8,
        0.8
      ],
      scaleX: [
        1,
        1
      ],
      scaleY: [
        2,
        2
      ],
      opacity: [
        0.4,
        0.4
      ]
    },
    mouth: {
      x: 0,
      y: 0.58,
      scaleX: 1,
      scaleY: 1,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      mode: "curve",
      width: 0.16,
      height: 0.03,
      thickness: 0.02,
      curve: 0
    }
  }, U = {
    center: {},
    left: {
      eyes: {
        x: [
          -0.12,
          -0.12
        ]
      }
    },
    right: {
      eyes: {
        x: [
          0.12,
          0.12
        ]
      }
    },
    top: {
      eyes: {
        y: [
          0.12,
          0.12
        ]
      }
    },
    bottom: {
      eyes: {
        y: [
          -0.12,
          -0.12
        ]
      }
    }
  }, h = {
    neutral: {
      mode: "curve",
      y: -0.02,
      width: 0.08,
      thickness: 0.012,
      curve: 0,
      height: 0.012
    },
    smileSoft: {
      mode: "curve",
      y: -0.06,
      width: 0.2,
      thickness: 0.022,
      curve: -0.04,
      height: 0.06
    },
    smileWide: {
      mode: "curve",
      y: -0.06,
      width: 0.25,
      thickness: 0.026,
      curve: -0.06,
      height: 0.08
    },
    grin: {
      mode: "curve",
      y: -0.05,
      width: 0.3,
      thickness: 0.03,
      curve: -0.08,
      height: 0.1
    },
    openSmall: {
      mode: "oval",
      y: -0.08,
      width: 0.07,
      height: 0.1
    },
    openMedium: {
      mode: "oval",
      y: -0.1,
      width: 0.09,
      height: 0.14
    },
    openBig: {
      mode: "oval",
      y: -0.12,
      width: 0.12,
      height: 0.19
    },
    frownSoft: {
      mode: "curve",
      y: -0.1,
      width: 0.18,
      thickness: 0.02,
      curve: 0.035,
      height: 0.05
    },
    frownDeep: {
      mode: "curve",
      y: -0.12,
      width: 0.23,
      thickness: 0.024,
      curve: 0.05,
      height: 0.07
    },
    tense: {
      mode: "curve",
      y: -0.08,
      width: 0.12,
      thickness: 0.012,
      curve: 4e-3,
      height: 0.015
    },
    puzzled: {
      mode: "curve",
      y: -0.07,
      width: 0.08,
      thickness: 0.014,
      curve: 0.012,
      height: 0.02
    }
  }, L = {
    angry: {
      eyes: {
        x: [
          0.052,
          -0.052
        ],
        y: [
          -0.012,
          -0.012
        ]
      },
      mouth: {
        ...h.tense
      },
      brows: {
        x: [
          0.2,
          -0.2
        ],
        y: [
          -0.05,
          -0.05
        ],
        scaleY: [
          -0.5,
          -0.5
        ],
        rotation: [
          -0.5,
          0.5
        ]
      }
    },
    kind: {
      eyes: {
        x: [
          -0.072,
          -0.072
        ],
        y: [
          -0.052,
          -0.052
        ]
      },
      mouth: {
        ...h.smileSoft
      },
      brows: {
        x: [
          -0.2,
          0.2
        ],
        y: [
          -0.05,
          -0.05
        ],
        scaleY: [
          -0.5,
          -0.5
        ],
        rotation: [
          0.5,
          -0.5
        ]
      }
    },
    silly: {
      eyes: {
        x: [
          -0.07,
          0.06
        ],
        y: [
          -0.082,
          0.032
        ]
      },
      mouth: {
        ...h.smileSoft
      },
      brows: {
        y: [
          0.03,
          0.17
        ],
        scaleY: [
          -0.5,
          -0.5
        ],
        rotation: [
          0.1,
          -0.5
        ]
      }
    },
    coward: {
      eyes: {
        x: [
          0.077,
          0.07
        ],
        y: [
          -0.052,
          -0.052
        ]
      },
      mouth: {
        ...h.neutral
      },
      brows: {
        x: [
          0,
          0
        ],
        y: [
          0.08,
          0.05
        ],
        scaleY: [
          -0.5,
          -0.5
        ],
        rotation: [
          0.5,
          -0.5
        ]
      }
    }
  }, R = {
    angry: {
      idle: {},
      watching: {
        eyes: {
          scaleY: [
            -0.08,
            -0.08
          ]
        },
        brows: {
          y: [
            0.04,
            0.04
          ]
        }
      },
      anticipation: {
        bodyRotate: 0.06,
        eyes: {
          scaleX: [
            0.12,
            0.12
          ],
          scaleY: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.08,
            0.08
          ]
        },
        mouth: {
          ...h.tense,
          y: -0.06
        }
      },
      approve: {
        bodyRotate: 0.16,
        eyes: {
          scaleY: [
            -0.12,
            -0.12
          ]
        },
        brows: {
          y: [
            0.12,
            0.12
          ],
          rotation: [
            -0.2,
            0.2
          ]
        },
        mouth: {
          ...h.smileSoft
        }
      },
      disapprove: {
        bodyRotate: -0.18,
        eyes: {
          scaleY: [
            0.14,
            0.14
          ]
        },
        brows: {
          y: [
            0.12,
            0.12
          ],
          rotation: [
            -0.5,
            0.5
          ]
        },
        mouth: {
          ...h.frownSoft
        }
      },
      surprised: {
        eyesBack: {
          scaleX: [
            0.25,
            0.25
          ],
          scaleY: [
            0.2,
            0.2
          ]
        },
        eyes: {
          scaleX: [
            0.22,
            0.22
          ],
          scaleY: [
            0.22,
            0.22
          ],
          y: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.24,
            0.24
          ]
        },
        mouth: {
          ...h.openMedium
        }
      },
      confused: {
        bodyRotate: -0.1,
        eyes: {
          y: [
            -0.04,
            0.04
          ]
        },
        brows: {
          rotation: [
            -0.35,
            -0.05
          ],
          y: [
            0.05,
            0.13
          ]
        },
        mouth: {
          ...h.puzzled
        }
      },
      tense: {
        bodyRotate: -0.08,
        eyes: {
          scaleY: [
            -0.16,
            -0.16
          ]
        },
        brows: {
          y: [
            -0.04,
            -0.04
          ]
        },
        mouth: {
          ...h.tense
        }
      },
      celebrate: {
        bodyRotate: 0.18,
        eyes: {
          scaleY: [
            -0.9,
            -0.9
          ]
        },
        cheeks: {
          opacity: [
            0.15,
            0.15
          ]
        },
        brows: {
          y: [
            0.15,
            0.15
          ],
          rotation: [
            -0.1,
            0.1
          ]
        },
        mouth: {
          ...h.grin
        }
      },
      sad: {
        bodyRotate: -0.1,
        eyes: {
          y: [
            -0.12,
            -0.12
          ],
          scaleY: [
            -0.12,
            -0.12
          ]
        },
        brows: {
          y: [
            -0.02,
            -0.02
          ],
          rotation: [
            0.12,
            -0.12
          ]
        },
        mouth: {
          ...h.frownDeep
        }
      }
    },
    kind: {
      idle: {},
      watching: {
        eyes: {
          scaleY: [
            -0.08,
            -0.08
          ]
        },
        mouth: {
          ...h.neutral
        }
      },
      anticipation: {
        bodyRotate: 0.04,
        eyesBack: {
          scaleX: [
            0.08,
            0.08
          ],
          scaleY: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.08,
            0.08
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.02
        }
      },
      approve: {
        bodyRotate: 0.12,
        eyes: {
          scaleY: [
            -0.2,
            -0.2
          ]
        },
        brows: {
          y: [
            0.1,
            0.1
          ],
          rotation: [
            0.15,
            -0.15
          ]
        },
        cheeks: {
          opacity: [
            0.25,
            0.25
          ]
        },
        mouth: {
          ...h.smileWide
        }
      },
      disapprove: {
        bodyRotate: -0.06,
        eyes: {
          y: [
            -0.05,
            -0.05
          ]
        },
        brows: {
          rotation: [
            -0.1,
            0.1
          ],
          y: [
            0.02,
            0.02
          ]
        },
        mouth: {
          ...h.frownSoft
        }
      },
      surprised: {
        eyesBack: {
          scaleX: [
            0.18,
            0.18
          ],
          scaleY: [
            0.18,
            0.18
          ]
        },
        eyes: {
          scaleX: [
            0.16,
            0.16
          ],
          scaleY: [
            0.16,
            0.16
          ],
          y: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.22,
            0.22
          ]
        },
        mouth: {
          ...h.openSmall
        }
      },
      confused: {
        bodyRotate: 0.06,
        eyes: {
          y: [
            0.03,
            -0.02
          ]
        },
        brows: {
          rotation: [
            0.2,
            -0.05
          ],
          y: [
            0.12,
            0.02
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.04
        }
      },
      tense: {
        bodyRotate: -0.08,
        eyes: {
          scaleY: [
            -0.12,
            -0.12
          ],
          y: [
            0.03,
            0.03
          ]
        },
        brows: {
          y: [
            -0.04,
            -0.04
          ]
        },
        mouth: {
          ...h.tense
        }
      },
      celebrate: {
        bodyRotate: 0.2,
        eyes: {
          scaleY: [
            -0.9,
            -0.9
          ]
        },
        brows: {
          y: [
            0.18,
            0.18
          ],
          rotation: [
            0.05,
            -0.05
          ]
        },
        cheeks: {
          opacity: [
            0.35,
            0.35
          ]
        },
        mouth: {
          ...h.grin,
          y: -0.06
        }
      },
      sad: {
        bodyRotate: -0.04,
        eyes: {
          y: [
            -0.1,
            -0.1
          ],
          scaleY: [
            -0.1,
            -0.1
          ]
        },
        brows: {
          y: [
            -0.08,
            -0.08
          ],
          rotation: [
            0.18,
            -0.18
          ]
        },
        mouth: {
          ...h.frownDeep,
          y: -0.18
        }
      }
    },
    silly: {
      idle: {},
      watching: {
        eyes: {
          y: [
            0.03,
            -0.03
          ]
        },
        mouth: {
          ...h.neutral
        }
      },
      anticipation: {
        bodyRotate: 0.1,
        eyes: {
          x: [
            0.04,
            -0.05
          ],
          scaleY: [
            0.06,
            0.06
          ]
        },
        brows: {
          y: [
            0.08,
            0.04
          ],
          rotation: [
            0.2,
            -0.2
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.02
        }
      },
      approve: {
        bodyRotate: 0.08,
        eyes: {
          scaleY: [
            -0.35,
            -0.35
          ]
        },
        brows: {
          y: [
            0.08,
            0.08
          ]
        },
        mouth: {
          ...h.smileSoft,
          y: -0.04
        }
      },
      disapprove: {
        bodyRotate: -0.14,
        eyes: {
          y: [
            -0.08,
            0.04
          ]
        },
        brows: {
          rotation: [
            -0.25,
            0.3
          ],
          y: [
            0.02,
            0.08
          ]
        },
        mouth: {
          ...h.frownSoft,
          y: -0.14
        }
      },
      surprised: {
        eyesBack: {
          scaleX: [
            0.22,
            0.22
          ],
          scaleY: [
            0.22,
            0.22
          ]
        },
        eyes: {
          scaleX: [
            0.2,
            0.2
          ],
          scaleY: [
            0.22,
            0.22
          ],
          y: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.24,
            0.18
          ]
        },
        mouth: {
          ...h.openBig,
          y: -0.08
        }
      },
      confused: {
        bodyRotate: 0.12,
        eyes: {
          x: [
            -0.06,
            0.08
          ],
          y: [
            -0.02,
            0.05
          ]
        },
        brows: {
          rotation: [
            0.18,
            -0.38
          ],
          y: [
            0.06,
            0.14
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.06
        }
      },
      tense: {
        bodyRotate: -0.05,
        eyes: {
          scaleY: [
            -0.18,
            -0.18
          ]
        },
        brows: {
          y: [
            -0.06,
            0.02
          ]
        },
        mouth: {
          ...h.tense,
          y: -0.14
        }
      },
      celebrate: {
        bodyRotate: 0.22,
        eyes: {
          scaleY: [
            -0.95,
            -0.95
          ]
        },
        cheeks: {
          opacity: [
            0.32,
            0.32
          ]
        },
        brows: {
          y: [
            0.1,
            0.18
          ],
          rotation: [
            0.15,
            -0.28
          ]
        },
        mouth: {
          ...h.grin,
          y: -0.02
        }
      },
      sad: {
        bodyRotate: -0.16,
        eyes: {
          y: [
            -0.1,
            -0.02
          ]
        },
        brows: {
          rotation: [
            0.22,
            -0.22
          ],
          y: [
            -0.06,
            -0.02
          ]
        },
        mouth: {
          ...h.frownSoft,
          y: -0.18
        }
      }
    },
    coward: {
      idle: {},
      watching: {
        eyes: {
          scaleX: [
            0.06,
            0.06
          ],
          scaleY: [
            0.05,
            0.05
          ]
        },
        brows: {
          y: [
            0.05,
            0.05
          ]
        }
      },
      anticipation: {
        bodyRotate: -0.08,
        eyesBack: {
          scaleX: [
            0.08,
            0.08
          ],
          scaleY: [
            0.08,
            0.08
          ]
        },
        eyes: {
          y: [
            0.05,
            0.05
          ],
          scaleX: [
            0.08,
            0.08
          ],
          scaleY: [
            0.08,
            0.08
          ]
        },
        brows: {
          y: [
            0.12,
            0.12
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.03
        }
      },
      approve: {
        bodyRotate: 0.04,
        eyes: {
          scaleY: [
            -0.08,
            -0.08
          ]
        },
        brows: {
          y: [
            0.02,
            0.02
          ],
          rotation: [
            0.08,
            -0.08
          ]
        },
        mouth: {
          ...h.smileSoft,
          y: -0.06
        }
      },
      disapprove: {
        bodyRotate: -0.12,
        eyes: {
          y: [
            -0.1,
            -0.1
          ]
        },
        brows: {
          y: [
            0.16,
            0.16
          ],
          rotation: [
            -0.1,
            0.1
          ]
        },
        mouth: {
          ...h.frownDeep,
          y: -0.18
        }
      },
      surprised: {
        bodyRotate: -0.12,
        eyesBack: {
          scaleX: [
            0.28,
            0.28
          ],
          scaleY: [
            0.28,
            0.28
          ]
        },
        eyes: {
          scaleX: [
            0.24,
            0.24
          ],
          scaleY: [
            0.24,
            0.24
          ],
          y: [
            0.12,
            0.12
          ]
        },
        brows: {
          y: [
            0.28,
            0.24
          ]
        },
        mouth: {
          ...h.openBig
        }
      },
      confused: {
        bodyRotate: -0.08,
        eyes: {
          y: [
            0.04,
            -0.05
          ]
        },
        brows: {
          rotation: [
            0.3,
            -0.18
          ],
          y: [
            0.18,
            0.08
          ]
        },
        mouth: {
          ...h.puzzled,
          y: -0.1
        }
      },
      tense: {
        bodyRotate: -0.18,
        eyesBack: {
          scaleX: [
            0.16,
            0.16
          ],
          scaleY: [
            0.16,
            0.16
          ]
        },
        eyes: {
          scaleX: [
            0.16,
            0.16
          ],
          scaleY: [
            0.12,
            0.12
          ],
          y: [
            0.06,
            0.06
          ]
        },
        brows: {
          y: [
            0.2,
            0.2
          ]
        },
        mouth: {
          ...h.tense,
          y: -0.16
        }
      },
      celebrate: {
        bodyRotate: 0.06,
        eyes: {
          scaleY: [
            -0.24,
            -0.24
          ]
        },
        cheeks: {
          opacity: [
            0.22,
            0.22
          ]
        },
        brows: {
          y: [
            0.12,
            0.12
          ]
        },
        mouth: {
          ...h.smileSoft,
          y: -0.06
        }
      },
      sad: {
        bodyRotate: -0.18,
        eyes: {
          y: [
            -0.14,
            -0.14
          ],
          scaleY: [
            -0.18,
            -0.18
          ]
        },
        brows: {
          y: [
            0.06,
            0.06
          ],
          rotation: [
            0.24,
            -0.24
          ]
        },
        mouth: {
          ...h.frownDeep,
          y: -0.2
        }
      }
    }
  }, We = [
    {
      id: 1,
      role: "coward",
      label: "Coward",
      color: "#FEAEAA",
      scaleY: 0.4,
      positionX: -3,
      expressiveness: 1.05,
      reactionSpeed: 1.05,
      blinkRange: [
        2600,
        5200
      ],
      idleMotionRange: [
        1.5,
        2.2
      ],
      idleInterval: [
        7e3,
        12e3
      ],
      ambientInterval: [
        1800,
        3200
      ]
    },
    {
      id: 2,
      role: "silly",
      label: "Silly",
      color: "#C0AFED",
      scaleY: 0.6,
      positionX: -1,
      expressiveness: 1.1,
      reactionSpeed: 0.95,
      blinkRange: [
        2400,
        4200
      ],
      idleMotionRange: [
        1.8,
        2.4
      ],
      idleInterval: [
        6e3,
        1e4
      ],
      ambientInterval: [
        1500,
        2800
      ]
    },
    {
      id: 3,
      role: "kind",
      label: "Kind",
      color: "#A4E5BD",
      scaleY: 0.8,
      positionX: 1,
      expressiveness: 0.95,
      reactionSpeed: 1,
      blinkRange: [
        3200,
        5200
      ],
      idleMotionRange: [
        1.9,
        2.5
      ],
      idleInterval: [
        8e3,
        13e3
      ],
      ambientInterval: [
        2e3,
        3600
      ]
    },
    {
      id: 4,
      role: "angry",
      label: "Angry",
      color: "#FCE26E",
      scaleY: 1.1,
      positionX: 3,
      expressiveness: 1.15,
      reactionSpeed: 0.9,
      blinkRange: [
        2200,
        4200
      ],
      idleMotionRange: [
        1.7,
        2.3
      ],
      idleInterval: [
        6500,
        11e3
      ],
      ambientInterval: [
        1600,
        3e3
      ]
    }
  ], qe = {
    angry: {
      role: "angry",
      basePose: L.angry,
      states: R.angry,
      idleStates: [
        "idle"
      ],
      watchingStates: [
        "watching",
        "anticipation",
        "tense"
      ],
      reactions: {
        pair_presented: {
          state: "watching",
          duration: 0.9
        },
        player_choice: {
          state: "disapprove",
          duration: 1.4
        },
        guess_correct: {
          state: "surprised",
          duration: 1.6
        },
        guess_wrong: {
          state: "approve",
          duration: 1.7
        },
        streak_up: {
          state: "tense",
          duration: 1.5
        },
        category_complete: {
          state: "celebrate",
          duration: 1.8
        },
        neutral: {
          state: "idle",
          duration: 0.8
        }
      }
    },
    kind: {
      role: "kind",
      basePose: L.kind,
      states: R.kind,
      idleStates: [
        "idle"
      ],
      watchingStates: [
        "watching",
        "anticipation",
        "approve"
      ],
      reactions: {
        pair_presented: {
          state: "watching",
          duration: 0.8
        },
        player_choice: {
          state: "approve",
          duration: 1.4
        },
        guess_correct: {
          state: "celebrate",
          duration: 1.7
        },
        guess_wrong: {
          state: "sad",
          duration: 1.6
        },
        streak_up: {
          state: "approve",
          duration: 1.5
        },
        category_complete: {
          state: "celebrate",
          duration: 1.8
        },
        neutral: {
          state: "idle",
          duration: 0.8
        }
      }
    },
    silly: {
      role: "silly",
      basePose: L.silly,
      states: R.silly,
      idleStates: [
        "idle"
      ],
      watchingStates: [
        "watching",
        "anticipation",
        "confused",
        "surprised"
      ],
      reactions: {
        pair_presented: {
          state: "watching",
          duration: 0.8
        },
        player_choice: {
          state: "surprised",
          duration: 1.3
        },
        guess_correct: {
          state: "celebrate",
          duration: 1.9
        },
        guess_wrong: {
          state: "confused",
          duration: 1.6
        },
        streak_up: {
          state: "celebrate",
          duration: 1.8
        },
        category_complete: {
          state: "celebrate",
          duration: 1.8
        },
        neutral: {
          state: "idle",
          duration: 0.8
        }
      }
    },
    coward: {
      role: "coward",
      basePose: L.coward,
      states: R.coward,
      idleStates: [
        "idle"
      ],
      watchingStates: [
        "watching",
        "anticipation",
        "tense",
        "confused"
      ],
      reactions: {
        pair_presented: {
          state: "tense",
          duration: 0.9
        },
        player_choice: {
          state: "tense",
          duration: 1.4
        },
        guess_correct: {
          state: "approve",
          duration: 1.5
        },
        guess_wrong: {
          state: "sad",
          duration: 1.8
        },
        streak_up: {
          state: "surprised",
          duration: 1.6
        },
        category_complete: {
          state: "approve",
          duration: 1.6
        },
        neutral: {
          state: "idle",
          duration: 0.8
        }
      }
    }
  }, F = [
    "mode",
    "width",
    "height",
    "thickness",
    "curve"
  ];
  function Ne(...a) {
    const e = je(u);
    return a.forEach((t) => {
      t && (t.bodyRotate !== void 0 && (e.bodyRotate += t.bodyRotate), t.color !== void 0 && (e.color = t.color), [
        "eyes",
        "eyesBack",
        "brows",
        "cheeks"
      ].forEach((s) => {
        t[s] && Object.keys(t[s]).forEach((o) => {
          const i = t[s][o];
          Array.isArray(i) && Array.isArray(e[s][o]) && (e[s][o][0] += i[0], e[s][o][1] += i[1]);
        });
      }), t.mouth && ([
        "x",
        "y",
        "scaleX",
        "scaleY",
        "rotationX",
        "rotationY",
        "rotationZ"
      ].forEach((s) => {
        t.mouth[s] !== void 0 && (e.mouth[s] += t.mouth[s]);
      }), F.forEach((s) => {
        t.mouth[s] !== void 0 && (e.mouth[s] = t.mouth[s]);
      })));
    }), e;
  }
  const q = (a) => JSON.parse(JSON.stringify(a));
  function Ze(a, e) {
    const t = new oe();
    return t.absellipse(0, 0, a / 2, e / 2, 0, Math.PI * 2, false, 0), t;
  }
  function Je(a, e, t) {
    const s = Math.max(a / 2, 1e-3), o = Math.max(t / 2, 1e-3), i = 24, c = [], n = [];
    for (let d = 0; d <= i; d++) {
      const p = d / i, y = S.lerp(-s, s, p), w = (1 - Math.pow(2 * p - 1, 2)) * e;
      c.push(new Y(y, w + o)), n.push(new Y(y, w - o));
    }
    const l = new oe();
    return l.moveTo(c[0].x, c[0].y), c.slice(1).forEach((d) => l.lineTo(d.x, d.y)), n.reverse().forEach((d) => l.lineTo(d.x, d.y)), l.closePath(), l;
  }
  class Qe {
    constructor(e) {
      this.scene = e.scene, this.characterGroup = new xe(), this.eyes = [], this.eyesBack = [], this.brows = [], this.cheeks = [], this.mouth = null, this.body = null, this.currentMouthParams = {}, this.faceZ = 0.62, this.heightBody = 4.2, this.savedScaleY = 1, this.role = "kind", this.lookTarget = null, this.lookOffset = new Y(), this.desiredLookOffset = new Y(), this._tmpLocalTarget = new f(), this.blinkFactor = 1, this.defaults = q(u), this.params = q(u), this.bodyMat = new I({
        color: 9364655,
        roughness: 0.9
      }), this.blackMat = new I({
        color: 7556154,
        side: A
      }), this.eyeMat = new I({
        color: 7556154,
        side: A,
        transparent: true,
        opacity: 1
      }), this.blinkTween = null, this.idleMotionTween = null;
    }
    async loadCharacter(e) {
      var _a, _b, _c;
      this.role = e.role, this.savedScaleY = (_a = e.scaleY) != null ? _a : 1, this.scene.add(this.characterGroup), this.characterGroup.position.x = (_b = e.positionX) != null ? _b : 0, this.body = new v(new Me(1.6, this.heightBody * this.savedScaleY, 1.2, 8, 0.3), this.bodyMat), this.body.position.y = this.heightBody * this.savedScaleY / 2 - 2.2, this.body.material.color.set((_c = e.color) != null ? _c : this.defaults.color), this.body.castShadow = true, this.body.receiveShadow = true, this.characterGroup.add(this.body);
      const t = new K({
        color: 16751001,
        transparent: true,
        opacity: 0.7
      }), s = new H(0.07, 0.07, 0.05, 32);
      s.rotateX(Math.PI / 2);
      for (let n = 0; n < 2; n++) {
        const l = new v(s, this.eyeMat);
        this.characterGroup.add(l), this.eyes.push(l);
      }
      const o = new H(0.3, 0.12, 0.05, 32);
      o.rotateX(Math.PI / 2);
      for (let n = 0; n < 2; n++) {
        const l = new v(o, new K({
          color: 16777215,
          transparent: true,
          opacity: 0.4
        }));
        this.characterGroup.add(l), this.eyesBack.push(l);
      }
      const i = new Te(0.08, 0.025, 16, 30, Math.PI / 1.1);
      for (let n = 0; n < 2; n++) {
        const l = new v(i, this.blackMat);
        this.characterGroup.add(l), this.brows.push(l);
      }
      this.updateMouthGeometry(this.defaults.mouth);
      const c = new X(0.18, 32, 16);
      c.scale(1, 0.6, 0.2);
      for (let n = 0; n < 2; n++) {
        const l = new v(c, t);
        this.characterGroup.add(l), this.cheeks.push(l);
      }
      this.updateCharacterVisuals(), this.startIdleMotion(e.idleMotionRange);
    }
    setLookTarget(e) {
      this.lookTarget = e ? e.clone() : null;
    }
    clearLookTarget() {
      this.lookTarget = null;
    }
    update(e = 1 / 60) {
      if (this.lookTarget) {
        this._tmpLocalTarget.copy(this.lookTarget), this.characterGroup.worldToLocal(this._tmpLocalTarget);
        const s = S.clamp(this._tmpLocalTarget.x * 0.07, -0.12, 0.12), o = S.clamp((this._tmpLocalTarget.y - 1.2) * 0.08, -0.12, 0.12);
        this.desiredLookOffset.set(s, o);
      } else this.desiredLookOffset.set(0, 0);
      const t = Math.min(1, e * 6);
      this.lookOffset.lerp(this.desiredLookOffset, t), this.updateCharacterVisuals();
    }
    startIdleMotion(e = [
      1.7,
      2.3
    ]) {
      var _a;
      (_a = this.idleMotionTween) == null ? void 0 : _a.kill(), this.characterGroup.scale.set(1, 1, 1), this.idleMotionTween = _.to(this.characterGroup.scale, {
        duration: E(e[0], e[1]),
        y: "+=0.03",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    applyState(e, t = {}) {
      var _a, _b, _c;
      const s = (_a = t.duration) != null ? _a : 1.1, o = (_b = t.ease) != null ? _b : "back.out(1.7)";
      _.to(this.params, {
        bodyRotate: e.bodyRotate,
        duration: s,
        ease: o,
        onUpdate: () => this.updateCharacterVisuals()
      });
      const i = (_c = e.color) != null ? _c : "#".concat(this.body.material.color.getHexString()), c = new te(i);
      _.to(this.body.material.color, {
        r: c.r,
        g: c.g,
        b: c.b,
        duration: s,
        ease: "sine.out"
      }), [
        "eyes",
        "eyesBack",
        "brows",
        "cheeks"
      ].forEach((l) => {
        Object.keys(e[l]).forEach((d) => {
          _.to(this.params[l][d], {
            0: e[l][d][0],
            1: e[l][d][1],
            duration: s,
            ease: o,
            onUpdate: () => this.updateCharacterVisuals()
          });
        });
      });
      const n = {};
      [
        "x",
        "y",
        "scaleX",
        "scaleY",
        "rotationX",
        "rotationY",
        "rotationZ",
        ...F.filter((l) => l !== "mode")
      ].forEach((l) => {
        n[l] = e.mouth[l];
      }), e.mouth.mode !== this.params.mouth.mode && (this.params.mouth.mode = e.mouth.mode), _.to(this.params.mouth, {
        ...n,
        duration: s,
        ease: o,
        onUpdate: () => {
          this.updateMouthGeometry(this.params.mouth), this.updateCharacterVisuals();
        }
      });
    }
    updateMouthGeometry(e) {
      var _a;
      let t = false;
      for (const i of F) if (this.currentMouthParams[i] !== e[i]) {
        t = true;
        break;
      }
      if (!t && this.mouth) return;
      ((_a = this.mouth) == null ? void 0 : _a.geometry) && this.mouth.geometry.dispose();
      let s;
      switch (e.mode) {
        case "oval":
          s = Ze(e.width, e.height);
          break;
        case "curve":
        default:
          s = Je(e.width, e.curve || 0, e.thickness || 0.02);
          break;
      }
      const o = new Le(s, 24);
      o.center(), this.mouth ? this.mouth.geometry = o : (this.mouth = new v(o, this.blackMat), this.characterGroup.add(this.mouth)), this.currentMouthParams = {
        ...e
      };
    }
    blink() {
      var _a;
      if (this.eyes.length < 2) return;
      (_a = this.blinkTween) == null ? void 0 : _a.kill();
      const e = Math.max(this.savedScaleY || 1, 0.65), t = {
        val: 1 * e
      };
      this.blinkTween = _.to(t, {
        val: 0.1 * e,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onUpdate: () => {
          this.blinkFactor = t.val, this.updateCharacterVisuals(), this.eyes.forEach((s, o) => {
            const i = t.val / e;
            s.material.opacity = i > 0.7 ? 1 : 0;
          });
        },
        onComplete: () => {
          this.blinkFactor = 1, this.updateCharacterVisuals(), this.eyes.forEach((s) => {
            s.material.opacity = 1;
          });
        }
      });
    }
    updateCharacterVisuals() {
      const e = this.savedScaleY || 1, t = this.heightBody * e / 2 - 2.2, s = Math.max(e, 0.65), o = 2.1, i = this.heightBody * e / 2, c = (n) => {
        const l = o - n;
        return t + i - l * s;
      };
      this.characterGroup.rotation.y = this.params.bodyRotate;
      for (let n = 0; n < 2; n++) this.eyes[n].position.set((this.params.eyes.x[n] + this.lookOffset.x) * s, c(this.params.eyes.y[n] + this.lookOffset.y), this.faceZ), this.eyes[n].scale.set(this.params.eyes.scaleX[n] * s, this.params.eyes.scaleY[n] * s, 1), this.eyesBack[n].position.set((this.params.eyesBack.x[n] + this.lookOffset.x * 0.35) * s, c(this.params.eyesBack.y[n] + this.lookOffset.y * 0.35) + 0.02, this.faceZ - 0.01), this.eyesBack[n].scale.set(this.params.eyesBack.scaleX[n] * s, this.params.eyesBack.scaleY[n] * s * this.blinkFactor, 1), this.brows[n].position.set(this.params.brows.x[n] * s, c(this.params.brows.y[n]), this.faceZ), this.brows[n].rotation.z = this.params.brows.rotation[n], this.brows[n].scale.set(this.params.brows.scaleX[n] * s, this.params.brows.scaleY[n] * s, 1), this.cheeks[n].position.set(this.params.cheeks.x[n] * s * 1.1, c(this.params.cheeks.y[n]), this.faceZ), this.cheeks[n].scale.set(this.params.cheeks.scaleX[n] * s, this.params.cheeks.scaleY[n] * 0.6 * s, 0.2), this.cheeks[n].material.opacity !== void 0 && (this.cheeks[n].material.opacity = this.params.cheeks.opacity[n]);
      this.mouth && (this.mouth.position.set(this.params.mouth.x, c(this.params.mouth.y), this.faceZ), this.mouth.rotation.x = this.params.mouth.rotationX, this.mouth.rotation.y = this.params.mouth.rotationY, this.mouth.rotation.z = this.params.mouth.rotationZ, this.mouth.scale.set(this.params.mouth.scaleX * s, this.params.mouth.scaleY * s, 1));
    }
  }
  class et {
    constructor(e) {
      this.gameContext = e, this.gui = null, this.spectators = [], this.focus = "center", this.roundActive = false, this.debugMouthOverride = null;
    }
    getConfigs() {
      return We.map((e) => ({
        ...e
      }));
    }
    registerCharacter(e, t) {
      const s = qe[t.role];
      if (!s) throw new Error("Unknown spectator role: ".concat(t.role));
      const o = performance.now(), i = {
        character: e,
        config: t,
        profile: s,
        role: t.role,
        currentState: "idle",
        focus: "center",
        stickyState: "idle",
        tempUntil: 0,
        nextBlinkAt: o + E(t.blinkRange[0], t.blinkRange[1]),
        nextAmbientAt: o + this.getAmbientDelay(t, false)
      };
      this.spectators.push(i), this.applyEntryState(i, "idle", {
        duration: 0.4,
        sticky: true,
        resetFocus: true
      });
    }
    attachGui(e) {
      if (this.gui = e, location.hostname !== "localhost") return;
      const t = {
        focus: "center",
        event: "pair_presented",
        followDot: this.gameContext.gameClass.eyeTrackingEnabled,
        mouthMode: u.mouth.mode,
        mouthWidth: u.mouth.width,
        mouthHeight: u.mouth.height,
        mouthThickness: u.mouth.thickness,
        mouthCurve: u.mouth.curve,
        mouthX: u.mouth.x,
        mouthY: u.mouth.y,
        mouthScaleX: u.mouth.scaleX,
        mouthScaleY: u.mouth.scaleY,
        mouthRotationZ: u.mouth.rotationZ,
        triggerEvent: () => {
          this.react(t.event);
        },
        startRound: () => {
          this.react("pair_presented");
        },
        enterIdle: () => {
          this.enterIdle();
        },
        resetRound: () => {
          this.resetRound();
        },
        resetMouth: () => {
          t.mouthMode = u.mouth.mode, t.mouthWidth = u.mouth.width, t.mouthHeight = u.mouth.height, t.mouthThickness = u.mouth.thickness, t.mouthCurve = u.mouth.curve, t.mouthX = u.mouth.x, t.mouthY = u.mouth.y, t.mouthScaleX = u.mouth.scaleX, t.mouthScaleY = u.mouth.scaleY, t.mouthRotationZ = u.mouth.rotationZ, this.debugMouthOverride = this.buildDebugMouthOverride(t), s.forEach((d) => d.updateDisplay()), this.refreshCurrentStates();
        }
      }, s = [], o = {
        \u0426\u0435\u043D\u0442\u0440: "center",
        \u0412\u043B\u0435\u0432\u043E: "left",
        \u0412\u043F\u0440\u0430\u0432\u043E: "right",
        \u0412\u0432\u0435\u0440\u0445: "top",
        \u0412\u043D\u0438\u0437: "bottom"
      }, i = {
        "\u041F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u043F\u0430\u0440\u0430": "pair_presented",
        "\u0412\u044B\u0431\u043E\u0440 \u0438\u0433\u0440\u043E\u043A\u0430": "player_choice",
        "\u0423\u0433\u0430\u0434\u0430\u043B \u0432\u0435\u0440\u043D\u043E": "guess_correct",
        "\u0423\u0433\u0430\u0434\u0430\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u043E": "guess_wrong",
        "\u0420\u043E\u0441\u0442 \u0441\u0435\u0440\u0438\u0438": "streak_up",
        "\u041A\u043E\u043D\u0435\u0446 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438": "category_complete",
        \u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435: "neutral"
      }, c = e.addFolder("\u0417\u0440\u0438\u0442\u0435\u043B\u0438");
      c.add(t, "focus", o).name("\u0424\u043E\u043A\u0443\u0441").onChange((d) => {
        this.setFocus(d);
      }), c.add(t, "followDot").name("\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0448\u0430\u0440\u043E\u043C").onChange((d) => {
        this.gameContext.gameClass.eyeTrackingEnabled = d, d || this.spectators.forEach((p) => {
          p.character.clearLookTarget(), p.character.update(1 / 60);
        });
      }), c.add(t, "event", i).name("\u0421\u043E\u0431\u044B\u0442\u0438\u0435"), c.add(t, "triggerEvent").name("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"), c.add(t, "startRound").name("\u0421\u0442\u0430\u0440\u0442 \u0440\u0430\u0443\u043D\u0434\u0430"), c.add(t, "enterIdle").name("\u0412 \u043F\u043E\u043A\u043E\u0439"), c.add(t, "resetRound").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
      const n = e.addFolder("\u0420\u043E\u0442"), l = () => {
        this.debugMouthOverride = this.buildDebugMouthOverride(t), this.refreshCurrentStates();
      };
      s.push(n.add(t, "mouthMode", {
        \u041B\u0438\u043D\u0438\u044F: "curve",
        \u041E\u0432\u0430\u043B: "oval"
      }).name("\u0422\u0438\u043F").onChange(l), n.add(t, "mouthWidth", 5e-3, 1.2, 5e-3).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(l), n.add(t, "mouthHeight", 1e-3, 0.8, 5e-3).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(l), n.add(t, "mouthThickness", 1e-3, 0.3, 2e-3).name("\u0422\u043E\u043B\u0449\u0438\u043D\u0430").onChange(l), n.add(t, "mouthCurve", -0.8, 0.8, 5e-3).name("\u0418\u0437\u0433\u0438\u0431").onChange(l), n.add(t, "mouthX", -0.8, 0.8, 5e-3).name("X").onChange(l), n.add(t, "mouthY", -0.2, 2, 5e-3).name("Y").onChange(l), n.add(t, "mouthScaleX", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 X").onChange(l), n.add(t, "mouthScaleY", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 Y").onChange(l), n.add(t, "mouthRotationZ", -3.14, 3.14, 0.01).name("\u041F\u043E\u0432\u043E\u0440\u043E\u0442").onChange(l)), n.add(t, "resetMouth").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u043E\u0442");
    }
    update(e) {
      const t = performance.now(), s = this.gameContext.gameClass.getSpectatorFocusTarget();
      this.spectators.forEach((o) => {
        if (s ? o.character.setLookTarget(s) : o.character.clearLookTarget(), o.character.update(e), t >= o.nextBlinkAt && (o.character.blink(), o.nextBlinkAt = t + E(o.config.blinkRange[0], o.config.blinkRange[1])), o.tempUntil && t >= o.tempUntil && (o.tempUntil = 0, this.applyEntryState(o, o.stickyState, {
          duration: 0.7
        })), !o.tempUntil && this.roundActive && t >= o.nextAmbientAt) {
          const i = this.roundActive ? o.profile.watchingStates : o.profile.idleStates, c = i[Math.floor(Math.random() * i.length)] || o.stickyState;
          this.applyEntryState(o, c, {
            duration: 0.9
          }), o.nextAmbientAt = t + this.getAmbientDelay(o.config, this.roundActive);
        }
      });
    }
    updateEmotions(e) {
      this.update(e);
    }
    setFocus(e = "center") {
      this.focus = U[e] ? e : "center", this.spectators.forEach((t) => {
        t.focus = this.focus, this.applyEntryState(t, t.currentState, {
          duration: 0.45
        });
      });
    }
    react(e, t = {}) {
      if (e === "neutral") {
        this.enterIdle();
        return;
      }
      e === "pair_presented" && (this.roundActive = true);
      const s = performance.now();
      this.spectators.forEach((o) => {
        var _a, _b;
        const i = o.profile.reactions[e];
        if (!i) return;
        const c = typeof i == "function" ? i(t, o) : i.state, n = (typeof i == "function" ? 1.4 : (_a = i.duration) != null ? _a : 1.4) / ((_b = o.config.reactionSpeed) != null ? _b : 1);
        this.applyEntryState(o, c, {
          duration: n
        }), o.tempUntil = s + n * 1e3, o.nextAmbientAt = o.tempUntil + this.getAmbientDelay(o.config, this.roundActive);
      });
    }
    enterIdle() {
      this.roundActive = false, this.focus = "center", this.spectators.forEach((e) => {
        e.tempUntil = 0, this.applyEntryState(e, "idle", {
          duration: 0.7,
          sticky: true,
          resetFocus: true
        }), e.nextAmbientAt = performance.now() + this.getAmbientDelay(e.config, false);
      });
    }
    resetRound() {
      this.enterIdle();
    }
    applyEntryState(e, t, s = {}) {
      var _a;
      const o = U[s.resetFocus ? "center" : e.focus] || U.center, i = Ne(e.profile.basePose, e.profile.states[t] || e.profile.states.idle, o, this.debugMouthOverride);
      i.color = e.config.color, e.currentState = t, s.sticky ? e.stickyState = t : this.roundActive ? e.stickyState = "watching" : e.stickyState = "idle", s.resetFocus && (e.focus = "center"), e.character.applyState(i, {
        duration: (_a = s.duration) != null ? _a : 1
      });
    }
    buildDebugMouthOverride(e) {
      return {
        mouth: {
          mode: e.mouthMode,
          width: e.mouthWidth,
          height: e.mouthHeight,
          thickness: e.mouthThickness,
          curve: e.mouthCurve,
          x: e.mouthX,
          y: e.mouthY,
          scaleX: e.mouthScaleX,
          scaleY: e.mouthScaleY,
          rotationZ: e.mouthRotationZ
        }
      };
    }
    refreshCurrentStates() {
      this.spectators.forEach((e) => {
        this.applyEntryState(e, e.currentState, {
          duration: 0.18
        });
      });
    }
    getAmbientDelay(e, t) {
      const s = t ? e.ambientInterval : e.idleInterval || e.ambientInterval;
      return E(s[0], s[1]);
    }
  }
  class tt {
    constructor(e) {
      this.scene = e.scene, this.countInst1 = 3, this.instancesObjs = {
        instances1: {
          data: Array.from({
            length: this.countInst1
          }, (t, s) => ({
            position: new f(0, 0.2, 0),
            rotation: new Re(0, 0, 0),
            scale: new f(1, 1, 1),
            size: new f(0.2, 0.2, 0.2),
            userData: {
              name: "inst1",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryInst1: new X(0.2),
          materialInst1: new I({
            color: 52224
          }),
          inst1: null
        }
      }, this.instancesObjs.instances1.inst1 = new Ae(this.instancesObjs.instances1.geometryInst1, this.instancesObjs.instances1.materialInst1, this.countInst1), this.instancesObjs.instances1.inst1.instanceMatrix.setUsage(Ye), this.instancesObjs.instances1.inst1.receiveShadow = true, this.instancesObjs.instances1.inst1.castShadow = true, this.instancesObjs.instances1.inst1.frustumCulled = false;
    }
    init() {
      for (let e = 0; e < this.countInst1; e++) this.instancesObjs.instances1.data[e].position.x = E(-3, 3), this.instancesObjs.instances1.data[e].position.z = E(-3, 3), this.instancesObjs.instances1.data[e].position.y = E(1, 2);
      this.instancesObjs.instances1.inst1.instanceMatrix.needsUpdate = true;
    }
    toVec3(e) {
      var _a, _b, _c;
      return typeof e == "number" ? new f(e, e, e) : (e == null ? void 0 : e.isVector3) ? e : e ? new f((_a = e.x) != null ? _a : 1, (_b = e.y) != null ? _b : 1, (_c = e.z) != null ? _c : 1) : new f(1, 1, 1);
    }
  }
  const N = [
    {
      id: "frukty",
      title: "\u0424\u0440\u0443\u043A\u0442\u044B",
      itemIds: [
        "yabloko",
        "grusha",
        "banan",
        "apelsin",
        "mandarin",
        "kivi",
        "sliva",
        "vinograd",
        "persik",
        "ananas",
        "arbuz",
        "dynya"
      ]
    },
    {
      id: "sladosti",
      title: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438",
      itemIds: [
        "shokolad",
        "marmeled",
        "pechene",
        "morozhenoe",
        "zefir",
        "vafli",
        "ponchik",
        "pirozhnoye"
      ]
    },
    {
      id: "napitki",
      title: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438",
      itemIds: [
        "chai",
        "kofe",
        "sok",
        "limonad",
        "kakao",
        "molochnyy_kokteyl",
        "mineralka",
        "kompot",
        "mors",
        "smuzi"
      ]
    }
  ], Z = [
    {
      id: "yabloko",
      categoryId: "frukty",
      title: "\u042F\u0431\u043B\u043E\u043A\u043E",
      accent: "#ff8b7a"
    },
    {
      id: "grusha",
      categoryId: "frukty",
      title: "\u0413\u0440\u0443\u0448\u0430",
      accent: "#b9e14f"
    },
    {
      id: "banan",
      categoryId: "frukty",
      title: "\u0411\u0430\u043D\u0430\u043D",
      accent: "#ffe15f"
    },
    {
      id: "apelsin",
      categoryId: "frukty",
      title: "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D",
      accent: "#ff9d3d"
    },
    {
      id: "mandarin",
      categoryId: "frukty",
      title: "\u041C\u0430\u043D\u0434\u0430\u0440\u0438\u043D",
      accent: "#ffb347"
    },
    {
      id: "kivi",
      categoryId: "frukty",
      title: "\u041A\u0438\u0432\u0438",
      accent: "#7fd16c"
    },
    {
      id: "sliva",
      categoryId: "frukty",
      title: "\u0421\u043B\u0438\u0432\u0430",
      accent: "#a98bff"
    },
    {
      id: "vinograd",
      categoryId: "frukty",
      title: "\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434",
      accent: "#8f6ee8"
    },
    {
      id: "persik",
      categoryId: "frukty",
      title: "\u041F\u0435\u0440\u0441\u0438\u043A",
      accent: "#ffb38f"
    },
    {
      id: "ananas",
      categoryId: "frukty",
      title: "\u0410\u043D\u0430\u043D\u0430\u0441",
      accent: "#ffd55f"
    },
    {
      id: "arbuz",
      categoryId: "frukty",
      title: "\u0410\u0440\u0431\u0443\u0437",
      accent: "#ff6f7d"
    },
    {
      id: "dynya",
      categoryId: "frukty",
      title: "\u0414\u044B\u043D\u044F",
      accent: "#f6db73"
    },
    {
      id: "shokolad",
      categoryId: "sladosti",
      title: "\u0428\u043E\u043A\u043E\u043B\u0430\u0434",
      accent: "#8c5b47"
    },
    {
      id: "marmeled",
      categoryId: "sladosti",
      title: "\u041C\u0430\u0440\u043C\u0435\u043B\u0430\u0434",
      accent: "#ff7ab8"
    },
    {
      id: "pechene",
      categoryId: "sladosti",
      title: "\u041F\u0435\u0447\u0435\u043D\u044C\u0435",
      accent: "#d5a16e"
    },
    {
      id: "morozhenoe",
      categoryId: "sladosti",
      title: "\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",
      accent: "#a7e2ff"
    },
    {
      id: "zefir",
      categoryId: "sladosti",
      title: "\u0417\u0435\u0444\u0438\u0440",
      accent: "#ffd9f6"
    },
    {
      id: "vafli",
      categoryId: "sladosti",
      title: "\u0412\u0430\u0444\u043B\u0438",
      accent: "#efbe73"
    },
    {
      id: "ponchik",
      categoryId: "sladosti",
      title: "\u041F\u043E\u043D\u0447\u0438\u043A",
      accent: "#ff93aa"
    },
    {
      id: "pirozhnoye",
      categoryId: "sladosti",
      title: "\u041F\u0438\u0440\u043E\u0436\u043D\u043E\u0435",
      accent: "#dcb2ff"
    },
    {
      id: "chai",
      categoryId: "napitki",
      title: "\u0427\u0430\u0439",
      accent: "#9f7e5b"
    },
    {
      id: "kofe",
      categoryId: "napitki",
      title: "\u041A\u043E\u0444\u0435",
      accent: "#7c5a46"
    },
    {
      id: "sok",
      categoryId: "napitki",
      title: "\u0421\u043E\u043A",
      accent: "#ffb45e"
    },
    {
      id: "limonad",
      categoryId: "napitki",
      title: "\u041B\u0438\u043C\u043E\u043D\u0430\u0434",
      accent: "#fff46a"
    },
    {
      id: "kakao",
      categoryId: "napitki",
      title: "\u041A\u0430\u043A\u0430\u043E",
      accent: "#9d7456"
    },
    {
      id: "molochnyy_kokteyl",
      categoryId: "napitki",
      title: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C",
      accent: "#f8d8ef"
    },
    {
      id: "mineralka",
      categoryId: "napitki",
      title: "\u041C\u0438\u043D\u0435\u0440\u0430\u043B\u043A\u0430",
      accent: "#8fd9ff"
    },
    {
      id: "kompot",
      categoryId: "napitki",
      title: "\u041A\u043E\u043C\u043F\u043E\u0442",
      accent: "#de6b78"
    },
    {
      id: "mors",
      categoryId: "napitki",
      title: "\u041C\u043E\u0440\u0441",
      accent: "#c75a73"
    },
    {
      id: "smuzi",
      categoryId: "napitki",
      title: "\u0421\u043C\u0443\u0437\u0438",
      accent: "#85d17f"
    }
  ];
  function st(a) {
    const e = [
      ...a
    ];
    for (let t = e.length - 1; t > 0; t -= 1) {
      const s = Math.floor(Math.random() * (t + 1));
      [e[t], e[s]] = [
        e[s],
        e[t]
      ];
    }
    return e;
  }
  function ot(a) {
    return "".concat(a, "-").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8));
  }
  function at(a, e) {
    const t = a.itemIds.map((c) => e[c]).filter(Boolean), s = st(t), o = Math.floor(s.length / 2), i = [];
    for (let c = 0; c < o * 2; c += 2) i.push([
      s[c],
      s[c + 1]
    ]);
    return {
      sessionId: ot(a.id),
      categoryId: a.id,
      pairs: i,
      totalRounds: o,
      currentRoundIndex: 0,
      status: "playing"
    };
  }
  const it = 1e3, J = 10;
  function Q(a = {}) {
    var _a, _b, _c, _d, _e2, _f;
    return {
      rating: (_a = a.rating) != null ? _a : it,
      wins: (_b = a.wins) != null ? _b : 0,
      losses: (_c = a.losses) != null ? _c : 0,
      shown: (_d = a.shown) != null ? _d : 0,
      chosen: (_e2 = a.chosen) != null ? _e2 : 0,
      updatedAt: (_f = a.updatedAt) != null ? _f : Date.now()
    };
  }
  function nt(a, e) {
    var _a, _b;
    const { playerId: t, categoryId: s, leftItem: o, rightItem: i, chosenItemId: c, roundIndex: n, sessionId: l } = e, d = c === o.id ? i.id : o.id, p = (_a = a.itemRatings[s]) != null ? _a : {}, y = Q(p[c]), w = Q(p[d]), b = Date.now();
    y.rating += J, y.wins += 1, y.shown += 1, y.chosen += 1, y.updatedAt = b, w.rating -= J, w.losses += 1, w.shown += 1, w.updatedAt = b, a.itemRatings[s] = {
      ...p,
      [c]: y,
      [d]: w
    };
    const C = (_b = a.categoryProgress[s]) != null ? _b : {
      completedRounds: 0,
      guessModeUnlocked: false,
      lastPlayedAt: b
    };
    return C.completedRounds += 1, C.guessModeUnlocked = C.completedRounds >= 10, C.lastPlayedAt = b, a.categoryProgress[s] = C, a.matchHistory.push({
      id: "".concat(l, "-").concat(n + 1, "-").concat(c),
      playerId: t,
      categoryId: s,
      leftItemId: o.id,
      rightItemId: i.id,
      chosenItemId: c,
      loserItemId: d,
      roundIndex: n,
      sessionId: l,
      playedAt: b
    }), {
      chosenItemId: c,
      loserItemId: d,
      progress: C
    };
  }
  const ae = "ratingGameState";
  function P() {
    const a = Date.now();
    return {
      version: 1,
      player: {
        id: "local-player-".concat(Math.random().toString(36).slice(2, 10)),
        guessScore: 0,
        createdAt: a,
        updatedAt: a
      },
      categoryProgress: {},
      itemRatings: {},
      matchHistory: []
    };
  }
  function ie(a) {
    var _a, _b, _c, _d;
    const e = P(), t = a && typeof a == "object" ? a : e;
    return {
      version: (_a = t.version) != null ? _a : 1,
      player: {
        ...e.player,
        ...(_b = t.player) != null ? _b : {}
      },
      categoryProgress: (_c = t.categoryProgress) != null ? _c : {},
      itemRatings: (_d = t.itemRatings) != null ? _d : {},
      matchHistory: Array.isArray(t.matchHistory) ? t.matchHistory : []
    };
  }
  function rt() {
    try {
      const a = localStorage.getItem(ae);
      if (!a) {
        const e = P();
        return O(e), e;
      }
      return ie(JSON.parse(a));
    } catch (a) {
      console.warn("Failed to load local game state", a);
      const e = P();
      return O(e), e;
    }
  }
  function O(a) {
    const e = ie(a);
    return e.player.updatedAt = Date.now(), localStorage.setItem(ae, JSON.stringify(e)), e;
  }
  function ct() {
    const a = P();
    return O(a), a;
  }
  function lt(a = "") {
    return a.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((t) => {
      var _a, _b;
      return (_b = (_a = t[0]) == null ? void 0 : _a.toUpperCase()) != null ? _b : "";
    }).join("");
  }
  function ee(a) {
    return "".concat(Math.min(a, 10), " / 10");
  }
  class ht {
    constructor(e) {
      this.gameContext = e, this.ui = e.ui, this.events = e.events, this.categories = N, this.items = Z, this.itemsById = Object.fromEntries(Z.map((t) => [
        t.id,
        t
      ])), this.categoriesById = Object.fromEntries(N.map((t) => [
        t.id,
        t
      ])), this.state = rt(), this.currentSession = null, this.choiceLocked = false, this.lastCompletedCategoryId = null, this.elements = {
        categoriesList: document.querySelector('[data-role="categories-list"]'),
        choiceCategoryTitle: document.querySelector('[data-role="choice-category-title"]'),
        choiceRoundLabel: document.querySelector('[data-role="choice-round-label"]'),
        choiceQuestion: document.querySelector('[data-role="choice-question"]'),
        progressFill: document.querySelector('[data-role="session-progress-fill"]'),
        progressText: document.querySelector('[data-role="session-progress-text"]'),
        leftCard: document.querySelector('[data-role="choice-left"]'),
        rightCard: document.querySelector('[data-role="choice-right"]'),
        completeTitle: document.querySelector('[data-role="complete-title"]'),
        completeText: document.querySelector('[data-role="complete-text"]'),
        completeProgress: document.querySelector('[data-role="complete-progress"]'),
        resetButton: document.querySelector('[data-action="reset_local_progress"]')
      }, this.bindEvents();
    }
    bindEvents() {
      this.events.on("show_main_menu", () => {
        this.showMainMenu();
      }), this.elements.resetButton && this.elements.resetButton.addEventListener("click", () => {
        this.state = ct(), this.renderCategories(), this.showCategories();
      }), window.addEventListener("locale-changed", () => {
        this.renderCategories(), this.currentSession && this.renderCurrentRound();
      });
    }
    init() {
      this.renderCategories(), this.showMainMenu();
    }
    showMainMenu() {
      this.ui.show("main_screen");
    }
    showCategories() {
      this.renderCategories(), this.ui.show("categories_screen");
    }
    startCategorySession(e) {
      const t = this.categoriesById[e];
      if (t) {
        if (this.currentSession = at(t, this.itemsById), !this.currentSession.totalRounds) {
          this.showCategories();
          return;
        }
        this.choiceLocked = false, this.renderCurrentRound(), this.ui.show("choice_screen"), this.gameContext.emotionsClass.react("pair_presented");
      }
    }
    renderCategories() {
      const e = this.elements.categoriesList;
      e && (e.innerHTML = this.categories.map((t) => {
        var _a;
        const s = (_a = this.state.categoryProgress[t.id]) != null ? _a : {
          completedRounds: 0,
          guessModeUnlocked: false
        }, o = Math.floor(t.itemIds.length / 2), i = s.guessModeUnlocked ? g("guessModeUnlocked") : "".concat(g("guessModeLocked"), " ").concat(ee(s.completedRounds));
        return '\n        <button class="category-card btn-reset" data-action="start_category_session" data-category-id="'.concat(t.id, '">\n          <span class="category-card__badge">').concat(o, " ").concat(g("roundsShort"), '</span>\n          <span class="category-card__title">').concat(t.title, '</span>\n          <span class="category-card__meta">').concat(t.itemIds.length, " ").concat(g("itemsLabel"), '</span>\n          <span class="category-card__progress">').concat(i, "</span>\n        </button>\n      ");
      }).join(""));
    }
    renderCurrentRound() {
      var _a, _b;
      if (!this.currentSession) return;
      const e = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!e) return;
      const [t, s] = e, o = this.currentSession.currentRoundIndex + 1, i = (o - 1) / this.currentSession.totalRounds * 100;
      this.elements.choiceCategoryTitle && (this.elements.choiceCategoryTitle.textContent = (_b = (_a = this.categoriesById[this.currentSession.categoryId]) == null ? void 0 : _a.title) != null ? _b : ""), this.elements.choiceRoundLabel && (this.elements.choiceRoundLabel.textContent = "".concat(g("roundLabel"), " ").concat(o, " ").concat(g("roundOf"), " ").concat(this.currentSession.totalRounds)), this.elements.choiceQuestion && (this.elements.choiceQuestion.textContent = g("choiceQuestion")), this.elements.progressFill && (this.elements.progressFill.style.width = "".concat(i, "%")), this.elements.progressText && (this.elements.progressText.textContent = "".concat(o - 1, "/").concat(this.currentSession.totalRounds)), this.renderChoiceCard(this.elements.leftCard, t, "left"), this.renderChoiceCard(this.elements.rightCard, s, "right");
    }
    renderChoiceCard(e, t, s) {
      var _a;
      !e || !t || (e.dataset.itemId = t.id, e.dataset.side = s, e.classList.remove("is-chosen", "is-loser", "is-idle"), e.style.setProperty("--card-accent", (_a = t.accent) != null ? _a : "#ffffff"), e.innerHTML = '\n      <span class="choice-card__art" aria-hidden="true">\n        <span class="choice-card__initials">'.concat(lt(t.title), '</span>\n      </span>\n      <span class="choice-card__title">').concat(t.title, '</span>\n      <span class="choice-card__hint">').concat(g("tapToChoose"), "</span>\n    "));
    }
    async chooseItem(e) {
      if (!this.currentSession || this.choiceLocked) return;
      const t = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!t) return;
      const [s, o] = t;
      if (s.id !== e && o.id !== e) return;
      this.choiceLocked = true;
      const i = s.id === e ? "left" : "right", c = i === "left" ? "right" : "left", n = i === "left" ? this.elements.leftCard : this.elements.rightCard, l = c === "left" ? this.elements.leftCard : this.elements.rightCard;
      if (n == null ? void 0 : n.classList.add("is-chosen"), l == null ? void 0 : l.classList.add("is-loser"), nt(this.state, {
        playerId: this.state.player.id,
        categoryId: this.currentSession.categoryId,
        leftItem: s,
        rightItem: o,
        chosenItemId: e,
        roundIndex: this.currentSession.currentRoundIndex,
        sessionId: this.currentSession.sessionId
      }), this.state = O(this.state), this.gameContext.emotionsClass.react("player_choice", {
        chosenItemId: e
      }), await new Promise((d) => window.setTimeout(d, 420)), this.currentSession.currentRoundIndex += 1, this.currentSession.currentRoundIndex >= this.currentSession.totalRounds) {
        this.finishCurrentSession();
        return;
      }
      this.choiceLocked = false, this.renderCurrentRound(), this.gameContext.emotionsClass.react("pair_presented");
    }
    finishCurrentSession() {
      var _a;
      if (!this.currentSession) return;
      this.lastCompletedCategoryId = this.currentSession.categoryId;
      const e = (_a = this.state.categoryProgress[this.currentSession.categoryId]) != null ? _a : {
        completedRounds: 0,
        guessModeUnlocked: false
      };
      this.elements.completeTitle && (this.elements.completeTitle.textContent = g("sessionCompleteTitle")), this.elements.completeText && (this.elements.completeText.textContent = e.guessModeUnlocked ? g("sessionCompleteUnlocked") : g("sessionCompleteSaved")), this.elements.completeProgress && (this.elements.completeProgress.textContent = e.guessModeUnlocked ? g("guessModeUnlocked") : "".concat(g("guessModeLocked"), " ").concat(ee(e.completedRounds))), this.ui.show("session_complete_screen"), this.gameContext.emotionsClass.react(e.guessModeUnlocked ? "category_complete" : "guess_correct", {
        categoryId: this.currentSession.categoryId
      }), this.currentSession = null, this.choiceLocked = false;
    }
  }
  console.clear();
  const r = {};
  r.clock = new se();
  async function dt(a) {
    try {
      await ut();
    } catch (e) {
      window.showInitError ? window.showInitError(e) : console.error("Init error", e);
    }
  }
  async function ut() {
    const a = document.querySelector(".loader_line");
    a && (a.style.width = "30%"), await pt(), await yt(), a && (a.style.width = "100%"), r.paramsClass.gameInit = true, mt(), r.appController.init(), wt();
  }
  function mt() {
    r.gameClass.loadMesh(), r.instancesClass.init(), r.worldClass.loadLight(true, true), r.paramsClass.startGame(), r.emotionsClass.react("pair_presented");
  }
  async function pt() {
    r.initClass = new Ge(r), r.events = new Oe(), r.scene = r.initClass.scene, r.camera = r.initClass.camera, r.renderer = r.initClass.renderer, r.gui = new De(), r.ui = new $e(r), r.paramsClass = new Be(r), r.assetsManager = new Ve(r), r.audioClass = new ze(r), r.dataClass = new Xe(r), r.controlClass = new Ue(r), r.gameClass = new Ke(r), r.worldClass = new He(r), r.instancesClass = new tt(r), r.emotionsClass = new et(r), r.emotionsClass.attachGui(r.gui), r.appController = new ht(r);
    const a = r.emotionsClass.getConfigs();
    r.spectatorConfigs = a, a.forEach(() => {
      const e = new Qe(r);
      r.gameClass.characters.push(e);
    });
  }
  async function yt() {
    typeof j == "function" && await j(), r.paramsClass.initCustomScroll(), Fe("ru"), await r.assetsManager.loadTextures();
    for (let a = 0; a < r.gameClass.characters.length; a++) await r.gameClass.characters[a].loadCharacter(r.spectatorConfigs[a]), r.emotionsClass.registerCharacter(r.gameClass.characters[a], r.spectatorConfigs[a]);
    r.emotionsClass.enterIdle(), await r.audioClass.loadAudio(), await r.controlClass.addKeyListeners(), location.hostname === "localhost" && r.gui.addFolder("\u0424\u0438\u0437\u0438\u043A\u0430");
  }
  function gt(a) {
    if (r.paramsClass) switch (r.gameClass.update(a, r.emotionsClass.roundActive), r.paramsClass.currentGameState) {
      case r.paramsClass.gameState.play:
        r.emotionsClass.update(a);
        break;
    }
  }
  function ft() {
    r.initClass && r.initClass.stats && r.initClass.stats.update(), r.renderer && r.scene && r.camera && r.renderer.render(r.scene, r.camera);
  }
  function wt() {
    let a = 0;
    const e = 1 / 60, t = 0.1;
    r.renderer.setAnimationLoop(() => {
      let s = r.clock.getDelta();
      s > t && (s = t), a += s;
      let o = 5;
      for (; a >= e && o > 0; ) gt(e), a -= e, o--;
      a > e && (a = 0), ft();
    });
  }
  const bt = new Pe(dt);
  bt.init();
})();
export {
  __tla,
  kt as __vite_legacy_guard
};
