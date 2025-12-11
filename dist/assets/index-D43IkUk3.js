var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B, V as g, M as z, S as K, C as U, P as N, a as H, W, b as j, c as q, A as Z, O as $, d as v, e as J, f as Q, g as ee, R as te, T as se, h as _, G as ae, i as ie, j as F, k as ne, l as oe, D as V, m as b, n as re, o as he, p as ce, q as D, r as le, s as de, t as ue, u as O, E as me, I as fe, v as ye, w as ge } from "./three-D27d1Due.js";
import { g as E } from "./gsap-Cy3i8ghA.js";
let Ve;
let __tla = (async () => {
  Ve = function() {
    import.meta.url, import("_").then(async (m) => {
      await m.__tla;
      return m;
    }).catch(() => 1), async function* () {
    }().next();
  };
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
    new MutationObserver((s) => {
      for (const o of s) if (o.type === "childList") for (const h of o.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && a(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(s) {
      const o = {};
      return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function a(s) {
      if (s.ep) return;
      s.ep = true;
      const o = t(s);
      fetch(s.href, o);
    }
  })();
  class pe {
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
  function C(r, e) {
    return Math.random() * (e - r) + r;
  }
  async function P() {
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
    let r;
    document.addEventListener("touchstart", (e) => {
      r = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }, {
      passive: false
    }), document.addEventListener("touchend", () => {
      clearTimeout(r);
    }), document.addEventListener("touchmove", () => {
      clearTimeout(r);
    }), document.addEventListener("dblclick", (e) => (e.preventDefault(), false), {
      capture: true
    }), (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (e) => {
      e.target.closest(".new_game_btn, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || e.preventDefault();
    }, {
      passive: false
    });
  }
  new B(new g(-0.5, -0.5, -0.5), new g(0.5, 0.5, 0.5));
  new z();
  class we {
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
  class be {
    constructor(e) {
      var _a;
      this.gameContext = e, this.onWindowResize = this.onWindowResize.bind(this), this.setVhVar = this.setVhVar.bind(this), this.onVisibilitychange = this.onVisibilitychange.bind(this), this.scene = new K(), this.scene.background = new U(10392058), this.camera = new N(25, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.x = 0, this.camera.position.y = 12, this.camera.position.z = 32;
      const t = 16 / 9, a = v.degToRad(25);
      this.FIXED_HFOV = 2 * Math.atan(Math.tan(a / 2) * t), this.stats = new H(), document.body.appendChild(this.stats.dom), this.stats.dom.style.top = "0", this.stats.dom.style.left = "0", this.renderer = new W({
        antialias: true
      }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = j, this.renderer.outputColorSpace = q, this.renderer.toneMapping = Z, this.renderer.toneMappingExposure = 1.05, this.controls = new $(this.camera, this.renderer.domElement), this.setVhVar(), window.addEventListener("resize", this.setVhVar), window.addEventListener("orientationchange", this.setVhVar), (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", this.setVhVar), window.addEventListener("resize", this.onWindowResize), window.addEventListener("visibilitychange", this.onVisibilitychange), this.onWindowResize(), this.onVisibilitychange();
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
      const o = v.degToRad(4), h = v.degToRad(90);
      s = v.clamp(s, o, h), this.camera.fov = v.radToDeg(s), this.camera.aspect = a, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
    }
  }
  class Ce {
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
      let t = null, a = null, s = null, o = false, h = 0, c = 0;
      const i = () => {
        for (const m of e) {
          const p = document.querySelector(m);
          if (p && !p.classList.contains("hidden_screen")) return p;
        }
        return null;
      }, l = () => {
        const m = i();
        m !== t && (t && t.removeEventListener("scroll", d, {
          passive: true
        }), s && (s.removeEventListener("mousedown", u), s.removeEventListener("touchstart", u)), t = m, a = t ? t.querySelector(".scroll-progress") : null, s = a ? a.querySelector(".scroll-progress__bar") : null, t && t.addEventListener("scroll", d, {
          passive: true
        }), s && (s.addEventListener("mousedown", u), s.addEventListener("touchstart", u)), d());
      }, d = () => {
        if (!t || !a || !s) return;
        const m = t.clientHeight, p = t.scrollHeight, k = t.scrollTop;
        if (p <= m + 1) {
          a.classList.remove("visible");
          return;
        }
        a.classList.add("visible");
        const L = a.getBoundingClientRect().height, S = Math.max(m / p * L, 24), x = p - m, G = L - S, X = x > 0 ? k / x * G : 0;
        s.style.height = "".concat(S, "px"), s.style.top = "".concat(X, "px");
      }, u = (m) => {
        !t || !s || (o = true, h = m.touches ? m.touches[0].clientY : m.clientY, c = t.scrollTop, document.body.style.userSelect = "none", m.preventDefault());
      }, f = (m) => {
        if (!o || !t || !s || !a) return;
        const k = (m.touches ? m.touches[0].clientY : m.clientY) - h, L = a.getBoundingClientRect().height, A = t.clientHeight, S = t.scrollHeight, x = Math.max(1, L - s.offsetHeight), G = (S - A) / x;
        t.scrollTop = c + k * G;
      }, y = () => {
        o = false, document.body.style.userSelect = "";
      };
      window.addEventListener("resize", () => {
        l(), d();
      }), window.addEventListener("mousemove", f, {
        passive: false
      }), window.addEventListener("touchmove", f, {
        passive: false
      }), window.addEventListener("mouseup", y), window.addEventListener("touchend", y), new MutationObserver(() => {
        l();
      }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          "class"
        ]
      }), l();
    }
  }
  class ve {
    constructor() {
      this.takeAudio, this._attached = false, this.listener = new J(), this.musicOn = true, this.musics = [];
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
      const e = new Q(), t = [
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        }
      ];
      (await Promise.all(t.map((s) => e.loadAsync(s.path).catch((o) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(s.path, ":"), o), null))))).forEach((s, o) => {
        const h = t[o];
        if (!s) return;
        const c = new ee(this.listener);
        c.setBuffer(s), c.setLoop(h.loop), c.setRefDistance(h.ref), c.setVolume(h.vol), h.rate && c.setPlaybackRate(h.rate), this[h.key] = c, this.musics.push({
          name: h.name,
          music: c
        });
      });
    }
    stopMusic(e) {
      this.musicOn && (e == 0 ? this.musics.forEach((t, a, s) => {
        t.music.stop();
      }) : e.forEach((t, a, s) => {
        this.musics.find((o) => o.name === t).music.stop();
      }));
    }
    pauseMusic(e) {
      this.musicOn && e.forEach((t, a, s) => {
        this.musics.find((o) => o.name === t).music.pause();
      });
    }
    playMusic(e) {
      e.forEach((t, a, s) => {
        let o = this.musics.find((h) => h.name === t).music;
        !o.isPlaying && this.musicOn && o.play();
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
      this.renderer = e.renderer, this.camera = e.camera, this.events = e.events, this.mouse = new g(), this.raycaster = new te(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
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
  const T = {
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
  function I(r, e) {
    return e.split(".").reduce((t, a) => t && t[a], r);
  }
  function R(r = "ru", e = document) {
    const t = T[r] || T.ru;
    if (e.querySelectorAll("[data-i18n]").forEach((s) => {
      const o = s.dataset.i18n, h = I(t, o);
      h != null && (s.textContent = h);
    }), document.documentElement.lang = r, localStorage.setItem("locale", r), document.getElementById("lang-toggle")) {
      const s = document.getElementById("flag");
      I(t, "ui.langToggle") === "ru" || r === "ru" ? (s.classList.remove("us"), s.classList.add("ru"), s.src = "images/ru.svg") : (s.classList.remove("ru"), s.classList.add("us"), s.src = "images/us.svg");
    }
  }
  function Le(r) {
    R(r);
    const e = document.getElementById("lang-toggle");
    document.getElementById("flag"), e && e.addEventListener("click", () => {
      const a = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      R(a);
    });
  }
  class Se {
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
  class xe {
    constructor() {
      this.planeGrass = {
        texture: null,
        material: null
      }, this.model = null;
    }
    async loadTextures() {
      const e = new se(), [t] = await Promise.all([
        e.loadAsync("textures/grass.jpg")
      ]);
      this.planeGrass.texture = t, this.planeGrass.material = new _({
        map: t
      });
    }
    async loadModels() {
      await new ae().loadAsync("models/model.glb").then((a) => {
        const s = a.scene, o = a.animations;
        s.scale.x = 2, s.scale.y = 2, s.scale.z = 2, s.position.y = 0, s.rotation.y = -Math.PI / 3, this.model = s, this.model.userData.mixer = new ie(this.model), this.model.userData.action = this.model.userData.mixer.clipAction(o[0]), this.model.userData.action.play(), this.model.userData.clock = new F();
      });
    }
  }
  class Me {
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
      let e = new ne(this.options.size.w, this.options.size.h, this.options.size.d), t = new oe({
        color: 10392058,
        side: V
      });
      this.ground = new b(e, t), this.ground.userData = {
        ...this.options
      }, this.ground.rotateX(Math.PI / 2), this.ground.receiveShadow = true;
    }
  }
  class ke {
    constructor(e) {
      this.scene = e.scene, this.dirLight = null, this.ambientLight = null;
    }
    loadLight(e = true, t = true) {
      this.ambientLight = new re(16777215, 1), this.dirLight = new he(16777215, 1), this.dirLight.position.set(-3, 5, 1), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 100, e && this.scene.add(this.ambientLight), t && this.scene.add(this.dirLight);
    }
  }
  class M {
    constructor(e) {
      __publicField(this, "setEmotion", (e = "neutral") => {
        const t = this.emotions[e] || {}, a = this.defaults.mouth, s = t.mouth || {}, o = {
          ...a
        };
        s.shape === "half" && (o.thetaLength = Math.PI), s.shape === "full" && (o.thetaLength = Math.PI * 2), s.open !== void 0 && (o.openEnded = s.open), [
          "radiusTop",
          "radiusBottom",
          "height",
          "radialSegments",
          "heightSegments",
          "openEnded",
          "thetaStart",
          "thetaLength"
        ].forEach((d) => {
          s[d] !== void 0 && (o[d] = s[d]);
        }), this.updateMouthGeometry(o);
        const c = 1.2, i = "back.out(1.7)", l = (d, u) => u === void 0 ? d : typeof d == "string" ? u : d + u;
        if ([
          "bodyRotate",
          "color"
        ].forEach((d) => {
          const u = l(this.defaults[d], t[d]);
          E.to(this.params, {
            [d]: u,
            duration: c,
            ease: i
          });
        }), [
          "eyes",
          "brows",
          "cheeks"
        ].forEach((d) => {
          Object.keys(this.defaults[d]).forEach((u) => {
            const f = this.defaults[d][u], y = t[d] && t[d][u] ? t[d][u] : [
              0,
              0
            ];
            E.to(this.params[d][u], {
              0: f[0] + y[0],
              1: f[1] + y[1],
              duration: c,
              ease: i,
              onUpdate: () => this.updateCharacterVisuals()
            });
          });
        }), this.defaults.mouth) {
          const d = this.defaults.mouth, u = t.mouth || {}, f = {};
          [
            "x",
            "y",
            "scaleX",
            "scaleY",
            "rotationX",
            "rotationY"
          ].forEach((w) => {
            f[w] = d[w] + (u[w] || 0);
          }), E.to(this.params.mouth, {
            ...f,
            duration: c,
            ease: i,
            onUpdate: () => this.updateCharacterVisuals()
          });
        }
      });
      this.scene = e.scene, this.gui = e.gui, this.characterGroup = new ce(), this.eyes = [], this.brows = [], this.cheeks = [], this.mouth = null, this.currentMouthParams = {}, this.faceZ = 0.62, this.bodyMat = new _({
        color: 9364655,
        roughness: 0.9
      }), this.body = null, this.heightBody = 4.2, this.blackMat = new _({
        color: 7556154,
        side: V
      }), this.defaults = {
        bodyRotate: 0,
        color: "#8EE4AF",
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
            1.5,
            1.5
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
            0.9,
            0.9
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
          y: 0.6,
          scaleX: -0.1,
          scaleY: 1.101,
          rotationX: -Math.PI / 2,
          rotationZ: -Math.PI / 2,
          radiusTop: 0.1,
          radiusBottom: 0.12,
          height: 0.05,
          radialSegments: 12,
          heightSegments: 1,
          openEnded: false,
          thetaStart: 0,
          thetaLength: 2.9
        }
      }, this.initialDefaults = JSON.parse(JSON.stringify(this.defaults)), this.params = JSON.parse(JSON.stringify(this.defaults)), this.emotionsSmile = {
        neutral: {
          mouth: {}
        },
        smile: {
          brows: {
            y: [
              0.05,
              0.05
            ]
          },
          mouth: {
            thetaLength: Math.PI,
            scaleX: 0.2,
            scaleY: 0.5
          }
        },
        laugh: {
          bodyRotate: 0.1,
          eyes: {
            scaleY: [
              -0.8,
              -0.8
            ]
          },
          brows: {
            y: [
              0.2,
              0.2
            ]
          },
          mouth: {
            thetaLength: Math.PI,
            scaleX: 0.5,
            scaleY: 1
          }
        },
        excited: {
          bodyRotate: -0.2,
          eyes: {
            scaleY: [
              0.3,
              0.3
            ],
            scaleX: [
              0.2,
              0.2
            ]
          },
          brows: {
            y: [
              0.3,
              0.3
            ]
          },
          mouth: {
            thetaLength: Math.PI,
            scaleX: 0.6,
            scaleY: 1.2,
            openEnded: false
          }
        },
        proud: {
          bodyRotate: 0,
          eyes: {
            scaleY: [
              -0.85,
              -0.85
            ]
          },
          brows: {
            y: [
              0.2,
              0.2
            ]
          },
          mouth: {
            thetaLength: Math.PI,
            scaleX: 0.4,
            scaleY: 0.4,
            y: 0.1
          }
        }
      }, this.emotionsIdle = {
        idle_breathe: {
          bodyRotate: 0.02,
          mouth: {
            scaleX: 0.05,
            scaleY: 0.02
          }
        },
        idle_left: {
          eyes: {
            x: [
              -0.08,
              -0.08
            ]
          },
          brows: {
            x: [
              -0.05,
              -0.05
            ]
          },
          mouth: {
            x: -0.02
          }
        },
        idle_right: {
          eyes: {
            x: [
              0.08,
              0.08
            ]
          },
          brows: {
            x: [
              0.05,
              0.05
            ]
          },
          mouth: {
            x: 0.02
          }
        },
        idle_focus: {
          eyes: {
            scaleY: [
              -0.15,
              -0.15
            ]
          },
          brows: {
            y: [
              -0.05,
              -0.05
            ]
          },
          mouth: {
            scaleX: -0.1
          }
        },
        idle_alert: {
          bodyRotate: -0.05,
          eyes: {
            scaleY: [
              0.1,
              0.1
            ]
          },
          brows: {
            y: [
              0.1,
              0.1
            ]
          },
          mouth: {
            scaleY: -0.1
          }
        },
        idle_hm: {
          bodyRotate: 0.05,
          brows: {
            y: [
              0,
              0.15
            ]
          },
          mouth: {
            rotationX: 0.1
          }
        },
        idle_chill: {
          eyes: {
            scaleY: [
              -0.05,
              -0.05
            ]
          },
          brows: {
            rotation: [
              0.1,
              -0.1
            ]
          },
          mouth: {
            scaleX: 0.05
          }
        },
        idle_tilt: {
          bodyRotate: -0.15,
          eyes: {
            x: [
              0.02,
              0.02
            ]
          }
        },
        idle_low: {
          bodyRotate: 0.05,
          brows: {
            y: [
              -0.05,
              -0.05
            ],
            rotation: [
              -0.1,
              0.1
            ]
          },
          mouth: {
            y: -0.05
          }
        },
        idle_check: {
          eyes: {
            x: [
              0.05,
              0.05
            ],
            scaleY: [
              -0.1,
              -0.1
            ]
          },
          brows: {
            y: [
              0.05,
              0.05
            ]
          },
          mouth: {
            scaleX: -0.15
          }
        }
      }, this.emotions = this.emotionsIdle, this.setupGui(), setInterval(() => {
        const t = Object.keys(this.emotions), a = t[Math.floor(Math.random() * t.length)];
        this.setEmotion(a), console.log("Current Emotion:", a);
      }, C(1500, 4e3)), setInterval(() => {
        this.blink();
      }, C(2e3, 4e3));
    }
    updateMouthGeometry(e) {
      const t = [
        "radiusTop",
        "radiusBottom",
        "height",
        "radialSegments",
        "heightSegments",
        "openEnded",
        "thetaStart",
        "thetaLength"
      ];
      let a = false;
      for (const o of t) if (this.currentMouthParams[o] !== e[o]) {
        a = true;
        break;
      }
      if (!a && this.mouth) return;
      this.mouth && this.mouth.geometry && this.mouth.geometry.dispose();
      const s = new D(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
      s.rotateX(Math.PI / 2), s.center(), this.mouth ? this.mouth.geometry = s : (this.mouth = new b(s, this.blackMat), this.characterGroup.add(this.mouth)), this.currentMouthParams = {
        ...e
      };
    }
    blink() {
      if (this.eyes.length < 2) return;
      const e = {
        val: 1
      };
      E.to(e, {
        val: 0.1,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onUpdate: () => {
          this.eyes.forEach((t, a) => {
            t.scale.setY(this.params.eyes.scaleY[a] * e.val);
          });
        }
      });
    }
    loadCharacters(e = this.defaults.color, t = 1) {
      this.scene.add(this.characterGroup), this.savedScaleY = t, this.body = new b(new le(1.5, this.heightBody * t, 1.2, 8, 0.3), this.bodyMat), this.body.position.y = this.heightBody * t / 2 - 2.2, this.body.material.color.set(e), this.body.castShadow = true, this.body.receiveShadow = true, this.characterGroup.add(this.body);
      const a = new de({
        color: 16751001,
        transparent: true,
        opacity: 0.7
      }), s = new D(0.12, 0.12, 0.05, 32);
      s.rotateX(Math.PI / 2);
      for (let c = 0; c < 2; c++) {
        const i = new b(s, this.blackMat);
        this.characterGroup.add(i), this.eyes.push(i);
      }
      const o = new ue(0.08, 0.025, 16, 30, Math.PI / 1.1);
      for (let c = 0; c < 2; c++) {
        const i = new b(o, this.blackMat);
        this.characterGroup.add(i), this.brows.push(i);
      }
      this.updateMouthGeometry(this.defaults.mouth);
      const h = new O(0.18, 32, 16);
      h.scale(1, 0.6, 0.2);
      for (let c = 0; c < 2; c++) {
        const i = new b(h, a);
        this.characterGroup.add(i), this.cheeks.push(i);
      }
      this.updateCharacterVisuals(), E.to(this.characterGroup.scale, {
        duration: C(1.7, 2.3),
        y: "+=0.03",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    updateCharacterVisuals(e) {
      const t = this.savedScaleY || 1, a = this.heightBody * t / 2 - 2.2, s = Math.max(t, 0.65), o = 2.1, h = this.heightBody * t / 2, c = (i) => {
        const l = o - i;
        return a + h - l * s;
      };
      this.characterGroup.rotation.y = this.params.bodyRotate;
      for (let i = 0; i < 2; i++) this.eyes[i].position.set(this.params.eyes.x[i] * s, c(this.params.eyes.y[i]), this.faceZ), this.eyes[i].scale.set(this.params.eyes.scaleX[i] * s, this.params.eyes.scaleY[i] * s, 1), this.brows[i].position.set(this.params.brows.x[i] * s, c(this.params.brows.y[i]), this.faceZ), this.brows[i].rotation.z = this.params.brows.rotation[i], this.cheeks[i].position.set(this.params.cheeks.x[i] * (s * 1.1), c(this.params.cheeks.y[i]), this.faceZ), this.cheeks[i].scale.set(this.params.cheeks.scaleX[i] * s, this.params.cheeks.scaleY[i] * 0.6 * s, 0.2), this.cheeks[i].material.opacity !== void 0 && (this.cheeks[i].material.opacity = this.params.cheeks.opacity[i]);
      this.mouth && (this.mouth.position.set(this.params.mouth.x, c(this.params.mouth.y), this.faceZ), this.mouth.rotation.x = this.params.mouth.rotationX, this.mouth.rotation.z = this.params.mouth.rotationZ, this.mouth.scale.set(this.params.mouth.scaleX * s, this.params.mouth.scaleY * s, 1));
    }
    setupGui() {
      if (!this.gui) return;
      const e = () => {
        this.applyGuiToParams(), this.updateCharacterVisuals(), this.logChanges();
      }, t = () => {
        this.applyGuiToParams(), this.updateMouthGeometry(this.params.mouth), this.logChanges();
      }, a = this.gui.addFolder("Person");
      a.add(this.defaults, "bodyRotate", -3, 3).onChange(e), a.addColor(this.defaults, "color").onChange(e);
      const s = (c, i) => {
        const l = this.gui.addFolder(c);
        l.add(i.x, "0", -1, 0).name("Left X").onChange(e), l.add(i.x, "1", 0, 1).name("Right X").onChange(e), l.add(i.y, "0", 0, 3).name("Left Y").onChange(e), l.add(i.y, "1", 0, 3).name("Right Y").onChange(e), i.rotation && (l.add(i.rotation, "0", -3, 3).name("Left Rot").onChange(e), l.add(i.rotation, "1", -3, 3).name("Right Rot").onChange(e)), i.scaleX ? (l.add(i.scaleX, "0", 0, 3).name("L Scale X").onChange(e), l.add(i.scaleX, "1", 0, 3).name("R Scale X").onChange(e), l.add(i.scaleY, "0", 0, 3).name("L Scale Y").onChange(e), l.add(i.scaleY, "1", 0, 3).name("R Scale Y").onChange(e)) : i.scale && (l.add(i.scale, "0", 0, 3).name("L Scale").onChange(e), l.add(i.scale, "1", 0, 3).name("R Scale").onChange(e)), i.opacity && (l.add(i.opacity, "0", 0, 1).name("L Opacity").onChange(e), l.add(i.opacity, "1", 0, 1).name("R Opacity").onChange(e));
      };
      s("Eyes", this.defaults.eyes), s("Brows", this.defaults.brows), s("Cheeks", this.defaults.cheeks);
      const o = this.gui.addFolder("Mouth Transform");
      o.add(this.defaults.mouth, "x", -1, 1).onChange(e), o.add(this.defaults.mouth, "y", 0, 2).onChange(e), o.add(this.defaults.mouth, "scaleX", 0, 3).onChange(e), o.add(this.defaults.mouth, "scaleY", 0, 3).onChange(e), o.add(this.defaults.mouth, "rotationX", -Math.PI, Math.PI).onChange(e), o.add(this.defaults.mouth, "rotationZ", -Math.PI, Math.PI).onChange(e);
      const h = this.gui.addFolder("Mouth Geometry");
      h.add(this.defaults.mouth, "radiusTop", 0, 1).onChange(t), h.add(this.defaults.mouth, "radiusBottom", 0, 1).onChange(t), h.add(this.defaults.mouth, "height", 0.01, 1).onChange(t), h.add(this.defaults.mouth, "radialSegments", 3, 64, 1).onChange(t), h.add(this.defaults.mouth, "openEnded").onChange(t), h.add(this.defaults.mouth, "thetaStart", 0, Math.PI * 2).onChange(t), h.add(this.defaults.mouth, "thetaLength", 0, Math.PI * 2).onChange(t);
    }
    applyGuiToParams() {
      [
        "eyes",
        "brows",
        "cheeks"
      ].forEach((e) => {
        Object.keys(this.defaults[e]).forEach((t) => {
          this.params[e][t] && (this.params[e][t][0] = this.defaults[e][t][0], this.params[e][t][1] = this.defaults[e][t][1]);
        });
      }), Object.keys(this.defaults.mouth).forEach((e) => {
        this.params.mouth[e] = this.defaults.mouth[e];
      }), this.params.bodyRotate = this.defaults.bodyRotate, this.params.color = this.defaults.color;
    }
    logChanges() {
      const e = {}, t = (i) => Math.round(i * 1e3) / 1e3, a = this.defaults.bodyRotate - this.initialDefaults.bodyRotate;
      Math.abs(a) > 1e-3 && (e.bodyRotate = t(a)), [
        "eyes",
        "brows",
        "cheeks"
      ].forEach((i) => {
        const l = {};
        let d = false;
        Object.keys(this.defaults[i]).forEach((u) => {
          const f = this.defaults[i][u], y = this.initialDefaults[i][u];
          if (Array.isArray(f) && Array.isArray(y)) {
            const w = f[0] - y[0], m = f[1] - y[1];
            (Math.abs(w) > 1e-3 || Math.abs(m) > 1e-3) && (l[u] = [
              t(w),
              t(m)
            ], d = true);
          }
        }), d && (e[i] = l);
      });
      const s = {};
      let o = false;
      const h = this.defaults.mouth, c = this.initialDefaults.mouth;
      [
        "x",
        "y",
        "scaleX",
        "scaleY",
        "rotationX",
        "rotationZ"
      ].forEach((i) => {
        const l = h[i] - c[i];
        Math.abs(l) > 1e-3 && (s[i] = t(l), o = true);
      }), [
        "radiusTop",
        "radiusBottom",
        "height",
        "radialSegments",
        "heightSegments",
        "openEnded",
        "thetaStart",
        "thetaLength"
      ].forEach((i) => {
        h[i] !== c[i] && (s[i] = typeof h[i] == "number" ? t(h[i]) : h[i], o = true);
      }), o && (e.mouth = s), Object.keys(e).length > 0 && (console.clear(), console.log("\u2702\uFE0F Copy this object to 'this.emotions':"), console.log(e));
    }
  }
  class Ge {
    constructor(e) {
      this.scene = e.scene, this.countInst1 = 3, this.instancesObjs = {
        instances1: {
          data: Array.from({
            length: this.countInst1
          }, (t, a) => ({
            position: new g(0, 0.2, 0),
            rotation: new me(0, 0, 0),
            scale: new g(1, 1, 1),
            size: new g(0.2, 0.2, 0.2),
            userData: {
              name: "inst1",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryInst1: new O(0.2),
          materialInst1: new _({
            color: 52224
          }),
          inst1: null
        }
      }, this.instancesObjs.instances1.inst1 = new fe(this.instancesObjs.instances1.geometryInst1, this.instancesObjs.instances1.materialInst1, this.countInst1), this.instancesObjs.instances1.inst1.instanceMatrix.setUsage(ye), this.instancesObjs.instances1.inst1.receiveShadow = true, this.instancesObjs.instances1.inst1.castShadow = true, this.instancesObjs.instances1.inst1.frustumCulled = false;
    }
    init() {
      for (let e = 0; e < this.countInst1; e++) this.instancesObjs.instances1.data[e].position.x = C(-3, 3), this.instancesObjs.instances1.data[e].position.z = C(-3, 3), this.instancesObjs.instances1.data[e].position.y = C(1, 2);
      this.instancesObjs.instances1.inst1.instanceMatrix.needsUpdate = true;
    }
    toVec3(e) {
      var _a, _b, _c;
      return typeof e == "number" ? new g(e, e, e) : (e == null ? void 0 : e.isVector3) ? e : e ? new g((_a = e.x) != null ? _a : 1, (_b = e.y) != null ? _b : 1, (_c = e.z) != null ? _c : 1) : new g(1, 1, 1);
    }
  }
  console.clear();
  const n = {};
  n.clock = new F();
  async function Ae(r) {
    try {
      await De();
    } catch (e) {
      window.showInitError ? window.showInitError(e) : console.error("Init error", e);
    }
  }
  async function De() {
    const r = document.querySelector(".loader_line");
    r && (r.style.width = "30%"), await Pe(), await Te(), r && (r.style.width = "100%"), n.paramsClass.gameInit = true, n.ui.show("main_screen"), n.events.on("start_match", () => Y()), Y(), Ye();
  }
  async function Y() {
    n.ui.hideAll(), n.gameClass.loadMesh(), n.instancesClass.init(), n.worldClass.loadLight(true, true), n.paramsClass.startGame();
  }
  async function Pe() {
    n.initClass = new be(n), n.events = new we(), n.scene = n.initClass.scene, n.camera = n.initClass.camera, n.renderer = n.initClass.renderer, n.gui = new ge(), n.ui = new Me(n), n.paramsClass = new Ce(n), n.assetsManager = new xe(n), n.audioClass = new ve(n), n.dataClass = new Se(n), n.controlClass = new Ee(n), n.gameClass = new _e(n), n.worldClass = new ke(n), n.instancesClass = new Ge(n), n.charactersClass1 = new M(n), n.charactersClass2 = new M(n), n.charactersClass3 = new M(n), n.charactersClass4 = new M(n), n.charactersClass1.characterGroup.position.x = -3, n.charactersClass2.characterGroup.position.x = -1, n.charactersClass3.characterGroup.position.x = 1, n.charactersClass4.characterGroup.position.x = 3;
  }
  async function Te() {
    typeof P == "function" && await P(), n.paramsClass.initCustomScroll(), Le("ru"), await n.assetsManager.loadTextures(), await n.charactersClass1.loadCharacters("#FEAEAA", 0.3), await n.charactersClass2.loadCharacters("#C0AFED", 0.5), await n.charactersClass3.loadCharacters("#A4E5BD", 0.7), await n.charactersClass4.loadCharacters("#FCE26E"), await n.audioClass.loadAudio(), await n.controlClass.addKeyListeners(), location.hostname === "localhost" && n.gui.addFolder("Physics");
  }
  function Ie(r) {
    if (n.paramsClass) switch (n.paramsClass.currentGameState) {
      case n.paramsClass.gameState.play:
        break;
    }
  }
  function Re() {
    n.initClass && n.initClass.stats && n.initClass.stats.update(), n.renderer && n.scene && n.camera && n.renderer.render(n.scene, n.camera);
  }
  function Ye() {
    let r = 0;
    const e = 1 / 60, t = 0.1;
    n.renderer.setAnimationLoop(() => {
      let a = n.clock.getDelta();
      a > t && (a = t), r += a;
      let s = 5;
      for (; r >= e && s > 0; ) Ie(), r -= e, s--;
      r > e && (r = 0), Re();
    });
  }
  const Fe = new pe(Ae);
  Fe.init();
})();
export {
  __tla,
  Ve as __vite_legacy_guard
};
