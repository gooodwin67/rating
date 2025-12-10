var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as V, V as h, M as z, S as K, C as F, P as X, a as U, W as j, b as H, c as N, A as W, O as q, d as m, e as Z, f as $, g as J, R as Q, T as ee, h as S, G as te, i as se, j as I, k as ae, l as Y, D as ie, m as u, n as ne, o as re, p as oe, q as ce, r as le, s as he, t as x, u as R, E as de, I as ue, v as me, w as ye } from "./three-BPeGGCpK.js";
import { g as C } from "./gsap-Cy3i8ghA.js";
let Oe;
let __tla = (async () => {
  Oe = function() {
    import.meta.url, import("_").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).catch(() => 1), async function* () {
    }().next();
  };
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
    new MutationObserver((s) => {
      for (const r of s) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(s) {
      const r = {};
      return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
    }
    function a(s) {
      if (s.ep) return;
      s.ep = true;
      const r = t(s);
      fetch(s.href, r);
    }
  })();
  class fe {
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
      let a = document.getElementById("debug-error-overlay");
      a || (a = document.createElement("div"), a.id = "debug-error-overlay", a.className = "debug_error_overlay", a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.background = "rgba(0,0,0,0.85)", a.style.color = "red", a.style.zIndex = "9999", a.style.padding = "20px", a.style.whiteSpace = "pre-wrap", a.style.fontFamily = "monospace", t.appendChild(a)), a.textContent = e;
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
  function y(n, e) {
    return Math.random() * (e - n) + n;
  }
  async function A() {
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
    let n;
    document.addEventListener("touchstart", (e) => {
      n = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }, {
      passive: false
    }), document.addEventListener("touchend", () => {
      clearTimeout(n);
    }), document.addEventListener("touchmove", () => {
      clearTimeout(n);
    }), document.addEventListener("dblclick", (e) => (e.preventDefault(), false), {
      capture: true
    }), (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (e) => {
      e.target.closest(".new_game_btn, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || e.preventDefault();
    }, {
      passive: false
    });
  }
  new V(new h(-0.5, -0.5, -0.5), new h(0.5, 0.5, 0.5));
  new z();
  class pe {
    constructor() {
      this.events = {};
    }
    on(e, t) {
      this.events[e] || (this.events[e] = []), this.events[e].push(t);
    }
    off(e, t) {
      this.events[e] && (this.events[e] = this.events[e].filter((a) => a !== t));
    }
    emit(e, t) {
      this.events[e] && this.events[e].forEach((a) => a(t));
    }
  }
  class we {
    constructor(e) {
      var _a;
      this.gameContext = e, this.onWindowResize = this.onWindowResize.bind(this), this.setVhVar = this.setVhVar.bind(this), this.onVisibilitychange = this.onVisibilitychange.bind(this), this.scene = new K(), this.scene.background = new F(10392058), this.camera = new X(25, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.x = -5, this.camera.position.y = 12, this.camera.position.z = 32;
      const t = 16 / 9, a = m.degToRad(25);
      this.FIXED_HFOV = 2 * Math.atan(Math.tan(a / 2) * t), this.stats = new U(), document.body.appendChild(this.stats.dom), this.stats.dom.style.top = "0", this.stats.dom.style.left = "0", this.renderer = new j({
        antialias: true
      }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = H, this.renderer.outputColorSpace = N, this.renderer.toneMapping = W, this.renderer.toneMappingExposure = 1.05, this.controls = new q(this.camera, this.renderer.domElement), this.setVhVar(), window.addEventListener("resize", this.setVhVar), window.addEventListener("orientationchange", this.setVhVar), (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", this.setVhVar), window.addEventListener("resize", this.onWindowResize), window.addEventListener("visibilitychange", this.onVisibilitychange), this.onWindowResize(), this.onVisibilitychange();
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
      const e = document.body.offsetWidth, t = document.body.offsetHeight, a = e / t;
      let s = 2 * Math.atan(Math.tan(this.FIXED_HFOV / 2) / a);
      const r = m.degToRad(4), o = m.degToRad(90);
      s = m.clamp(s, r, o), this.camera.fov = m.radToDeg(s), this.camera.aspect = a, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
    }
  }
  class ge {
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
        ".free_game_screen",
        ".levels_game_screen",
        ".levels_game_screen_contest",
        ".main_screen"
      ];
      let t = null, a = null, s = null, r = false, o = 0, l = 0;
      const T = () => {
        for (const c of e) {
          const d = document.querySelector(c);
          if (d && !d.classList.contains("hidden_screen")) return d;
        }
        return null;
      }, E = () => {
        const c = T();
        c !== t && (t && t.removeEventListener("scroll", f, {
          passive: true
        }), s && (s.removeEventListener("mousedown", p), s.removeEventListener("touchstart", p)), t = c, a = t ? t.querySelector(".scroll-progress") : null, s = a ? a.querySelector(".scroll-progress__bar") : null, t && t.addEventListener("scroll", f, {
          passive: true
        }), s && (s.addEventListener("mousedown", p), s.addEventListener("touchstart", p)), f());
      }, f = () => {
        if (!t || !a || !s) return;
        const c = t.clientHeight, d = t.scrollHeight, v = t.scrollTop;
        if (d <= c + 1) {
          a.classList.remove("visible");
          return;
        }
        a.classList.add("visible");
        const w = a.getBoundingClientRect().height, g = Math.max(c / d * w, 24), b = d - c, L = w - g, O = b > 0 ? v / b * L : 0;
        s.style.height = "".concat(g, "px"), s.style.top = "".concat(O, "px");
      }, p = (c) => {
        !t || !s || (r = true, o = c.touches ? c.touches[0].clientY : c.clientY, l = t.scrollTop, document.body.style.userSelect = "none", c.preventDefault());
      }, _ = (c) => {
        if (!r || !t || !s || !a) return;
        const v = (c.touches ? c.touches[0].clientY : c.clientY) - o, w = a.getBoundingClientRect().height, M = t.clientHeight, g = t.scrollHeight, b = Math.max(1, w - s.offsetHeight), L = (g - M) / b;
        t.scrollTop = l + v * L;
      }, k = () => {
        r = false, document.body.style.userSelect = "";
      };
      window.addEventListener("resize", () => {
        E(), f();
      }), window.addEventListener("mousemove", _, {
        passive: false
      }), window.addEventListener("touchmove", _, {
        passive: false
      }), window.addEventListener("mouseup", k), window.addEventListener("touchend", k), new MutationObserver(() => {
        E();
      }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          "class"
        ]
      }), E();
    }
  }
  class be {
    constructor() {
      this.takeAudio, this._attached = false, this.listener = new Z(), this.musicOn = true, this.musics = [];
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
      const e = new $(), t = [
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        }
      ];
      (await Promise.all(t.map((s) => e.loadAsync(s.path).catch((r) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(s.path, ":"), r), null))))).forEach((s, r) => {
        const o = t[r];
        if (!s) return;
        const l = new J(this.listener);
        l.setBuffer(s), l.setLoop(o.loop), l.setRefDistance(o.ref), l.setVolume(o.vol), o.rate && l.setPlaybackRate(o.rate), this[o.key] = l, this.musics.push({
          name: o.name,
          music: l
        });
      });
    }
    stopMusic(e) {
      this.musicOn && (e == 0 ? this.musics.forEach((t, a, s) => {
        t.music.stop();
      }) : e.forEach((t, a, s) => {
        this.musics.find((r) => r.name === t).music.stop();
      }));
    }
    pauseMusic(e) {
      this.musicOn && e.forEach((t, a, s) => {
        this.musics.find((r) => r.name === t).music.pause();
      });
    }
    playMusic(e) {
      e.forEach((t, a, s) => {
        let r = this.musics.find((o) => o.name === t).music;
        !r.isPlaying && this.musicOn && r.play();
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
  class Ee {
    constructor(e) {
      this.renderer = e.renderer, this.camera = e.camera, this.events = e.events, this.mouse = new h(), this.raycaster = new Q(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
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
  const G = {
    ru: {
      ui: {
        langToggle: "EN"
      },
      title: "\u0428\u0430\u0431\u043B\u043E\u043D",
      btn1: "\u041A\u043D\u043E\u043F\u043A\u0430 1",
      settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      back: "\u041D\u0430\u0437\u0430\u0434",
      start_game_btn: "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443"
    },
    en: {
      ui: {
        langToggle: "RU"
      },
      title: "Template",
      btn1: "btn1",
      settings: "settings",
      back: "back",
      start_game_btn: "Start Game"
    }
  };
  function B(n, e) {
    return e.split(".").reduce((t, a) => t && t[a], n);
  }
  function D(n = "ru", e = document) {
    const t = G[n] || G.ru;
    if (e.querySelectorAll("[data-i18n]").forEach((s) => {
      const r = s.dataset.i18n, o = B(t, r);
      o != null && (s.textContent = o);
    }), document.documentElement.lang = n, localStorage.setItem("locale", n), document.getElementById("lang-toggle")) {
      const s = document.getElementById("flag");
      B(t, "ui.langToggle") === "ru" || n === "ru" ? (s.classList.remove("us"), s.classList.add("ru"), s.src = "images/ru.svg") : (s.classList.remove("ru"), s.classList.add("us"), s.src = "images/us.svg");
    }
  }
  function ve(n) {
    D(n);
    const e = document.getElementById("lang-toggle");
    document.getElementById("flag"), e && e.addEventListener("click", () => {
      const a = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      D(a);
    });
  }
  class Le {
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
  class Ce {
    constructor() {
      this.planeGrass = {
        texture: null,
        material: null
      }, this.model = null;
    }
    async loadTextures() {
      const e = new ee(), [t] = await Promise.all([
        e.loadAsync("textures/grass.jpg")
      ]);
      this.planeGrass.texture = t, this.planeGrass.material = new S({
        map: t
      });
    }
    async loadModels() {
      await new te().loadAsync("models/model.glb").then((a) => {
        const s = a.scene, r = a.animations;
        s.scale.x = 2, s.scale.y = 2, s.scale.z = 2, s.position.y = 0, s.rotation.y = -Math.PI / 3, this.model = s, this.model.userData.mixer = new se(this.model), this.model.userData.action = this.model.userData.mixer.clipAction(r[0]), this.model.userData.action.play(), this.model.userData.clock = new I();
      });
    }
  }
  class Se {
    constructor(e) {
      this.events = e.events, this.screens = document.querySelectorAll(".screen"), this.currentScreen = null, document.querySelector("body").addEventListener("click", (t) => {
        const a = t.target.closest(".btn");
        if (!a) return;
        switch (a.dataset.action) {
          case "newGame":
            e.ui.show("free_game_screen");
            break;
          case "settings":
            e.ui.show("settings_screen");
            break;
          case "back":
            e.ui.show("main_screen");
            break;
          case "start_game_btn":
            e.ui.hideAll(), this.events.emit("start_match", true);
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
      this.screens.forEach((a) => a.classList.remove("active")), t.classList.add("active"), this.currentScreen = e;
    }
    hideAll() {
      this.screens.forEach((e) => e.classList.remove("active")), this.currentScreen = null;
    }
  }
  class _e {
    constructor(e) {
      this.scene = e.scene, this.ground = null, this.options = {
        size: {
          w: 10,
          h: 10,
          d: 0.2
        },
        name: "ground"
      };
    }
    loadMesh() {
      let e = new ae(this.options.size.w, this.options.size.h, this.options.size.d), t = new Y({
        color: 10392058,
        side: ie
      });
      this.ground = new u(e, t), this.ground.userData = {
        ...this.options
      }, this.ground.rotateX(Math.PI / 2), this.ground.receiveShadow = true;
    }
  }
  class ke {
    constructor(e) {
      this.scene = e.scene, this.dirLight = null, this.ambientLight = null;
    }
    loadLight(e = true, t = true) {
      this.ambientLight = new ne(16777215, 1), this.dirLight = new re(16777215, 1), this.dirLight.position.set(-3, 5, 0), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 100, e && this.scene.add(this.ambientLight), t && this.scene.add(this.dirLight);
    }
  }
  class Me {
    constructor(e) {
      __publicField(this, "setEmotion", () => {
        const e = Object.values(this.emotions)[Math.round(y(0, 7))];
        e && C.to(this.params, {
          duration: 1.2,
          ease: "back.out(1.7)",
          ...e,
          onUpdate: () => {
            this.updateCharacterVisuals();
          }
        });
      });
      this.scene = e.scene, this.characterGroup = new oe(), this.leftEye, this.rightEye, this.leftBrow, this.rightBrow, this.mouth, this.leftCheek, this.rightCheek, this.faceZ = 0.62, this.bodyMat = new S({
        color: 9364655,
        roughness: 0.9
      }), this.body = new u(new ce(1.5, 4.2, 1.2, 8, 0.3), this.bodyMat), this.blackMat = new Y({
        color: 7556154
      }), this.params = {
        bodyRotate: 0.3,
        leftEyeX: -0.4,
        leftEyeY: 1.2,
        leftEyeScaleX: 1,
        leftEyeScaleY: 1,
        rightEyeX: 0.4,
        rightEyeY: 1.2,
        rightEyeScaleX: 1,
        rightEyeScaleY: 1,
        leftBrowX: -0.4,
        leftBrowY: 1.5,
        leftBrowRotate: 0,
        rightBrowX: 0.4,
        rightBrowY: 1.5,
        rightBrowRotate: 0,
        mouthX: 0,
        mouthY: 0.8,
        mouthScale: 0,
        mouthRotate: Math.PI,
        color: "#8EE4AF"
      }, this.emotions = {
        angry: {
          leftEyeScaleY: 0.7,
          rightEyeScaleY: 0.7,
          leftBrowRotate: 0.5,
          rightBrowRotate: -0.5,
          mouthRotate: Math.PI * 0.8
        },
        smirk: {
          leftBrowRotate: -0.3,
          rightBrowRotate: 0.3,
          mouthRotate: Math.PI * 0.9,
          bodyRotate: 0.15
        },
        surprised: {
          leftEyeScaleY: 1.3,
          rightEyeScaleY: 1.3,
          leftBrowY: 1.65,
          rightBrowY: 1.65,
          mouthRotate: Math.PI * 2,
          mouthScale: 1.3
        },
        happy: {
          leftBrowY: 1.6,
          rightBrowY: 1.6,
          mouthScale: 1,
          mouthRotate: Math.PI * 1.1
        },
        lookLeft: {
          leftEyeX: -0.5,
          rightEyeX: 0.3,
          leftEyeY: 1.2,
          rightEyeY: 1.2,
          leftBrowX: -0.5,
          rightBrowX: 0.3,
          leftBrowY: 1.5,
          rightBrowY: 1.5,
          bodyRotate: -0.3
        },
        lookRight: {
          leftEyeX: -0.3,
          rightEyeX: 0.5,
          leftEyeY: 1.2,
          rightEyeY: 1.2,
          leftBrowX: -0.3,
          rightBrowX: 0.5,
          leftBrowY: 1.5,
          rightBrowY: 1.5,
          bodyRotate: 0.3
        },
        lookTop: {
          leftEyeY: 1.3,
          rightEyeY: 1.3,
          leftBrowY: 1.6,
          rightBrowY: 1.6,
          bodyRotate: 0
        }
      }, setInterval(() => {
        this.setEmotion();
      }, 1500), setInterval(() => {
        this.blink();
      }, y(2e3, 5e3));
    }
    blink() {
      C.to([
        this.leftEye.scale,
        this.rightEye.scale
      ], {
        duration: 0.1,
        y: 0.01,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      });
    }
    loadCharacters() {
      this.scene.add(this.characterGroup), this.body.castShadow = true, this.body.receiveShadow = true, this.characterGroup.add(this.body);
      const e = new le({
        color: 16751001,
        transparent: true,
        opacity: 0.7
      }), t = new he(0.12, 0.12, 0.05, 32);
      t.rotateX(Math.PI / 2), this.leftEye = new u(t, this.blackMat), this.characterGroup.add(this.leftEye), this.rightEye = this.leftEye.clone(), this.characterGroup.add(this.rightEye);
      const a = new x(0.08, 0.025, 16, 30, Math.PI / 1.1);
      this.leftBrow = new u(a, this.blackMat), this.characterGroup.add(this.leftBrow), this.rightBrow = new u(a, this.blackMat), this.characterGroup.add(this.rightBrow);
      const s = new x(0.08, 0.025, 16, 30, Math.PI / 1);
      this.mouth = new u(s, this.blackMat), this.characterGroup.add(this.mouth);
      const r = new R(0.18, 32, 16);
      r.scale(1, 0.6, 0.2), this.leftCheek = new u(r, e), this.characterGroup.add(this.leftCheek), this.rightCheek = new u(r, e), this.characterGroup.add(this.rightCheek), this.updateCharacterVisuals(), C.to(this.characterGroup.scale, {
        duration: 2,
        y: "+=0.03",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    updateCharacterVisuals() {
      this.characterGroup.rotation.y = this.params.bodyRotate, this.leftEye.position.set(this.params.leftEyeX, this.params.leftEyeY, this.faceZ), this.rightEye.position.set(this.params.rightEyeX, this.params.rightEyeY, this.faceZ), this.leftEye.scale.set(1, this.params.leftEyeScaleY, 1), this.rightEye.scale.set(1, this.params.rightEyeScaleY, 1), this.leftBrow.position.set(this.params.leftBrowX, this.params.leftBrowY, this.faceZ), this.rightBrow.position.set(this.params.rightBrowX, this.params.rightBrowY, this.faceZ), this.leftBrow.rotation.z = this.params.leftBrowRotate, this.rightBrow.rotation.z = this.params.rightBrowRotate, this.mouth.position.set(this.params.mouthX, this.params.mouthY, this.faceZ), this.mouth.rotation.z = this.params.mouthRotate, this.leftCheek.position.set(-0.5, 0.9, this.faceZ), this.rightCheek.position.set(0.5, 0.9, this.faceZ), this.body.material.color.set(this.params.color);
    }
  }
  class xe {
    constructor(e) {
      this.scene = e.scene, this.countInst1 = 3, this.instancesObjs = {
        instances1: {
          data: Array.from({
            length: this.countInst1
          }, (t, a) => ({
            position: new h(0, 0.2, 0),
            rotation: new de(0, 0, 0),
            scale: new h(1, 1, 1),
            size: new h(0.2, 0.2, 0.2),
            userData: {
              name: "inst1",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryInst1: new R(0.2),
          materialInst1: new S({
            color: 52224
          }),
          inst1: null
        }
      }, this.instancesObjs.instances1.inst1 = new ue(this.instancesObjs.instances1.geometryInst1, this.instancesObjs.instances1.materialInst1, this.countInst1), this.instancesObjs.instances1.inst1.instanceMatrix.setUsage(me), this.instancesObjs.instances1.inst1.receiveShadow = true, this.instancesObjs.instances1.inst1.castShadow = true, this.instancesObjs.instances1.inst1.frustumCulled = false;
    }
    init() {
      for (let e = 0; e < this.countInst1; e++) this.instancesObjs.instances1.data[e].position.x = y(-3, 3), this.instancesObjs.instances1.data[e].position.z = y(-3, 3), this.instancesObjs.instances1.data[e].position.y = y(1, 2);
      this.instancesObjs.instances1.inst1.instanceMatrix.needsUpdate = true;
    }
    toVec3(e) {
      var _a, _b, _c;
      return typeof e == "number" ? new h(e, e, e) : (e == null ? void 0 : e.isVector3) ? e : e ? new h((_a = e.x) != null ? _a : 1, (_b = e.y) != null ? _b : 1, (_c = e.z) != null ? _c : 1) : new h(1, 1, 1);
    }
  }
  console.clear();
  const i = {};
  i.clock = new I();
  async function Ae(n) {
    try {
      await Ge();
    } catch (e) {
      window.showInitError ? window.showInitError(e) : console.error("Init error", e);
    }
  }
  async function Ge() {
    const n = document.querySelector(".loader_line");
    n && (n.style.width = "30%"), await Be(), await De(), n && (n.style.width = "100%"), i.paramsClass.gameInit = true, i.ui.show("main_screen"), i.events.on("start_match", () => P()), P(), Ye();
  }
  async function P() {
    i.ui.hideAll(), i.gameClass.loadMesh(), i.instancesClass.init(), i.worldClass.loadLight(true, true), i.paramsClass.startGame();
  }
  async function Be() {
    i.initClass = new we(i), i.events = new pe(), i.scene = i.initClass.scene, i.camera = i.initClass.camera, i.renderer = i.initClass.renderer, i.ui = new Se(i), i.paramsClass = new ge(i), i.assetsManager = new Ce(i), i.audioClass = new be(i), i.dataClass = new Le(i), i.controlClass = new Ee(i), i.gameClass = new _e(i), i.worldClass = new ke(i), i.instancesClass = new xe(i), i.charactersClass = new Me(i);
  }
  async function De() {
    typeof A == "function" && await A(), i.paramsClass.initCustomScroll(), ve("ru"), await i.assetsManager.loadTextures(), await i.charactersClass.loadCharacters(), await i.audioClass.loadAudio(), await i.controlClass.addKeyListeners(), location.hostname === "localhost" && new ye().addFolder("Physics");
  }
  function Pe(n) {
    if (i.paramsClass) switch (i.paramsClass.currentGameState) {
      case i.paramsClass.gameState.play:
        break;
    }
  }
  function Ie() {
    i.initClass && i.initClass.stats && i.initClass.stats.update(), i.renderer && i.scene && i.camera && i.renderer.render(i.scene, i.camera);
  }
  function Ye() {
    let n = 0;
    const e = 1 / 60, t = 0.1;
    i.renderer.setAnimationLoop(() => {
      let a = i.clock.getDelta();
      a > t && (a = t), n += a;
      let s = 5;
      for (; n >= e && s > 0; ) Pe(), n -= e, s--;
      n > e && (n = 0), Ie();
    });
  }
  const Re = new fe(Ae);
  Re.init();
})();
export {
  __tla,
  Oe as __vite_legacy_guard
};
