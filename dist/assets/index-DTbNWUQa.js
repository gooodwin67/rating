import { B as le, V as p, M as pe, S as he, C as oe, P as _e, a as ue, W as Ie, b as ke, c as ve, A as be, O as Ne, d as f, e as fe, f as ze, g as we, R as se, T as Se, h as S, G as Ce, i as xe, j as re, k as C, l as Te, m as Le, n as H, D as A, o as N, p as U, q as Ee, r as Re, s as Me, t as Ge, u as V, v as W, w as Ae, x as Pe, y as me, E as je, I as De, z as Ye, F as Oe } from "./three-1bRjm0QW.js";
import { g as w } from "./gsap-Cy3i8ghA.js";
let Da;
let __tla = (async () => {
  Da = function() {
    import.meta.url, import("_").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).catch(() => 1), async function* () {
    }().next();
  };
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
    new MutationObserver((i) => {
      for (const o of i) if (o.type === "childList") for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && t(r);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function a(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function t(i) {
      if (i.ep) return;
      i.ep = true;
      const o = a(i);
      fetch(i.href, o);
    }
  })();
  class Be {
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
          onError: (a) => {
            console.error("Reward error:", a), e.onError && e.onError(a);
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
      let a = "Init error";
      e && (e.message ? a += ": " + e.message : a += ": " + String(e)), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
        this._renderInitError(a);
      }, {
        once: true
      }) : this._renderInitError(a);
    }
    _renderInitError(e) {
      const a = document.body || document.documentElement;
      if (!a) return;
      let t = document.getElementById("debug-error-overlay");
      t || (t = document.createElement("div"), t.id = "debug-error-overlay", t.className = "debug_error_overlay", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%", t.style.background = "rgba(0,0,0,0.85)", t.style.color = "red", t.style.zIndex = "9999", t.style.padding = "20px", t.style.whiteSpace = "pre-wrap", t.style.fontFamily = "monospace", a.appendChild(t)), t.textContent = e;
    }
    _setupGlobalErrorListeners() {
      window.addEventListener("error", (e) => {
        if (!e) return;
        const a = [];
        e.message && a.push(e.message), e.filename && a.push("at " + e.filename + ":" + e.lineno + ":" + e.colno), e.error && e.error.stack && a.push(e.error.stack), this.showInitError(a.join("\n"));
      }), window.addEventListener("unhandledrejection", (e) => {
        if (!e) return;
        const a = e.reason || "unhandledrejection";
        a.stack ? this.showInitError(a.stack) : this.showInitError(String(a));
      });
    }
  }
  function z(g, e) {
    return Math.random() * (e - g) + g;
  }
  async function q() {
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
    let g;
    document.addEventListener("touchstart", (e) => {
      g = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }, {
      passive: false
    }), document.addEventListener("touchend", () => {
      clearTimeout(g);
    }), document.addEventListener("touchmove", () => {
      clearTimeout(g);
    }), document.addEventListener("dblclick", (e) => (e.preventDefault(), false), {
      capture: true
    }), (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (e) => {
      e.target.closest(".new_game_btn, .category-card, .choice-card, .small-pill, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || e.preventDefault();
    }, {
      passive: false
    });
  }
  new le(new p(-0.5, -0.5, -0.5), new p(0.5, 0.5, 0.5));
  new pe();
  class Fe {
    constructor() {
      this.events = {};
    }
    on(e, a) {
      this.events[e] || (this.events[e] = []), this.events[e].push(a);
    }
    off(e, a) {
      this.events[e] && (this.events[e] = this.events[e].filter((t) => t !== a));
    }
    emit(e, a) {
      this.events[e] && this.events[e].forEach((t) => t(a));
    }
  }
  class $e {
    constructor(e) {
      var _a2;
      this.gameContext = e, this.onWindowResize = this.onWindowResize.bind(this), this.setVhVar = this.setVhVar.bind(this), this.onVisibilitychange = this.onVisibilitychange.bind(this), this.scene = new he(), this.scene.background = new oe(10392058), this.camera = new _e(25, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.x = 0, this.camera.position.y = 3.2, this.camera.position.z = 27;
      const a = 16 / 9, t = f.degToRad(25);
      this.FIXED_HFOV = 2 * Math.atan(Math.tan(t / 2) * a), this.stats = new ue(), document.body.appendChild(this.stats.dom), this.stats.dom.style.top = "0", this.stats.dom.style.left = "0", this.renderer = new Ie({
        antialias: true
      }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = ke, this.renderer.outputColorSpace = ve, this.renderer.toneMapping = be, this.renderer.toneMappingExposure = 1.05, this.controls = new Ne(this.camera, document.body), this.controls.enabled = false, this.controls.enableDamping = true, this.controls.dampingFactor = 0.08, this.controls.target.set(0, -0.75, 0), this.controls.update(), this.setVhVar(), window.addEventListener("resize", this.setVhVar), window.addEventListener("orientationchange", this.setVhVar), (_a2 = window.visualViewport) == null ? void 0 : _a2.addEventListener("resize", this.setVhVar), window.addEventListener("resize", this.onWindowResize), window.addEventListener("visibilitychange", this.onVisibilitychange), this.onWindowResize(), this.onVisibilitychange();
    }
    setVhVar() {
      var _a2;
      const e = (((_a2 = window.visualViewport) == null ? void 0 : _a2.height) || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
    }
    onVisibilitychange() {
      this.gameContext.audioClass;
    }
    onWindowResize() {
      const e = document.body.offsetWidth, a = document.body.offsetHeight, t = e / a;
      let i = 2 * Math.atan(Math.tan(this.FIXED_HFOV / 2) / t);
      const o = f.degToRad(4), r = f.degToRad(90);
      i = f.clamp(i, o, r), this.camera.fov = f.radToDeg(i), this.camera.aspect = t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, a);
    }
  }
  class Ue {
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
      let a = null, t = null, i = null, o = false, r = 0, s = 0;
      const y = () => {
        for (const u of e) {
          const b = document.querySelector(u);
          if (b && !b.classList.contains("hidden_screen")) return b;
        }
        return null;
      }, n = () => {
        const u = y();
        u !== a && (a && a.removeEventListener("scroll", l, {
          passive: true
        }), i && (i.removeEventListener("mousedown", _), i.removeEventListener("touchstart", _)), a = u, t = a ? a.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, a && a.addEventListener("scroll", l, {
          passive: true
        }), i && (i.addEventListener("mousedown", _), i.addEventListener("touchstart", _)), l());
      }, l = () => {
        if (!a || !t || !i) return;
        const u = a.clientHeight, b = a.scrollHeight, D = a.scrollTop;
        if (b <= u + 1) {
          t.classList.remove("visible");
          return;
        }
        t.classList.add("visible");
        const T = t.getBoundingClientRect().height, L = Math.max(u / b * T, 24), E = b - u, Y = T - L, de = E > 0 ? D / E * Y : 0;
        i.style.height = "".concat(L, "px"), i.style.top = "".concat(de, "px");
      }, _ = (u) => {
        !a || !i || (o = true, r = u.touches ? u.touches[0].clientY : u.clientY, s = a.scrollTop, document.body.style.userSelect = "none", u.preventDefault());
      }, I = (u) => {
        if (!o || !a || !i || !t) return;
        const D = (u.touches ? u.touches[0].clientY : u.clientY) - r, T = t.getBoundingClientRect().height, X = a.clientHeight, L = a.scrollHeight, E = Math.max(1, T - i.offsetHeight), Y = (L - X) / E;
        a.scrollTop = s + D * Y;
      }, v = () => {
        o = false, document.body.style.userSelect = "";
      };
      window.addEventListener("resize", () => {
        n(), l();
      }), window.addEventListener("mousemove", I, {
        passive: false
      }), window.addEventListener("touchmove", I, {
        passive: false
      }), window.addEventListener("mouseup", v), window.addEventListener("touchend", v), new MutationObserver(() => {
        n();
      }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          "class"
        ]
      }), n();
    }
  }
  class Xe {
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
      const e = new ze(), a = [
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        }
      ];
      (await Promise.all(a.map((i) => e.loadAsync(i.path).catch((o) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(i.path, ":"), o), null))))).forEach((i, o) => {
        const r = a[o];
        if (!i) return;
        const s = new we(this.listener);
        s.setBuffer(i), s.setLoop(r.loop), s.setRefDistance(r.ref), s.setVolume(r.vol), r.rate && s.setPlaybackRate(r.rate), this[r.key] = s, this.musics.push({
          name: r.name,
          music: s
        });
      });
    }
    stopMusic(e) {
      this.musicOn && (e == 0 ? this.musics.forEach((a, t, i) => {
        a.music.stop();
      }) : e.forEach((a, t, i) => {
        this.musics.find((o) => o.name === a).music.stop();
      }));
    }
    pauseMusic(e) {
      this.musicOn && e.forEach((a, t, i) => {
        this.musics.find((o) => o.name === a).music.pause();
      });
    }
    playMusic(e) {
      e.forEach((a, t, i) => {
        let o = this.musics.find((r) => r.name === a).music;
        !o.isPlaying && this.musicOn && o.play();
      });
    }
    togglePauseAll(e) {
      this.musicOn && (e ? (this.musicNowPlaying = [], this.musics.forEach(({ music: a }) => {
        a.isPlaying && (a.pause(), this.musicNowPlaying.push(a));
      })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((a) => {
        a.isPlaying || a.play();
      }), this.musicNowPlaying = []));
    }
  }
  class He {
    constructor(e) {
      this.renderer = e.renderer, this.camera = e.camera, this.events = e.events, this.mouse = new p(), this.raycaster = new se(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
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
      let a = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((e.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
    }
    onTapUp(e) {
      let a = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((e.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera);
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
  const P = {
    ru: {
      ui: {
        langToggle: "EN"
      },
      title: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0432\u0441\u0435\u0433\u043E!",
      menuEyebrow: "\u0418\u0433\u0440\u0430 \u0432\u043A\u0443\u0441\u0430 \u0438 \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u0438",
      menuSubtitle: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0438\u0440\u0430\u0439, \u0447\u0442\u043E \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0442\u0435\u0431\u0435. \u041F\u043E\u0442\u043E\u043C \u043F\u0440\u043E\u0431\u0443\u0439 \u0443\u0433\u0430\u0434\u0430\u0442\u044C, \u0447\u0442\u043E \u043B\u044E\u0431\u044F\u0442 \u0434\u0440\u0443\u0433\u0438\u0435.",
      btnChoiceMode: "\u0427\u0442\u043E \u043B\u044E\u0431\u0438\u0448\u044C \u0442\u044B?",
      btnChoiceModeSub: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439 \u043F\u0430\u0440\u044B \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F",
      btnGuessMode: "\u0427\u0442\u043E \u043B\u044E\u0431\u044F\u0442 \u043B\u044E\u0434\u0438?",
      btnGuessModeSub: "\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u0439 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0438 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433",
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
      guessCategoriesEyebrow: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0440\u0435\u0436\u0438\u043C",
      guessCategoriesTitle: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043B\u044E\u0434\u0435\u0439",
      guessCategoriesSubtitle: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u0443\u044E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0438 \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u0439, \u0447\u0442\u043E \u0447\u0430\u0449\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u043B\u0438 \u0432 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438\u0433\u0440\u0435.",
      guessReady: "\u0413\u043E\u0442\u043E\u0432\u043E",
      guessLockedBadge: "\u0417\u0430\u043A\u0440\u044B\u0442\u043E",
      guessNotEnoughData: "\u041C\u0430\u043B\u043E \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
      itemsWithDataLabel: "\u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438",
      guessScoreLabel: "\u041E\u0447\u043A\u0438:",
      guessQuestion: "\u0427\u0442\u043E \u0447\u0430\u0449\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u043B\u0438 \u043B\u044E\u0434\u0438?",
      guessTapToChoose: "\u041D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u0433\u0430\u0434\u0430\u0442\u044C",
      guessCorrect: "\u0412\u0435\u0440\u043D\u043E!",
      guessWrong: "\u041F\u0440\u043E\u043C\u0430\u0445. \u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437 \u043F\u043E\u0439\u043C\u0430\u0435\u0448\u044C \u0432\u043E\u043B\u043D\u0443.",
      next: "\u0414\u0430\u043B\u044C\u0448\u0435",
      finish: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C",
      guessCompleteEyebrow: "\u0421\u0435\u0441\u0441\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
      guessCompleteTitle: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430",
      guessCompleteText: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433:",
      backToGuessCategories: "\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C \u0443\u0433\u0430\u0434\u044B\u0432\u0430\u043D\u0438\u044F",
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
      title: "Rating of Everything!",
      menuEyebrow: "A game of taste and intuition",
      menuSubtitle: "First choose what you like. Then try to guess what other people like.",
      btnChoiceMode: "What do you like?",
      btnChoiceModeSub: "Pick pairs and unlock categories for guessing",
      btnGuessMode: "What do people like?",
      btnGuessModeSub: "Guess the popular choice and raise your rating",
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
      guessCategoriesEyebrow: "Second mode",
      guessCategoriesTitle: "Guess people",
      guessCategoriesSubtitle: "Choose an unlocked category and guess what was picked more often in the first game.",
      guessReady: "Ready",
      guessLockedBadge: "Locked",
      guessNotEnoughData: "Not enough local data",
      itemsWithDataLabel: "with data",
      guessScoreLabel: "Score:",
      guessQuestion: "What did people choose more often?",
      guessTapToChoose: "Tap to guess",
      guessCorrect: "Correct!",
      guessWrong: "Missed it. Catch the wave next time.",
      next: "Next",
      finish: "Finish",
      guessCompleteEyebrow: "Session complete",
      guessCompleteTitle: "Category completed",
      guessCompleteText: "Current rating:",
      backToGuessCategories: "Back to guess categories",
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
  function O(g, e) {
    return e.split(".").reduce((a, t) => a && a[t], g);
  }
  function K(g = "ru", e = document) {
    const a = P[g] || P.ru;
    if (e.querySelectorAll("[data-i18n]").forEach((i) => {
      const o = i.dataset.i18n, r = O(a, o);
      r != null && (i.textContent = r);
    }), e.querySelectorAll("[data-text]").forEach((i) => {
      const o = i.dataset.i18n, r = O(a, o);
      r != null && (i.dataset.text = r);
    }), document.documentElement.lang = g, localStorage.setItem("locale", g), document.getElementById("lang-toggle")) {
      const i = document.getElementById("flag");
      O(a, "ui.langToggle") === "ru" || g === "ru" ? (i.classList.remove("us"), i.classList.add("ru"), i.src = "images/ru.svg", i.alt = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u0444\u043B\u0430\u0433") : (i.classList.remove("ru"), i.classList.add("us"), i.src = "images/us.svg", i.alt = "US flag");
    }
  }
  function Ve(g) {
    K(g);
    const e = document.getElementById("lang-toggle");
    e && e.addEventListener("click", () => {
      const t = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      K(t), window.dispatchEvent(new CustomEvent("locale-changed", {
        detail: {
          locale: t
        }
      }));
    });
  }
  function d(g, e = "") {
    var _a2;
    const a = localStorage.getItem("locale") || "ru", t = P[a] || P.ru;
    return (_a2 = g.split(".").reduce((o, r) => o && o[r], t)) != null ? _a2 : e;
  }
  class We {
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
      } catch (a) {
        console.warn("Cloud save failed:", a);
      }
    }
  }
  class qe {
    constructor() {
      this.planeGrass = {
        texture: null,
        material: null
      }, this.model = null;
    }
    async loadTextures() {
      const e = new Se(), [a] = await Promise.all([
        e.loadAsync("textures/grass.jpg")
      ]);
      this.planeGrass.texture = a, this.planeGrass.material = new S({
        map: a
      });
    }
    async loadModels() {
      await new Ce().loadAsync("models/model.glb").then((t) => {
        const i = t.scene, o = t.animations;
        i.scale.x = 2, i.scale.y = 2, i.scale.z = 2, i.position.y = 0, i.rotation.y = -Math.PI / 3, this.model = i, this.model.userData.mixer = new xe(this.model), this.model.userData.action = this.model.userData.mixer.clipAction(o[0]), this.model.userData.action.play(), this.model.userData.clock = new re();
      });
    }
  }
  class Ke {
    constructor(e) {
      this.events = e.events, this.gameContext = e, this.screens = document.querySelectorAll(".screen"), this.currentScreen = null, document.querySelector("body").addEventListener("click", (a) => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const t = a.target.closest("[data-action]");
        if (!t) return;
        const i = t.dataset.action, o = t.dataset.categoryId;
        switch (i) {
          case "open_categories":
          case "open_main_mode":
            (_a2 = e.appController) == null ? void 0 : _a2.showCategories();
            break;
          case "open_guess_mode":
            (_b = e.appController) == null ? void 0 : _b.showGuessCategories();
            break;
          case "open_settings":
            e.ui.show("settings_screen");
            break;
          case "back_main":
            (_c = e.appController) == null ? void 0 : _c.showMainMenu();
            break;
          case "back_to_categories":
            (_d = e.appController) == null ? void 0 : _d.showCategories();
            break;
          case "back_to_guess_categories":
            (_e2 = e.appController) == null ? void 0 : _e2.showGuessCategories();
            break;
          case "start_category_session":
            o && ((_f = e.appController) == null ? void 0 : _f.startCategorySession(o));
            break;
          case "start_guess_session":
            o && ((_g = e.appController) == null ? void 0 : _g.startGuessSession(o));
            break;
          case "choose_item":
            t.dataset.itemId && ((_h = e.appController) == null ? void 0 : _h.chooseItem(t.dataset.itemId));
            break;
          case "choose_guess_item":
            t.dataset.itemId && ((_i = e.appController) == null ? void 0 : _i.chooseGuessItem(t.dataset.itemId));
            break;
          case "next_guess_round":
            (_j = e.appController) == null ? void 0 : _j.nextGuessRound();
            break;
          case "replay_last_category":
            ((_k = e.appController) == null ? void 0 : _k.lastCompletedCategoryId) && e.appController.startCategorySession(e.appController.lastCompletedCategoryId);
            break;
          case "replay_last_guess_category":
            ((_l = e.appController) == null ? void 0 : _l.lastGuessCategoryId) && e.appController.startGuessSession(e.appController.lastGuessCategoryId);
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
      const a = document.querySelector(".autoriz");
      a && (a.classList.toggle("hidden_screen", e === true), e === true ? (a.setAttribute("aria-hidden", "true"), a.style.display = "none") : (a.setAttribute("aria-hidden", "false"), a.style.display = ""));
    }
    show(e) {
      var _a2;
      const a = document.getElementById(e);
      if (!a) {
        console.warn("Screen ".concat(e, " not found"));
        return;
      }
      this.screens.forEach((t) => t.classList.remove("active")), a.scrollTop = 0, a.classList.add("active"), this.currentScreen = e, (_a2 = this.gameContext.gameClass) == null ? void 0 : _a2.applySceneLayout(e), requestAnimationFrame(() => {
        var _a3;
        (_a3 = this.gameContext.gameClass) == null ? void 0 : _a3.applySceneLayout(e);
      });
    }
    hideAll() {
      this.screens.forEach((e) => e.classList.remove("active")), this.currentScreen = null;
    }
  }
  const Ze = 2.3;
  class Qe {
    constructor(e) {
      this.gameContext = e, this.scene = e.scene, this.camera = e.camera, this.ground = null, this.options = {
        size: {
          w: 10,
          h: 10,
          d: 0.2
        },
        name: "ground"
      }, this.characters = [], this.dot = null, this.dotBasePosition = new p(-4.2, 0.8, 0.3), this.dotTime = 0, this.eyeTrackingEnabled = true, this.eyeTrackingMode = "dot", this.mouseNdc = new C(0, 0), this.mouseWorldPosition = new p(0, 0.5, 1.2), this.mouseLookPlane = new Te(new p(0, 0, 1), -1.2), this.raycaster = new se(), this._dotWorldPosition = new p(), this._layoutProjection = new p(), this.currentSceneMode = "menu", this.applySceneLayout = this.applySceneLayout.bind(this), window.addEventListener("resize", () => {
        this.applySceneLayout(this.currentSceneMode);
      }), window.addEventListener("pointermove", (a) => {
        this.updateMouseLookTarget(a);
      }, {
        passive: true
      });
    }
    loadMesh() {
      let e = new Le(this.options.size.w, this.options.size.h, this.options.size.d), a = new H({
        color: 10392058,
        side: A
      });
      this.ground = new N(e, a), this.ground.userData = {
        ...this.options
      }, this.ground.rotateX(Math.PI / 2), this.ground.position.y = -2.2, this.ground.receiveShadow = true, this.scene.add(this.ground);
      let t = new U(0.2), i = new H({
        color: 10392058,
        side: A
      });
      this.dot = new N(t, i), this.dot.userData = {
        ...this.options
      }, this.dot.position.copy(this.dotBasePosition), this.scene.add(this.dot);
    }
    getSceneLayout(e) {
      const a = window.innerWidth || 1, t = window.innerHeight || 1, o = a / t < 1, r = t < 720, s = {
        menu: {
          cameraPosition: new p(0, r ? 4.8 : 4.2, o ? 34 : 30),
          target: new p(0, -0.35, 0),
          characterSpacing: o ? 1.35 : 1.65,
          characterZ: 0.45,
          groundScale: new p(o ? 0.82 : 1.08, r ? 0.85 : 1, 1),
          groundPosition: new p(0, r ? -3.55 : -3.25, 0.45)
        },
        choice: {
          cameraPosition: new p(0, r ? 3.85 : 3.95, o ? 5 : 28),
          target: new p(0, o ? -0.45 : -0.95, 0),
          characterSpacing: o ? 1.65 : 1.55,
          characterZ: 0.25,
          groundScale: new p(o ? 1.18 : 1, o ? 1.22 : 0.9, 1),
          groundPosition: new p(0, -1.9, 0.25)
        },
        background: {
          cameraPosition: new p(0, 4.6, o ? 34 : 31),
          target: new p(0, -1.4, 0),
          characterSpacing: o ? 1.15 : 1.45,
          characterZ: 0.6,
          groundScale: new p(o ? 0.72 : 0.9, 0.82, 1),
          groundPosition: new p(0, -2.2, 0.55)
        }
      };
      return e === "choice" || e === "choice_screen" || e === "session_complete_screen" || e === "guess_screen" || e === "guess_complete_screen" ? {
        mode: "choice",
        ...s.choice
      } : e === "background" || e === "categories_screen" || e === "guess_categories_screen" || e === "settings_screen" ? {
        mode: "background",
        ...s.background
      } : {
        mode: "menu",
        ...s.menu
      };
    }
    applySceneLayout(e = this.currentSceneMode) {
      var _a2;
      const a = this.getSceneLayout(e);
      this.currentSceneMode = a.mode, this.camera && (this.camera.position.copy(a.cameraPosition), this.camera.lookAt(a.target));
      const t = (_a2 = this.gameContext.initClass) == null ? void 0 : _a2.controls;
      t && (t.target.copy(a.target), t.update());
      const i = this.getSceneClearanceOffset(a), o = a.groundPosition.clone();
      o.y += i, this.ground && (this.ground.position.copy(o), this.ground.scale.copy(a.groundScale));
      const r = (this.characters.length - 1) / 2, s = this.getCharacterBaseY(a, i);
      this.characters.forEach((y, n) => {
        y.characterGroup && (y.characterGroup.position.x = (n - r) * a.characterSpacing, y.characterGroup.position.y = s, y.characterGroup.position.z = a.characterZ);
      });
    }
    getActiveUiBottom() {
      const e = document.querySelector(".screen.active");
      if (!e) return 0;
      const a = e.querySelector(".menu-shell, .panel-shell");
      return a ? a.getBoundingClientRect().bottom : 0;
    }
    getCharacterBaseY(e, a = 0) {
      return e.groundPosition.y + a + Ze;
    }
    getTallestCharacterTopY(e) {
      return this.characters.length ? this.characters.reduce((a, t) => {
        var _a2, _b;
        const i = (_a2 = t.heightBody) != null ? _a2 : 4.2, o = (_b = t.savedScaleY) != null ? _b : 1, r = i * o - 2.2;
        return Math.max(a, e + r);
      }, e) : e;
    }
    projectWorldYToScreen(e, a) {
      return this.camera ? (this.camera.updateMatrixWorld(), this._layoutProjection.set(0, e, a).project(this.camera), (1 - this._layoutProjection.y) * 0.5 * window.innerHeight) : window.innerHeight;
    }
    getSceneClearanceOffset(e) {
      const a = this.getActiveUiBottom();
      if (!a || !this.camera) return 0;
      const t = window.innerHeight < 720 ? 28 : 44, i = a + t;
      let o = 0;
      for (let r = 0; r < 80; r += 1) {
        const s = this.getTallestCharacterTopY(this.getCharacterBaseY(e, o));
        if (this.projectWorldYToScreen(s, e.characterZ) >= i) break;
        o -= 0.08;
      }
      return o;
    }
    update(e, a = false) {
      if (!this.dot) return;
      this.dotTime += e;
      const t = this.dotBasePosition.x + Math.sin(this.dotTime * 0.9) * 7.1, i = this.dotBasePosition.y + Math.sin(this.dotTime * 1.6) * 0.7 + Math.cos(this.dotTime * 0.55) * 10.45, o = this.dotBasePosition.z + Math.cos(this.dotTime * 1.15) * 0.75 + 1;
      this.dot.position.set(t, i, o);
    }
    getSpectatorFocusTarget() {
      return this.eyeTrackingEnabled ? this.eyeTrackingMode === "mouse" ? this.mouseWorldPosition : this.dot ? this.dot.getWorldPosition(this._dotWorldPosition) : null : null;
    }
    updateMouseLookTarget(e) {
      this.camera && (this.mouseNdc.set(e.clientX / window.innerWidth * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1), this.raycaster.setFromCamera(this.mouseNdc, this.camera), this.raycaster.ray.intersectPlane(this.mouseLookPlane, this.mouseWorldPosition));
    }
  }
  class Je {
    constructor(e) {
      this.scene = e.scene, this.dirLight = null, this.ambientLight = null;
    }
    loadLight(e = true, a = true) {
      this.ambientLight = new Ee(16777215, 1), this.dirLight = new Re(16777215, 1), this.dirLight.position.set(-3, 5, 1), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 100, e && this.scene.add(this.ambientLight), a && this.scene.add(this.dirLight);
    }
  }
  const ea = (g) => JSON.parse(JSON.stringify(g)), h = {
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
  }, B = {
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
  }, c = {
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
  }, R = {
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
        ...c.tense
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
        ...c.smileSoft
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
        ...c.smileSoft
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
        ...c.neutral
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
  }, M = {
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
          ...c.tense,
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
          ...c.smileSoft
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
          ...c.frownSoft
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
          ...c.openMedium
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
          ...c.puzzled
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
          ...c.tense
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
          ...c.grin
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
          ...c.frownDeep
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
          ...c.neutral
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
          ...c.puzzled,
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
          ...c.smileWide
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
          ...c.frownSoft
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
          ...c.openSmall
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
          ...c.puzzled,
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
          ...c.tense
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
          ...c.grin,
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
          ...c.frownDeep,
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
          ...c.neutral
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
          ...c.puzzled,
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
          ...c.smileSoft,
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
          ...c.frownSoft,
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
          ...c.openBig,
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
          ...c.puzzled,
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
          ...c.tense,
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
          ...c.grin,
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
          ...c.frownSoft,
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
          ...c.puzzled,
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
          ...c.smileSoft,
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
          ...c.frownDeep,
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
          ...c.openBig
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
          ...c.puzzled,
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
          ...c.tense,
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
          ...c.smileSoft,
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
          ...c.frownDeep,
          y: -0.2
        }
      }
    }
  }, aa = [
    {
      id: 1,
      role: "coward",
      label: "Coward",
      color: "#FEAEAA",
      scaleY: 0.4,
      positionX: -2.7,
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
      positionX: -0.9,
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
      positionX: 0.9,
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
      positionX: 2.7,
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
  ], ta = {
    angry: {
      role: "angry",
      basePose: R.angry,
      states: M.angry,
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
      basePose: R.kind,
      states: M.kind,
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
      basePose: R.silly,
      states: M.silly,
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
      basePose: R.coward,
      states: M.coward,
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
  }, $ = [
    "mode",
    "width",
    "height",
    "thickness",
    "curve"
  ];
  function ia(...g) {
    const e = ea(h);
    return g.forEach((a) => {
      a && (a.bodyRotate !== void 0 && (e.bodyRotate += a.bodyRotate), a.color !== void 0 && (e.color = a.color), [
        "eyes",
        "eyesBack",
        "brows",
        "cheeks"
      ].forEach((t) => {
        a[t] && Object.keys(a[t]).forEach((i) => {
          const o = a[t][i];
          Array.isArray(o) && Array.isArray(e[t][i]) && (e[t][i][0] += o[0], e[t][i][1] += o[1]);
        });
      }), a.mouth && ([
        "x",
        "y",
        "scaleX",
        "scaleY",
        "rotationX",
        "rotationY",
        "rotationZ"
      ].forEach((t) => {
        a.mouth[t] !== void 0 && (e.mouth[t] += a.mouth[t]);
      }), $.forEach((t) => {
        a.mouth[t] !== void 0 && (e.mouth[t] = a.mouth[t]);
      })));
    }), e;
  }
  const Z = (g) => JSON.parse(JSON.stringify(g));
  function ga(g, e) {
    const a = new me();
    return a.absellipse(0, 0, g / 2, e / 2, 0, Math.PI * 2, false, 0), a;
  }
  function oa(g, e, a) {
    const t = Math.max(g / 2, 1e-3), i = Math.max(a / 2, 1e-3), o = 24, r = [], s = [];
    for (let n = 0; n <= o; n++) {
      const l = n / o, _ = f.lerp(-t, t, l), I = (1 - Math.pow(2 * l - 1, 2)) * e;
      r.push(new C(_, I + i)), s.push(new C(_, I - i));
    }
    const y = new me();
    return y.moveTo(r[0].x, r[0].y), r.slice(1).forEach((n) => y.lineTo(n.x, n.y)), s.reverse().forEach((n) => y.lineTo(n.x, n.y)), y.closePath(), y;
  }
  class sa {
    constructor(e) {
      this.scene = e.scene, this.characterGroup = new Me(), this.eyes = [], this.eyesBack = [], this.brows = [], this.cheeks = [], this.mouth = null, this.body = null, this.currentMouthParams = {}, this.faceZ = 0.62, this.heightBody = 4.2, this.savedScaleY = 1, this.role = "kind", this.lookTarget = null, this.lookOffset = new C(), this.desiredLookOffset = new C(), this._tmpLocalTarget = new p(), this.blinkFactor = 1, this.defaults = Z(h), this.params = Z(h), this.bodyMat = new S({
        color: 9364655,
        roughness: 0.9
      }), this.blackMat = new S({
        color: 7556154,
        side: A
      }), this.eyeMat = new S({
        color: 7556154,
        side: A,
        transparent: true,
        opacity: 1
      }), this.blinkTween = null, this.idleMotionTween = null;
    }
    async loadCharacter(e) {
      var _a2, _b, _c;
      this.role = e.role, this.savedScaleY = (_a2 = e.scaleY) != null ? _a2 : 1, this.scene.add(this.characterGroup), this.characterGroup.position.x = (_b = e.positionX) != null ? _b : 0, this.body = new N(new Ge(1.6, this.heightBody * this.savedScaleY, 1.2, 8, 0.3), this.bodyMat), this.body.position.y = this.heightBody * this.savedScaleY / 2 - 2.2, this.body.material.color.set((_c = e.color) != null ? _c : this.defaults.color), this.body.castShadow = true, this.body.receiveShadow = true, this.characterGroup.add(this.body);
      const a = new V({
        color: 16751001,
        transparent: true,
        opacity: 0.7
      }), t = new W(0.07, 0.07, 0.05, 32);
      t.rotateX(Math.PI / 2);
      for (let s = 0; s < 2; s++) {
        const y = new N(t, this.eyeMat);
        this.characterGroup.add(y), this.eyes.push(y);
      }
      const i = new W(0.3, 0.12, 0.05, 32);
      i.rotateX(Math.PI / 2);
      for (let s = 0; s < 2; s++) {
        const y = new N(i, new V({
          color: 16777215,
          transparent: true,
          opacity: 0.4
        }));
        this.characterGroup.add(y), this.eyesBack.push(y);
      }
      const o = new Ae(0.08, 0.025, 16, 30, Math.PI / 1.1);
      for (let s = 0; s < 2; s++) {
        const y = new N(o, this.blackMat);
        this.characterGroup.add(y), this.brows.push(y);
      }
      this.updateMouthGeometry(this.defaults.mouth);
      const r = new U(0.18, 32, 16);
      r.scale(1, 0.6, 0.2);
      for (let s = 0; s < 2; s++) {
        const y = new N(r, a);
        this.characterGroup.add(y), this.cheeks.push(y);
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
        const t = f.clamp(this._tmpLocalTarget.x * 0.07, -0.12, 0.12), i = f.clamp((this._tmpLocalTarget.y - 1.2) * 0.08, -0.12, 0.12);
        this.desiredLookOffset.set(t, i);
      } else this.desiredLookOffset.set(0, 0);
      const a = Math.min(1, e * 6);
      this.lookOffset.lerp(this.desiredLookOffset, a), this.updateCharacterVisuals();
    }
    startIdleMotion(e = [
      1.7,
      2.3
    ]) {
      var _a2;
      (_a2 = this.idleMotionTween) == null ? void 0 : _a2.kill(), this.characterGroup.scale.set(1, 1, 1), this.idleMotionTween = w.to(this.characterGroup.scale, {
        duration: z(e[0], e[1]),
        y: "+=0.03",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    applyState(e, a = {}) {
      var _a2, _b, _c;
      const t = (_a2 = a.duration) != null ? _a2 : 1.1, i = (_b = a.ease) != null ? _b : "back.out(1.7)";
      w.to(this.params, {
        bodyRotate: e.bodyRotate,
        duration: t,
        ease: i,
        onUpdate: () => this.updateCharacterVisuals()
      });
      const o = (_c = e.color) != null ? _c : "#".concat(this.body.material.color.getHexString()), r = new oe(o);
      w.to(this.body.material.color, {
        r: r.r,
        g: r.g,
        b: r.b,
        duration: t,
        ease: "sine.out"
      }), [
        "eyes",
        "eyesBack",
        "brows",
        "cheeks"
      ].forEach((y) => {
        Object.keys(e[y]).forEach((n) => {
          w.to(this.params[y][n], {
            0: e[y][n][0],
            1: e[y][n][1],
            duration: t,
            ease: i,
            onUpdate: () => this.updateCharacterVisuals()
          });
        });
      });
      const s = {};
      [
        "x",
        "y",
        "scaleX",
        "scaleY",
        "rotationX",
        "rotationY",
        "rotationZ",
        ...$.filter((y) => y !== "mode")
      ].forEach((y) => {
        s[y] = e.mouth[y];
      }), e.mouth.mode !== this.params.mouth.mode && (this.params.mouth.mode = e.mouth.mode), w.to(this.params.mouth, {
        ...s,
        duration: t,
        ease: i,
        onUpdate: () => {
          this.updateMouthGeometry(this.params.mouth), this.updateCharacterVisuals();
        }
      });
    }
    updateMouthGeometry(e) {
      var _a2;
      let a = false;
      for (const o of $) if (this.currentMouthParams[o] !== e[o]) {
        a = true;
        break;
      }
      if (!a && this.mouth) return;
      ((_a2 = this.mouth) == null ? void 0 : _a2.geometry) && this.mouth.geometry.dispose();
      let t;
      switch (e.mode) {
        case "oval":
          t = ga(e.width, e.height);
          break;
        case "curve":
        default:
          t = oa(e.width, e.curve || 0, e.thickness || 0.02);
          break;
      }
      const i = new Pe(t, 24);
      i.center(), this.mouth ? this.mouth.geometry = i : (this.mouth = new N(i, this.blackMat), this.characterGroup.add(this.mouth)), this.currentMouthParams = {
        ...e
      };
    }
    blink() {
      var _a2;
      if (this.eyes.length < 2) return;
      (_a2 = this.blinkTween) == null ? void 0 : _a2.kill();
      const e = Math.max(this.savedScaleY || 1, 0.65), a = {
        val: 1 * e
      };
      this.blinkTween = w.to(a, {
        val: 0.1 * e,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onUpdate: () => {
          this.blinkFactor = a.val, this.updateCharacterVisuals(), this.eyes.forEach((t, i) => {
            const o = a.val / e;
            t.material.opacity = o > 0.7 ? 1 : 0;
          });
        },
        onComplete: () => {
          this.blinkFactor = 1, this.updateCharacterVisuals(), this.eyes.forEach((t) => {
            t.material.opacity = 1;
          });
        }
      });
    }
    updateCharacterVisuals() {
      const e = this.savedScaleY || 1, a = this.heightBody * e / 2 - 2.2, t = Math.max(e, 0.65), i = 2.1, o = this.heightBody * e / 2, r = (s) => {
        const y = i - s;
        return a + o - y * t;
      };
      this.characterGroup.rotation.y = this.params.bodyRotate;
      for (let s = 0; s < 2; s++) this.eyes[s].position.set((this.params.eyes.x[s] + this.lookOffset.x) * t, r(this.params.eyes.y[s] + this.lookOffset.y), this.faceZ), this.eyes[s].scale.set(this.params.eyes.scaleX[s] * t, this.params.eyes.scaleY[s] * t, 1), this.eyesBack[s].position.set((this.params.eyesBack.x[s] + this.lookOffset.x * 0.35) * t, r(this.params.eyesBack.y[s] + this.lookOffset.y * 0.35) + 0.02, this.faceZ - 0.01), this.eyesBack[s].scale.set(this.params.eyesBack.scaleX[s] * t, this.params.eyesBack.scaleY[s] * t * this.blinkFactor, 1), this.brows[s].position.set(this.params.brows.x[s] * t, r(this.params.brows.y[s]), this.faceZ), this.brows[s].rotation.z = this.params.brows.rotation[s], this.brows[s].scale.set(this.params.brows.scaleX[s] * t, this.params.brows.scaleY[s] * t, 1), this.cheeks[s].position.set(this.params.cheeks.x[s] * t * 1.1, r(this.params.cheeks.y[s]), this.faceZ), this.cheeks[s].scale.set(this.params.cheeks.scaleX[s] * t, this.params.cheeks.scaleY[s] * 0.6 * t, 0.2), this.cheeks[s].material.opacity !== void 0 && (this.cheeks[s].material.opacity = this.params.cheeks.opacity[s]);
      this.mouth && (this.mouth.position.set(this.params.mouth.x, r(this.params.mouth.y), this.faceZ), this.mouth.rotation.x = this.params.mouth.rotationX, this.mouth.rotation.y = this.params.mouth.rotationY, this.mouth.rotation.z = this.params.mouth.rotationZ, this.mouth.scale.set(this.params.mouth.scaleX * t, this.params.mouth.scaleY * t, 1));
    }
  }
  const ra = 0, ma = 2e3;
  class ya {
    constructor(e) {
      this.gameContext = e, this.gui = null, this.spectators = [], this.focus = "center", this.roundActive = false, this.debugMouthOverride = null;
    }
    getConfigs() {
      return aa.map((e) => ({
        ...e
      }));
    }
    registerCharacter(e, a) {
      const t = ta[a.role];
      if (!t) throw new Error("Unknown spectator role: ".concat(a.role));
      const i = performance.now(), o = {
        character: e,
        config: a,
        profile: t,
        role: a.role,
        currentState: "idle",
        focus: "center",
        stickyState: "idle",
        tempUntil: 0,
        nextLookAt: i + this.getLookDelay(),
        nextBlinkAt: i + z(a.blinkRange[0], a.blinkRange[1]),
        nextAmbientAt: i + this.getAmbientDelay(a, false)
      };
      this.spectators.push(o), this.applyEntryState(o, "idle", {
        duration: 0.4,
        sticky: true,
        resetFocus: true
      });
    }
    attachGui(e) {
      if (this.gui = e, location.hostname !== "localhost") return;
      const a = {
        focus: "center",
        event: "pair_presented",
        followDot: this.gameContext.gameClass.eyeTrackingEnabled,
        eyeTrackingMode: this.gameContext.gameClass.eyeTrackingMode,
        mouthMode: h.mouth.mode,
        mouthWidth: h.mouth.width,
        mouthHeight: h.mouth.height,
        mouthThickness: h.mouth.thickness,
        mouthCurve: h.mouth.curve,
        mouthX: h.mouth.x,
        mouthY: h.mouth.y,
        mouthScaleX: h.mouth.scaleX,
        mouthScaleY: h.mouth.scaleY,
        mouthRotationZ: h.mouth.rotationZ,
        triggerEvent: () => {
          this.react(a.event);
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
          a.mouthMode = h.mouth.mode, a.mouthWidth = h.mouth.width, a.mouthHeight = h.mouth.height, a.mouthThickness = h.mouth.thickness, a.mouthCurve = h.mouth.curve, a.mouthX = h.mouth.x, a.mouthY = h.mouth.y, a.mouthScaleX = h.mouth.scaleX, a.mouthScaleY = h.mouth.scaleY, a.mouthRotationZ = h.mouth.rotationZ, this.debugMouthOverride = this.buildDebugMouthOverride(a), t.forEach((l) => l.updateDisplay()), this.refreshCurrentStates();
        }
      }, t = [], i = {
        \u0426\u0435\u043D\u0442\u0440: "center",
        \u0412\u043B\u0435\u0432\u043E: "left",
        \u0412\u043F\u0440\u0430\u0432\u043E: "right",
        \u0412\u0432\u0435\u0440\u0445: "top",
        \u0412\u043D\u0438\u0437: "bottom"
      }, o = {
        "\u041F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u043F\u0430\u0440\u0430": "pair_presented",
        "\u0412\u044B\u0431\u043E\u0440 \u0438\u0433\u0440\u043E\u043A\u0430": "player_choice",
        "\u0423\u0433\u0430\u0434\u0430\u043B \u0432\u0435\u0440\u043D\u043E": "guess_correct",
        "\u0423\u0433\u0430\u0434\u0430\u043B \u043D\u0435\u0432\u0435\u0440\u043D\u043E": "guess_wrong",
        "\u0420\u043E\u0441\u0442 \u0441\u0435\u0440\u0438\u0438": "streak_up",
        "\u041A\u043E\u043D\u0435\u0446 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438": "category_complete",
        \u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435: "neutral"
      }, r = {
        \u0428\u0430\u0440: "dot",
        \u041C\u044B\u0448\u044C: "mouse"
      }, s = e.addFolder("\u0417\u0440\u0438\u0442\u0435\u043B\u0438");
      s.add(a, "focus", i).name("\u0424\u043E\u043A\u0443\u0441").onChange((l) => {
        this.setFocus(l);
      }), s.add(a, "followDot").name("\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0448\u0430\u0440\u043E\u043C").onChange((l) => {
        this.gameContext.gameClass.eyeTrackingEnabled = l, l || this.spectators.forEach((_) => {
          _.character.clearLookTarget(), _.nextLookAt = performance.now() + this.getLookDelay(), _.character.update(1 / 60);
        });
      }), s.add(a, "eyeTrackingMode", r).name("\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430").onChange((l) => {
        this.gameContext.gameClass.eyeTrackingMode = l;
      }), s.add(a, "event", o).name("\u0421\u043E\u0431\u044B\u0442\u0438\u0435"), s.add(a, "triggerEvent").name("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"), s.add(a, "startRound").name("\u0421\u0442\u0430\u0440\u0442 \u0440\u0430\u0443\u043D\u0434\u0430"), s.add(a, "enterIdle").name("\u0412 \u043F\u043E\u043A\u043E\u0439"), s.add(a, "resetRound").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
      const y = e.addFolder("\u0420\u043E\u0442"), n = () => {
        this.debugMouthOverride = this.buildDebugMouthOverride(a), this.refreshCurrentStates();
      };
      t.push(y.add(a, "mouthMode", {
        \u041B\u0438\u043D\u0438\u044F: "curve",
        \u041E\u0432\u0430\u043B: "oval"
      }).name("\u0422\u0438\u043F").onChange(n), y.add(a, "mouthWidth", 5e-3, 1.2, 5e-3).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(n), y.add(a, "mouthHeight", 1e-3, 0.8, 5e-3).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(n), y.add(a, "mouthThickness", 1e-3, 0.3, 2e-3).name("\u0422\u043E\u043B\u0449\u0438\u043D\u0430").onChange(n), y.add(a, "mouthCurve", -0.8, 0.8, 5e-3).name("\u0418\u0437\u0433\u0438\u0431").onChange(n), y.add(a, "mouthX", -0.8, 0.8, 5e-3).name("X").onChange(n), y.add(a, "mouthY", -0.2, 2, 5e-3).name("Y").onChange(n), y.add(a, "mouthScaleX", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 X").onChange(n), y.add(a, "mouthScaleY", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 Y").onChange(n), y.add(a, "mouthRotationZ", -3.14, 3.14, 0.01).name("\u041F\u043E\u0432\u043E\u0440\u043E\u0442").onChange(n)), y.add(a, "resetMouth").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u043E\u0442");
    }
    update(e) {
      const a = performance.now(), t = this.gameContext.gameClass.getSpectatorFocusTarget();
      this.spectators.forEach((i) => {
        if (t ? a >= i.nextLookAt && (i.character.setLookTarget(t), i.nextLookAt = a + this.getLookDelay()) : (i.character.clearLookTarget(), i.nextLookAt = a + this.getLookDelay()), i.character.update(e), a >= i.nextBlinkAt && (i.character.blink(), i.nextBlinkAt = a + z(i.config.blinkRange[0], i.config.blinkRange[1])), i.tempUntil && a >= i.tempUntil && (i.tempUntil = 0, this.applyEntryState(i, i.stickyState, {
          duration: 0.7
        })), !i.tempUntil && this.roundActive && a >= i.nextAmbientAt) {
          const o = this.roundActive ? i.profile.watchingStates : i.profile.idleStates, r = o[Math.floor(Math.random() * o.length)] || i.stickyState;
          this.applyEntryState(i, r, {
            duration: 0.9
          }), i.nextAmbientAt = a + this.getAmbientDelay(i.config, this.roundActive);
        }
      });
    }
    updateEmotions(e) {
      this.update(e);
    }
    getLookDelay() {
      return z(ra, ma);
    }
    setFocus(e = "center") {
      this.focus = B[e] ? e : "center", this.spectators.forEach((a) => {
        a.focus = this.focus, this.applyEntryState(a, a.currentState, {
          duration: 0.45
        });
      });
    }
    react(e, a = {}) {
      if (e === "neutral") {
        this.enterIdle();
        return;
      }
      e === "pair_presented" && (this.roundActive = true);
      const t = performance.now();
      this.spectators.forEach((i) => {
        var _a2, _b;
        const o = i.profile.reactions[e];
        if (!o) return;
        const r = typeof o == "function" ? o(a, i) : o.state, s = (typeof o == "function" ? 1.4 : (_a2 = o.duration) != null ? _a2 : 1.4) / ((_b = i.config.reactionSpeed) != null ? _b : 1);
        this.applyEntryState(i, r, {
          duration: s
        }), i.tempUntil = t + s * 1e3, i.nextAmbientAt = i.tempUntil + this.getAmbientDelay(i.config, this.roundActive);
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
    applyEntryState(e, a, t = {}) {
      var _a2;
      const i = B[t.resetFocus ? "center" : e.focus] || B.center, o = ia(e.profile.basePose, e.profile.states[a] || e.profile.states.idle, i, this.debugMouthOverride);
      o.color = e.config.color, e.currentState = a, t.sticky ? e.stickyState = a : this.roundActive ? e.stickyState = "watching" : e.stickyState = "idle", t.resetFocus && (e.focus = "center"), e.character.applyState(o, {
        duration: (_a2 = t.duration) != null ? _a2 : 1
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
    getAmbientDelay(e, a) {
      const t = a ? e.ambientInterval : e.idleInterval || e.ambientInterval;
      return z(t[0], t[1]);
    }
  }
  class na {
    constructor(e) {
      this.scene = e.scene, this.countInst1 = 3, this.instancesObjs = {
        instances1: {
          data: Array.from({
            length: this.countInst1
          }, (a, t) => ({
            position: new p(0, 0.2, 0),
            rotation: new je(0, 0, 0),
            scale: new p(1, 1, 1),
            size: new p(0.2, 0.2, 0.2),
            userData: {
              name: "inst1",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryInst1: new U(0.2),
          materialInst1: new S({
            color: 52224
          }),
          inst1: null
        }
      }, this.instancesObjs.instances1.inst1 = new De(this.instancesObjs.instances1.geometryInst1, this.instancesObjs.instances1.materialInst1, this.countInst1), this.instancesObjs.instances1.inst1.instanceMatrix.setUsage(Ye), this.instancesObjs.instances1.inst1.receiveShadow = true, this.instancesObjs.instances1.inst1.castShadow = true, this.instancesObjs.instances1.inst1.frustumCulled = false;
    }
    init() {
      for (let e = 0; e < this.countInst1; e++) this.instancesObjs.instances1.data[e].position.x = z(-3, 3), this.instancesObjs.instances1.data[e].position.z = z(-3, 3), this.instancesObjs.instances1.data[e].position.y = z(1, 2);
      this.instancesObjs.instances1.inst1.instanceMatrix.needsUpdate = true;
    }
    toVec3(e) {
      var _a2, _b, _c;
      return typeof e == "number" ? new p(e, e, e) : (e == null ? void 0 : e.isVector3) ? e : e ? new p((_a2 = e.x) != null ? _a2 : 1, (_b = e.y) != null ? _b : 1, (_c = e.z) != null ? _c : 1) : new p(1, 1, 1);
    }
  }
  const ca = [
    {
      id: "yabloko",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u044F\u0431\u043B\u043E\u043A\u043E",
      image: "/images/items/frukty/yabloko.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "banan",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0431\u0430\u043D\u0430\u043D",
      image: "/images/items/frukty/banan.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "grusha",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0443\u0448\u0430",
      image: "/images/items/frukty/grusha.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "apelsin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D",
      image: "/images/items/frukty/apelsin.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "mandarin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043D\u0434\u0430\u0440\u0438\u043D",
      image: "/images/items/frukty/mandarin.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "vinograd",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434",
      image: "/images/items/frukty/vinograd.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "kivi",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u0438\u0432\u0438",
      image: "/images/items/frukty/kivi.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "ananas",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u043D\u0430\u043D\u0430\u0441",
      image: "/images/items/frukty/ananas.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "mango",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043D\u0433\u043E",
      image: "/images/items/frukty/mango.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "granat",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0430\u043D\u0430\u0442",
      image: "/images/items/frukty/granat.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "arbuz",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0440\u0431\u0443\u0437",
      image: "/images/items/frukty/arbuz.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "dynya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0434\u044B\u043D\u044F",
      image: "/images/items/frukty/dynya.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "persik",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A",
      image: "/images/items/frukty/persik.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "abrikos",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0431\u0440\u0438\u043A\u043E\u0441",
      image: "/images/items/frukty/abrikos.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "sliva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0441\u043B\u0438\u0432\u0430",
      image: "/images/items/frukty/sliva.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "vishnya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0432\u0438\u0448\u043D\u044F",
      image: "/images/items/frukty/vishnya.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "chereshnya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0447\u0435\u0440\u0435\u0448\u043D\u044F",
      image: "/images/items/frukty/chereshnya.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "limon",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0438\u043C\u043E\u043D",
      image: "/images/items/frukty/limon.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "laym",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0430\u0439\u043C",
      image: "/images/items/frukty/laym.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "kokos",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043E\u043A\u043E\u0441",
      image: "/images/items/frukty/kokos.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "avokado",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0432\u043E\u043A\u0430\u0434\u043E",
      image: "/images/items/frukty/avokado.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "klubnika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043B\u0443\u0431\u043D\u0438\u043A\u0430",
      image: "/images/items/frukty/klubnika.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "malina",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043B\u0438\u043D\u0430",
      image: "/images/items/frukty/malina.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "ezhevika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0435\u0436\u0435\u0432\u0438\u043A\u0430",
      image: "/images/items/frukty/ezhevika.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "golubika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u043E\u043B\u0443\u0431\u0438\u043A\u0430",
      image: "/images/items/frukty/golubika.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "klyukva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043B\u044E\u043A\u0432\u0430",
      image: "/images/items/frukty/klyukva.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "smorodina",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430",
      image: "/images/items/frukty/smorodina.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "inzhir",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0438\u043D\u0436\u0438\u0440",
      image: "/images/items/frukty/inzhir.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "finik",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0444\u0438\u043D\u0438\u043A",
      image: "/images/items/frukty/finik.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "hurma",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0445\u0443\u0440\u043C\u0430",
      image: "/images/items/frukty/hurma.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "papayya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u0430\u043F\u0430\u0439\u044F",
      image: "/images/items/frukty/papayya.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "marakuyya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u0440\u0430\u043A\u0443\u0439\u044F",
      image: "/images/items/frukty/marakuyya.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "lichi",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0438\u0447\u0438",
      image: "/images/items/frukty/lichi.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "rambutan",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0440\u0430\u043C\u0431\u0443\u0442\u0430\u043D",
      image: "/images/items/frukty/rambutan.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "guava",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0443\u0430\u0432\u0430",
      image: "/images/items/frukty/guava.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "pomelo",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u043E\u043C\u0435\u043B\u043E",
      image: "/images/items/frukty/pomelo.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "greypfrut",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0435\u0439\u043F\u0444\u0440\u0443\u0442",
      image: "/images/items/frukty/greypfrut.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "nektarin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043D\u0435\u043A\u0442\u0430\u0440\u0438\u043D",
      image: "/images/items/frukty/nektarin.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "ayva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0439\u0432\u0430",
      image: "/images/items/frukty/ayva.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "dragonfrut",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0434\u0440\u0430\u0433\u043E\u043D\u0444\u0440\u0443\u0442",
      image: "/images/items/frukty/dragonfrut.png",
      categoryImage: "/images/categories/frukty.png"
    },
    {
      id: "kartofel",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C",
      image: "/images/items/ovoshchi/kartofel.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "morkov",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043C\u043E\u0440\u043A\u043E\u0432\u044C",
      image: "/images/items/ovoshchi/morkov.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "svekla",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0432\u0451\u043A\u043B\u0430",
      image: "/images/items/ovoshchi/svekla.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "kapusta",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u043F\u0443\u0441\u0442\u0430",
      image: "/images/items/ovoshchi/kapusta.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "tsvetnaya_kapusta",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0446\u0432\u0435\u0442\u043D\u0430\u044F \u043A\u0430\u043F\u0443\u0441\u0442\u0430",
      image: "/images/items/ovoshchi/tsvetnaya_kapusta.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "brokkoli",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0440\u043E\u043A\u043A\u043E\u043B\u0438",
      image: "/images/items/ovoshchi/brokkoli.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "ogurets",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043E\u0433\u0443\u0440\u0435\u0446",
      image: "/images/items/ovoshchi/ogurets.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "pomidor",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u043E\u043C\u0438\u0434\u043E\u0440",
      image: "/images/items/ovoshchi/pomidor.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "sladkiy_perets",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u043B\u0430\u0434\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/ovoshchi/sladkiy_perets.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "perets_chili",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0435\u0440\u0435\u0446 \u0447\u0438\u043B\u0438",
      image: "/images/items/ovoshchi/perets_chili.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "tykva",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0442\u044B\u043A\u0432\u0430",
      image: "/images/items/ovoshchi/tykva.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "kabachok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u0431\u0430\u0447\u043E\u043A",
      image: "/images/items/ovoshchi/kabachok.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "baklazhan",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u043A\u043B\u0430\u0436\u0430\u043D",
      image: "/images/items/ovoshchi/baklazhan.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "kukuruza",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0443\u043A\u0443\u0440\u0443\u0437\u0430",
      image: "/images/items/ovoshchi/kukuruza.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "zelenyy_goroh",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0445",
      image: "/images/items/ovoshchi/zelenyy_goroh.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "fasol",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0444\u0430\u0441\u043E\u043B\u044C",
      image: "/images/items/ovoshchi/fasol.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "chechevitsa",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0447\u0435\u0447\u0435\u0432\u0438\u0446\u0430",
      image: "/images/items/ovoshchi/chechevitsa.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "luk",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043B\u0443\u043A",
      image: "/images/items/ovoshchi/luk.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "zelenyy_luk",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u043B\u0443\u043A",
      image: "/images/items/ovoshchi/zelenyy_luk.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "chesnok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0447\u0435\u0441\u043D\u043E\u043A",
      image: "/images/items/ovoshchi/chesnok.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "redis",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0435\u0434\u0438\u0441",
      image: "/images/items/ovoshchi/redis.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "daykon",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0434\u0430\u0439\u043A\u043E\u043D",
      image: "/images/items/ovoshchi/daykon.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "batat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u0442\u0430\u0442",
      image: "/images/items/ovoshchi/batat.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "pasternak",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0430\u0441\u0442\u0435\u0440\u043D\u0430\u043A",
      image: "/images/items/ovoshchi/pasternak.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "selderey",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0435\u043B\u044C\u0434\u0435\u0440\u0435\u0439",
      image: "/images/items/ovoshchi/selderey.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "petrushka",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0435\u0442\u0440\u0443\u0448\u043A\u0430",
      image: "/images/items/ovoshchi/petrushka.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "ukrop",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0443\u043A\u0440\u043E\u043F",
      image: "/images/items/ovoshchi/ukrop.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "kinza",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0438\u043D\u0437\u0430",
      image: "/images/items/ovoshchi/kinza.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "bazilik",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u0437\u0438\u043B\u0438\u043A",
      image: "/images/items/ovoshchi/bazilik.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "imbir",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0438\u043C\u0431\u0438\u0440\u044C",
      image: "/images/items/ovoshchi/imbir.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "hren",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0445\u0440\u0435\u043D",
      image: "/images/items/ovoshchi/hren.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "artishok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0430\u0440\u0442\u0438\u0448\u043E\u043A",
      image: "/images/items/ovoshchi/artishok.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "fenhel",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0444\u0435\u043D\u0445\u0435\u043B\u044C",
      image: "/images/items/ovoshchi/fenhel.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "rukkola",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0443\u043A\u043A\u043E\u043B\u0430",
      image: "/images/items/ovoshchi/rukkola.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "shpinat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0448\u043F\u0438\u043D\u0430\u0442",
      image: "/images/items/ovoshchi/shpinat.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "salat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0430\u043B\u0430\u0442",
      image: "/images/items/ovoshchi/salat.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "repa",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0435\u043F\u0430",
      image: "/images/items/ovoshchi/repa.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "bryukva",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0440\u044E\u043A\u0432\u0430",
      image: "/images/items/ovoshchi/bryukva.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "topinambur",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0442\u043E\u043F\u0438\u043D\u0430\u043C\u0431\u0443\u0440",
      image: "/images/items/ovoshchi/topinambur.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "sparzha",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u043F\u0430\u0440\u0436\u0430",
      image: "/images/items/ovoshchi/sparzha.png",
      categoryImage: "/images/categories/ovoshchi.png"
    },
    {
      id: "shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/shokolad.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "molochnyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/molochnyy_shokolad.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "temnyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u0451\u043C\u043D\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/temnyy_shokolad.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "belyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u0435\u043B\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/belyy_shokolad.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "karamel",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C",
      image: "/images/items/sladosti_i_deserty/karamel.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "iris",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0438\u0440\u0438\u0441",
      image: "/images/items/sladosti_i_deserty/iris.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "marmelad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0440\u043C\u0435\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/marmelad.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "ledentsy",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043B\u0435\u0434\u0435\u043D\u0446\u044B",
      image: "/images/items/sladosti_i_deserty/ledentsy.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "pechene",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0435\u0447\u0435\u043D\u044C\u0435",
      image: "/images/items/sladosti_i_deserty/pechene.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "vafli",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0432\u0430\u0444\u043B\u0438",
      image: "/images/items/sladosti_i_deserty/vafli.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "pryaniki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0440\u044F\u043D\u0438\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/pryaniki.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "keks",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0435\u043A\u0441",
      image: "/images/items/sladosti_i_deserty/keks.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "maffin",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0444\u0444\u0438\u043D",
      image: "/images/items/sladosti_i_deserty/maffin.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "kruassan",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0440\u0443\u0430\u0441\u0441\u0430\u043D",
      image: "/images/items/sladosti_i_deserty/kruassan.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "ekler",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u044D\u043A\u043B\u0435\u0440",
      image: "/images/items/sladosti_i_deserty/ekler.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "makaruny",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u043A\u0430\u0440\u0443\u043D\u044B",
      image: "/images/items/sladosti_i_deserty/makaruny.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "tort",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u043E\u0440\u0442",
      image: "/images/items/sladosti_i_deserty/tort.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "chizkeyk",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0447\u0438\u0437\u043A\u0435\u0439\u043A",
      image: "/images/items/sladosti_i_deserty/chizkeyk.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "tiramisu",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u0438\u0440\u0430\u043C\u0438\u0441\u0443",
      image: "/images/items/sladosti_i_deserty/tiramisu.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "medovik",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0435\u0434\u043E\u0432\u0438\u043A",
      image: "/images/items/sladosti_i_deserty/medovik.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "napoleon",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043D\u0430\u043F\u043E\u043B\u0435\u043E\u043D",
      image: "/images/items/sladosti_i_deserty/napoleon.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "morozhenoe",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",
      image: "/images/items/sladosti_i_deserty/morozhenoe.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "plombir",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u043B\u043E\u043C\u0431\u0438\u0440",
      image: "/images/items/sladosti_i_deserty/plombir.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "sorbet",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0441\u043E\u0440\u0431\u0435\u0442",
      image: "/images/items/sladosti_i_deserty/sorbet.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "zefir",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0437\u0435\u0444\u0438\u0440",
      image: "/images/items/sladosti_i_deserty/zefir.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "pastila",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u0441\u0442\u0438\u043B\u0430",
      image: "/images/items/sladosti_i_deserty/pastila.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "sufle",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0441\u0443\u0444\u043B\u0435",
      image: "/images/items/sladosti_i_deserty/sufle.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "martsipan",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0440\u0446\u0438\u043F\u0430\u043D",
      image: "/images/items/sladosti_i_deserty/martsipan.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "nuga",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043D\u0443\u0433\u0430",
      image: "/images/items/sladosti_i_deserty/nuga.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "halva",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0445\u0430\u043B\u0432\u0430",
      image: "/images/items/sladosti_i_deserty/halva.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "pahlava",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u0445\u043B\u0430\u0432\u0430",
      image: "/images/items/sladosti_i_deserty/pahlava.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "varene",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0432\u0430\u0440\u0435\u043D\u044C\u0435",
      image: "/images/items/sladosti_i_deserty/varene.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "dzhem",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0434\u0436\u0435\u043C",
      image: "/images/items/sladosti_i_deserty/dzhem.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "med",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0451\u0434",
      image: "/images/items/sladosti_i_deserty/med.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "pankeyki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u043D\u043A\u0435\u0439\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/pankeyki.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "bliny",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u043B\u0438\u043D\u044B",
      image: "/images/items/sladosti_i_deserty/bliny.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "ponchiki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u043E\u043D\u0447\u0438\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/ponchiki.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "shtrudel",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u0442\u0440\u0443\u0434\u0435\u043B\u044C",
      image: "/images/items/sladosti_i_deserty/shtrudel.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "brauni",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u0440\u0430\u0443\u043D\u0438",
      image: "/images/items/sladosti_i_deserty/brauni.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "shokoladnyy_muss",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439 \u043C\u0443\u0441\u0441",
      image: "/images/items/sladosti_i_deserty/shokoladnyy_muss.png",
      categoryImage: "/images/categories/sladosti_i_deserty.png"
    },
    {
      id: "voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/voda.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "mineralnaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/mineralnaya_voda.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "gazirovannaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/gazirovannaya_voda.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kola",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043B\u0430",
      image: "/images/items/napitki_bezalkogolnye/kola.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "limonad",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043B\u0438\u043C\u043E\u043D\u0430\u0434",
      image: "/images/items/napitki_bezalkogolnye/limonad.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "apelsinovyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/apelsinovyy_sok.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "yablochnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044F\u0431\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/yablochnyy_sok.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "vinogradnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/vinogradnyy_sok.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "granatovyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u0440\u0430\u043D\u0430\u0442\u043E\u0432\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/granatovyy_sok.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "tomatnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0442\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/tomatnyy_sok.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "chernyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/chernyy_chay.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "zelenyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/zelenyy_chay.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "travyanoy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0442\u0440\u0430\u0432\u044F\u043D\u043E\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/travyanoy_chay.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "belyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/belyy_chay.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "ulun",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0443\u043B\u0443\u043D",
      image: "/images/items/napitki_bezalkogolnye/ulun.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "puer",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043F\u0443\u044D\u0440",
      image: "/images/items/napitki_bezalkogolnye/puer.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kofe",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u0444\u0435",
      image: "/images/items/napitki_bezalkogolnye/kofe.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "espresso",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044D\u0441\u043F\u0440\u0435\u0441\u0441\u043E",
      image: "/images/items/napitki_bezalkogolnye/espresso.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "latte",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043B\u0430\u0442\u0442\u0435",
      image: "/images/items/napitki_bezalkogolnye/latte.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kapuchino",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0430\u043F\u0443\u0447\u0438\u043D\u043E",
      image: "/images/items/napitki_bezalkogolnye/kapuchino.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "amerikano",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E",
      image: "/images/items/napitki_bezalkogolnye/amerikano.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "mokko",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043A\u043A\u043E",
      image: "/images/items/napitki_bezalkogolnye/mokko.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kakao",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0430\u043A\u0430\u043E",
      image: "/images/items/napitki_bezalkogolnye/kakao.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "goryachiy_shokolad",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u043E\u0440\u044F\u0447\u0438\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/napitki_bezalkogolnye/goryachiy_shokolad.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kompot",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043C\u043F\u043E\u0442",
      image: "/images/items/napitki_bezalkogolnye/kompot.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "mors",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441",
      image: "/images/items/napitki_bezalkogolnye/mors.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kvas",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0432\u0430\u0441",
      image: "/images/items/napitki_bezalkogolnye/kvas.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "molochnyy_kokteyl",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C",
      image: "/images/items/napitki_bezalkogolnye/molochnyy_kokteyl.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "smuzi",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0441\u043C\u0443\u0437\u0438",
      image: "/images/items/napitki_bezalkogolnye/smuzi.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "fresh",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0444\u0440\u0435\u0448",
      image: "/images/items/napitki_bezalkogolnye/fresh.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kokosovaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043A\u043E\u0441\u043E\u0432\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/kokosovaya_voda.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "energetik",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A",
      image: "/images/items/napitki_bezalkogolnye/energetik.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "ayran",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u0439\u0440\u0430\u043D",
      image: "/images/items/napitki_bezalkogolnye/ayran.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "kefir",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0435\u0444\u0438\u0440",
      image: "/images/items/napitki_bezalkogolnye/kefir.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "pitevoy_yogurt",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043F\u0438\u0442\u044C\u0435\u0432\u043E\u0439 \u0439\u043E\u0433\u0443\u0440\u0442",
      image: "/images/items/napitki_bezalkogolnye/pitevoy_yogurt.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "moloko",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043B\u043E\u043A\u043E",
      image: "/images/items/napitki_bezalkogolnye/moloko.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "matcha",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u0430\u0442\u0447\u0430",
      image: "/images/items/napitki_bezalkogolnye/matcha.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "holodnyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/holodnyy_chay.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "raf_kofe",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0440\u0430\u0444-\u043A\u043E\u0444\u0435",
      image: "/images/items/napitki_bezalkogolnye/raf_kofe.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "chay_s_limonom",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0447\u0430\u0439 \u0441 \u043B\u0438\u043C\u043E\u043D\u043E\u043C",
      image: "/images/items/napitki_bezalkogolnye/chay_s_limonom.png",
      categoryImage: "/images/categories/napitki_bezalkogolnye.png"
    },
    {
      id: "pitstsa",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0438\u0446\u0446\u0430",
      image: "/images/items/populyarnye_blyuda/pitstsa.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "burger",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/populyarnye_blyuda/burger.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "sushi",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0443\u0448\u0438",
      image: "/images/items/populyarnye_blyuda/sushi.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "rolly",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u043E\u043B\u043B\u044B",
      image: "/images/items/populyarnye_blyuda/rolly.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "pasta",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0430\u0441\u0442\u0430",
      image: "/images/items/populyarnye_blyuda/pasta.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "steyk",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0442\u0435\u0439\u043A",
      image: "/images/items/populyarnye_blyuda/steyk.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "shashlyk",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0448\u0430\u0448\u043B\u044B\u043A",
      image: "/images/items/populyarnye_blyuda/shashlyk.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "pelmeni",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0435\u043B\u044C\u043C\u0435\u043D\u0438",
      image: "/images/items/populyarnye_blyuda/pelmeni.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "vareniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0432\u0430\u0440\u0435\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/vareniki.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "borsch",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u043E\u0440\u0449",
      image: "/images/items/populyarnye_blyuda/borsch.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "plov",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u043B\u043E\u0432",
      image: "/images/items/populyarnye_blyuda/plov.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "kartoshka_fri",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",
      image: "/images/items/populyarnye_blyuda/kartoshka_fri.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "hot_dog",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u043E\u0442-\u0434\u043E\u0433",
      image: "/images/items/populyarnye_blyuda/hot_dog.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "tako",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0442\u0430\u043A\u043E",
      image: "/images/items/populyarnye_blyuda/tako.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "shaurma",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0448\u0430\u0443\u0440\u043C\u0430",
      image: "/images/items/populyarnye_blyuda/shaurma.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "lazanya",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043B\u0430\u0437\u0430\u043D\u044C\u044F",
      image: "/images/items/populyarnye_blyuda/lazanya.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "rizotto",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0438\u0437\u043E\u0442\u0442\u043E",
      image: "/images/items/populyarnye_blyuda/rizotto.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "omlet",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043E\u043C\u043B\u0435\u0442",
      image: "/images/items/populyarnye_blyuda/omlet.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "bliny",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u043B\u0438\u043D\u044B",
      image: "/images/items/populyarnye_blyuda/bliny.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "salat_tsezar",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0430\u043B\u0430\u0442 \u0446\u0435\u0437\u0430\u0440\u044C",
      image: "/images/items/populyarnye_blyuda/salat_tsezar.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "grecheskiy_salat",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u043B\u0430\u0442",
      image: "/images/items/populyarnye_blyuda/grecheskiy_salat.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "ramen",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0430\u043C\u0435\u043D",
      image: "/images/items/populyarnye_blyuda/ramen.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "tom_yam",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0442\u043E\u043C-\u044F\u043C",
      image: "/images/items/populyarnye_blyuda/tom_yam.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "lapsha_vok",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043B\u0430\u043F\u0448\u0430 \u0432\u043E\u043A",
      image: "/images/items/populyarnye_blyuda/lapsha_vok.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "kurinye_krylyshki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/kurinye_krylyshki.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "naggetsy",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043D\u0430\u0433\u0433\u0435\u0442\u0441\u044B",
      image: "/images/items/populyarnye_blyuda/naggetsy.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "kotleta",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u043E\u0442\u043B\u0435\u0442\u0430",
      image: "/images/items/populyarnye_blyuda/kotleta.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "pyure",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u044E\u0440\u0435",
      image: "/images/items/populyarnye_blyuda/pyure.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "grechka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0440\u0435\u0447\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/grechka.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "ris",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0438\u0441",
      image: "/images/items/populyarnye_blyuda/ris.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "hinkali",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u0438\u043D\u043A\u0430\u043B\u0438",
      image: "/images/items/populyarnye_blyuda/hinkali.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "hachapuri",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u0430\u0447\u0430\u043F\u0443\u0440\u0438",
      image: "/images/items/populyarnye_blyuda/hachapuri.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "falafel",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0444\u0430\u043B\u0430\u0444\u0435\u043B\u044C",
      image: "/images/items/populyarnye_blyuda/falafel.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "paelya",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0430\u044D\u043B\u044C\u044F",
      image: "/images/items/populyarnye_blyuda/paelya.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "gulyash",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0443\u043B\u044F\u0448",
      image: "/images/items/populyarnye_blyuda/gulyash.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "okroshka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043E\u043A\u0440\u043E\u0448\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/okroshka.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "solyanka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u043E\u043B\u044F\u043D\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/solyanka.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "syrniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u044B\u0440\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/syrniki.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "draniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0434\u0440\u0430\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/draniki.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "chebureki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0447\u0435\u0431\u0443\u0440\u0435\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/chebureki.png",
      categoryImage: "/images/categories/populyarnye_blyuda.png"
    },
    {
      id: "burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/burger.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "chizburger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0447\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/chizburger.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "dvoynoy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/dvoynoy_burger.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kartoshka_fri",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",
      image: "/images/items/fastfud/kartoshka_fri.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "naggetsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043D\u0430\u0433\u0433\u0435\u0442\u0441\u044B",
      image: "/images/items/fastfud/naggetsy.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "hot_dog",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0445\u043E\u0442-\u0434\u043E\u0433",
      image: "/images/items/fastfud/hot_dog.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "shaurma",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0448\u0430\u0443\u0440\u043C\u0430",
      image: "/images/items/fastfud/shaurma.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "doner",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0434\u043E\u043D\u0435\u0440",
      image: "/images/items/fastfud/doner.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "tako",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0442\u0430\u043A\u043E",
      image: "/images/items/fastfud/tako.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "burrito",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0440\u0438\u0442\u043E",
      image: "/images/items/fastfud/burrito.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pitstsa_pepperoni",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043F\u0435\u043F\u043F\u0435\u0440\u043E\u043D\u0438",
      image: "/images/items/fastfud/pitstsa_pepperoni.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pitstsa_margarita",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",
      image: "/images/items/fastfud/pitstsa_margarita.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "sendvich",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447",
      image: "/images/items/fastfud/sendvich.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "klab_sendvich",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043B\u0430\u0431-\u0441\u044D\u043D\u0434\u0432\u0438\u0447",
      image: "/images/items/fastfud/klab_sendvich.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kurinye_krylyshki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0438",
      image: "/images/items/fastfud/kurinye_krylyshki.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "lukovye_koltsa",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043B\u0443\u043A\u043E\u0432\u044B\u0435 \u043A\u043E\u043B\u044C\u0446\u0430",
      image: "/images/items/fastfud/lukovye_koltsa.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "stripsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u0442\u0440\u0438\u043F\u0441\u044B",
      image: "/images/items/fastfud/stripsy.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kesadilya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0435\u0441\u0430\u0434\u0438\u043B\u044C\u044F",
      image: "/images/items/fastfud/kesadilya.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "falafel",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0444\u0430\u043B\u0430\u0444\u0435\u043B\u044C",
      image: "/images/items/fastfud/falafel.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "giros",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0433\u0438\u0440\u043E\u0441",
      image: "/images/items/fastfud/giros.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "panini",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0430\u043D\u0438\u043D\u0438",
      image: "/images/items/fastfud/panini.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kebab",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0435\u0431\u0430\u0431",
      image: "/images/items/fastfud/kebab.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pita",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0442\u0430",
      image: "/images/items/fastfud/pita.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "roll_s_kuritsey",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0440\u043E\u043B\u043B \u0441 \u043A\u0443\u0440\u0438\u0446\u0435\u0439",
      image: "/images/items/fastfud/roll_s_kuritsey.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "chipsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0447\u0438\u043F\u0441\u044B",
      image: "/images/items/fastfud/chipsy.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "nachos",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043D\u0430\u0447\u043E\u0441",
      image: "/images/items/fastfud/nachos.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "korn_dog",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043E\u0440\u043D-\u0434\u043E\u0433",
      image: "/images/items/fastfud/korn_dog.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "burger_s_bekonom",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0435\u043A\u043E\u043D\u043E\u043C",
      image: "/images/items/fastfud/burger_s_bekonom.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "rybnyy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0440\u044B\u0431\u043D\u044B\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/rybnyy_burger.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "veganskiy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0432\u0435\u0433\u0430\u043D\u0441\u043A\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/veganskiy_burger.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "molochnyy_kokteyl",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C",
      image: "/images/items/fastfud/molochnyy_kokteyl.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kola",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043E\u043B\u0430",
      image: "/images/items/fastfud/kola.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "limonad",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043B\u0438\u043C\u043E\u043D\u0430\u0434",
      image: "/images/items/fastfud/limonad.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "kartofelnye_dolki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043B\u044C\u043A\u0438",
      image: "/images/items/fastfud/kartofelnye_dolki.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "syrnye_palochki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044B\u0440\u043D\u044B\u0435 \u043F\u0430\u043B\u043E\u0447\u043A\u0438",
      image: "/images/items/fastfud/syrnye_palochki.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pitstsa_chetyre_syra",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u044B\u0440\u0430",
      image: "/images/items/fastfud/pitstsa_chetyre_syra.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pitstsa_gavayskaya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u0433\u0430\u0432\u0430\u0439\u0441\u043A\u0430\u044F",
      image: "/images/items/fastfud/pitstsa_gavayskaya.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "pitstsa_myasnaya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043C\u044F\u0441\u043D\u0430\u044F",
      image: "/images/items/fastfud/pitstsa_myasnaya.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "sendvich_s_tuntsom",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447 \u0441 \u0442\u0443\u043D\u0446\u043E\u043C",
      image: "/images/items/fastfud/sendvich_s_tuntsom.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "sendvich_s_indeykoy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447 \u0441 \u0438\u043D\u0434\u0435\u0439\u043A\u043E\u0439",
      image: "/images/items/fastfud/sendvich_s_indeykoy.png",
      categoryImage: "/images/categories/fastfud.png"
    },
    {
      id: "ketchup",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0435\u0442\u0447\u0443\u043F",
      image: "/images/items/sousy_i_pripravy/ketchup.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "mayonez",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u0430\u0439\u043E\u043D\u0435\u0437",
      image: "/images/items/sousy_i_pripravy/mayonez.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "gorchitsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0433\u043E\u0440\u0447\u0438\u0446\u0430",
      image: "/images/items/sousy_i_pripravy/gorchitsa.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "soevyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u043E\u0435\u0432\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/soevyy_sous.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "barbekyu_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0430\u0440\u0431\u0435\u043A\u044E \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/barbekyu_sous.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "syrnyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u044B\u0440\u043D\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/syrnyy_sous.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "chesnochnyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0435\u0441\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/chesnochnyy_sous.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "chili_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0438\u043B\u0438 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/chili_sous.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "tabasko",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0430\u0431\u0430\u0441\u043A\u043E",
      image: "/images/items/sousy_i_pripravy/tabasko.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "pesto",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0435\u0441\u0442\u043E",
      image: "/images/items/sousy_i_pripravy/pesto.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "salsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u0430\u043B\u044C\u0441\u0430",
      image: "/images/items/sousy_i_pripravy/salsa.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "teriyaki",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0435\u0440\u0438\u044F\u043A\u0438",
      image: "/images/items/sousy_i_pripravy/teriyaki.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "tkemali",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u043A\u0435\u043C\u0430\u043B\u0438",
      image: "/images/items/sousy_i_pripravy/tkemali.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "adzhika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0430\u0434\u0436\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/adzhika.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "hren",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0445\u0440\u0435\u043D",
      image: "/images/items/sousy_i_pripravy/hren.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "vasabi",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0432\u0430\u0441\u0430\u0431\u0438",
      image: "/images/items/sousy_i_pripravy/vasabi.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "karri",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0430\u0440\u0440\u0438",
      image: "/images/items/sousy_i_pripravy/karri.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "paprika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0430\u043F\u0440\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/paprika.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "chernyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/chernyy_perets.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "belyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0435\u043B\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/belyy_perets.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "krasnyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/krasnyy_perets.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "kurkuma",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0443\u0440\u043A\u0443\u043C\u0430",
      image: "/images/items/sousy_i_pripravy/kurkuma.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "koritsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u043E\u0440\u0438\u0446\u0430",
      image: "/images/items/sousy_i_pripravy/koritsa.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "muskatnyy_oreh",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u0443\u0441\u043A\u0430\u0442\u043D\u044B\u0439 \u043E\u0440\u0435\u0445",
      image: "/images/items/sousy_i_pripravy/muskatnyy_oreh.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "imbir",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0438\u043C\u0431\u0438\u0440\u044C",
      image: "/images/items/sousy_i_pripravy/imbir.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "koriandr",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u043E\u0440\u0438\u0430\u043D\u0434\u0440",
      image: "/images/items/sousy_i_pripravy/koriandr.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "zira",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0437\u0438\u0440\u0430",
      image: "/images/items/sousy_i_pripravy/zira.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "oregano",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043E\u0440\u0435\u0433\u0430\u043D\u043E",
      image: "/images/items/sousy_i_pripravy/oregano.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "bazilik",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0430\u0437\u0438\u043B\u0438\u043A",
      image: "/images/items/sousy_i_pripravy/bazilik.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "timyan",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0438\u043C\u044C\u044F\u043D",
      image: "/images/items/sousy_i_pripravy/timyan.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "rozmarin",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0440\u043E\u0437\u043C\u0430\u0440\u0438\u043D",
      image: "/images/items/sousy_i_pripravy/rozmarin.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "lavrovyy_list",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043B\u0430\u0432\u0440\u043E\u0432\u044B\u0439 \u043B\u0438\u0441\u0442",
      image: "/images/items/sousy_i_pripravy/lavrovyy_list.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "ukrop",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0443\u043A\u0440\u043E\u043F",
      image: "/images/items/sousy_i_pripravy/ukrop.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "petrushka",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0435\u0442\u0440\u0443\u0448\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/petrushka.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "kinza",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0438\u043D\u0437\u0430",
      image: "/images/items/sousy_i_pripravy/kinza.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "myata",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u044F\u0442\u0430",
      image: "/images/items/sousy_i_pripravy/myata.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "shafran",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0448\u0430\u0444\u0440\u0430\u043D",
      image: "/images/items/sousy_i_pripravy/shafran.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "kardamon",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0430\u0440\u0434\u0430\u043C\u043E\u043D",
      image: "/images/items/sousy_i_pripravy/kardamon.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "gvozdika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0433\u0432\u043E\u0437\u0434\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/gvozdika.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "vanil",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0432\u0430\u043D\u0438\u043B\u044C",
      image: "/images/items/sousy_i_pripravy/vanil.png",
      categoryImage: "/images/categories/sousy_i_pripravy.png"
    },
    {
      id: "futbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0443\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/futbol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "basketbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/basketbol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "tennis",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0435\u043D\u043D\u0438\u0441",
      image: "/images/items/vidy_sporta/tennis.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "voleybol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u043E\u043B\u0435\u0439\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/voleybol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "hokkey",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0445\u043E\u043A\u043A\u0435\u0439",
      image: "/images/items/vidy_sporta/hokkey.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "boks",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u043E\u043A\u0441",
      image: "/images/items/vidy_sporta/boks.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "mma",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "MMA",
      image: "/images/items/vidy_sporta/mma.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "plavanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u043B\u0430\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/plavanie.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "beg",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0435\u0433",
      image: "/images/items/vidy_sporta/beg.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "velosport",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u0435\u043B\u043E\u0441\u043F\u043E\u0440\u0442",
      image: "/images/items/vidy_sporta/velosport.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "biatlon",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0438\u0430\u0442\u043B\u043E\u043D",
      image: "/images/items/vidy_sporta/biatlon.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "lyzhi",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043B\u044B\u0436\u0438",
      image: "/images/items/vidy_sporta/lyzhi.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "snoubord",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043D\u043E\u0443\u0431\u043E\u0440\u0434",
      image: "/images/items/vidy_sporta/snoubord.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "skeytbording",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/skeytbording.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "serfing",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u0435\u0440\u0444\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/serfing.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "shahmaty",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/vidy_sporta/shahmaty.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "nastolnyy_tennis",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043D\u043D\u0438\u0441",
      image: "/images/items/vidy_sporta/nastolnyy_tennis.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "gimnastika",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u0438\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430",
      image: "/images/items/vidy_sporta/gimnastika.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "formula_1",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u043E\u0440\u043C\u0443\u043B\u0430-1",
      image: "/images/items/vidy_sporta/formula_1.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "karate",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u0430\u0440\u0430\u0442\u0435",
      image: "/images/items/vidy_sporta/karate.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "dzyudo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0434\u0437\u044E\u0434\u043E",
      image: "/images/items/vidy_sporta/dzyudo.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "thekvondo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0445\u044D\u043A\u0432\u043E\u043D\u0434\u043E",
      image: "/images/items/vidy_sporta/thekvondo.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "regbi",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0440\u0435\u0433\u0431\u0438",
      image: "/images/items/vidy_sporta/regbi.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "golf",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u043E\u043B\u044C\u0444",
      image: "/images/items/vidy_sporta/golf.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "beysbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0435\u0439\u0441\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/beysbol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "amerikanskiy_futbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0444\u0443\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/amerikanskiy_futbol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "kriket",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u0440\u0438\u043A\u0435\u0442",
      image: "/images/items/vidy_sporta/kriket.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "figurnoe_katanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0438\u0433\u0443\u0440\u043D\u043E\u0435 \u043A\u0430\u0442\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/figurnoe_katanie.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "konkobezhnyy_sport",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u043E\u043D\u044C\u043A\u043E\u0431\u0435\u0436\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442",
      image: "/images/items/vidy_sporta/konkobezhnyy_sport.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "skalolazanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043A\u0430\u043B\u043E\u043B\u0430\u0437\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/skalolazanie.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "yoga",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0439\u043E\u0433\u0430",
      image: "/images/items/vidy_sporta/yoga.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "pilates",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u0438\u043B\u0430\u0442\u0435\u0441",
      image: "/images/items/vidy_sporta/pilates.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "tyazhelaya_atletika",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u044F\u0436\u0451\u043B\u0430\u044F \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0430",
      image: "/images/items/vidy_sporta/tyazhelaya_atletika.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "pauerlifting",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u0430\u0443\u044D\u0440\u043B\u0438\u0444\u0442\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/pauerlifting.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "strelba_iz_luka",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u0442\u0440\u0435\u043B\u044C\u0431\u0430 \u0438\u0437 \u043B\u0443\u043A\u0430",
      image: "/images/items/vidy_sporta/strelba_iz_luka.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "fehtovanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0435\u0445\u0442\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/fehtovanie.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "gandbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u0430\u043D\u0434\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/gandbol.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "vodnoe_polo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u043E\u0434\u043D\u043E\u0435 \u043F\u043E\u043B\u043E",
      image: "/images/items/vidy_sporta/vodnoe_polo.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "dayving",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0434\u0430\u0439\u0432\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/dayving.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "triatlon",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0440\u0438\u0430\u0442\u043B\u043E\u043D",
      image: "/images/items/vidy_sporta/triatlon.png",
      categoryImage: "/images/categories/vidy_sporta.png"
    },
    {
      id: "risovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/risovanie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "fotografiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
      image: "/images/items/hobbi/fotografiya.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "puteshestviya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
      image: "/images/items/hobbi/puteshestviya.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "chtenie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0447\u0442\u0435\u043D\u0438\u0435",
      image: "/images/items/hobbi/chtenie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "sadovodstvo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u0430\u0434\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
      image: "/images/items/hobbi/sadovodstvo.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "rybalka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0440\u044B\u0431\u0430\u043B\u043A\u0430",
      image: "/images/items/hobbi/rybalka.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "ohota",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043E\u0445\u043E\u0442\u0430",
      image: "/images/items/hobbi/ohota.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "kulinariya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",
      image: "/images/items/hobbi/kulinariya.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "vypechka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u044B\u043F\u0435\u0447\u043A\u0430",
      image: "/images/items/hobbi/vypechka.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "nastolnye_igry",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      image: "/images/items/hobbi/nastolnye_igry.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "videoigry",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      image: "/images/items/hobbi/videoigry.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "kollektsionirovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/kollektsionirovanie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "vyazanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u044F\u0437\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/vyazanie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "shite",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0448\u0438\u0442\u044C\u0451",
      image: "/images/items/hobbi/shite.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "modelirovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/modelirovanie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "origami",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043E\u0440\u0438\u0433\u0430\u043C\u0438",
      image: "/images/items/hobbi/origami.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "tantsy",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0442\u0430\u043D\u0446\u044B",
      image: "/images/items/hobbi/tantsy.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "penie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u0435\u043D\u0438\u0435",
      image: "/images/items/hobbi/penie.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "igra_na_gitare",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0433\u0440\u0430 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435",
      image: "/images/items/hobbi/igra_na_gitare.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "igra_na_pianino",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0433\u0440\u0430 \u043D\u0430 \u043F\u0438\u0430\u043D\u0438\u043D\u043E",
      image: "/images/items/hobbi/igra_na_pianino.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "bloging",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0431\u043B\u043E\u0433\u0438\u043D\u0433",
      image: "/images/items/hobbi/bloging.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "podkasty",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u043E\u0434\u043A\u0430\u0441\u0442\u044B",
      image: "/images/items/hobbi/podkasty.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "yoga",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0439\u043E\u0433\u0430",
      image: "/images/items/hobbi/yoga.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "fitnes",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0444\u0438\u0442\u043D\u0435\u0441",
      image: "/images/items/hobbi/fitnes.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "beg",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0431\u0435\u0433",
      image: "/images/items/hobbi/beg.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "veloprogulki",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u0435\u043B\u043E\u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438",
      image: "/images/items/hobbi/veloprogulki.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "pohody",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u043E\u0445\u043E\u0434\u044B",
      image: "/images/items/hobbi/pohody.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "kemping",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0435\u043C\u043F\u0438\u043D\u0433",
      image: "/images/items/hobbi/kemping.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "dayving",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0434\u0430\u0439\u0432\u0438\u043D\u0433",
      image: "/images/items/hobbi/dayving.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "snoubord",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u043D\u043E\u0443\u0431\u043E\u0440\u0434",
      image: "/images/items/hobbi/snoubord.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "skeytbording",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434\u0438\u043D\u0433",
      image: "/images/items/hobbi/skeytbording.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "shahmaty",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/hobbi/shahmaty.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "izuchenie_yazykov",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u043E\u0432",
      image: "/images/items/hobbi/izuchenie_yazykov.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "kalligrafiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0430\u043B\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u044F",
      image: "/images/items/hobbi/kalligrafiya.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "goncharnoe_delo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0433\u043E\u043D\u0447\u0430\u0440\u043D\u043E\u0435 \u0434\u0435\u043B\u043E",
      image: "/images/items/hobbi/goncharnoe_delo.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "derevoobrabotka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0434\u0435\u0440\u0435\u0432\u043E\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
      image: "/images/items/hobbi/derevoobrabotka.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "akvariumistika",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0430\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u0438\u0441\u0442\u0438\u043A\u0430",
      image: "/images/items/hobbi/akvariumistika.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "astronomiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0430\u0441\u0442\u0440\u043E\u043D\u043E\u043C\u0438\u044F",
      image: "/images/items/hobbi/astronomiya.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "kospley",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u043E\u0441\u043F\u043B\u0435\u0439",
      image: "/images/items/hobbi/kospley.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "volonterstvo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u043E\u043B\u043E\u043D\u0442\u0451\u0440\u0441\u0442\u0432\u043E",
      image: "/images/items/hobbi/volonterstvo.png",
      categoryImage: "/images/categories/hobbi.png"
    },
    {
      id: "minecraft",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Minecraft",
      image: "/images/items/videoigry/minecraft.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "gta_v",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "GTA V",
      image: "/images/items/videoigry/gta_v.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "counter_strike_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Counter-Strike 2",
      image: "/images/items/videoigry/counter_strike_2.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "dota_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Dota 2",
      image: "/images/items/videoigry/dota_2.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "fortnite",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Fortnite",
      image: "/images/items/videoigry/fortnite.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "pubg",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "PUBG",
      image: "/images/items/videoigry/pubg.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "roblox",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Roblox",
      image: "/images/items/videoigry/roblox.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "terraria",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Terraria",
      image: "/images/items/videoigry/terraria.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "the_witcher_3",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "The Witcher 3",
      image: "/images/items/videoigry/the_witcher_3.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "cyberpunk_2077",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Cyberpunk 2077",
      image: "/images/items/videoigry/cyberpunk_2077.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "skyrim",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Skyrim",
      image: "/images/items/videoigry/skyrim.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "half_life_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Half-Life 2",
      image: "/images/items/videoigry/half_life_2.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "portal_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Portal 2",
      image: "/images/items/videoigry/portal_2.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "among_us",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Among Us",
      image: "/images/items/videoigry/among_us.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "brawl_stars",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Brawl Stars",
      image: "/images/items/videoigry/brawl_stars.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "clash_royale",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Clash Royale",
      image: "/images/items/videoigry/clash_royale.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "fifa",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "FIFA",
      image: "/images/items/videoigry/fifa.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "need_for_speed",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Need for Speed",
      image: "/images/items/videoigry/need_for_speed.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "stardew_valley",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Stardew Valley",
      image: "/images/items/videoigry/stardew_valley.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "rust",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Rust",
      image: "/images/items/videoigry/rust.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "valorant",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Valorant",
      image: "/images/items/videoigry/valorant.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "league_of_legends",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "League of Legends",
      image: "/images/items/videoigry/league_of_legends.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "world_of_warcraft",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "World of Warcraft",
      image: "/images/items/videoigry/world_of_warcraft.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "overwatch",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Overwatch",
      image: "/images/items/videoigry/overwatch.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "apex_legends",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Apex Legends",
      image: "/images/items/videoigry/apex_legends.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "call_of_duty",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Call of Duty",
      image: "/images/items/videoigry/call_of_duty.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "battlefield",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Battlefield",
      image: "/images/items/videoigry/battlefield.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "red_dead_redemption_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Red Dead Redemption 2",
      image: "/images/items/videoigry/red_dead_redemption_2.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "elden_ring",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Elden Ring",
      image: "/images/items/videoigry/elden_ring.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "dark_souls",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Dark Souls",
      image: "/images/items/videoigry/dark_souls.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "hogwarts_legacy",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Hogwarts Legacy",
      image: "/images/items/videoigry/hogwarts_legacy.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "the_last_of_us",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "The Last of Us",
      image: "/images/items/videoigry/the_last_of_us.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "god_of_war",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "God of War",
      image: "/images/items/videoigry/god_of_war.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "uncharted",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Uncharted",
      image: "/images/items/videoigry/uncharted.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "resident_evil",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Resident Evil",
      image: "/images/items/videoigry/resident_evil.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "silent_hill",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Silent Hill",
      image: "/images/items/videoigry/silent_hill.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "mortal_kombat",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Mortal Kombat",
      image: "/images/items/videoigry/mortal_kombat.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "tekken",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Tekken",
      image: "/images/items/videoigry/tekken.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "street_fighter",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Street Fighter",
      image: "/images/items/videoigry/street_fighter.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "sims",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Sims",
      image: "/images/items/videoigry/sims.png",
      categoryImage: "/images/categories/videoigry.png"
    },
    {
      id: "monopoliya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u043E\u043D\u043E\u043F\u043E\u043B\u0438\u044F",
      image: "/images/items/nastolnye_igry/monopoliya.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "manchkin",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0430\u043D\u0447\u043A\u0438\u043D",
      image: "/images/items/nastolnye_igry/manchkin.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "imadzhinarium",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0418\u043C\u0430\u0434\u0436\u0438\u043D\u0430\u0440\u0438\u0443\u043C",
      image: "/images/items/nastolnye_igry/imadzhinarium.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "diksit",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u0438\u043A\u0441\u0438\u0442",
      image: "/images/items/nastolnye_igry/diksit.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "uno",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0423\u043D\u043E",
      image: "/images/items/nastolnye_igry/uno.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "dzhenga",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u0436\u0435\u043D\u0433\u0430",
      image: "/images/items/nastolnye_igry/dzhenga.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "erudit",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u042D\u0440\u0443\u0434\u0438\u0442",
      image: "/images/items/nastolnye_igry/erudit.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "karkasson",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0430\u0440\u043A\u0430\u0441\u0441\u043E\u043D",
      image: "/images/items/nastolnye_igry/karkasson.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "kolonizatory",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043E\u043B\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u044B",
      image: "/images/items/nastolnye_igry/kolonizatory.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "bilet_na_poezd",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0411\u0438\u043B\u0435\u0442 \u043D\u0430 \u043F\u043E\u0435\u0437\u0434",
      image: "/images/items/nastolnye_igry/bilet_na_poezd.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "kodovye_imena",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043E\u0434\u043E\u0432\u044B\u0435 \u0438\u043C\u0435\u043D\u0430",
      image: "/images/items/nastolnye_igry/kodovye_imena.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "mafiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0430\u0444\u0438\u044F",
      image: "/images/items/nastolnye_igry/mafiya.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "krokodil",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B",
      image: "/images/items/nastolnye_igry/krokodil.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "alias",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0410\u043B\u0438\u0430\u0441",
      image: "/images/items/nastolnye_igry/alias.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "aktiviti",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0410\u043A\u0442\u0438\u0432\u0438\u0442\u0438",
      image: "/images/items/nastolnye_igry/aktiviti.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "domino",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u043E\u043C\u0438\u043D\u043E",
      image: "/images/items/nastolnye_igry/domino.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "shashki",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0448\u0430\u0448\u043A\u0438",
      image: "/images/items/nastolnye_igry/shashki.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "shahmaty",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/nastolnye_igry/shahmaty.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "nardy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043D\u0430\u0440\u0434\u044B",
      image: "/images/items/nastolnye_igry/nardy.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "morskoy_boy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439",
      image: "/images/items/nastolnye_igry/morskoy_boy.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "poker",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043F\u043E\u043A\u0435\u0440",
      image: "/images/items/nastolnye_igry/poker.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "durak",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0434\u0443\u0440\u0430\u043A",
      image: "/images/items/nastolnye_igry/durak.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "preferans",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043F\u0440\u0435\u0444\u0435\u0440\u0430\u043D\u0441",
      image: "/images/items/nastolnye_igry/preferans.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "bridzh",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0431\u0440\u0438\u0434\u0436",
      image: "/images/items/nastolnye_igry/bridzh.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "loto",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043B\u043E\u0442\u043E",
      image: "/images/items/nastolnye_igry/loto.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "svintus",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u0432\u0438\u043D\u0442\u0443\u0441",
      image: "/images/items/nastolnye_igry/svintus.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "beng",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0411\u044D\u043D\u0433",
      image: "/images/items/nastolnye_igry/beng.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "evolyutsiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u042D\u0432\u043E\u043B\u044E\u0446\u0438\u044F",
      image: "/images/items/nastolnye_igry/evolyutsiya.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "pandemiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041F\u0430\u043D\u0434\u0435\u043C\u0438\u044F",
      image: "/images/items/nastolnye_igry/pandemiya.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "gnomy_vrediteli",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0413\u043D\u043E\u043C\u044B-\u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/nastolnye_igry/gnomy_vrediteli.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "7_chudes",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "7 \u0447\u0443\u0434\u0435\u0441",
      image: "/images/items/nastolnye_igry/7_chudes.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "tsitadeli",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0426\u0438\u0442\u0430\u0434\u0435\u043B\u0438",
      image: "/images/items/nastolnye_igry/tsitadeli.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "karty_konflikta",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0430\u0440\u0442\u044B \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430",
      image: "/images/items/nastolnye_igry/karty_konflikta.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "spyaschie_korolevy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u043F\u044F\u0449\u0438\u0435 \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u044B",
      image: "/images/items/nastolnye_igry/spyaschie_korolevy.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "dobbl",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u043E\u0431\u0431\u043B\u044C",
      image: "/images/items/nastolnye_igry/dobbl.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "memo",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0435\u043C\u043E",
      image: "/images/items/nastolnye_igry/memo.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "kluedo",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043B\u0443\u044D\u0434\u043E",
      image: "/images/items/nastolnye_igry/kluedo.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "risk",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0420\u0438\u0441\u043A",
      image: "/images/items/nastolnye_igry/risk.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "uzhas_arkhema",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0423\u0436\u0430\u0441 \u0410\u0440\u043A\u0445\u044D\u043C\u0430",
      image: "/images/items/nastolnye_igry/uzhas_arkhema.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "serp",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u0435\u0440\u043F",
      image: "/images/items/nastolnye_igry/serp.png",
      categoryImage: "/images/categories/nastolnye_igry.png"
    },
    {
      id: "titanik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0438\u0442\u0430\u043D\u0438\u043A",
      image: "/images/items/filmy/titanik.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "avatar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0410\u0432\u0430\u0442\u0430\u0440",
      image: "/images/items/filmy/avatar.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "interstellar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u043D\u0442\u0435\u0440\u0441\u0442\u0435\u043B\u043B\u0430\u0440",
      image: "/images/items/filmy/interstellar.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "matritsa",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0430\u0442\u0440\u0438\u0446\u0430",
      image: "/images/items/filmy/matritsa.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "forrest_gamp",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0424\u043E\u0440\u0440\u0435\u0441\u0442 \u0413\u0430\u043C\u043F",
      image: "/images/items/filmy/forrest_gamp.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "gladiator",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u043B\u0430\u0434\u0438\u0430\u0442\u043E\u0440",
      image: "/images/items/filmy/gladiator.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "dyuna",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u044E\u043D\u0430",
      image: "/images/items/filmy/dyuna.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "oppengeymer",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041E\u043F\u043F\u0435\u043D\u0433\u0435\u0439\u043C\u0435\u0440",
      image: "/images/items/filmy/oppengeymer.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "dzhoker",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0436\u043E\u043A\u0435\u0440",
      image: "/images/items/filmy/dzhoker.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "temnyy_rytsar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0451\u043C\u043D\u044B\u0439 \u0440\u044B\u0446\u0430\u0440\u044C",
      image: "/images/items/filmy/temnyy_rytsar.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "shrek",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0428\u0440\u0435\u043A",
      image: "/images/items/filmy/shrek.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "korol_lev",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0440\u043E\u043B\u044C \u041B\u0435\u0432",
      image: "/images/items/filmy/korol_lev.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "holodnoe_serdtse",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
      image: "/images/items/filmy/holodnoe_serdtse.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "garri_potter",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0430\u0440\u0440\u0438 \u041F\u043E\u0442\u0442\u0435\u0440",
      image: "/images/items/filmy/garri_potter.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "vlastelin_kolets",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u043B\u0430\u0441\u0442\u0435\u043B\u0438\u043D \u043A\u043E\u043B\u0435\u0446",
      image: "/images/items/filmy/vlastelin_kolets.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "piraty_karibskogo_morya",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0438\u0440\u0430\u0442\u044B \u041A\u0430\u0440\u0438\u0431\u0441\u043A\u043E\u0433\u043E \u043C\u043E\u0440\u044F",
      image: "/images/items/filmy/piraty_karibskogo_morya.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "mstiteli",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0441\u0442\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/filmy/mstiteli.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "chelovek_pauk",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043F\u0430\u0443\u043A",
      image: "/images/items/filmy/chelovek_pauk.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "odin_doma",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041E\u0434\u0438\u043D \u0434\u043E\u043C\u0430",
      image: "/images/items/filmy/odin_doma.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "nazad_v_buduschee",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041D\u0430\u0437\u0430\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435",
      image: "/images/items/filmy/nazad_v_buduschee.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "terminator_2",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u0442\u043E\u0440 2",
      image: "/images/items/filmy/terminator_2.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "chuzhoy",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0443\u0436\u043E\u0439",
      image: "/images/items/filmy/chuzhoy.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "hischnik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u0438\u0449\u043D\u0438\u043A",
      image: "/images/items/filmy/hischnik.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "zelenaya_milya",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0435\u043B\u0451\u043D\u0430\u044F \u043C\u0438\u043B\u044F",
      image: "/images/items/filmy/zelenaya_milya.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "pobeg_iz_shoushenka",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u043E\u0431\u0435\u0433 \u0438\u0437 \u0428\u043E\u0443\u0448\u0435\u043D\u043A\u0430",
      image: "/images/items/filmy/pobeg_iz_shoushenka.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "boytsovskiy_klub",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u043E\u0439\u0446\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u043B\u0443\u0431",
      image: "/images/items/filmy/boytsovskiy_klub.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "kriminalnoe_chtivo",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0440\u0438\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0442\u0438\u0432\u043E",
      image: "/images/items/filmy/kriminalnoe_chtivo.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "nachalo",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041D\u0430\u0447\u0430\u043B\u043E",
      image: "/images/items/filmy/nachalo.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "la_la_lend",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0430-\u041B\u0430 \u041B\u0435\u043D\u0434",
      image: "/images/items/filmy/la_la_lend.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "zvezdnye_voyny",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0435 \u0432\u043E\u0439\u043D\u044B",
      image: "/images/items/filmy/zvezdnye_voyny.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "park_yurskogo_perioda",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0430\u0440\u043A \u042E\u0440\u0441\u043A\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
      image: "/images/items/filmy/park_yurskogo_perioda.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "missiya_nevypolnima",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0438\u0441\u0441\u0438\u044F \u043D\u0435\u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043C\u0430",
      image: "/images/items/filmy/missiya_nevypolnima.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "dzhon_uik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0436\u043E\u043D \u0423\u0438\u043A",
      image: "/images/items/filmy/dzhon_uik.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "bezumnyy_maks",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u041C\u0430\u043A\u0441",
      image: "/images/items/filmy/bezumnyy_maks.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "igra_prestolov",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u0433\u0440\u0430 \u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043E\u0432",
      image: "/images/items/filmy/igra_prestolov.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "doktor_strendzh",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u0440\u044D\u043D\u0434\u0436",
      image: "/images/items/filmy/doktor_strendzh.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "betmen",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u044D\u0442\u043C\u0435\u043D",
      image: "/images/items/filmy/betmen.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "supermen",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0443\u043F\u0435\u0440\u043C\u0435\u043D",
      image: "/images/items/filmy/supermen.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "zheleznyy_chelovek",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
      image: "/images/items/filmy/zheleznyy_chelovek.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "chernaya_pantera",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u043F\u0430\u043D\u0442\u0435\u0440\u0430",
      image: "/images/items/filmy/chernaya_pantera.png",
      categoryImage: "/images/categories/filmy.png"
    },
    {
      id: "shrek",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0428\u0440\u0435\u043A",
      image: "/images/items/multfilmy/shrek.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "korol_lev",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0440\u043E\u043B\u044C \u041B\u0435\u0432",
      image: "/images/items/multfilmy/korol_lev.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "holodnoe_serdtse",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
      image: "/images/items/multfilmy/holodnoe_serdtse.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "istoriya_igrushek",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0433\u0440\u0443\u0448\u0435\u043A",
      image: "/images/items/multfilmy/istoriya_igrushek.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "v_poiskah_nemo",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412 \u043F\u043E\u0438\u0441\u043A\u0430\u0445 \u041D\u0435\u043C\u043E",
      image: "/images/items/multfilmy/v_poiskah_nemo.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "ratatuy",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u0442\u0430\u0442\u0443\u0439",
      image: "/images/items/multfilmy/ratatuy.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "vverh",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u0432\u0435\u0440\u0445",
      image: "/images/items/multfilmy/vverh.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "vall_i",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u0410\u041B\u041B-\u0418",
      image: "/images/items/multfilmy/vall_i.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "zveropolis",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0432\u0435\u0440\u043E\u043F\u043E\u043B\u0438\u0441",
      image: "/images/items/multfilmy/zveropolis.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "moana",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u043E\u0430\u043D\u0430",
      image: "/images/items/multfilmy/moana.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "tayna_koko",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0439\u043D\u0430 \u041A\u043E\u043A\u043E",
      image: "/images/items/multfilmy/tayna_koko.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "gadkiy_ya",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0430\u0434\u043A\u0438\u0439 \u044F",
      image: "/images/items/multfilmy/gadkiy_ya.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "minony",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0438\u043D\u044C\u043E\u043D\u044B",
      image: "/images/items/multfilmy/minony.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "madagaskar",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440",
      image: "/images/items/multfilmy/madagaskar.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "kung_fu_panda",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0443\u043D\u0433-\u0444\u0443 \u041F\u0430\u043D\u0434\u0430",
      image: "/images/items/multfilmy/kung_fu_panda.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "kak_priruchit_drakona",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0430\u043A \u043F\u0440\u0438\u0440\u0443\u0447\u0438\u0442\u044C \u0434\u0440\u0430\u043A\u043E\u043D\u0430",
      image: "/images/items/multfilmy/kak_priruchit_drakona.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "lednikovyy_period",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0435\u0434\u043D\u0438\u043A\u043E\u0432\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434",
      image: "/images/items/multfilmy/lednikovyy_period.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "tachki",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0447\u043A\u0438",
      image: "/images/items/multfilmy/tachki.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "supersemeyka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0443\u043F\u0435\u0440\u0441\u0435\u043C\u0435\u0439\u043A\u0430",
      image: "/images/items/multfilmy/supersemeyka.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "monstry_na_kanikulah",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u043E\u043D\u0441\u0442\u0440\u044B \u043D\u0430 \u043A\u0430\u043D\u0438\u043A\u0443\u043B\u0430\u0445",
      image: "/images/items/multfilmy/monstry_na_kanikulah.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "spirit",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u043F\u0438\u0440\u0438\u0442",
      image: "/images/items/multfilmy/spirit.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "rango",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u043D\u0433\u043E",
      image: "/images/items/multfilmy/rango.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "kot_v_sapogah",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0442 \u0432 \u0441\u0430\u043F\u043E\u0433\u0430\u0445",
      image: "/images/items/multfilmy/kot_v_sapogah.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "semeyka_kruds",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0435\u043C\u0435\u0439\u043A\u0430 \u041A\u0440\u0443\u0434\u0441",
      image: "/images/items/multfilmy/semeyka_kruds.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "balto",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0430\u043B\u0442\u043E",
      image: "/images/items/multfilmy/balto.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "aladdin",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0410\u043B\u0430\u0434\u0434\u0438\u043D",
      image: "/images/items/multfilmy/aladdin.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "krasavitsa_i_chudovische",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430 \u0438 \u0447\u0443\u0434\u043E\u0432\u0438\u0449\u0435",
      image: "/images/items/multfilmy/krasavitsa_i_chudovische.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "rusalochka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0443\u0441\u0430\u043B\u043E\u0447\u043A\u0430",
      image: "/images/items/multfilmy/rusalochka.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "mulan",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0443\u043B\u0430\u043D",
      image: "/images/items/multfilmy/mulan.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "pokahontas",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u043E\u043A\u0430\u0445\u043E\u043D\u0442\u0430\u0441",
      image: "/images/items/multfilmy/pokahontas.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "spyaschaya_krasavitsa",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u043F\u044F\u0449\u0430\u044F \u043A\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430",
      image: "/images/items/multfilmy/spyaschaya_krasavitsa.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "belosnezhka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0435\u043B\u043E\u0441\u043D\u0435\u0436\u043A\u0430",
      image: "/images/items/multfilmy/belosnezhka.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "bembi",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u044D\u043C\u0431\u0438",
      image: "/images/items/multfilmy/bembi.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "dambo",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0430\u043C\u0431\u043E",
      image: "/images/items/multfilmy/dambo.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "pinokkio",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0438\u043D\u043E\u043A\u043A\u0438\u043E",
      image: "/images/items/multfilmy/pinokkio.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "lilo_i_stich",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0438\u043B\u043E \u0438 \u0421\u0442\u0438\u0447",
      image: "/images/items/multfilmy/lilo_i_stich.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "ralf",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u043B\u044C\u0444",
      image: "/images/items/multfilmy/ralf.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "gerkules",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0435\u0440\u043A\u0443\u043B\u0435\u0441",
      image: "/images/items/multfilmy/gerkules.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "tarzan",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0440\u0437\u0430\u043D",
      image: "/images/items/multfilmy/tarzan.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "kniga_dzhungley",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043D\u0438\u0433\u0430 \u0434\u0436\u0443\u043D\u0433\u043B\u0435\u0439",
      image: "/images/items/multfilmy/kniga_dzhungley.png",
      categoryImage: "/images/categories/multfilmy.png"
    },
    {
      id: "vo_vse_tyazhkie",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0412\u043E \u0432\u0441\u0435 \u0442\u044F\u0436\u043A\u0438\u0435",
      image: "/images/items/serialy/vo_vse_tyazhkie.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "igra_prestolov",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0418\u0433\u0440\u0430 \u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043E\u0432",
      image: "/images/items/serialy/igra_prestolov.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "druzya",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u0440\u0443\u0437\u044C\u044F",
      image: "/images/items/serialy/druzya.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "ofis",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0444\u0438\u0441",
      image: "/images/items/serialy/ofis.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "teoriya_bolshogo_vzryva",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0422\u0435\u043E\u0440\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0432\u0437\u0440\u044B\u0432\u0430",
      image: "/images/items/serialy/teoriya_bolshogo_vzryva.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "doktor_haus",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0425\u0430\u0443\u0441",
      image: "/images/items/serialy/doktor_haus.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "sherlok",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0428\u0435\u0440\u043B\u043E\u043A",
      image: "/images/items/serialy/sherlok.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "ochen_strannye_dela",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0447\u0435\u043D\u044C \u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u0434\u0435\u043B\u0430",
      image: "/images/items/serialy/ochen_strannye_dela.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "hodyachie_mertvetsy",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0425\u043E\u0434\u044F\u0447\u0438\u0435 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B",
      image: "/images/items/serialy/hodyachie_mertvetsy.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "ostatsya_v_zhivyh",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0432 \u0436\u0438\u0432\u044B\u0445",
      image: "/images/items/serialy/ostatsya_v_zhivyh.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "klan_soprano",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u043B\u0430\u043D \u0421\u043E\u043F\u0440\u0430\u043D\u043E",
      image: "/images/items/serialy/klan_soprano.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "luchshe_zvonite_solu",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041B\u0443\u0447\u0448\u0435 \u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0421\u043E\u043B\u0443",
      image: "/images/items/serialy/luchshe_zvonite_solu.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "chernobyl",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044C",
      image: "/images/items/serialy/chernobyl.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "nastoyaschiy_detektiv",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0434\u0435\u0442\u0435\u043A\u0442\u0438\u0432",
      image: "/images/items/serialy/nastoyaschiy_detektiv.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "mandalorets",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0430\u043D\u0434\u0430\u043B\u043E\u0440\u0435\u0446",
      image: "/images/items/serialy/mandalorets.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "vedmak",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0412\u0435\u0434\u044C\u043C\u0430\u043A",
      image: "/images/items/serialy/vedmak.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "doktor_kto",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u041A\u0442\u043E",
      image: "/images/items/serialy/doktor_kto.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "sverhestestvennoe",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0432\u0435\u0440\u0445\u044A\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435",
      image: "/images/items/serialy/sverhestestvennoe.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "dekster",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u0435\u043A\u0441\u0442\u0435\u0440",
      image: "/images/items/serialy/dekster.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "fargo",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0424\u0430\u0440\u0433\u043E",
      image: "/images/items/serialy/fargo.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "kartochnyy_domik",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043C\u0438\u043A",
      image: "/images/items/serialy/kartochnyy_domik.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "mir_dikogo_zapada",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0438\u0440 \u0414\u0438\u043A\u043E\u0433\u043E \u0417\u0430\u043F\u0430\u0434\u0430",
      image: "/images/items/serialy/mir_dikogo_zapada.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "chernoe_zerkalo",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0427\u0451\u0440\u043D\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E",
      image: "/images/items/serialy/chernoe_zerkalo.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "bumazhnyy_dom",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0439 \u0434\u043E\u043C",
      image: "/images/items/serialy/bumazhnyy_dom.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "bridzhertony",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0411\u0440\u0438\u0434\u0436\u0435\u0440\u0442\u043E\u043D\u044B",
      image: "/images/items/serialy/bridzhertony.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "eyforiya",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u042D\u0439\u0444\u043E\u0440\u0438\u044F",
      image: "/images/items/serialy/eyforiya.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "tvin_piks",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0422\u0432\u0438\u043D \u041F\u0438\u043A\u0441",
      image: "/images/items/serialy/tvin_piks.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "sekretnye_materialy",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
      image: "/images/items/serialy/sekretnye_materialy.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "klinika",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u043B\u0438\u043D\u0438\u043A\u0430",
      image: "/images/items/serialy/klinika.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "kak_ya_vstretil_vashu_mamu",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u0430\u043A \u044F \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B \u0432\u0430\u0448\u0443 \u043C\u0430\u043C\u0443",
      image: "/images/items/serialy/kak_ya_vstretil_vashu_mamu.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "simpsony",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0438\u043C\u043F\u0441\u043E\u043D\u044B",
      image: "/images/items/serialy/simpsony.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "futurama",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0424\u0443\u0442\u0443\u0440\u0430\u043C\u0430",
      image: "/images/items/serialy/futurama.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "yuzhnyy_park",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u042E\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u043A",
      image: "/images/items/serialy/yuzhnyy_park.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "griffiny",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0413\u0440\u0438\u0444\u0444\u0438\u043D\u044B",
      image: "/images/items/serialy/griffiny.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "rik_i_morti",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0420\u0438\u043A \u0438 \u041C\u043E\u0440\u0442\u0438",
      image: "/images/items/serialy/rik_i_morti.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "avatar_legenda_ob_aange",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0410\u0432\u0430\u0442\u0430\u0440: \u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u043E\u0431 \u0410\u0430\u043D\u0433\u0435",
      image: "/images/items/serialy/avatar_legenda_ob_aange.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "patsany",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041F\u0430\u0446\u0430\u043D\u044B",
      image: "/images/items/serialy/patsany.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "loki",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041B\u043E\u043A\u0438",
      image: "/images/items/serialy/loki.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "uensdey",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0423\u044D\u043D\u0441\u0434\u0435\u0439",
      image: "/images/items/serialy/uensdey.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "mister_robot",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0438\u0441\u0442\u0435\u0440 \u0420\u043E\u0431\u043E\u0442",
      image: "/images/items/serialy/mister_robot.png",
      categoryImage: "/images/categories/serialy.png"
    },
    {
      id: "pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/pop.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/rok.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "rep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u044D\u043F",
      image: "/images/items/muzykalnye_zhanry/rep.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "hip_hop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0445\u0438\u043F-\u0445\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/hip_hop.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "dzhaz",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0436\u0430\u0437",
      image: "/images/items/muzykalnye_zhanry/dzhaz.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "blyuz",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0431\u043B\u044E\u0437",
      image: "/images/items/muzykalnye_zhanry/blyuz.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "klassika",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/klassika.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "metal",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043C\u0435\u0442\u0430\u043B",
      image: "/images/items/muzykalnye_zhanry/metal.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "pank",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u0430\u043D\u043A",
      image: "/images/items/muzykalnye_zhanry/pank.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "elektronika",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/elektronika.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "haus",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0445\u0430\u0443\u0441",
      image: "/images/items/muzykalnye_zhanry/haus.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "tehno",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0435\u0445\u043D\u043E",
      image: "/images/items/muzykalnye_zhanry/tehno.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "trans",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0440\u0430\u043D\u0441",
      image: "/images/items/muzykalnye_zhanry/trans.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "dram_n_beys",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0440\u0430\u043C-\u043D-\u0431\u0435\u0439\u0441",
      image: "/images/items/muzykalnye_zhanry/dram_n_beys.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "dabstep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0430\u0431\u0441\u0442\u0435\u043F",
      image: "/images/items/muzykalnye_zhanry/dabstep.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "indi",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0438\u043D\u0434\u0438",
      image: "/images/items/muzykalnye_zhanry/indi.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "reggi",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u0435\u0433\u0433\u0438",
      image: "/images/items/muzykalnye_zhanry/reggi.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "disko",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0438\u0441\u043A\u043E",
      image: "/images/items/muzykalnye_zhanry/disko.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "fank",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0444\u0430\u043D\u043A",
      image: "/images/items/muzykalnye_zhanry/fank.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "soul",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u043E\u0443\u043B",
      image: "/images/items/muzykalnye_zhanry/soul.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "r_b",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "R&B",
      image: "/images/items/muzykalnye_zhanry/r_b.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "kantri",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A\u0430\u043D\u0442\u0440\u0438",
      image: "/images/items/muzykalnye_zhanry/kantri.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "folk",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0444\u043E\u043B\u043A",
      image: "/images/items/muzykalnye_zhanry/folk.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "shanson",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0448\u0430\u043D\u0441\u043E\u043D",
      image: "/images/items/muzykalnye_zhanry/shanson.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "latino",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043B\u0430\u0442\u0438\u043D\u043E",
      image: "/images/items/muzykalnye_zhanry/latino.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "k_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/k_pop.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "dzhey_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0436\u0435\u0439-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/dzhey_pop.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "embient",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u044D\u043C\u0431\u0438\u0435\u043D\u0442",
      image: "/images/items/muzykalnye_zhanry/embient.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "loufay",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043B\u043E\u0443\u0444\u0430\u0439",
      image: "/images/items/muzykalnye_zhanry/loufay.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "sinti_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u0438\u043D\u0442\u0438-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/sinti_pop.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "alternativa",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430",
      image: "/images/items/muzykalnye_zhanry/alternativa.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "post_rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u043E\u0441\u0442-\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/post_rok.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "progressiv_rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432-\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/progressiv_rok.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "granzh",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0433\u0440\u0430\u043D\u0436",
      image: "/images/items/muzykalnye_zhanry/granzh.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "ska",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/ska.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "gospel",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0433\u043E\u0441\u043F\u0435\u043B",
      image: "/images/items/muzykalnye_zhanry/gospel.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "opera",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043E\u043F\u0435\u0440\u0430",
      image: "/images/items/muzykalnye_zhanry/opera.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "saundtrek",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A",
      image: "/images/items/muzykalnye_zhanry/saundtrek.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "rok_n_roll",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B",
      image: "/images/items/muzykalnye_zhanry/rok_n_roll.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "trep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0440\u044D\u043F",
      image: "/images/items/muzykalnye_zhanry/trep.png",
      categoryImage: "/images/categories/muzykalnye_zhanry.png"
    },
    {
      id: "gitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/gitara.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "elektrogitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/elektrogitara.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "bas_gitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/bas_gitara.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "pianino",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043F\u0438\u0430\u043D\u0438\u043D\u043E",
      image: "/images/items/muzykalnye_instrumenty/pianino.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "royal",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0440\u043E\u044F\u043B\u044C",
      image: "/images/items/muzykalnye_instrumenty/royal.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "sintezator",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440",
      image: "/images/items/muzykalnye_instrumenty/sintezator.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "skripka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u043A\u0440\u0438\u043F\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/skripka.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "alt",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u043B\u044C\u0442",
      image: "/images/items/muzykalnye_instrumenty/alt.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "violonchel",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0432\u0438\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u044C",
      image: "/images/items/muzykalnye_instrumenty/violonchel.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "kontrabas",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u043E\u043D\u0442\u0440\u0430\u0431\u0430\u0441",
      image: "/images/items/muzykalnye_instrumenty/kontrabas.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "barabany",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B",
      image: "/images/items/muzykalnye_instrumenty/barabany.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "saksofon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0430\u043A\u0441\u043E\u0444\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/saksofon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "truba",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0440\u0443\u0431\u0430",
      image: "/images/items/muzykalnye_instrumenty/truba.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "trombon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0440\u043E\u043C\u0431\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/trombon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "fleyta",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0444\u043B\u0435\u0439\u0442\u0430",
      image: "/images/items/muzykalnye_instrumenty/fleyta.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "klarnet",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u043B\u0430\u0440\u043D\u0435\u0442",
      image: "/images/items/muzykalnye_instrumenty/klarnet.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "goboy",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u043E\u0431\u043E\u0439",
      image: "/images/items/muzykalnye_instrumenty/goboy.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "fagot",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0444\u0430\u0433\u043E\u0442",
      image: "/images/items/muzykalnye_instrumenty/fagot.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "akkordeon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u043A\u043A\u043E\u0440\u0434\u0435\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/akkordeon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "bayan",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u044F\u043D",
      image: "/images/items/muzykalnye_instrumenty/bayan.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "garmon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0430\u0440\u043C\u043E\u043D\u044C",
      image: "/images/items/muzykalnye_instrumenty/garmon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "ukulele",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
      image: "/images/items/muzykalnye_instrumenty/ukulele.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "mandolina",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0430\u043D\u0434\u043E\u043B\u0438\u043D\u0430",
      image: "/images/items/muzykalnye_instrumenty/mandolina.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "arfa",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u0440\u0444\u0430",
      image: "/images/items/muzykalnye_instrumenty/arfa.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "balalayka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/balalayka.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "domra",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0434\u043E\u043C\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/domra.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "sitar",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0438\u0442\u0430\u0440",
      image: "/images/items/muzykalnye_instrumenty/sitar.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "bandzho",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u043D\u0434\u0436\u043E",
      image: "/images/items/muzykalnye_instrumenty/bandzho.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "ksilofon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0441\u0438\u043B\u043E\u0444\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/ksilofon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "marimba",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0430\u0440\u0438\u043C\u0431\u0430",
      image: "/images/items/muzykalnye_instrumenty/marimba.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "litavry",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043B\u0438\u0442\u0430\u0432\u0440\u044B",
      image: "/images/items/muzykalnye_instrumenty/litavry.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "buben",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0443\u0431\u0435\u043D",
      image: "/images/items/muzykalnye_instrumenty/buben.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "kastanety",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0430\u0441\u0442\u0430\u043D\u044C\u0435\u0442\u044B",
      image: "/images/items/muzykalnye_instrumenty/kastanety.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "didzheyskiy_pult",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0434\u0438\u0434\u0436\u0435\u0439\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0442",
      image: "/images/items/muzykalnye_instrumenty/didzheyskiy_pult.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "termenvoks",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0435\u0440\u043C\u0435\u043D\u0432\u043E\u043A\u0441",
      image: "/images/items/muzykalnye_instrumenty/termenvoks.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "volynka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0432\u043E\u043B\u044B\u043D\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/volynka.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "gubnaya_garmoshka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0443\u0431\u043D\u0430\u044F \u0433\u0430\u0440\u043C\u043E\u0448\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/gubnaya_garmoshka.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "organ",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043E\u0440\u0433\u0430\u043D",
      image: "/images/items/muzykalnye_instrumenty/organ.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "melodika",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0435\u043B\u043E\u0434\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/melodika.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "kahon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0430\u0445\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/kahon.png",
      categoryImage: "/images/categories/muzykalnye_instrumenty.png"
    },
    {
      id: "rossiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0420\u043E\u0441\u0441\u0438\u044F",
      image: "/images/items/strany/rossiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "ssha",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0428\u0410",
      image: "/images/items/strany/ssha.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "kanada",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041A\u0430\u043D\u0430\u0434\u0430",
      image: "/images/items/strany/kanada.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "braziliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F",
      image: "/images/items/strany/braziliya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "argentina",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430",
      image: "/images/items/strany/argentina.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "meksika",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041C\u0435\u043A\u0441\u0438\u043A\u0430",
      image: "/images/items/strany/meksika.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "kitay",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041A\u0438\u0442\u0430\u0439",
      image: "/images/items/strany/kitay.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "yaponiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042F\u043F\u043E\u043D\u0438\u044F",
      image: "/images/items/strany/yaponiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "yuzhnaya_koreya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F",
      image: "/images/items/strany/yuzhnaya_koreya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "indiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/indiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "tailand",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0422\u0430\u0438\u043B\u0430\u043D\u0434",
      image: "/images/items/strany/tailand.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "vetnam",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0412\u044C\u0435\u0442\u043D\u0430\u043C",
      image: "/images/items/strany/vetnam.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "turtsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0422\u0443\u0440\u0446\u0438\u044F",
      image: "/images/items/strany/turtsiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "egipet",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0415\u0433\u0438\u043F\u0435\u0442",
      image: "/images/items/strany/egipet.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "frantsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0424\u0440\u0430\u043D\u0446\u0438\u044F",
      image: "/images/items/strany/frantsiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "germaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/germaniya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "italiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0442\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/italiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "ispaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0441\u043F\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/ispaniya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "portugaliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/portugaliya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "velikobritaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/velikobritaniya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "irlandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/irlandiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "niderlandy",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B",
      image: "/images/items/strany/niderlandy.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "belgiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0411\u0435\u043B\u044C\u0433\u0438\u044F",
      image: "/images/items/strany/belgiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "shveytsariya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F",
      image: "/images/items/strany/shveytsariya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "avstriya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0432\u0441\u0442\u0440\u0438\u044F",
      image: "/images/items/strany/avstriya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "shvetsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0428\u0432\u0435\u0446\u0438\u044F",
      image: "/images/items/strany/shvetsiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "norvegiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",
      image: "/images/items/strany/norvegiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "finlyandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/finlyandiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "daniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0414\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/daniya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "polsha",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041F\u043E\u043B\u044C\u0448\u0430",
      image: "/images/items/strany/polsha.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "chehiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0427\u0435\u0445\u0438\u044F",
      image: "/images/items/strany/chehiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "gretsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0413\u0440\u0435\u0446\u0438\u044F",
      image: "/images/items/strany/gretsiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "horvatiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F",
      image: "/images/items/strany/horvatiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "serbiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0435\u0440\u0431\u0438\u044F",
      image: "/images/items/strany/serbiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "oae",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041E\u0410\u042D",
      image: "/images/items/strany/oae.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "saudovskaya_araviya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F",
      image: "/images/items/strany/saudovskaya_araviya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "avstraliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/avstraliya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "novaya_zelandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/novaya_zelandiya.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "yuar",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042E\u0410\u0420",
      image: "/images/items/strany/yuar.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "marokko",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041C\u0430\u0440\u043E\u043A\u043A\u043E",
      image: "/images/items/strany/marokko.png",
      categoryImage: "/images/categories/strany.png"
    },
    {
      id: "moskva",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u043E\u0441\u043A\u0432\u0430",
      image: "/images/items/goroda/moskva.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "sankt_peterburg",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
      image: "/images/items/goroda/sankt_peterburg.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "nyu_york",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",
      image: "/images/items/goroda/nyu_york.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "london",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u043E\u043D\u0434\u043E\u043D",
      image: "/images/items/goroda/london.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "parizh",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0430\u0440\u0438\u0436",
      image: "/images/items/goroda/parizh.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "rim",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0420\u0438\u043C",
      image: "/images/items/goroda/rim.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "barselona",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430",
      image: "/images/items/goroda/barselona.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "berlin",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0435\u0440\u043B\u0438\u043D",
      image: "/images/items/goroda/berlin.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "amsterdam",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C",
      image: "/images/items/goroda/amsterdam.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "stambul",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0442\u0430\u043C\u0431\u0443\u043B",
      image: "/images/items/goroda/stambul.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "dubay",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0414\u0443\u0431\u0430\u0439",
      image: "/images/items/goroda/dubay.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "tokio",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0422\u043E\u043A\u0438\u043E",
      image: "/images/items/goroda/tokio.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "seul",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0435\u0443\u043B",
      image: "/images/items/goroda/seul.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "pekin",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0435\u043A\u0438\u043D",
      image: "/images/items/goroda/pekin.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "shanhay",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0428\u0430\u043D\u0445\u0430\u0439",
      image: "/images/items/goroda/shanhay.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "bangkok",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0430\u043D\u0433\u043A\u043E\u043A",
      image: "/images/items/goroda/bangkok.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "singapur",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",
      image: "/images/items/goroda/singapur.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "sidney",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0438\u0434\u043D\u0435\u0439",
      image: "/images/items/goroda/sidney.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "melburn",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0435\u043B\u044C\u0431\u0443\u0440\u043D",
      image: "/images/items/goroda/melburn.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "los_andzheles",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441",
      image: "/images/items/goroda/los_andzheles.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "san_frantsisko",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E",
      image: "/images/items/goroda/san_frantsisko.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "chikago",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0427\u0438\u043A\u0430\u0433\u043E",
      image: "/images/items/goroda/chikago.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "mayami",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0430\u0439\u0430\u043C\u0438",
      image: "/images/items/goroda/mayami.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "toronto",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0422\u043E\u0440\u043E\u043D\u0442\u043E",
      image: "/images/items/goroda/toronto.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "vankuver",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440",
      image: "/images/items/goroda/vankuver.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "mehiko",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0435\u0445\u0438\u043A\u043E",
      image: "/images/items/goroda/mehiko.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "rio_de_zhaneyro",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0420\u0438\u043E-\u0434\u0435-\u0416\u0430\u043D\u0435\u0439\u0440\u043E",
      image: "/images/items/goroda/rio_de_zhaneyro.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "buenos_ayres",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0443\u044D\u043D\u043E\u0441-\u0410\u0439\u0440\u0435\u0441",
      image: "/images/items/goroda/buenos_ayres.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "lissabon",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u0438\u0441\u0441\u0430\u0431\u043E\u043D",
      image: "/images/items/goroda/lissabon.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "praga",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0440\u0430\u0433\u0430",
      image: "/images/items/goroda/praga.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "vena",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0435\u043D\u0430",
      image: "/images/items/goroda/vena.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "budapesht",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0443\u0434\u0430\u043F\u0435\u0448\u0442",
      image: "/images/items/goroda/budapesht.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "afiny",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0410\u0444\u0438\u043D\u044B",
      image: "/images/items/goroda/afiny.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "kair",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u0430\u0438\u0440",
      image: "/images/items/goroda/kair.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "keyptaun",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u0435\u0439\u043F\u0442\u0430\u0443\u043D",
      image: "/images/items/goroda/keyptaun.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "milan",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0438\u043B\u0430\u043D",
      image: "/images/items/goroda/milan.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "venetsiya",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0435\u043D\u0435\u0446\u0438\u044F",
      image: "/images/items/goroda/venetsiya.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "florentsiya",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0424\u043B\u043E\u0440\u0435\u043D\u0446\u0438\u044F",
      image: "/images/items/goroda/florentsiya.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "madrid",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0430\u0434\u0440\u0438\u0434",
      image: "/images/items/goroda/madrid.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "kopengagen",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u043E\u043F\u0435\u043D\u0433\u0430\u0433\u0435\u043D",
      image: "/images/items/goroda/kopengagen.png",
      categoryImage: "/images/categories/goroda.png"
    },
    {
      id: "eyfeleva_bashnya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0439\u0444\u0435\u043B\u0435\u0432\u0430 \u0431\u0430\u0448\u043D\u044F",
      image: "/images/items/dostoprimechatelnosti/eyfeleva_bashnya.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "big_ben",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0438\u0433-\u0411\u0435\u043D",
      image: "/images/items/dostoprimechatelnosti/big_ben.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "kolizey",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u043E\u043B\u0438\u0437\u0435\u0439",
      image: "/images/items/dostoprimechatelnosti/kolizey.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "pizanskaya_bashnya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0438\u0437\u0430\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u0448\u043D\u044F",
      image: "/images/items/dostoprimechatelnosti/pizanskaya_bashnya.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "statuya_svobody",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0442\u0430\u0442\u0443\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u044B",
      image: "/images/items/dostoprimechatelnosti/statuya_svobody.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "tadzh_mahal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0422\u0430\u0434\u0436-\u041C\u0430\u0445\u0430\u043B",
      image: "/images/items/dostoprimechatelnosti/tadzh_mahal.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "velikaya_kitayskaya_stena",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0435\u043B\u0438\u043A\u0430\u044F \u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0430\u044F \u0441\u0442\u0435\u043D\u0430",
      image: "/images/items/dostoprimechatelnosti/velikaya_kitayskaya_stena.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "piramidy_gizy",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0438\u0440\u0430\u043C\u0438\u0434\u044B \u0413\u0438\u0437\u044B",
      image: "/images/items/dostoprimechatelnosti/piramidy_gizy.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "sfinks",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0444\u0438\u043D\u043A\u0441",
      image: "/images/items/dostoprimechatelnosti/sfinks.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "burdzh_halifa",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0443\u0440\u0434\u0436-\u0425\u0430\u043B\u0438\u0444\u0430",
      image: "/images/items/dostoprimechatelnosti/burdzh_halifa.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "sidneyskaya_opera",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0438\u0434\u043D\u0435\u0439\u0441\u043A\u0430\u044F \u043E\u043F\u0435\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/sidneyskaya_opera.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "luvr",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041B\u0443\u0432\u0440",
      image: "/images/items/dostoprimechatelnosti/luvr.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "ermitazh",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0440\u043C\u0438\u0442\u0430\u0436",
      image: "/images/items/dostoprimechatelnosti/ermitazh.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "krasnaya_ploschad",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C",
      image: "/images/items/dostoprimechatelnosti/krasnaya_ploschad.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "kreml",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u0440\u0435\u043C\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/kreml.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "sobor_vasiliya_blazhennogo",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u043E\u0431\u043E\u0440 \u0412\u0430\u0441\u0438\u043B\u0438\u044F \u0411\u043B\u0430\u0436\u0435\u043D\u043D\u043E\u0433\u043E",
      image: "/images/items/dostoprimechatelnosti/sobor_vasiliya_blazhennogo.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "sagrada_familiya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0430\u0433\u0440\u0430\u0434\u0430 \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
      image: "/images/items/dostoprimechatelnosti/sagrada_familiya.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "akropol",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043A\u0440\u043E\u043F\u043E\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/akropol.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "machu_pikchu",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u0430\u0447\u0443-\u041F\u0438\u043A\u0447\u0443",
      image: "/images/items/dostoprimechatelnosti/machu_pikchu.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "stounhendzh",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0442\u043E\u0443\u043D\u0445\u0435\u043D\u0434\u0436",
      image: "/images/items/dostoprimechatelnosti/stounhendzh.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "niagarskiy_vodopad",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041D\u0438\u0430\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u0432\u043E\u0434\u043E\u043F\u0430\u0434",
      image: "/images/items/dostoprimechatelnosti/niagarskiy_vodopad.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "grand_kanon",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0413\u0440\u0430\u043D\u0434-\u041A\u0430\u043D\u044C\u043E\u043D",
      image: "/images/items/dostoprimechatelnosti/grand_kanon.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "yelloustoun",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0419\u0435\u043B\u043B\u043E\u0443\u0441\u0442\u043E\u0443\u043D",
      image: "/images/items/dostoprimechatelnosti/yelloustoun.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "petra",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0435\u0442\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/petra.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "angkor_vat",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043D\u0433\u043A\u043E\u0440-\u0412\u0430\u0442",
      image: "/images/items/dostoprimechatelnosti/angkor_vat.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "chichen_itsa",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0427\u0438\u0447\u0435\u043D-\u0418\u0446\u0430",
      image: "/images/items/dostoprimechatelnosti/chichen_itsa.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "gora_fudzi",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0433\u043E\u0440\u0430 \u0424\u0443\u0434\u0437\u0438",
      image: "/images/items/dostoprimechatelnosti/gora_fudzi.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "everest",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0432\u0435\u0440\u0435\u0441\u0442",
      image: "/images/items/dostoprimechatelnosti/everest.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "baykal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0430\u0439\u043A\u0430\u043B",
      image: "/images/items/dostoprimechatelnosti/baykal.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "pamukkale",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0430\u043C\u0443\u043A\u043A\u0430\u043B\u0435",
      image: "/images/items/dostoprimechatelnosti/pamukkale.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "mertvoe_more",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u0435\u0440\u0442\u0432\u043E\u0435 \u043C\u043E\u0440\u0435",
      image: "/images/items/dostoprimechatelnosti/mertvoe_more.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "most_zolotye_vorota",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u043E\u0441\u0442 \u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u0412\u043E\u0440\u043E\u0442\u0430",
      image: "/images/items/dostoprimechatelnosti/most_zolotye_vorota.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "tayms_skver",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0422\u0430\u0439\u043C\u0441-\u0441\u043A\u0432\u0435\u0440",
      image: "/images/items/dostoprimechatelnosti/tayms_skver.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "las_vegas_strip",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041B\u0430\u0441-\u0412\u0435\u0433\u0430\u0441-\u0421\u0442\u0440\u0438\u043F",
      image: "/images/items/dostoprimechatelnosti/las_vegas_strip.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "versal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0435\u0440\u0441\u0430\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/versal.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "brandenburgskie_vorota",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u0442\u0430",
      image: "/images/items/dostoprimechatelnosti/brandenburgskie_vorota.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "algambra",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043B\u044C\u0433\u0430\u043C\u0431\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/algambra.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "vatikan",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0430\u0442\u0438\u043A\u0430\u043D",
      image: "/images/items/dostoprimechatelnosti/vatikan.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "sikstinskaya_kapella",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0438\u043A\u0441\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0430\u043F\u0435\u043B\u043B\u0430",
      image: "/images/items/dostoprimechatelnosti/sikstinskaya_kapella.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "mon_sen_mishel",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u043E\u043D-\u0421\u0435\u043D-\u041C\u0438\u0448\u0435\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/mon_sen_mishel.png",
      categoryImage: "/images/categories/dostoprimechatelnosti.png"
    },
    {
      id: "apple",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Apple",
      image: "/images/items/tekhnologicheskie_brendy/apple.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "samsung",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Samsung",
      image: "/images/items/tekhnologicheskie_brendy/samsung.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "microsoft",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Microsoft",
      image: "/images/items/tekhnologicheskie_brendy/microsoft.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "google",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Google",
      image: "/images/items/tekhnologicheskie_brendy/google.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "amazon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Amazon",
      image: "/images/items/tekhnologicheskie_brendy/amazon.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "sony",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Sony",
      image: "/images/items/tekhnologicheskie_brendy/sony.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "intel",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Intel",
      image: "/images/items/tekhnologicheskie_brendy/intel.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "amd",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "AMD",
      image: "/images/items/tekhnologicheskie_brendy/amd.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "nvidia",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nvidia",
      image: "/images/items/tekhnologicheskie_brendy/nvidia.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "lenovo",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lenovo",
      image: "/images/items/tekhnologicheskie_brendy/lenovo.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "hp",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "HP",
      image: "/images/items/tekhnologicheskie_brendy/hp.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "dell",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Dell",
      image: "/images/items/tekhnologicheskie_brendy/dell.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "xiaomi",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Xiaomi",
      image: "/images/items/tekhnologicheskie_brendy/xiaomi.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "huawei",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Huawei",
      image: "/images/items/tekhnologicheskie_brendy/huawei.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "oneplus",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "OnePlus",
      image: "/images/items/tekhnologicheskie_brendy/oneplus.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "realme",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Realme",
      image: "/images/items/tekhnologicheskie_brendy/realme.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "vivo",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Vivo",
      image: "/images/items/tekhnologicheskie_brendy/vivo.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "honor",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Honor",
      image: "/images/items/tekhnologicheskie_brendy/honor.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "asus",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Asus",
      image: "/images/items/tekhnologicheskie_brendy/asus.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "acer",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Acer",
      image: "/images/items/tekhnologicheskie_brendy/acer.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "msi",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "MSI",
      image: "/images/items/tekhnologicheskie_brendy/msi.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "razer",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Razer",
      image: "/images/items/tekhnologicheskie_brendy/razer.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "logitech",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Logitech",
      image: "/images/items/tekhnologicheskie_brendy/logitech.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "canon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Canon",
      image: "/images/items/tekhnologicheskie_brendy/canon.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "nikon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nikon",
      image: "/images/items/tekhnologicheskie_brendy/nikon.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "gopro",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "GoPro",
      image: "/images/items/tekhnologicheskie_brendy/gopro.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "dji",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "DJI",
      image: "/images/items/tekhnologicheskie_brendy/dji.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "meta",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Meta",
      image: "/images/items/tekhnologicheskie_brendy/meta.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "openai",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "OpenAI",
      image: "/images/items/tekhnologicheskie_brendy/openai.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "tesla",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Tesla",
      image: "/images/items/tekhnologicheskie_brendy/tesla.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "spacex",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "SpaceX",
      image: "/images/items/tekhnologicheskie_brendy/spacex.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "ibm",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "IBM",
      image: "/images/items/tekhnologicheskie_brendy/ibm.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "oracle",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Oracle",
      image: "/images/items/tekhnologicheskie_brendy/oracle.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "cisco",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Cisco",
      image: "/images/items/tekhnologicheskie_brendy/cisco.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "adobe",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Adobe",
      image: "/images/items/tekhnologicheskie_brendy/adobe.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "spotify",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Spotify",
      image: "/images/items/tekhnologicheskie_brendy/spotify.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "netflix",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Netflix",
      image: "/images/items/tekhnologicheskie_brendy/netflix.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "uber",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Uber",
      image: "/images/items/tekhnologicheskie_brendy/uber.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "airbnb",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Airbnb",
      image: "/images/items/tekhnologicheskie_brendy/airbnb.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "tiktok",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "TikTok",
      image: "/images/items/tekhnologicheskie_brendy/tiktok.png",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.png"
    },
    {
      id: "toyota",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Toyota",
      image: "/images/items/avtomobilnye_brendy/toyota.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "bmw",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "BMW",
      image: "/images/items/avtomobilnye_brendy/bmw.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "mercedes_benz",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mercedes-Benz",
      image: "/images/items/avtomobilnye_brendy/mercedes_benz.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "audi",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Audi",
      image: "/images/items/avtomobilnye_brendy/audi.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "volkswagen",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Volkswagen",
      image: "/images/items/avtomobilnye_brendy/volkswagen.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "porsche",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Porsche",
      image: "/images/items/avtomobilnye_brendy/porsche.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "tesla",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Tesla",
      image: "/images/items/avtomobilnye_brendy/tesla.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "ford",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Ford",
      image: "/images/items/avtomobilnye_brendy/ford.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "chevrolet",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Chevrolet",
      image: "/images/items/avtomobilnye_brendy/chevrolet.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "dodge",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Dodge",
      image: "/images/items/avtomobilnye_brendy/dodge.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "jeep",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Jeep",
      image: "/images/items/avtomobilnye_brendy/jeep.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "honda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Honda",
      image: "/images/items/avtomobilnye_brendy/honda.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "nissan",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nissan",
      image: "/images/items/avtomobilnye_brendy/nissan.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "mazda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mazda",
      image: "/images/items/avtomobilnye_brendy/mazda.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "subaru",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Subaru",
      image: "/images/items/avtomobilnye_brendy/subaru.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "mitsubishi",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mitsubishi",
      image: "/images/items/avtomobilnye_brendy/mitsubishi.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "hyundai",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Hyundai",
      image: "/images/items/avtomobilnye_brendy/hyundai.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "kia",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Kia",
      image: "/images/items/avtomobilnye_brendy/kia.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "lexus",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lexus",
      image: "/images/items/avtomobilnye_brendy/lexus.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "infiniti",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Infiniti",
      image: "/images/items/avtomobilnye_brendy/infiniti.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "volvo",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Volvo",
      image: "/images/items/avtomobilnye_brendy/volvo.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "peugeot",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Peugeot",
      image: "/images/items/avtomobilnye_brendy/peugeot.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "renault",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Renault",
      image: "/images/items/avtomobilnye_brendy/renault.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "citroen",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Citroen",
      image: "/images/items/avtomobilnye_brendy/citroen.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "fiat",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Fiat",
      image: "/images/items/avtomobilnye_brendy/fiat.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "alfa_romeo",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Alfa Romeo",
      image: "/images/items/avtomobilnye_brendy/alfa_romeo.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "ferrari",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Ferrari",
      image: "/images/items/avtomobilnye_brendy/ferrari.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "lamborghini",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lamborghini",
      image: "/images/items/avtomobilnye_brendy/lamborghini.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "maserati",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Maserati",
      image: "/images/items/avtomobilnye_brendy/maserati.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "bugatti",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Bugatti",
      image: "/images/items/avtomobilnye_brendy/bugatti.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "bentley",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Bentley",
      image: "/images/items/avtomobilnye_brendy/bentley.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "rolls_royce",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Rolls-Royce",
      image: "/images/items/avtomobilnye_brendy/rolls_royce.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "aston_martin",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Aston Martin",
      image: "/images/items/avtomobilnye_brendy/aston_martin.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "jaguar",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Jaguar",
      image: "/images/items/avtomobilnye_brendy/jaguar.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "land_rover",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Land Rover",
      image: "/images/items/avtomobilnye_brendy/land_rover.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "mini",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mini",
      image: "/images/items/avtomobilnye_brendy/mini.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "skoda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Skoda",
      image: "/images/items/avtomobilnye_brendy/skoda.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "seat",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Seat",
      image: "/images/items/avtomobilnye_brendy/seat.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "genesis",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Genesis",
      image: "/images/items/avtomobilnye_brendy/genesis.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "cadillac",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Cadillac",
      image: "/images/items/avtomobilnye_brendy/cadillac.png",
      categoryImage: "/images/categories/avtomobilnye_brendy.png"
    },
    {
      id: "nike",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Nike",
      image: "/images/items/odezhda_i_obuv/nike.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "adidas",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Adidas",
      image: "/images/items/odezhda_i_obuv/adidas.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "puma",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Puma",
      image: "/images/items/odezhda_i_obuv/puma.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "reebok",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Reebok",
      image: "/images/items/odezhda_i_obuv/reebok.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "new_balance",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "New Balance",
      image: "/images/items/odezhda_i_obuv/new_balance.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "asics",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Asics",
      image: "/images/items/odezhda_i_obuv/asics.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "converse",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Converse",
      image: "/images/items/odezhda_i_obuv/converse.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "vans",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Vans",
      image: "/images/items/odezhda_i_obuv/vans.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "dr_martens",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Dr. Martens",
      image: "/images/items/odezhda_i_obuv/dr_martens.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "timberland",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Timberland",
      image: "/images/items/odezhda_i_obuv/timberland.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "zara",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Zara",
      image: "/images/items/odezhda_i_obuv/zara.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "h_m",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "H&M",
      image: "/images/items/odezhda_i_obuv/h_m.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "uniqlo",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Uniqlo",
      image: "/images/items/odezhda_i_obuv/uniqlo.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "levi_s",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Levi's",
      image: "/images/items/odezhda_i_obuv/levi_s.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "diesel",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Diesel",
      image: "/images/items/odezhda_i_obuv/diesel.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "calvin_klein",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Calvin Klein",
      image: "/images/items/odezhda_i_obuv/calvin_klein.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "tommy_hilfiger",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Tommy Hilfiger",
      image: "/images/items/odezhda_i_obuv/tommy_hilfiger.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "lacoste",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Lacoste",
      image: "/images/items/odezhda_i_obuv/lacoste.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "ralph_lauren",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Ralph Lauren",
      image: "/images/items/odezhda_i_obuv/ralph_lauren.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "the_north_face",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "The North Face",
      image: "/images/items/odezhda_i_obuv/the_north_face.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "columbia",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Columbia",
      image: "/images/items/odezhda_i_obuv/columbia.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "patagonia",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Patagonia",
      image: "/images/items/odezhda_i_obuv/patagonia.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "gucci",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Gucci",
      image: "/images/items/odezhda_i_obuv/gucci.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "prada",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Prada",
      image: "/images/items/odezhda_i_obuv/prada.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "louis_vuitton",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Louis Vuitton",
      image: "/images/items/odezhda_i_obuv/louis_vuitton.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "dior",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Dior",
      image: "/images/items/odezhda_i_obuv/dior.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "chanel",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Chanel",
      image: "/images/items/odezhda_i_obuv/chanel.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "balenciaga",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Balenciaga",
      image: "/images/items/odezhda_i_obuv/balenciaga.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "versace",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Versace",
      image: "/images/items/odezhda_i_obuv/versace.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "armani",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Armani",
      image: "/images/items/odezhda_i_obuv/armani.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "stone_island",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Stone Island",
      image: "/images/items/odezhda_i_obuv/stone_island.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "supreme",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Supreme",
      image: "/images/items/odezhda_i_obuv/supreme.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "off_white",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Off-White",
      image: "/images/items/odezhda_i_obuv/off_white.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "burberry",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Burberry",
      image: "/images/items/odezhda_i_obuv/burberry.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "moncler",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Moncler",
      image: "/images/items/odezhda_i_obuv/moncler.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "crocs",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Crocs",
      image: "/images/items/odezhda_i_obuv/crocs.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "fila",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Fila",
      image: "/images/items/odezhda_i_obuv/fila.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "under_armour",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Under Armour",
      image: "/images/items/odezhda_i_obuv/under_armour.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "mango",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Mango",
      image: "/images/items/odezhda_i_obuv/mango.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "reserved",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Reserved",
      image: "/images/items/odezhda_i_obuv/reserved.png",
      categoryImage: "/images/categories/odezhda_i_obuv.png"
    },
    {
      id: "krovat",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u043E\u0432\u0430\u0442\u044C",
      image: "/images/items/predmety_byta/krovat.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "divan",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0434\u0438\u0432\u0430\u043D",
      image: "/images/items/predmety_byta/divan.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "kreslo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u0435\u0441\u043B\u043E",
      image: "/images/items/predmety_byta/kreslo.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "stol",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u043E\u043B",
      image: "/images/items/predmety_byta/stol.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "stul",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u0443\u043B",
      image: "/images/items/predmety_byta/stul.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "shkaf",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u043A\u0430\u0444",
      image: "/images/items/predmety_byta/shkaf.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "komod",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u043C\u043E\u0434",
      image: "/images/items/predmety_byta/komod.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "polka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/polka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "zerkalo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u0435\u0440\u043A\u0430\u043B\u043E",
      image: "/images/items/predmety_byta/zerkalo.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "lampa",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043B\u0430\u043C\u043F\u0430",
      image: "/images/items/predmety_byta/lampa.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "kover",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u0432\u0451\u0440",
      image: "/images/items/predmety_byta/kover.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "podushka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u0434\u0443\u0448\u043A\u0430",
      image: "/images/items/predmety_byta/podushka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "odeyalo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043E\u0434\u0435\u044F\u043B\u043E",
      image: "/images/items/predmety_byta/odeyalo.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "pled",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043B\u0435\u0434",
      image: "/images/items/predmety_byta/pled.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "shtory",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0442\u043E\u0440\u044B",
      image: "/images/items/predmety_byta/shtory.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "posuda",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u0441\u0443\u0434\u0430",
      image: "/images/items/predmety_byta/posuda.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "tarelka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0442\u0430\u0440\u0435\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/tarelka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "kruzhka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u0443\u0436\u043A\u0430",
      image: "/images/items/predmety_byta/kruzhka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "stakan",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u0430\u043A\u0430\u043D",
      image: "/images/items/predmety_byta/stakan.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "lozhka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043B\u043E\u0436\u043A\u0430",
      image: "/images/items/predmety_byta/lozhka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "vilka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0438\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/vilka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "nozh",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043D\u043E\u0436",
      image: "/images/items/predmety_byta/nozh.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "kastryulya",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0430\u0441\u0442\u0440\u044E\u043B\u044F",
      image: "/images/items/predmety_byta/kastryulya.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "skovoroda",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u043A\u043E\u0432\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/predmety_byta/skovoroda.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "chaynik",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0447\u0430\u0439\u043D\u0438\u043A",
      image: "/images/items/predmety_byta/chaynik.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "utyug",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0443\u0442\u044E\u0433",
      image: "/images/items/predmety_byta/utyug.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "pylesos",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u044B\u043B\u0435\u0441\u043E\u0441",
      image: "/images/items/predmety_byta/pylesos.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "shvabra",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0432\u0430\u0431\u0440\u0430",
      image: "/images/items/predmety_byta/shvabra.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "vedro",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0435\u0434\u0440\u043E",
      image: "/images/items/predmety_byta/vedro.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "korzina",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u0440\u0437\u0438\u043D\u0430",
      image: "/images/items/predmety_byta/korzina.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "polotentse",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u043B\u043E\u0442\u0435\u043D\u0446\u0435",
      image: "/images/items/predmety_byta/polotentse.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "zubnaya_schetka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u0443\u0431\u043D\u0430\u044F \u0449\u0451\u0442\u043A\u0430",
      image: "/images/items/predmety_byta/zubnaya_schetka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "mylo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043C\u044B\u043B\u043E",
      image: "/images/items/predmety_byta/mylo.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "shampun",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0430\u043C\u043F\u0443\u043D\u044C",
      image: "/images/items/predmety_byta/shampun.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "rascheska",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0440\u0430\u0441\u0447\u0451\u0441\u043A\u0430",
      image: "/images/items/predmety_byta/rascheska.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "fen",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0444\u0435\u043D",
      image: "/images/items/predmety_byta/fen.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "budilnik",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0431\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/predmety_byta/budilnik.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "veshalka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0435\u0448\u0430\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/veshalka.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "klyuchi",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043B\u044E\u0447\u0438",
      image: "/images/items/predmety_byta/klyuchi.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "zont",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u043E\u043D\u0442",
      image: "/images/items/predmety_byta/zont.png",
      categoryImage: "/images/categories/predmety_byta.png"
    },
    {
      id: "holodilnik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/holodilnik.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/plita.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "duhovka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0434\u0443\u0445\u043E\u0432\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/duhovka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "mikrovolnovka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/mikrovolnovka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "chaynik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0447\u0430\u0439\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/chaynik.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "kofevarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u043E\u0444\u0435\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/kofevarka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "kofemashina",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u0430",
      image: "/images/items/kuhonnaya_tehnika/kofemashina.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "toster",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u043E\u0441\u0442\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/toster.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "blender",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0431\u043B\u0435\u043D\u0434\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/blender.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "mikser",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0438\u043A\u0441\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/mikser.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "multivarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/multivarka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "parovarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u0430\u0440\u043E\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/parovarka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "risovarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0440\u0438\u0441\u043E\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/risovarka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "aerogril",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0430\u044D\u0440\u043E\u0433\u0440\u0438\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/aerogril.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "gril",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0433\u0440\u0438\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/gril.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "vafelnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u0430\u0444\u0435\u043B\u044C\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/vafelnitsa.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "sendvichnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/sendvichnitsa.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "myasorubka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u044F\u0441\u043E\u0440\u0443\u0431\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/myasorubka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "kuhonnyy_kombayn",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u0431\u0430\u0439\u043D",
      image: "/images/items/kuhonnaya_tehnika/kuhonnyy_kombayn.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "sokovyzhimalka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u043E\u043A\u043E\u0432\u044B\u0436\u0438\u043C\u0430\u043B\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/sokovyzhimalka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "posudomoechnaya_mashina",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",
      image: "/images/items/kuhonnaya_tehnika/posudomoechnaya_mashina.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "morozilnik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/morozilnik.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "vinnyy_shkaf",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u0438\u043D\u043D\u044B\u0439 \u0448\u043A\u0430\u0444",
      image: "/images/items/kuhonnaya_tehnika/vinnyy_shkaf.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "elektricheskaya_skovoroda",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043A\u043E\u0432\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/kuhonnaya_tehnika/elektricheskaya_skovoroda.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "yogurtnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0439\u043E\u0433\u0443\u0440\u0442\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/yogurtnitsa.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "hlebopechka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0445\u043B\u0435\u0431\u043E\u043F\u0435\u0447\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/hlebopechka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "kuhonnye_vesy",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u0432\u0435\u0441\u044B",
      image: "/images/items/kuhonnaya_tehnika/kuhonnye_vesy.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "termometr",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440",
      image: "/images/items/kuhonnaya_tehnika/termometr.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "izmelchitel",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/izmelchitel.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "ovoscherezka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043E\u0432\u043E\u0449\u0435\u0440\u0435\u0437\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/ovoscherezka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "lapsherezka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043B\u0430\u043F\u0448\u0435\u0440\u0435\u0437\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/lapsherezka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "sushilka_dlya_ovoschey",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u0443\u0448\u0438\u043B\u043A\u0430 \u0434\u043B\u044F \u043E\u0432\u043E\u0449\u0435\u0439",
      image: "/images/items/kuhonnaya_tehnika/sushilka_dlya_ovoschey.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "popkornitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043E\u043F\u043A\u043E\u0440\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/popkornitsa.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "frityurnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0444\u0440\u0438\u0442\u044E\u0440\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/frityurnitsa.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "induktsionnaya_plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0438\u043D\u0434\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/induktsionnaya_plita.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "gazovaya_plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0433\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/gazovaya_plita.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "elektroplita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/elektroplita.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "vytyazhka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u044B\u0442\u044F\u0436\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/vytyazhka.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "termopot",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u0435\u0440\u043C\u043E\u043F\u043E\u0442",
      image: "/images/items/kuhonnaya_tehnika/termopot.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "samovar",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u0430\u043C\u043E\u0432\u0430\u0440",
      image: "/images/items/kuhonnaya_tehnika/samovar.png",
      categoryImage: "/images/categories/kuhonnaya_tehnika.png"
    },
    {
      id: "smartfon",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D",
      image: "/images/items/gadjety/smartfon.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "planshet",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u043B\u0430\u043D\u0448\u0435\u0442",
      image: "/images/items/gadjety/planshet.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "noutbuk",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043D\u043E\u0443\u0442\u0431\u0443\u043A",
      image: "/images/items/gadjety/noutbuk.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "kompyuter",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",
      image: "/images/items/gadjety/kompyuter.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "monitor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u043E\u043D\u0438\u0442\u043E\u0440",
      image: "/images/items/gadjety/monitor.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "klaviatura",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",
      image: "/images/items/gadjety/klaviatura.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "mysh",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u044B\u0448\u044C",
      image: "/images/items/gadjety/mysh.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "naushniki",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0438",
      image: "/images/items/gadjety/naushniki.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "kolonka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043E\u043B\u043E\u043D\u043A\u0430",
      image: "/images/items/gadjety/kolonka.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "umnye_chasy",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B",
      image: "/images/items/gadjety/umnye_chasy.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "fitnes_braslet",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0444\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442",
      image: "/images/items/gadjety/fitnes_braslet.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "elektronnaya_kniga",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430",
      image: "/images/items/gadjety/elektronnaya_kniga.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "igrovaya_pristavka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430",
      image: "/images/items/gadjety/igrovaya_pristavka.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "geympad",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0433\u0435\u0439\u043C\u043F\u0430\u0434",
      image: "/images/items/gadjety/geympad.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "vr_shlem",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "VR-\u0448\u043B\u0435\u043C",
      image: "/images/items/gadjety/vr_shlem.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/kamera.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "ekshn_kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043A\u0448\u043D-\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/ekshn_kamera.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "dron",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0434\u0440\u043E\u043D",
      image: "/images/items/gadjety/dron.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "pauerbank",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0430\u0443\u044D\u0440\u0431\u0430\u043D\u043A",
      image: "/images/items/gadjety/pauerbank.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "router",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0440\u043E\u0443\u0442\u0435\u0440",
      image: "/images/items/gadjety/router.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "modem",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u043E\u0434\u0435\u043C",
      image: "/images/items/gadjety/modem.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "mikrofon",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",
      image: "/images/items/gadjety/mikrofon.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "veb_kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0432\u0435\u0431-\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/veb_kamera.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "printer",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0440\u0438\u043D\u0442\u0435\u0440",
      image: "/images/items/gadjety/printer.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "skaner",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u043A\u0430\u043D\u0435\u0440",
      image: "/images/items/gadjety/skaner.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "proektor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440",
      image: "/images/items/gadjety/proektor.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "televizor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440",
      image: "/images/items/gadjety/televizor.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "saundbar",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u0430\u0443\u043D\u0434\u0431\u0430\u0440",
      image: "/images/items/gadjety/saundbar.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "umnaya_lampa",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u0430\u044F \u043B\u0430\u043C\u043F\u0430",
      image: "/images/items/gadjety/umnaya_lampa.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "umnaya_rozetka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u0430\u044F \u0440\u043E\u0437\u0435\u0442\u043A\u0430",
      image: "/images/items/gadjety/umnaya_rozetka.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "robot_pylesos",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0440\u043E\u0431\u043E\u0442-\u043F\u044B\u043B\u0435\u0441\u043E\u0441",
      image: "/images/items/gadjety/robot_pylesos.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "elektrosamokat",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/gadjety/elektrosamokat.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "giroskuter",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0433\u0438\u0440\u043E\u0441\u043A\u0443\u0442\u0435\u0440",
      image: "/images/items/gadjety/giroskuter.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "3d_printer",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "3D-\u043F\u0440\u0438\u043D\u0442\u0435\u0440",
      image: "/images/items/gadjety/3d_printer.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "nas",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "NAS",
      image: "/images/items/gadjety/nas.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "ssd",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "SSD",
      image: "/images/items/gadjety/ssd.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "zhestkiy_disk",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0436\u0451\u0441\u0442\u043A\u0438\u0439 \u0434\u0438\u0441\u043A",
      image: "/images/items/gadjety/zhestkiy_disk.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "fleshka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0444\u043B\u0435\u0448\u043A\u0430",
      image: "/images/items/gadjety/fleshka.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "zaryadka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0437\u0430\u0440\u044F\u0434\u043A\u0430",
      image: "/images/items/gadjety/zaryadka.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "dok_stantsiya",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0434\u043E\u043A-\u0441\u0442\u0430\u043D\u0446\u0438\u044F",
      image: "/images/items/gadjety/dok_stantsiya.png",
      categoryImage: "/images/categories/gadjety.png"
    },
    {
      id: "vrach",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u0440\u0430\u0447",
      image: "/images/items/professii/vrach.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "uchitel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0443\u0447\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/uchitel.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "programmist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442",
      image: "/images/items/professii/programmist.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "dizayner",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440",
      image: "/images/items/professii/dizayner.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "inzhener",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0438\u043D\u0436\u0435\u043D\u0435\u0440",
      image: "/images/items/professii/inzhener.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "arhitektor",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440",
      image: "/images/items/professii/arhitektor.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "yurist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u044E\u0440\u0438\u0441\u0442",
      image: "/images/items/professii/yurist.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "buhgalter",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      image: "/images/items/professii/buhgalter.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "marketolog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/marketolog.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "menedzher",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
      image: "/images/items/professii/menedzher.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "predprinimatel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/predprinimatel.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "povar",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u0432\u0430\u0440",
      image: "/images/items/professii/povar.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "ofitsiant",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442",
      image: "/images/items/professii/ofitsiant.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "barista",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0431\u0430\u0440\u0438\u0441\u0442\u0430",
      image: "/images/items/professii/barista.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "voditel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/voditel.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "pilot",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0438\u043B\u043E\u0442",
      image: "/images/items/professii/pilot.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "politseyskiy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u043B\u0438\u0446\u0435\u0439\u0441\u043A\u0438\u0439",
      image: "/images/items/professii/politseyskiy.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "pozharnyy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u0436\u0430\u0440\u043D\u044B\u0439",
      image: "/images/items/professii/pozharnyy.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "voennyy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u043E\u0435\u043D\u043D\u044B\u0439",
      image: "/images/items/professii/voennyy.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "akter",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u043A\u0442\u0451\u0440",
      image: "/images/items/professii/akter.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "muzykant",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442",
      image: "/images/items/professii/muzykant.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "hudozhnik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A",
      image: "/images/items/professii/hudozhnik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "fotograf",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
      image: "/images/items/professii/fotograf.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "zhurnalist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442",
      image: "/images/items/professii/zhurnalist.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "pisatel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/pisatel.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "perevodchik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",
      image: "/images/items/professii/perevodchik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "psiholog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/psiholog.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "trener",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0442\u0440\u0435\u043D\u0435\u0440",
      image: "/images/items/professii/trener.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "sportsmen",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D",
      image: "/images/items/professii/sportsmen.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "stroitel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/stroitel.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "elektrik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A",
      image: "/images/items/professii/elektrik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "santehnik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A",
      image: "/images/items/professii/santehnik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "mehanik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0435\u0445\u0430\u043D\u0438\u043A",
      image: "/images/items/professii/mehanik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "fermer",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u0435\u0440\u043C\u0435\u0440",
      image: "/images/items/professii/fermer.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "veterinar",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440",
      image: "/images/items/professii/veterinar.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "farmatsevt",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u0430\u0440\u043C\u0430\u0446\u0435\u0432\u0442",
      image: "/images/items/professii/farmatsevt.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "stomatolog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/stomatolog.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "parikmaher",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440",
      image: "/images/items/professii/parikmaher.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "kurer",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043A\u0443\u0440\u044C\u0435\u0440",
      image: "/images/items/professii/kurer.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "analitik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A",
      image: "/images/items/professii/analitik.png",
      categoryImage: "/images/categories/professii.png"
    },
    {
      id: "krasnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
      image: "/images/items/cveta/krasnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "siniy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0438\u043D\u0438\u0439",
      image: "/images/items/cveta/siniy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "zelenyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439",
      image: "/images/items/cveta/zelenyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "zheltyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0436\u0451\u043B\u0442\u044B\u0439",
      image: "/images/items/cveta/zheltyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "oranzhevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/oranzhevyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "fioletovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/fioletovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "rozovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/rozovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "chernyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/chernyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "belyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0435\u043B\u044B\u0439",
      image: "/images/items/cveta/belyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "seryy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0435\u0440\u044B\u0439",
      image: "/images/items/cveta/seryy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "korichnevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/korichnevyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "goluboy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0433\u043E\u043B\u0443\u0431\u043E\u0439",
      image: "/images/items/cveta/goluboy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "biryuzovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/biryuzovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "bezhevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0435\u0436\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/bezhevyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "zolotoy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0437\u043E\u043B\u043E\u0442\u043E\u0439",
      image: "/images/items/cveta/zolotoy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "serebryanyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439",
      image: "/images/items/cveta/serebryanyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "bordovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u043E\u0440\u0434\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/bordovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "malinovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u0430\u043B\u0438\u043D\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/malinovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "salatovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0430\u043B\u0430\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/salatovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "olivkovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043E\u043B\u0438\u0432\u043A\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/olivkovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "haki",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0445\u0430\u043A\u0438",
      image: "/images/items/cveta/haki.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "lilovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0438\u043B\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/lilovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "indigo",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0438\u043D\u0434\u0438\u0433\u043E",
      image: "/images/items/cveta/indigo.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "lazurnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0430\u0437\u0443\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/lazurnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "korallovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u043E\u0440\u0430\u043B\u043B\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/korallovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "persikovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/persikovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "myatnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u044F\u0442\u043D\u044B\u0439",
      image: "/images/items/cveta/myatnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "izumrudnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0438\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439",
      image: "/images/items/cveta/izumrudnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "purpurnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0443\u0440\u043F\u0443\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/purpurnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "shokoladnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439",
      image: "/images/items/cveta/shokoladnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "kremovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u0440\u0435\u043C\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/kremovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "pesochnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0435\u0441\u043E\u0447\u043D\u044B\u0439",
      image: "/images/items/cveta/pesochnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "grafitovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0433\u0440\u0430\u0444\u0438\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/grafitovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "terrakotovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/terrakotovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "yantarnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u044F\u043D\u0442\u0430\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/yantarnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "lavandovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/lavandovyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "nebesnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0439",
      image: "/images/items/cveta/nebesnyy.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "morskoy_volny",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0432\u043E\u043B\u043D\u044B",
      image: "/images/items/cveta/morskoy_volny.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "fuksiya",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0444\u0443\u043A\u0441\u0438\u044F",
      image: "/images/items/cveta/fuksiya.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "ultramarin",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0443\u043B\u044C\u0442\u0440\u0430\u043C\u0430\u0440\u0438\u043D",
      image: "/images/items/cveta/ultramarin.png",
      categoryImage: "/images/categories/cveta.png"
    },
    {
      id: "roza",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u0437\u0430",
      image: "/images/items/cvety/roza.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "tyulpan",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0442\u044E\u043B\u044C\u043F\u0430\u043D",
      image: "/images/items/cvety/tyulpan.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "romashka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u043C\u0430\u0448\u043A\u0430",
      image: "/images/items/cvety/romashka.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "liliya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u0438\u043B\u0438\u044F",
      image: "/images/items/cvety/liliya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "orhideya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043E\u0440\u0445\u0438\u0434\u0435\u044F",
      image: "/images/items/cvety/orhideya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "pion",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u0438\u043E\u043D",
      image: "/images/items/cvety/pion.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "gvozdika",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0432\u043E\u0437\u0434\u0438\u043A\u0430",
      image: "/images/items/cvety/gvozdika.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "hrizantema",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0445\u0440\u0438\u0437\u0430\u043D\u0442\u0435\u043C\u0430",
      image: "/images/items/cvety/hrizantema.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "iris",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0438\u0440\u0438\u0441",
      image: "/images/items/cvety/iris.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "nartsiss",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043D\u0430\u0440\u0446\u0438\u0441\u0441",
      image: "/images/items/cvety/nartsiss.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "podsolnuh",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u043E\u0434\u0441\u043E\u043B\u043D\u0443\u0445",
      image: "/images/items/cvety/podsolnuh.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "lavanda",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u0430\u0432\u0430\u043D\u0434\u0430",
      image: "/images/items/cvety/lavanda.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "siren",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0441\u0438\u0440\u0435\u043D\u044C",
      image: "/images/items/cvety/siren.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "giatsint",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0438\u0430\u0446\u0438\u043D\u0442",
      image: "/images/items/cvety/giatsint.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "georgin",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0435\u043E\u0440\u0433\u0438\u043D",
      image: "/images/items/cvety/georgin.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "gerbera",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0435\u0440\u0431\u0435\u0440\u0430",
      image: "/images/items/cvety/gerbera.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "mak",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u043A",
      image: "/images/items/cvety/mak.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "vasilek",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0432\u0430\u0441\u0438\u043B\u0451\u043A",
      image: "/images/items/cvety/vasilek.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "nezabudka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043D\u0435\u0437\u0430\u0431\u0443\u0434\u043A\u0430",
      image: "/images/items/cvety/nezabudka.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "kolokolchik",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A",
      image: "/images/items/cvety/kolokolchik.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "lotos",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u043E\u0442\u043E\u0441",
      image: "/images/items/cvety/lotos.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "magnoliya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u0433\u043D\u043E\u043B\u0438\u044F",
      image: "/images/items/cvety/magnoliya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "zhasmin",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0436\u0430\u0441\u043C\u0438\u043D",
      image: "/images/items/cvety/zhasmin.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "mimoza",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0438\u043C\u043E\u0437\u0430",
      image: "/images/items/cvety/mimoza.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "freziya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0444\u0440\u0435\u0437\u0438\u044F",
      image: "/images/items/cvety/freziya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "anemon",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0430\u043D\u0435\u043C\u043E\u043D",
      image: "/images/items/cvety/anemon.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "astra",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0430\u0441\u0442\u0440\u0430",
      image: "/images/items/cvety/astra.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "krokus",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u0440\u043E\u043A\u0443\u0441",
      image: "/images/items/cvety/krokus.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "gladiolus",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u043B\u0430\u0434\u0438\u043E\u043B\u0443\u0441",
      image: "/images/items/cvety/gladiolus.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "begoniya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0431\u0435\u0433\u043E\u043D\u0438\u044F",
      image: "/images/items/cvety/begoniya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "fialka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0444\u0438\u0430\u043B\u043A\u0430",
      image: "/images/items/cvety/fialka.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "gortenziya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u043E\u0440\u0442\u0435\u043D\u0437\u0438\u044F",
      image: "/images/items/cvety/gortenziya.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "kalendula",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u0430\u043B\u0435\u043D\u0434\u0443\u043B\u0430",
      image: "/images/items/cvety/kalendula.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "klematis",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u043B\u0435\u043C\u0430\u0442\u0438\u0441",
      image: "/images/items/cvety/klematis.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "lyutik",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u044E\u0442\u0438\u043A",
      image: "/images/items/cvety/lyutik.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "margaritka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u043A\u0430",
      image: "/images/items/cvety/margaritka.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "primula",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u0440\u0438\u043C\u0443\u043B\u0430",
      image: "/images/items/cvety/primula.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "rododendron",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u0434\u043E\u0434\u0435\u043D\u0434\u0440\u043E\u043D",
      image: "/images/items/cvety/rododendron.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "tsiklamen",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0446\u0438\u043A\u043B\u0430\u043C\u0435\u043D",
      image: "/images/items/cvety/tsiklamen.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "eustoma",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u044D\u0443\u0441\u0442\u043E\u043C\u0430",
      image: "/images/items/cvety/eustoma.png",
      categoryImage: "/images/categories/cvety.png"
    },
    {
      id: "avtomobil",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
      image: "/images/items/transport/avtomobil.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "mototsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/mototsikl.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "velosiped",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434",
      image: "/images/items/transport/velosiped.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "samokat",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/transport/samokat.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "elektrosamokat",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/transport/elektrosamokat.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "skeytbord",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434",
      image: "/images/items/transport/skeytbord.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "roliki",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0440\u043E\u043B\u0438\u043A\u0438",
      image: "/images/items/transport/roliki.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "avtobus",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0430\u0432\u0442\u043E\u0431\u0443\u0441",
      image: "/images/items/transport/avtobus.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "trolleybus",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u043E\u043B\u043B\u0435\u0439\u0431\u0443\u0441",
      image: "/images/items/transport/trolleybus.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "tramvay",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u0430\u043C\u0432\u0430\u0439",
      image: "/images/items/transport/tramvay.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "metro",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u0435\u0442\u0440\u043E",
      image: "/images/items/transport/metro.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "poezd",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u043E\u0435\u0437\u0434",
      image: "/images/items/transport/poezd.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "elektrichka",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043A\u0430",
      image: "/images/items/transport/elektrichka.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "samolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u0430\u043C\u043E\u043B\u0451\u0442",
      image: "/images/items/transport/samolet.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "vertolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u0435\u0440\u0442\u043E\u043B\u0451\u0442",
      image: "/images/items/transport/vertolet.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "dirizhabl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0434\u0438\u0440\u0438\u0436\u0430\u0431\u043B\u044C",
      image: "/images/items/transport/dirizhabl.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "korabl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u043E\u0440\u0430\u0431\u043B\u044C",
      image: "/images/items/transport/korabl.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "lodka",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043B\u043E\u0434\u043A\u0430",
      image: "/images/items/transport/lodka.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "yahta",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044F\u0445\u0442\u0430",
      image: "/images/items/transport/yahta.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "kater",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0442\u0435\u0440",
      image: "/images/items/transport/kater.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "parom",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u0430\u0440\u043E\u043C",
      image: "/images/items/transport/parom.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "gruzovik",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",
      image: "/images/items/transport/gruzovik.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "traktor",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u0430\u043A\u0442\u043E\u0440",
      image: "/images/items/transport/traktor.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "ekskavator",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043A\u0441\u043A\u0430\u0432\u0430\u0442\u043E\u0440",
      image: "/images/items/transport/ekskavator.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "buldozer",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0431\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440",
      image: "/images/items/transport/buldozer.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "taksi",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0430\u043A\u0441\u0438",
      image: "/images/items/transport/taksi.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "karshering",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0440\u0448\u0435\u0440\u0438\u043D\u0433",
      image: "/images/items/transport/karshering.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "sportkar",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043F\u043E\u0440\u0442\u043A\u0430\u0440",
      image: "/images/items/transport/sportkar.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "pikap",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u0438\u043A\u0430\u043F",
      image: "/images/items/transport/pikap.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "kabriolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442",
      image: "/images/items/transport/kabriolet.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "miniven",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u0438\u043D\u0438\u0432\u044D\u043D",
      image: "/images/items/transport/miniven.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "vnedorozhnik",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
      image: "/images/items/transport/vnedorozhnik.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "skuter",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043A\u0443\u0442\u0435\u0440",
      image: "/images/items/transport/skuter.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "moped",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u043F\u0435\u0434",
      image: "/images/items/transport/moped.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "kvadrotsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0432\u0430\u0434\u0440\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/kvadrotsikl.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "snegohod",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043D\u0435\u0433\u043E\u0445\u043E\u0434",
      image: "/images/items/transport/snegohod.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "gidrotsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0433\u0438\u0434\u0440\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/gidrotsikl.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "monorels",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u043D\u043E\u0440\u0435\u043B\u044C\u0441",
      image: "/images/items/transport/monorels.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "kanatnaya_doroga",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u043D\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430",
      image: "/images/items/transport/kanatnaya_doroga.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "raketa",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0440\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/transport/raketa.png",
      categoryImage: "/images/categories/transport.png"
    },
    {
      id: "frantsuzskiy_buldog",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439 \u0431\u0443\u043B\u044C\u0434\u043E\u0433",
      image: "/images/items/porody_sobak/frantsuzskiy_buldog.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "labrador_retriver",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043B\u0430\u0431\u0440\u0430\u0434\u043E\u0440 \u0440\u0435\u0442\u0440\u0438\u0432\u0435\u0440",
      image: "/images/items/porody_sobak/labrador_retriver.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "zolotistyy_retriver",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0437\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0439 \u0440\u0435\u0442\u0440\u0438\u0432\u0435\u0440",
      image: "/images/items/porody_sobak/zolotistyy_retriver.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "nemetskaya_ovcharka",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043E\u0432\u0447\u0430\u0440\u043A\u0430",
      image: "/images/items/porody_sobak/nemetskaya_ovcharka.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "pudel",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u0443\u0434\u0435\u043B\u044C",
      image: "/images/items/porody_sobak/pudel.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "bigl",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0438\u0433\u043B\u044C",
      image: "/images/items/porody_sobak/bigl.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "buldog",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0443\u043B\u044C\u0434\u043E\u0433",
      image: "/images/items/porody_sobak/buldog.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "rotveyler",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0440\u043E\u0442\u0432\u0435\u0439\u043B\u0435\u0440",
      image: "/images/items/porody_sobak/rotveyler.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "taksa",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0442\u0430\u043A\u0441\u0430",
      image: "/images/items/porody_sobak/taksa.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "bokser",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043E\u043A\u0441\u0435\u0440",
      image: "/images/items/porody_sobak/bokser.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "doberman",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u043E\u0431\u0435\u0440\u043C\u0430\u043D",
      image: "/images/items/porody_sobak/doberman.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "dalmatin",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u0430\u043B\u043C\u0430\u0442\u0438\u043D",
      image: "/images/items/porody_sobak/dalmatin.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "mops",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043C\u043E\u043F\u0441",
      image: "/images/items/porody_sobak/mops.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "chihuahua",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0447\u0438\u0445\u0443\u0430\u0445\u0443\u0430",
      image: "/images/items/porody_sobak/chihuahua.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "yorkshirskiy_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0439\u043E\u0440\u043A\u0448\u0438\u0440\u0441\u043A\u0438\u0439 \u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/yorkshirskiy_terer.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "pekines",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u0435\u043A\u0438\u043D\u0435\u0441",
      image: "/images/items/porody_sobak/pekines.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "shiba_inu",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0438\u0431\u0430-\u0438\u043D\u0443",
      image: "/images/items/porody_sobak/shiba_inu.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "akita_inu",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043A\u0438\u0442\u0430-\u0438\u043D\u0443",
      image: "/images/items/porody_sobak/akita_inu.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "sibirskiy_haski",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0445\u0430\u0441\u043A\u0438",
      image: "/images/items/porody_sobak/sibirskiy_haski.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "samoed",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0430\u043C\u043E\u0435\u0434",
      image: "/images/items/porody_sobak/samoed.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "maltiyskaya_bolonka",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043C\u0430\u043B\u044C\u0442\u0438\u0439\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u043E\u043D\u043A\u0430",
      image: "/images/items/porody_sobak/maltiyskaya_bolonka.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "pomeranskiy_shpits",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u043E\u043C\u0435\u0440\u0430\u043D\u0441\u043A\u0438\u0439 \u0448\u043F\u0438\u0446",
      image: "/images/items/porody_sobak/pomeranskiy_shpits.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "basendzhi",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0430\u0441\u0435\u043D\u0434\u0436\u0438",
      image: "/images/items/porody_sobak/basendzhi.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "shelti",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0435\u043B\u0442\u0438",
      image: "/images/items/porody_sobak/shelti.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "border_kolli",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043E\u0440\u0434\u0435\u0440-\u043A\u043E\u043B\u043B\u0438",
      image: "/images/items/porody_sobak/border_kolli.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "kolli",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u043E\u043B\u043B\u0438",
      image: "/images/items/porody_sobak/kolli.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "bulmastif",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0443\u043B\u044C\u043C\u0430\u0441\u0442\u0438\u0444",
      image: "/images/items/porody_sobak/bulmastif.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "staffordshirskiy_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0442\u0430\u0444\u0444\u043E\u0440\u0434\u0448\u0438\u0440\u0441\u043A\u0438\u0439 \u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/staffordshirskiy_terer.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "greyhaund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0433\u0440\u0435\u0439\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/greyhaund.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "irlandskiy_setter",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0438\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0441\u0435\u0442\u0442\u0435\u0440",
      image: "/images/items/porody_sobak/irlandskiy_setter.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "angliyskiy_setter",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0441\u0435\u0442\u0442\u0435\u0440",
      image: "/images/items/porody_sobak/angliyskiy_setter.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "bladhaund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043B\u0430\u0434\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/bladhaund.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "afganskaya_borzaya",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u0444\u0433\u0430\u043D\u0441\u043A\u0430\u044F \u0431\u043E\u0440\u0437\u0430\u044F",
      image: "/images/items/porody_sobak/afganskaya_borzaya.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "alabay",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043B\u0430\u0431\u0430\u0439",
      image: "/images/items/porody_sobak/alabay.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "sharpey",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0430\u0440\u043F\u0435\u0439",
      image: "/images/items/porody_sobak/sharpey.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "kitayskaya_hohlataya",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0430\u044F \u0445\u043E\u0445\u043B\u0430\u0442\u0430\u044F",
      image: "/images/items/porody_sobak/kitayskaya_hohlataya.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "basset_haund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0430\u0441\u0441\u0435\u0442-\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/basset_haund.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "dzhek_rassel_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u0436\u0435\u043A-\u0440\u0430\u0441\u0441\u0435\u043B-\u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/dzhek_rassel_terer.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "kane_korso",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u0430\u043D\u0435-\u043A\u043E\u0440\u0441\u043E",
      image: "/images/items/porody_sobak/kane_korso.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "senbernar",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0435\u043D\u0431\u0435\u0440\u043D\u0430\u0440",
      image: "/images/items/porody_sobak/senbernar.png",
      categoryImage: "/images/categories/porody_sobak.png"
    },
    {
      id: "sobaka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043E\u0431\u0430\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/sobaka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "koshka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0448\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/koshka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "homyak",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0445\u043E\u043C\u044F\u043A",
      image: "/images/items/domashnie_zhivotnye/homyak.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "morskaya_svinka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0441\u0432\u0438\u043D\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/morskaya_svinka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "krolik",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u043E\u043B\u0438\u043A",
      image: "/images/items/domashnie_zhivotnye/krolik.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "popugay",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/domashnie_zhivotnye/popugay.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "kanareyka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/kanareyka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "volnistyy_popugaychik",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u043E\u043B\u043D\u0438\u0441\u0442\u044B\u0439 \u043F\u043E\u043F\u0443\u0433\u0430\u0439\u0447\u0438\u043A",
      image: "/images/items/domashnie_zhivotnye/volnistyy_popugaychik.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "krysa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u044B\u0441\u0430",
      image: "/images/items/domashnie_zhivotnye/krysa.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "mysh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u044B\u0448\u044C",
      image: "/images/items/domashnie_zhivotnye/mysh.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "shinshilla",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0448\u0438\u043D\u0448\u0438\u043B\u043B\u0430",
      image: "/images/items/domashnie_zhivotnye/shinshilla.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "degu",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0435\u0433\u0443",
      image: "/images/items/domashnie_zhivotnye/degu.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "horek",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0445\u043E\u0440\u0451\u043A",
      image: "/images/items/domashnie_zhivotnye/horek.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "ezh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0451\u0436",
      image: "/images/items/domashnie_zhivotnye/ezh.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "cherepaha",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/domashnie_zhivotnye/cherepaha.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "krasnouhaya_cherepaha",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0430\u0441\u043D\u043E\u0443\u0445\u0430\u044F \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/domashnie_zhivotnye/krasnouhaya_cherepaha.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "zolotaya_rybka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0437\u043E\u043B\u043E\u0442\u0430\u044F \u0440\u044B\u0431\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/zolotaya_rybka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "guppi",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0443\u043F\u043F\u0438",
      image: "/images/items/domashnie_zhivotnye/guppi.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "karpy_koi",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0440\u043F\u044B \u043A\u043E\u0438",
      image: "/images/items/domashnie_zhivotnye/karpy_koi.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "petuh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u0442\u0443\u0445",
      image: "/images/items/domashnie_zhivotnye/petuh.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "kuritsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0443\u0440\u0438\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/kuritsa.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "utka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0442\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/utka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "gus",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0443\u0441\u044C",
      image: "/images/items/domashnie_zhivotnye/gus.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "indeyka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0438\u043D\u0434\u0435\u0439\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/indeyka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "perepel",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u0440\u0435\u043F\u0435\u043B",
      image: "/images/items/domashnie_zhivotnye/perepel.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "golub",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u043E\u043B\u0443\u0431\u044C",
      image: "/images/items/domashnie_zhivotnye/golub.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "pavlin",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0430\u0432\u043B\u0438\u043D",
      image: "/images/items/domashnie_zhivotnye/pavlin.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "fazan",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0444\u0430\u0437\u0430\u043D",
      image: "/images/items/domashnie_zhivotnye/fazan.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "loshad",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0448\u0430\u0434\u044C",
      image: "/images/items/domashnie_zhivotnye/loshad.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "osel",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0441\u0451\u043B",
      image: "/images/items/domashnie_zhivotnye/osel.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "poni",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u043E\u043D\u0438",
      image: "/images/items/domashnie_zhivotnye/poni.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "korova",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0440\u043E\u0432\u0430",
      image: "/images/items/domashnie_zhivotnye/korova.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "ovtsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0432\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/ovtsa.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "koza",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0437\u0430",
      image: "/images/items/domashnie_zhivotnye/koza.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "svinya",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u0432\u0438\u043D\u044C\u044F",
      image: "/images/items/domashnie_zhivotnye/svinya.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "verblyud",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u0435\u0440\u0431\u043B\u044E\u0434",
      image: "/images/items/domashnie_zhivotnye/verblyud.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "lama",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043C\u0430",
      image: "/images/items/domashnie_zhivotnye/lama.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "alpaka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043B\u044C\u043F\u0430\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/alpaka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "akvariumnaya_rybka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u043D\u0430\u044F \u0440\u044B\u0431\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/akvariumnaya_rybka.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "yascheritsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u044F\u0449\u0435\u0440\u0438\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/yascheritsa.png",
      categoryImage: "/images/categories/domashnie_zhivotnye.png"
    },
    {
      id: "lev",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u0432",
      image: "/images/items/dikie_zhivotnye/lev.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "tigr",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0438\u0433\u0440",
      image: "/images/items/dikie_zhivotnye/tigr.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "leopard",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u043E\u043F\u0430\u0440\u0434",
      image: "/images/items/dikie_zhivotnye/leopard.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "yaguar",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u044F\u0433\u0443\u0430\u0440",
      image: "/images/items/dikie_zhivotnye/yaguar.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "gepard",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0435\u043F\u0430\u0440\u0434",
      image: "/images/items/dikie_zhivotnye/gepard.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "buryy_medved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0443\u0440\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C",
      image: "/images/items/dikie_zhivotnye/buryy_medved.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "belyy_medved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C",
      image: "/images/items/dikie_zhivotnye/belyy_medved.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "volk",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u043E\u043B\u043A",
      image: "/images/items/dikie_zhivotnye/volk.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "lisa",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0438\u0441\u0430",
      image: "/images/items/dikie_zhivotnye/lisa.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "koyot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0439\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/koyot.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "giena",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0438\u0435\u043D\u0430",
      image: "/images/items/dikie_zhivotnye/giena.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "rys",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0441\u044C",
      image: "/images/items/dikie_zhivotnye/rys.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "puma",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0443\u043C\u0430",
      image: "/images/items/dikie_zhivotnye/puma.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "snezhnyy_bars",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043D\u0435\u0436\u043D\u044B\u0439 \u0431\u0430\u0440\u0441",
      image: "/images/items/dikie_zhivotnye/snezhnyy_bars.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "obezyana",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0431\u0435\u0437\u044C\u044F\u043D\u0430",
      image: "/images/items/dikie_zhivotnye/obezyana.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "gorilla",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u043E\u0440\u0438\u043B\u043B\u0430",
      image: "/images/items/dikie_zhivotnye/gorilla.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "shimpanze",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0448\u0438\u043C\u043F\u0430\u043D\u0437\u0435",
      image: "/images/items/dikie_zhivotnye/shimpanze.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "orangutan",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0440\u0430\u043D\u0433\u0443\u0442\u0430\u043D",
      image: "/images/items/dikie_zhivotnye/orangutan.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "slon",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043B\u043E\u043D",
      image: "/images/items/dikie_zhivotnye/slon.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "zebra",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0437\u0435\u0431\u0440\u0430",
      image: "/images/items/dikie_zhivotnye/zebra.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "zhiraf",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0436\u0438\u0440\u0430\u0444",
      image: "/images/items/dikie_zhivotnye/zhiraf.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "nosorog",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043D\u043E\u0441\u043E\u0440\u043E\u0433",
      image: "/images/items/dikie_zhivotnye/nosorog.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "begemot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u0433\u0435\u043C\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/begemot.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "buyvol",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0443\u0439\u0432\u043E\u043B",
      image: "/images/items/dikie_zhivotnye/buyvol.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "bizon",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0438\u0437\u043E\u043D",
      image: "/images/items/dikie_zhivotnye/bizon.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "kaban",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0431\u0430\u043D",
      image: "/images/items/dikie_zhivotnye/kaban.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "olen",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u043B\u0435\u043D\u044C",
      image: "/images/items/dikie_zhivotnye/olen.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "los",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0441\u044C",
      image: "/images/items/dikie_zhivotnye/los.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "antilopa",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043D\u0442\u0438\u043B\u043E\u043F\u0430",
      image: "/images/items/dikie_zhivotnye/antilopa.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "barsuk",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0430\u0440\u0441\u0443\u043A",
      image: "/images/items/dikie_zhivotnye/barsuk.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "rosomaha",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u043E\u0441\u043E\u043C\u0430\u0445\u0430",
      image: "/images/items/dikie_zhivotnye/rosomaha.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "skuns",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043A\u0443\u043D\u0441",
      image: "/images/items/dikie_zhivotnye/skuns.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "enot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0435\u043D\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/enot.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "vydra",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u044B\u0434\u0440\u0430",
      image: "/images/items/dikie_zhivotnye/vydra.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "dikobraz",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0438\u043A\u043E\u0431\u0440\u0430\u0437",
      image: "/images/items/dikie_zhivotnye/dikobraz.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "tapir",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0430\u043F\u0438\u0440",
      image: "/images/items/dikie_zhivotnye/tapir.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "lenivets",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u043D\u0438\u0432\u0435\u0446",
      image: "/images/items/dikie_zhivotnye/lenivets.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "muraved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0443\u0440\u0430\u0432\u044C\u0435\u0434",
      image: "/images/items/dikie_zhivotnye/muraved.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "koala",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0430\u043B\u0430",
      image: "/images/items/dikie_zhivotnye/koala.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "kenguru",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0435\u043D\u0433\u0443\u0440\u0443",
      image: "/images/items/dikie_zhivotnye/kenguru.png",
      categoryImage: "/images/categories/dikie_zhivotnye.png"
    },
    {
      id: "akula",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043A\u0443\u043B\u0430",
      image: "/images/items/morskie_zhivotnye/akula.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "delfin",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0435\u043B\u044C\u0444\u0438\u043D",
      image: "/images/items/morskie_zhivotnye/delfin.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "kit",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0438\u0442",
      image: "/images/items/morskie_zhivotnye/kit.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "kasatka",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0441\u0430\u0442\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/kasatka.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "narval",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043D\u0430\u0440\u0432\u0430\u043B",
      image: "/images/items/morskie_zhivotnye/narval.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "beluha",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u0443\u0445\u0430",
      image: "/images/items/morskie_zhivotnye/beluha.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morzh",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0436",
      image: "/images/items/morskie_zhivotnye/morzh.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "tyulen",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u044E\u043B\u0435\u043D\u044C",
      image: "/images/items/morskie_zhivotnye/tyulen.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morskoy_lev",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043B\u0435\u0432",
      image: "/images/items/morskie_zhivotnye/morskoy_lev.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "lamantiny",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043C\u0430\u043D\u0442\u0438\u043D\u044B",
      image: "/images/items/morskie_zhivotnye/lamantiny.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "ryba_kloun",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u043A\u043B\u043E\u0443\u043D",
      image: "/images/items/morskie_zhivotnye/ryba_kloun.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "ryba_hirurg",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u0445\u0438\u0440\u0443\u0440\u0433",
      image: "/images/items/morskie_zhivotnye/ryba_hirurg.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "ryba_popugay",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/morskie_zhivotnye/ryba_popugay.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "skat",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043A\u0430\u0442",
      image: "/images/items/morskie_zhivotnye/skat.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "manta",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0430\u043D\u0442\u0430",
      image: "/images/items/morskie_zhivotnye/manta.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morskaya_zvezda",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430",
      image: "/images/items/morskie_zhivotnye/morskaya_zvezda.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morskoy_ezh",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0451\u0436",
      image: "/images/items/morskie_zhivotnye/morskoy_ezh.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "meduza",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0435\u0434\u0443\u0437\u0430",
      image: "/images/items/morskie_zhivotnye/meduza.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "osminog",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433",
      image: "/images/items/morskie_zhivotnye/osminog.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "kalmar",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043B\u044C\u043C\u0430\u0440",
      image: "/images/items/morskie_zhivotnye/kalmar.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "karakatitsa",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0440\u0430\u043A\u0430\u0442\u0438\u0446\u0430",
      image: "/images/items/morskie_zhivotnye/karakatitsa.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "krab",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0430\u0431",
      image: "/images/items/morskie_zhivotnye/krab.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "omar",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u043C\u0430\u0440",
      image: "/images/items/morskie_zhivotnye/omar.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "langust",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043D\u0433\u0443\u0441\u0442",
      image: "/images/items/morskie_zhivotnye/langust.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "krevetka",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/krevetka.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "midiya",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0438\u0434\u0438\u044F",
      image: "/images/items/morskie_zhivotnye/midiya.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "ustritsa",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0441\u0442\u0440\u0438\u0446\u0430",
      image: "/images/items/morskie_zhivotnye/ustritsa.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morskoy_konek",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0451\u043A",
      image: "/images/items/morskie_zhivotnye/morskoy_konek.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "ugor",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0433\u043E\u0440\u044C",
      image: "/images/items/morskie_zhivotnye/ugor.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "barrakuda",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0430\u0440\u0440\u0430\u043A\u0443\u0434\u0430",
      image: "/images/items/morskie_zhivotnye/barrakuda.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "tunets",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0443\u043D\u0435\u0446",
      image: "/images/items/morskie_zhivotnye/tunets.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "losos",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0441\u043E\u0441\u044C",
      image: "/images/items/morskie_zhivotnye/losos.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "treska",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0440\u0435\u0441\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/treska.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "kambala",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043C\u0431\u0430\u043B\u0430",
      image: "/images/items/morskie_zhivotnye/kambala.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "morskaya_cherepaha",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/morskie_zhivotnye/morskaya_cherepaha.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "pingvin",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0438\u043D\u0433\u0432\u0438\u043D",
      image: "/images/items/morskie_zhivotnye/pingvin.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "albatros",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
      image: "/images/items/morskie_zhivotnye/albatros.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "pelikan",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u043B\u0438\u043A\u0430\u043D",
      image: "/images/items/morskie_zhivotnye/pelikan.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "fugu",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0444\u0443\u0433\u0443",
      image: "/images/items/morskie_zhivotnye/fugu.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "murena",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0443\u0440\u0435\u043D\u0430",
      image: "/images/items/morskie_zhivotnye/murena.png",
      categoryImage: "/images/categories/morskie_zhivotnye.png"
    },
    {
      id: "vorobey",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0432\u043E\u0440\u043E\u0431\u0435\u0439",
      image: "/images/items/ptitsy/vorobey.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "golub",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u043E\u043B\u0443\u0431\u044C",
      image: "/images/items/ptitsy/golub.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "vorona",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0432\u043E\u0440\u043E\u043D\u0430",
      image: "/images/items/ptitsy/vorona.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "soroka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u0440\u043E\u043A\u0430",
      image: "/images/items/ptitsy/soroka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "sinitsa",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0438\u043D\u0438\u0446\u0430",
      image: "/images/items/ptitsy/sinitsa.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "snegir",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043D\u0435\u0433\u0438\u0440\u044C",
      image: "/images/items/ptitsy/snegir.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "lastochka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043B\u0430\u0441\u0442\u043E\u0447\u043A\u0430",
      image: "/images/items/ptitsy/lastochka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "strizh",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0442\u0440\u0438\u0436",
      image: "/images/items/ptitsy/strizh.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "skvorets",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043A\u0432\u043E\u0440\u0435\u0446",
      image: "/images/items/ptitsy/skvorets.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "dyatel",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0434\u044F\u0442\u0435\u043B",
      image: "/images/items/ptitsy/dyatel.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "sova",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u0432\u0430",
      image: "/images/items/ptitsy/sova.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "filin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u0438\u043B\u0438\u043D",
      image: "/images/items/ptitsy/filin.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "orel",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043E\u0440\u0451\u043B",
      image: "/images/items/ptitsy/orel.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "sokol",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u043A\u043E\u043B",
      image: "/images/items/ptitsy/sokol.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "yastreb",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u044F\u0441\u0442\u0440\u0435\u0431",
      image: "/images/items/ptitsy/yastreb.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "zhuravl",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0436\u0443\u0440\u0430\u0432\u043B\u044C",
      image: "/images/items/ptitsy/zhuravl.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "aist",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0430\u0438\u0441\u0442",
      image: "/images/items/ptitsy/aist.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "tsaplya",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0446\u0430\u043F\u043B\u044F",
      image: "/images/items/ptitsy/tsaplya.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "lebed",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043B\u0435\u0431\u0435\u0434\u044C",
      image: "/images/items/ptitsy/lebed.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "gus",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u0443\u0441\u044C",
      image: "/images/items/ptitsy/gus.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "utka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0443\u0442\u043A\u0430",
      image: "/images/items/ptitsy/utka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "pelikan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0435\u043B\u0438\u043A\u0430\u043D",
      image: "/images/items/ptitsy/pelikan.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "flamingo",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u043B\u0430\u043C\u0438\u043D\u0433\u043E",
      image: "/images/items/ptitsy/flamingo.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "pingvin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0438\u043D\u0433\u0432\u0438\u043D",
      image: "/images/items/ptitsy/pingvin.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "straus",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0442\u0440\u0430\u0443\u0441",
      image: "/images/items/ptitsy/straus.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "pavlin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0430\u0432\u043B\u0438\u043D",
      image: "/images/items/ptitsy/pavlin.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "popugay",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/ptitsy/popugay.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "kanareyka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0430",
      image: "/images/items/ptitsy/kanareyka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "kolibri",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u043E\u043B\u0438\u0431\u0440\u0438",
      image: "/images/items/ptitsy/kolibri.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "kukushka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u043A\u0443\u0448\u043A\u0430",
      image: "/images/items/ptitsy/kukushka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "chayka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0447\u0430\u0439\u043A\u0430",
      image: "/images/items/ptitsy/chayka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "albatros",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0430\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
      image: "/images/items/ptitsy/albatros.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "baklan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0431\u0430\u043A\u043B\u0430\u043D",
      image: "/images/items/ptitsy/baklan.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "fazan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u0430\u0437\u0430\u043D",
      image: "/images/items/ptitsy/fazan.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "kuropatka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u0440\u043E\u043F\u0430\u0442\u043A\u0430",
      image: "/images/items/ptitsy/kuropatka.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "teterev",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0442\u0435\u0442\u0435\u0440\u0435\u0432",
      image: "/images/items/ptitsy/teterev.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "gluhar",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u043B\u0443\u0445\u0430\u0440\u044C",
      image: "/images/items/ptitsy/gluhar.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "indyuk",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0438\u043D\u0434\u044E\u043A",
      image: "/images/items/ptitsy/indyuk.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "kuritsa",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u0440\u0438\u0446\u0430",
      image: "/images/items/ptitsy/kuritsa.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "petuh",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0435\u0442\u0443\u0445",
      image: "/images/items/ptitsy/petuh.png",
      categoryImage: "/images/categories/ptitsy.png"
    },
    {
      id: "dub",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0434\u0443\u0431",
      image: "/images/items/derevya/dub.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "bereza",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0435\u0440\u0451\u0437\u0430",
      image: "/images/items/derevya/bereza.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "sosna",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u043E\u0441\u043D\u0430",
      image: "/images/items/derevya/sosna.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "el",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0435\u043B\u044C",
      image: "/images/items/derevya/el.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "lipa",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043B\u0438\u043F\u0430",
      image: "/images/items/derevya/lipa.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "klen",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u043B\u0451\u043D",
      image: "/images/items/derevya/klen.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "topol",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0442\u043E\u043F\u043E\u043B\u044C",
      image: "/images/items/derevya/topol.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "iva",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0438\u0432\u0430",
      image: "/images/items/derevya/iva.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "osina",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043E\u0441\u0438\u043D\u0430",
      image: "/images/items/derevya/osina.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "ryabina",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0440\u044F\u0431\u0438\u043D\u0430",
      image: "/images/items/derevya/ryabina.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "kashtan",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0430\u0448\u0442\u0430\u043D",
      image: "/images/items/derevya/kashtan.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "yasen",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044F\u0441\u0435\u043D\u044C",
      image: "/images/items/derevya/yasen.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "buk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0443\u043A",
      image: "/images/items/derevya/buk.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "grab",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0430\u0431",
      image: "/images/items/derevya/grab.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "olha",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043E\u043B\u044C\u0445\u0430",
      image: "/images/items/derevya/olha.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "vyaz",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0432\u044F\u0437",
      image: "/images/items/derevya/vyaz.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "listvennitsa",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043B\u0438\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u0446\u0430",
      image: "/images/items/derevya/listvennitsa.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "kedr",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0435\u0434\u0440",
      image: "/images/items/derevya/kedr.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "pihta",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0438\u0445\u0442\u0430",
      image: "/images/items/derevya/pihta.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "mozhzhevelnik",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u043E\u0436\u0436\u0435\u0432\u0435\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/derevya/mozhzhevelnik.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "yablonya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044F\u0431\u043B\u043E\u043D\u044F",
      image: "/images/items/derevya/yablonya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "grusha",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0443\u0448\u0430",
      image: "/images/items/derevya/grusha.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "vishnya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0432\u0438\u0448\u043D\u044F",
      image: "/images/items/derevya/vishnya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "sliva",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u043B\u0438\u0432\u0430",
      image: "/images/items/derevya/sliva.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "abrikos",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0430\u0431\u0440\u0438\u043A\u043E\u0441",
      image: "/images/items/derevya/abrikos.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "persik",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A",
      image: "/images/items/derevya/persik.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "gretskiy_oreh",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0435\u0446\u043A\u0438\u0439 \u043E\u0440\u0435\u0445",
      image: "/images/items/derevya/gretskiy_oreh.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "funduk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0444\u0443\u043D\u0434\u0443\u043A",
      image: "/images/items/derevya/funduk.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "mindal",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u0438\u043D\u0434\u0430\u043B\u044C",
      image: "/images/items/derevya/mindal.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "palma",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0430\u043B\u044C\u043C\u0430",
      image: "/images/items/derevya/palma.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "kiparis",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0438\u043F\u0430\u0440\u0438\u0441",
      image: "/images/items/derevya/kiparis.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "sekvoyya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0435\u043A\u0432\u043E\u0439\u044F",
      image: "/images/items/derevya/sekvoyya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "baobab",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0430\u043E\u0431\u0430\u0431",
      image: "/images/items/derevya/baobab.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "evkalipt",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044D\u0432\u043A\u0430\u043B\u0438\u043F\u0442",
      image: "/images/items/derevya/evkalipt.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "akatsiya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0430\u043A\u0430\u0446\u0438\u044F",
      image: "/images/items/derevya/akatsiya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "magnoliya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u0430\u0433\u043D\u043E\u043B\u0438\u044F",
      image: "/images/items/derevya/magnoliya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "sakura",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0430\u043A\u0443\u0440\u0430",
      image: "/images/items/derevya/sakura.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "bambuk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0430\u043C\u0431\u0443\u043A",
      image: "/images/items/derevya/bambuk.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "tuya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0442\u0443\u044F",
      image: "/images/items/derevya/tuya.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "samshit",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0430\u043C\u0448\u0438\u0442",
      image: "/images/items/derevya/samshit.png",
      categoryImage: "/images/categories/derevya.png"
    },
    {
      id: "novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/novyy_god.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "rozhdestvo",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",
      image: "/images/items/prazdniki/rozhdestvo.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_rozhdeniya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
      image: "/images/items/prazdniki/den_rozhdeniya.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "8_marta",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "8 \u041C\u0430\u0440\u0442\u0430",
      image: "/images/items/prazdniki/8_marta.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "23_fevralya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "23 \u0424\u0435\u0432\u0440\u0430\u043B\u044F",
      image: "/images/items/prazdniki/23_fevralya.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_pobedy",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u041F\u043E\u0431\u0435\u0434\u044B",
      image: "/images/items/prazdniki/den_pobedy.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "pasha",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041F\u0430\u0441\u0445\u0430",
      image: "/images/items/prazdniki/pasha.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "hellouin",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0425\u044D\u043B\u043B\u043E\u0443\u0438\u043D",
      image: "/images/items/prazdniki/hellouin.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_svyatogo_valentina",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430",
      image: "/images/items/prazdniki/den_svyatogo_valentina.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "maslenitsa",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041C\u0430\u0441\u043B\u0435\u043D\u0438\u0446\u0430",
      image: "/images/items/prazdniki/maslenitsa.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_znaniy",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439",
      image: "/images/items/prazdniki/den_znaniy.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_uchitelya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0443\u0447\u0438\u0442\u0435\u043B\u044F",
      image: "/images/items/prazdniki/den_uchitelya.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_materi",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043C\u0430\u0442\u0435\u0440\u0438",
      image: "/images/items/prazdniki/den_materi.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_ottsa",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043E\u0442\u0446\u0430",
      image: "/images/items/prazdniki/den_ottsa.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_goroda",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0433\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/prazdniki/den_goroda.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_rossii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0420\u043E\u0441\u0441\u0438\u0438",
      image: "/images/items/prazdniki/den_rossii.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_narodnogo_edinstva",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0430",
      image: "/images/items/prazdniki/den_narodnogo_edinstva.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "staryy_novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0421\u0442\u0430\u0440\u044B\u0439 \u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/staryy_novyy_god.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_kosmonavtiki",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442\u0438\u043A\u0438",
      image: "/images/items/prazdniki/den_kosmonavtiki.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_zaschity_detey",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B \u0434\u0435\u0442\u0435\u0439",
      image: "/images/items/prazdniki/den_zaschity_detey.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_studenta",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430",
      image: "/images/items/prazdniki/den_studenta.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_semi",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0435\u043C\u044C\u0438",
      image: "/images/items/prazdniki/den_semi.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_smeha",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u043C\u0435\u0445\u0430",
      image: "/images/items/prazdniki/den_smeha.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_truda",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0442\u0440\u0443\u0434\u0430",
      image: "/images/items/prazdniki/den_truda.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_konstitutsii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438",
      image: "/images/items/prazdniki/den_konstitutsii.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_vdv",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0412\u0414\u0412",
      image: "/images/items/prazdniki/den_vdv.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_flota",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0444\u043B\u043E\u0442\u0430",
      image: "/images/items/prazdniki/den_flota.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_programmista",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430",
      image: "/images/items/prazdniki/den_programmista.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_medika",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043C\u0435\u0434\u0438\u043A\u0430",
      image: "/images/items/prazdniki/den_medika.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_stroitelya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044F",
      image: "/images/items/prazdniki/den_stroitelya.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_shahtera",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0448\u0430\u0445\u0442\u0451\u0440\u0430",
      image: "/images/items/prazdniki/den_shahtera.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_avtomobilista",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438\u0441\u0442\u0430",
      image: "/images/items/prazdniki/den_avtomobilista.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_politsii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043F\u043E\u043B\u0438\u0446\u0438\u0438",
      image: "/images/items/prazdniki/den_politsii.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_energetika",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430",
      image: "/images/items/prazdniki/den_energetika.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_vseh_vlyublennyh",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0432\u0441\u0435\u0445 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445",
      image: "/images/items/prazdniki/den_vseh_vlyublennyh.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "kitayskiy_novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/kitayskiy_novyy_god.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "den_blagodareniya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0435\u043D\u0438\u044F",
      image: "/images/items/prazdniki/den_blagodareniya.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "oktoberfest",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041E\u043A\u0442\u043E\u0431\u0435\u0440\u0444\u0435\u0441\u0442",
      image: "/images/items/prazdniki/oktoberfest.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "ramadan",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0420\u0430\u043C\u0430\u0434\u0430\u043D",
      image: "/images/items/prazdniki/ramadan.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "navruz",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041D\u0430\u0432\u0440\u0443\u0437",
      image: "/images/items/prazdniki/navruz.png",
      categoryImage: "/images/categories/prazdniki.png"
    },
    {
      id: "telegram",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Telegram",
      image: "/images/items/sotsseti_i_servisy/telegram.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "whatsapp",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "WhatsApp",
      image: "/images/items/sotsseti_i_servisy/whatsapp.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "youtube",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "YouTube",
      image: "/images/items/sotsseti_i_servisy/youtube.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "tiktok",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "TikTok",
      image: "/images/items/sotsseti_i_servisy/tiktok.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "instagram",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Instagram",
      image: "/images/items/sotsseti_i_servisy/instagram.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "vk",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "VK",
      image: "/images/items/sotsseti_i_servisy/vk.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "facebook",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Facebook",
      image: "/images/items/sotsseti_i_servisy/facebook.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "x",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "X",
      image: "/images/items/sotsseti_i_servisy/x.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "reddit",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Reddit",
      image: "/images/items/sotsseti_i_servisy/reddit.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "discord",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Discord",
      image: "/images/items/sotsseti_i_servisy/discord.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "twitch",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Twitch",
      image: "/images/items/sotsseti_i_servisy/twitch.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "pinterest",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Pinterest",
      image: "/images/items/sotsseti_i_servisy/pinterest.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "snapchat",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Snapchat",
      image: "/images/items/sotsseti_i_servisy/snapchat.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "linkedin",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "LinkedIn",
      image: "/images/items/sotsseti_i_servisy/linkedin.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "threads",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Threads",
      image: "/images/items/sotsseti_i_servisy/threads.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "rutube",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Rutube",
      image: "/images/items/sotsseti_i_servisy/rutube.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "dzen",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Dzen",
      image: "/images/items/sotsseti_i_servisy/dzen.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "odnoklassniki",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438",
      image: "/images/items/sotsseti_i_servisy/odnoklassniki.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "spotify",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Spotify",
      image: "/images/items/sotsseti_i_servisy/spotify.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "netflix",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Netflix",
      image: "/images/items/sotsseti_i_servisy/netflix.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "kinopoisk",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Kinopoisk",
      image: "/images/items/sotsseti_i_servisy/kinopoisk.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "okko",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Okko",
      image: "/images/items/sotsseti_i_servisy/okko.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "ivi",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "IVI",
      image: "/images/items/sotsseti_i_servisy/ivi.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "kion",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Kion",
      image: "/images/items/sotsseti_i_servisy/kion.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "yandeks_muzyka",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041C\u0443\u0437\u044B\u043A\u0430",
      image: "/images/items/sotsseti_i_servisy/yandeks_muzyka.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "apple_music",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Apple Music",
      image: "/images/items/sotsseti_i_servisy/apple_music.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "soundcloud",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "SoundCloud",
      image: "/images/items/sotsseti_i_servisy/soundcloud.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "steam",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Steam",
      image: "/images/items/sotsseti_i_servisy/steam.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "epic_games_store",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Epic Games Store",
      image: "/images/items/sotsseti_i_servisy/epic_games_store.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "playstation_network",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "PlayStation Network",
      image: "/images/items/sotsseti_i_servisy/playstation_network.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "xbox_live",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Xbox Live",
      image: "/images/items/sotsseti_i_servisy/xbox_live.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "google_drive",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Google Drive",
      image: "/images/items/sotsseti_i_servisy/google_drive.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "dropbox",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Dropbox",
      image: "/images/items/sotsseti_i_servisy/dropbox.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "notion",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Notion",
      image: "/images/items/sotsseti_i_servisy/notion.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "trello",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Trello",
      image: "/images/items/sotsseti_i_servisy/trello.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "figma",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Figma",
      image: "/images/items/sotsseti_i_servisy/figma.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "canva",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Canva",
      image: "/images/items/sotsseti_i_servisy/canva.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "zoom",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Zoom",
      image: "/images/items/sotsseti_i_servisy/zoom.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "google_meet",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Google Meet",
      image: "/images/items/sotsseti_i_servisy/google_meet.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "skype",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Skype",
      image: "/images/items/sotsseti_i_servisy/skype.png",
      categoryImage: "/images/categories/sotsseti_i_servisy.png"
    },
    {
      id: "telegram",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Telegram",
      image: "/images/items/mobilnye_prilozheniya/telegram.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "whatsapp",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "WhatsApp",
      image: "/images/items/mobilnye_prilozheniya/whatsapp.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "youtube",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "YouTube",
      image: "/images/items/mobilnye_prilozheniya/youtube.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "tiktok",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "TikTok",
      image: "/images/items/mobilnye_prilozheniya/tiktok.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "vk",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "VK",
      image: "/images/items/mobilnye_prilozheniya/vk.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "instagram",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Instagram",
      image: "/images/items/mobilnye_prilozheniya/instagram.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "google_maps",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google Maps",
      image: "/images/items/mobilnye_prilozheniya/google_maps.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "yandeks_karty",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B",
      image: "/images/items/mobilnye_prilozheniya/yandeks_karty.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "2gis",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "2\u0413\u0418\u0421",
      image: "/images/items/mobilnye_prilozheniya/2gis.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "uber",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Uber",
      image: "/images/items/mobilnye_prilozheniya/uber.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "yandeks_go",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 Go",
      image: "/images/items/mobilnye_prilozheniya/yandeks_go.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "delivery_club",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Delivery Club",
      image: "/images/items/mobilnye_prilozheniya/delivery_club.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "samokat",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0421\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/mobilnye_prilozheniya/samokat.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "ozon",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Ozon",
      image: "/images/items/mobilnye_prilozheniya/ozon.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "wildberries",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Wildberries",
      image: "/images/items/mobilnye_prilozheniya/wildberries.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "aliexpress",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "AliExpress",
      image: "/images/items/mobilnye_prilozheniya/aliexpress.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "avito",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Avito",
      image: "/images/items/mobilnye_prilozheniya/avito.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "gmail",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Gmail",
      image: "/images/items/mobilnye_prilozheniya/gmail.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "google_foto",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google \u0424\u043E\u0442\u043E",
      image: "/images/items/mobilnye_prilozheniya/google_foto.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "google_drive",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google Drive",
      image: "/images/items/mobilnye_prilozheniya/google_drive.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "sberbank_onlayn",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u041E\u043D\u043B\u0430\u0439\u043D",
      image: "/images/items/mobilnye_prilozheniya/sberbank_onlayn.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "t_bank",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0422-\u0411\u0430\u043D\u043A",
      image: "/images/items/mobilnye_prilozheniya/t_bank.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "gosuslugi",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433\u0438",
      image: "/images/items/mobilnye_prilozheniya/gosuslugi.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "spotify",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Spotify",
      image: "/images/items/mobilnye_prilozheniya/spotify.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "yandeks_muzyka",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041C\u0443\u0437\u044B\u043A\u0430",
      image: "/images/items/mobilnye_prilozheniya/yandeks_muzyka.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "shazam",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Shazam",
      image: "/images/items/mobilnye_prilozheniya/shazam.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "netflix",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Netflix",
      image: "/images/items/mobilnye_prilozheniya/netflix.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "kinopoisk",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u041A\u0438\u043D\u043E\u043F\u043E\u0438\u0441\u043A",
      image: "/images/items/mobilnye_prilozheniya/kinopoisk.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "duolingo",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Duolingo",
      image: "/images/items/mobilnye_prilozheniya/duolingo.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "notion",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Notion",
      image: "/images/items/mobilnye_prilozheniya/notion.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "todoist",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Todoist",
      image: "/images/items/mobilnye_prilozheniya/todoist.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "capcut",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "CapCut",
      image: "/images/items/mobilnye_prilozheniya/capcut.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "snapseed",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Snapseed",
      image: "/images/items/mobilnye_prilozheniya/snapseed.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "canva",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Canva",
      image: "/images/items/mobilnye_prilozheniya/canva.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "figma",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Figma",
      image: "/images/items/mobilnye_prilozheniya/figma.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "discord",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Discord",
      image: "/images/items/mobilnye_prilozheniya/discord.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "twitch",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Twitch",
      image: "/images/items/mobilnye_prilozheniya/twitch.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "steam",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Steam",
      image: "/images/items/mobilnye_prilozheniya/steam.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "chatgpt",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "ChatGPT",
      image: "/images/items/mobilnye_prilozheniya/chatgpt.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "pinterest",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Pinterest",
      image: "/images/items/mobilnye_prilozheniya/pinterest.png",
      categoryImage: "/images/categories/mobilnye_prilozheniya.png"
    },
    {
      id: "naruto",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041D\u0430\u0440\u0443\u0442\u043E",
      image: "/images/items/anime/naruto.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "van_pis",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0430\u043D-\u041F\u0438\u0441",
      image: "/images/items/anime/van_pis.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "blich",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u043B\u0438\u0447",
      image: "/images/items/anime/blich.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "ataka_titanov",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0410\u0442\u0430\u043A\u0430 \u0442\u0438\u0442\u0430\u043D\u043E\u0432",
      image: "/images/items/anime/ataka_titanov.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "tetrad_smerti",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u0435\u0442\u0440\u0430\u0434\u044C \u0441\u043C\u0435\u0440\u0442\u0438",
      image: "/images/items/anime/tetrad_smerti.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "stalnoy_alhimik",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0430\u043B\u0445\u0438\u043C\u0438\u043A",
      image: "/images/items/anime/stalnoy_alhimik.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "klinok_rassekayuschiy_demonov",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043B\u0438\u043D\u043E\u043A, \u0440\u0430\u0441\u0441\u0435\u043A\u0430\u044E\u0449\u0438\u0439 \u0434\u0435\u043C\u043E\u043D\u043E\u0432",
      image: "/images/items/anime/klinok_rassekayuschiy_demonov.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "magicheskaya_bitva",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0438\u0442\u0432\u0430",
      image: "/images/items/anime/magicheskaya_bitva.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "moya_geroyskaya_akademiya",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u044F \u0433\u0435\u0440\u043E\u0439\u0441\u043A\u0430\u044F \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u044F",
      image: "/images/items/anime/moya_geroyskaya_akademiya.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "vanpanchmen",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0430\u043D\u043F\u0430\u043D\u0447\u043C\u0435\u043D",
      image: "/images/items/anime/vanpanchmen.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "evangelion",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0415\u0432\u0430\u043D\u0433\u0435\u043B\u0438\u043E\u043D",
      image: "/images/items/anime/evangelion.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "kovboy_bibop",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043E\u0432\u0431\u043E\u0439 \u0411\u0438\u0431\u043E\u043F",
      image: "/images/items/anime/kovboy_bibop.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "hanter_h_hanter",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u0430\u043D\u0442\u0435\u0440 \u0445 \u0425\u0430\u043D\u0442\u0435\u0440",
      image: "/images/items/anime/hanter_h_hanter.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "tokiyskiy_gul",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u043E\u043A\u0438\u0439\u0441\u043A\u0438\u0439 \u0433\u0443\u043B\u044C",
      image: "/images/items/anime/tokiyskiy_gul.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "berserk",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u0435\u0440\u0441\u0435\u0440\u043A",
      image: "/images/items/anime/berserk.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "dzhodzho",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u0436\u043E\u0414\u0436\u043E",
      image: "/images/items/anime/dzhodzho.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "pokemon",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u043E\u043A\u0435\u043C\u043E\u043D",
      image: "/images/items/anime/pokemon.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "seylor_mun",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0435\u0439\u043B\u043E\u0440 \u041C\u0443\u043D",
      image: "/images/items/anime/seylor_mun.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "drakoniy_zhemchug",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u0440\u0430\u043A\u043E\u043D\u0438\u0439 \u0436\u0435\u043C\u0447\u0443\u0433",
      image: "/images/items/anime/drakoniy_zhemchug.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "hodyachiy_zamok",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u043E\u0434\u044F\u0447\u0438\u0439 \u0437\u0430\u043C\u043E\u043A",
      image: "/images/items/anime/hodyachiy_zamok.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "unesennye_prizrakami",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0423\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u0440\u0430\u043A\u0430\u043C\u0438",
      image: "/images/items/anime/unesennye_prizrakami.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "moy_sosed_totoro",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u0439 \u0441\u043E\u0441\u0435\u0434 \u0422\u043E\u0442\u043E\u0440\u043E",
      image: "/images/items/anime/moy_sosed_totoro.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "printsessa_mononoke",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u041C\u043E\u043D\u043E\u043D\u043E\u043A\u0435",
      image: "/images/items/anime/printsessa_mononoke.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "tvoe_imya",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u0432\u043E\u0451 \u0438\u043C\u044F",
      image: "/images/items/anime/tvoe_imya.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "forma_golosa",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0424\u043E\u0440\u043C\u0430 \u0433\u043E\u043B\u043E\u0441\u0430",
      image: "/images/items/anime/forma_golosa.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "vrata_shteyna",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0440\u0430\u0442\u0430 \u0428\u0442\u0435\u0439\u043D\u0430",
      image: "/images/items/anime/vrata_shteyna.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "kod_gias",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043E\u0434 \u0413\u0438\u0430\u0441",
      image: "/images/items/anime/kod_gias.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "voleybol",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B",
      image: "/images/items/anime/voleybol.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "basketbol_kuroko",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B \u041A\u0443\u0440\u043E\u043A\u043E",
      image: "/images/items/anime/basketbol_kuroko.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "sinyaya_tyurma",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0438\u043D\u044F\u044F \u0442\u044E\u0440\u044C\u043C\u0430",
      image: "/images/items/anime/sinyaya_tyurma.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "monstr",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u043D\u0441\u0442\u0440",
      image: "/images/items/anime/monstr.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "elfiyskaya_pesn",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u042D\u043B\u044C\u0444\u0438\u0439\u0441\u043A\u0430\u044F \u043F\u0435\u0441\u043D\u044C",
      image: "/images/items/anime/elfiyskaya_pesn.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "parazit",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u0430\u0440\u0430\u0437\u0438\u0442",
      image: "/images/items/anime/parazit.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "mob_psiho_100",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u0431 \u041F\u0441\u0438\u0445\u043E 100",
      image: "/images/items/anime/mob_psiho_100.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "semya_shpiona",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0435\u043C\u044C\u044F \u0448\u043F\u0438\u043E\u043D\u0430",
      image: "/images/items/anime/semya_shpiona.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "doktor_stoun",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u043E\u0443\u043D",
      image: "/images/items/anime/doktor_stoun.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "chernyy_klever",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0427\u0451\u0440\u043D\u044B\u0439 \u043A\u043B\u0435\u0432\u0435\u0440",
      image: "/images/items/anime/chernyy_klever.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "hvost_fei",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u0432\u043E\u0441\u0442 \u0424\u0435\u0438",
      image: "/images/items/anime/hvost_fei.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "saga_o_vinlande",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0430\u0433\u0430 \u043E \u0412\u0438\u043D\u043B\u0430\u043D\u0434\u0435",
      image: "/images/items/anime/saga_o_vinlande.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "tokiyskie_mstiteli",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u043E\u043A\u0438\u0439\u0441\u043A\u0438\u0435 \u043C\u0441\u0442\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/anime/tokiyskie_mstiteli.png",
      categoryImage: "/images/categories/anime.png"
    },
    {
      id: "chelovek_pauk",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043F\u0430\u0443\u043A",
      image: "/images/items/supergeroi/chelovek_pauk.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "betmen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0411\u044D\u0442\u043C\u0435\u043D",
      image: "/images/items/supergeroi/betmen.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "supermen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u0443\u043F\u0435\u0440\u043C\u0435\u043D",
      image: "/images/items/supergeroi/supermen.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "zheleznyy_chelovek",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
      image: "/images/items/supergeroi/zheleznyy_chelovek.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "kapitan_amerika",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041A\u0430\u043F\u0438\u0442\u0430\u043D \u0410\u043C\u0435\u0440\u0438\u043A\u0430",
      image: "/images/items/supergeroi/kapitan_amerika.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "tor",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0422\u043E\u0440",
      image: "/images/items/supergeroi/tor.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "halk",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0425\u0430\u043B\u043A",
      image: "/images/items/supergeroi/halk.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "chernaya_vdova",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u0434\u043E\u0432\u0430",
      image: "/images/items/supergeroi/chernaya_vdova.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "doktor_strendzh",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u0440\u044D\u043D\u0434\u0436",
      image: "/images/items/supergeroi/doktor_strendzh.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "chernaya_pantera",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u043F\u0430\u043D\u0442\u0435\u0440\u0430",
      image: "/images/items/supergeroi/chernaya_pantera.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "rosomaha",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0420\u043E\u0441\u043E\u043C\u0430\u0445\u0430",
      image: "/images/items/supergeroi/rosomaha.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "dedpul",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u044D\u0434\u043F\u0443\u043B",
      image: "/images/items/supergeroi/dedpul.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "flesh",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0424\u043B\u044D\u0448",
      image: "/images/items/supergeroi/flesh.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "akvamen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0410\u043A\u0432\u0430\u043C\u0435\u043D",
      image: "/images/items/supergeroi/akvamen.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "chudo_zhenschina",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0443\u0434\u043E-\u0436\u0435\u043D\u0449\u0438\u043D\u0430",
      image: "/images/items/supergeroi/chudo_zhenschina.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "zelenyy_fonar",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u0424\u043E\u043D\u0430\u0440\u044C",
      image: "/images/items/supergeroi/zelenyy_fonar.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "sorvigolova",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u043E\u0440\u0432\u0438\u0433\u043E\u043B\u043E\u0432\u0430",
      image: "/images/items/supergeroi/sorvigolova.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "karatel",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041A\u0430\u0440\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/supergeroi/karatel.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "loki",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041B\u043E\u043A\u0438",
      image: "/images/items/supergeroi/loki.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "sokolinyy_glaz",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u043E\u043A\u043E\u043B\u0438\u043D\u044B\u0439 \u0433\u043B\u0430\u0437",
      image: "/images/items/supergeroi/sokolinyy_glaz.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "alaya_vedma",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0410\u043B\u0430\u044F \u0412\u0435\u0434\u044C\u043C\u0430",
      image: "/images/items/supergeroi/alaya_vedma.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "vizhn",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0412\u0438\u0436\u043D",
      image: "/images/items/supergeroi/vizhn.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "chelovek_muravey",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043C\u0443\u0440\u0430\u0432\u0435\u0439",
      image: "/images/items/supergeroi/chelovek_muravey.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "osa",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041E\u0441\u0430",
      image: "/images/items/supergeroi/osa.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "zvezdnyy_lord",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u041B\u043E\u0440\u0434",
      image: "/images/items/supergeroi/zvezdnyy_lord.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "grut",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0413\u0440\u0443\u0442",
      image: "/images/items/supergeroi/grut.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "raketa",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0420\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/supergeroi/raketa.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "draks",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u0440\u0430\u043A\u0441",
      image: "/images/items/supergeroi/draks.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "gamora",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0413\u0430\u043C\u043E\u0440\u0430",
      image: "/images/items/supergeroi/gamora.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "shazam",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0428\u0430\u0437\u0430\u043C",
      image: "/images/items/supergeroi/shazam.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "supergerl",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u0443\u043F\u0435\u0440\u0433\u0451\u0440\u043B",
      image: "/images/items/supergeroi/supergerl.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "tsiklop",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0426\u0438\u043A\u043B\u043E\u043F",
      image: "/images/items/supergeroi/tsiklop.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "shtorm",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0428\u0442\u043E\u0440\u043C",
      image: "/images/items/supergeroi/shtorm.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "professor_iks",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440 \u0418\u043A\u0441",
      image: "/images/items/supergeroi/professor_iks.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "magneto",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041C\u0430\u0433\u043D\u0435\u0442\u043E",
      image: "/images/items/supergeroi/magneto.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "fantasticheskaya_chetverka",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0447\u0435\u0442\u0432\u0451\u0440\u043A\u0430",
      image: "/images/items/supergeroi/fantasticheskaya_chetverka.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "bleyd",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0411\u043B\u0435\u0439\u0434",
      image: "/images/items/supergeroi/bleyd.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "prizrachnyy_gonschik",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041F\u0440\u0438\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0433\u043E\u043D\u0449\u0438\u043A",
      image: "/images/items/supergeroi/prizrachnyy_gonschik.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "hellboy",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0425\u0435\u043B\u043B\u0431\u043E\u0439",
      image: "/images/items/supergeroi/hellboy.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "cherepashki_nindzya",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u0440\u0435\u043F\u0430\u0448\u043A\u0438-\u043D\u0438\u043D\u0434\u0437\u044F",
      image: "/images/items/supergeroi/cherepashki_nindzya.png",
      categoryImage: "/images/categories/supergeroi.png"
    },
    {
      id: "solntse",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0421\u043E\u043B\u043D\u0446\u0435",
      image: "/images/items/kosmos/solntse.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "luna",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041B\u0443\u043D\u0430",
      image: "/images/items/kosmos/luna.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "merkuriy",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439",
      image: "/images/items/kosmos/merkuriy.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "venera",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0412\u0435\u043D\u0435\u0440\u0430",
      image: "/images/items/kosmos/venera.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "zemlya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0417\u0435\u043C\u043B\u044F",
      image: "/images/items/kosmos/zemlya.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "mars",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u0430\u0440\u0441",
      image: "/images/items/kosmos/mars.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "yupiter",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u042E\u043F\u0438\u0442\u0435\u0440",
      image: "/images/items/kosmos/yupiter.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "saturn",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0421\u0430\u0442\u0443\u0440\u043D",
      image: "/images/items/kosmos/saturn.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "uran",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0423\u0440\u0430\u043D",
      image: "/images/items/kosmos/uran.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "neptun",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041D\u0435\u043F\u0442\u0443\u043D",
      image: "/images/items/kosmos/neptun.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "pluton",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041F\u043B\u0443\u0442\u043E\u043D",
      image: "/images/items/kosmos/pluton.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "kometa",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u043C\u0435\u0442\u0430",
      image: "/images/items/kosmos/kometa.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "asteroid",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0430\u0441\u0442\u0435\u0440\u043E\u0438\u0434",
      image: "/images/items/kosmos/asteroid.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "meteorit",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",
      image: "/images/items/kosmos/meteorit.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "galaktika",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430",
      image: "/images/items/kosmos/galaktika.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "mlechnyy_put",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u043B\u0435\u0447\u043D\u044B\u0439 \u041F\u0443\u0442\u044C",
      image: "/images/items/kosmos/mlechnyy_put.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "chernaya_dyra",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0447\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430",
      image: "/images/items/kosmos/chernaya_dyra.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "neytronnaya_zvezda",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043D\u0435\u0439\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430",
      image: "/images/items/kosmos/neytronnaya_zvezda.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "pulsar",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043F\u0443\u043B\u044C\u0441\u0430\u0440",
      image: "/images/items/kosmos/pulsar.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "kvazar",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u0432\u0430\u0437\u0430\u0440",
      image: "/images/items/kosmos/kvazar.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "tumannost",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",
      image: "/images/items/kosmos/tumannost.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "sozvezdie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435",
      image: "/images/items/kosmos/sozvezdie.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "orbita",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043E\u0440\u0431\u0438\u0442\u0430",
      image: "/images/items/kosmos/orbita.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "raketa",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0440\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/kosmos/raketa.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "sputnik",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043F\u0443\u0442\u043D\u0438\u043A",
      image: "/images/items/kosmos/sputnik.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "skafandr",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043A\u0430\u0444\u0430\u043D\u0434\u0440",
      image: "/images/items/kosmos/skafandr.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "kosmonavt",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442",
      image: "/images/items/kosmos/kosmonavt.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "astronavt",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0430\u0441\u0442\u0440\u043E\u043D\u0430\u0432\u0442",
      image: "/images/items/kosmos/astronavt.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "mks",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u041A\u0421",
      image: "/images/items/kosmos/mks.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "teleskop",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0442\u0435\u043B\u0435\u0441\u043A\u043E\u043F",
      image: "/images/items/kosmos/teleskop.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "marsohod",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043C\u0430\u0440\u0441\u043E\u0445\u043E\u0434",
      image: "/images/items/kosmos/marsohod.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "lunohod",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043B\u0443\u043D\u043E\u0445\u043E\u0434",
      image: "/images/items/kosmos/lunohod.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "kosmodrom",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u0441\u043C\u043E\u0434\u0440\u043E\u043C",
      image: "/images/items/kosmos/kosmodrom.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "solnechnoe_zatmenie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435 \u0437\u0430\u0442\u043C\u0435\u043D\u0438\u0435",
      image: "/images/items/kosmos/solnechnoe_zatmenie.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "lunnoe_zatmenie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043B\u0443\u043D\u043D\u043E\u0435 \u0437\u0430\u0442\u043C\u0435\u043D\u0438\u0435",
      image: "/images/items/kosmos/lunnoe_zatmenie.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "severnoe_siyanie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",
      image: "/images/items/kosmos/severnoe_siyanie.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "ekzoplaneta",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u044D\u043A\u0437\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u0430",
      image: "/images/items/kosmos/ekzoplaneta.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "sverhnovaya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F",
      image: "/images/items/kosmos/sverhnovaya.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "gravitatsiya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",
      image: "/images/items/kosmos/gravitatsiya.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "nevesomost",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043D\u0435\u0432\u0435\u0441\u043E\u043C\u043E\u0441\u0442\u044C",
      image: "/images/items/kosmos/nevesomost.png",
      categoryImage: "/images/categories/kosmos.png"
    },
    {
      id: "solntse",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u043E\u043B\u043D\u0446\u0435",
      image: "/images/items/pogoda_i_priroda/solntse.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "dozhd",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0434\u043E\u0436\u0434\u044C",
      image: "/images/items/pogoda_i_priroda/dozhd.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "sneg",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u043D\u0435\u0433",
      image: "/images/items/pogoda_i_priroda/sneg.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "grad",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u0440\u0430\u0434",
      image: "/images/items/pogoda_i_priroda/grad.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "veter",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0432\u0435\u0442\u0435\u0440",
      image: "/images/items/pogoda_i_priroda/veter.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "tuman",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0442\u0443\u043C\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/tuman.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "groza",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u0440\u043E\u0437\u0430",
      image: "/images/items/pogoda_i_priroda/groza.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "molniya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u043B\u043D\u0438\u044F",
      image: "/images/items/pogoda_i_priroda/molniya.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "raduga",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u0430\u0434\u0443\u0433\u0430",
      image: "/images/items/pogoda_i_priroda/raduga.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "oblaka",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0431\u043B\u0430\u043A\u0430",
      image: "/images/items/pogoda_i_priroda/oblaka.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "uragan",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0443\u0440\u0430\u0433\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/uragan.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "tornado",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0442\u043E\u0440\u043D\u0430\u0434\u043E",
      image: "/images/items/pogoda_i_priroda/tornado.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "shtorm",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0448\u0442\u043E\u0440\u043C",
      image: "/images/items/pogoda_i_priroda/shtorm.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "metel",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u0435\u0442\u0435\u043B\u044C",
      image: "/images/items/pogoda_i_priroda/metel.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "zhara",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0436\u0430\u0440\u0430",
      image: "/images/items/pogoda_i_priroda/zhara.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "moroz",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u0440\u043E\u0437",
      image: "/images/items/pogoda_i_priroda/moroz.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "rosa",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u043E\u0441\u0430",
      image: "/images/items/pogoda_i_priroda/rosa.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "iney",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0438\u043D\u0435\u0439",
      image: "/images/items/pogoda_i_priroda/iney.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "led",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0435\u0434",
      image: "/images/items/pogoda_i_priroda/led.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "liven",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0438\u0432\u0435\u043D\u044C",
      image: "/images/items/pogoda_i_priroda/liven.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "zasuha",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0437\u0430\u0441\u0443\u0445\u0430",
      image: "/images/items/pogoda_i_priroda/zasuha.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "navodnenie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043D\u0430\u0432\u043E\u0434\u043D\u0435\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/navodnenie.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "zemletryasenie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0437\u0435\u043C\u043B\u0435\u0442\u0440\u044F\u0441\u0435\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/zemletryasenie.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "izverzhenie_vulkana",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0438\u0437\u0432\u0435\u0440\u0436\u0435\u043D\u0438\u0435 \u0432\u0443\u043B\u043A\u0430\u043D\u0430",
      image: "/images/items/pogoda_i_priroda/izverzhenie_vulkana.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "tsunami",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0446\u0443\u043D\u0430\u043C\u0438",
      image: "/images/items/pogoda_i_priroda/tsunami.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "lavina",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0430\u0432\u0438\u043D\u0430",
      image: "/images/items/pogoda_i_priroda/lavina.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "opolzen",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u043F\u043E\u043B\u0437\u0435\u043D\u044C",
      image: "/images/items/pogoda_i_priroda/opolzen.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "peschanaya_burya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0435\u0441\u0447\u0430\u043D\u0430\u044F \u0431\u0443\u0440\u044F",
      image: "/images/items/pogoda_i_priroda/peschanaya_burya.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "severnoe_siyanie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/severnoe_siyanie.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "priliv",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0440\u0438\u043B\u0438\u0432",
      image: "/images/items/pogoda_i_priroda/priliv.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "otliv",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0442\u043B\u0438\u0432",
      image: "/images/items/pogoda_i_priroda/otliv.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "vodopad",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0432\u043E\u0434\u043E\u043F\u0430\u0434",
      image: "/images/items/pogoda_i_priroda/vodopad.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "reka",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u0435\u043A\u0430",
      image: "/images/items/pogoda_i_priroda/reka.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "ozero",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0437\u0435\u0440\u043E",
      image: "/images/items/pogoda_i_priroda/ozero.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "more",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u0440\u0435",
      image: "/images/items/pogoda_i_priroda/more.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "okean",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u043A\u0435\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/okean.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "gora",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u043E\u0440\u0430",
      image: "/images/items/pogoda_i_priroda/gora.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "les",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0435\u0441",
      image: "/images/items/pogoda_i_priroda/les.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "pustynya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0443\u0441\u0442\u044B\u043D\u044F",
      image: "/images/items/pogoda_i_priroda/pustynya.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    },
    {
      id: "step",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u0442\u0435\u043F\u044C",
      image: "/images/items/pogoda_i_priroda/step.png",
      categoryImage: "/images/categories/pogoda_i_priroda.png"
    }
  ];
  function da(g) {
    return g.split("_").filter(Boolean).map((e) => {
      var _a2;
      return ((_a2 = e[0]) == null ? void 0 : _a2.toUpperCase()) + e.slice(1);
    }).join(" ");
  }
  function la(g) {
    const e = /* @__PURE__ */ new Map();
    return g.forEach((a) => {
      var _a2, _b;
      if (!a.categoryId) return;
      e.has(a.categoryId) || e.set(a.categoryId, {
        id: a.categoryId,
        title: (_a2 = a.categoryName) != null ? _a2 : da(a.categoryId),
        itemIds: [],
        items: [],
        image: (_b = a.categoryImage) != null ? _b : "/images/categories/".concat(a.categoryId, ".png")
      });
      const t = e.get(a.categoryId);
      t.itemIds.push(a.id), t.items.push(a);
    }), [
      ...e.values()
    ];
  }
  const Q = la(ca);
  function pa(g) {
    const e = [
      ...g
    ];
    for (let a = e.length - 1; a > 0; a -= 1) {
      const t = Math.floor(Math.random() * (a + 1));
      [e[a], e[t]] = [
        e[t],
        e[a]
      ];
    }
    return e;
  }
  function ha(g) {
    return "".concat(g, "-").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8));
  }
  function _a(g) {
    const e = Array.isArray(g.items) ? g.items : [], a = pa(e), t = Math.floor(a.length / 2), i = [];
    for (let o = 0; o < t * 2; o += 2) i.push([
      a[o],
      a[o + 1]
    ]);
    return {
      sessionId: ha(g.id),
      categoryId: g.id,
      pairs: i,
      totalRounds: t,
      currentRoundIndex: 0,
      status: "playing"
    };
  }
  const ua = 1e3, J = 10;
  function ee(g = {}) {
    var _a2, _b, _c, _d, _e2, _f;
    return {
      rating: (_a2 = g.rating) != null ? _a2 : ua,
      wins: (_b = g.wins) != null ? _b : 0,
      losses: (_c = g.losses) != null ? _c : 0,
      shown: (_d = g.shown) != null ? _d : 0,
      chosen: (_e2 = g.chosen) != null ? _e2 : 0,
      updatedAt: (_f = g.updatedAt) != null ? _f : Date.now()
    };
  }
  function Ia(g, e) {
    var _a2, _b;
    const { playerId: a, categoryId: t, leftItem: i, rightItem: o, chosenItemId: r, roundIndex: s, sessionId: y } = e, n = r === i.id ? o.id : i.id, l = (_a2 = g.itemRatings[t]) != null ? _a2 : {}, _ = ee(l[r]), I = ee(l[n]), v = Date.now();
    _.rating += J, _.wins += 1, _.shown += 1, _.chosen += 1, _.updatedAt = v, I.rating -= J, I.losses += 1, I.shown += 1, I.updatedAt = v, g.itemRatings[t] = {
      ...l,
      [r]: _,
      [n]: I
    };
    const k = (_b = g.categoryProgress[t]) != null ? _b : {
      completedRounds: 0,
      guessModeUnlocked: false,
      lastPlayedAt: v
    };
    return k.completedRounds += 1, k.guessModeUnlocked = k.completedRounds >= 10, k.lastPlayedAt = v, g.categoryProgress[t] = k, g.matchHistory.push({
      id: "".concat(y, "-").concat(s + 1, "-").concat(r),
      playerId: a,
      categoryId: t,
      leftItemId: i.id,
      rightItemId: o.id,
      chosenItemId: r,
      loserItemId: n,
      roundIndex: s,
      sessionId: y,
      playedAt: v
    }), {
      chosenItemId: r,
      loserItemId: n,
      progress: k
    };
  }
  const G = [
    0,
    150,
    400,
    800,
    1400,
    2300,
    3600,
    5400,
    7800,
    11e3
  ], ka = [
    "\u0420\u0435\u0431\u0435\u043D\u043E\u043A",
    "\u041B\u044E\u0431\u043E\u043F\u044B\u0442\u043D\u044B\u0439",
    "\u0421\u0442\u0430\u0436\u0435\u0440 \u0432\u043A\u0443\u0441\u0430",
    "\u041D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043D\u044E\u0445",
    "\u0414\u0435\u0442\u0435\u043A\u0442\u0438\u0432",
    "\u041F\u0440\u043E\u0444\u0430\u0439\u043B\u0435\u0440",
    "\u041C\u0435\u043D\u0442\u0430\u043B\u0438\u0441\u0442",
    "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u0442\u043E\u0440",
    "\u041E\u0440\u0430\u043A\u0443\u043B",
    "\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430"
  ];
  function va(g) {
    const e = [
      ...g
    ];
    for (let a = e.length - 1; a > 0; a -= 1) {
      const t = Math.floor(Math.random() * (a + 1));
      [e[a], e[t]] = [
        e[t],
        e[a]
      ];
    }
    return e;
  }
  function ba(g) {
    return "guess-".concat(g, "-").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8));
  }
  function ae(g = 0) {
    var _a2;
    const e = Number.isFinite(g) ? g : 0;
    let a = 1;
    for (let i = 0; i < G.length; i += 1) e >= G[i] && (a = i + 1);
    const t = Math.min(a, 10);
    return {
      level: t,
      title: "".concat(ka[t - 1], " (").concat(t, ")"),
      currentThreshold: G[t - 1],
      nextThreshold: (_a2 = G[t]) != null ? _a2 : null
    };
  }
  function ye(g, e) {
    var _a2, _b;
    const a = (_b = (_a2 = e.itemRatings) == null ? void 0 : _a2[g.id]) != null ? _b : {};
    return (Array.isArray(g.items) ? g.items : []).filter((i) => {
      const o = a[i.id];
      return o && o.shown > 0;
    });
  }
  function Na(g, e) {
    const a = ye(g, e), t = va(a), i = Math.floor(t.length / 2), o = [];
    for (let r = 0; r < i * 2; r += 2) o.push([
      t[r],
      t[r + 1]
    ]);
    return {
      sessionId: ba(g.id),
      categoryId: g.id,
      pairs: o,
      totalRounds: i,
      currentRoundIndex: 0,
      status: "playing"
    };
  }
  function te(g, e) {
    var _a2, _b, _c, _d, _e2;
    const a = (_b = (_a2 = e.categoryProgress) == null ? void 0 : _a2[g.id]) != null ? _b : {
      completedRounds: 0,
      guessModeUnlocked: false
    }, t = ye(g, e);
    return a.guessModeUnlocked ? t.length < 2 ? {
      canPlay: false,
      reason: "not_enough_data",
      completedRounds: (_c = a.completedRounds) != null ? _c : 0,
      availableItemsCount: t.length
    } : {
      canPlay: true,
      reason: "ready",
      completedRounds: (_d = a.completedRounds) != null ? _d : 0,
      availableItemsCount: t.length
    } : {
      canPlay: false,
      reason: "locked",
      completedRounds: (_e2 = a.completedRounds) != null ? _e2 : 0,
      availableItemsCount: t.length
    };
  }
  function ie(g, e) {
    const a = e[g.id];
    return !a || !a.shown ? 0 : a.chosen / a.shown;
  }
  function fa(g, e, a, t, i) {
    var _a2, _b;
    const o = (_b = (_a2 = g.itemRatings) == null ? void 0 : _a2[e]) != null ? _b : {}, r = ie(a, o), s = ie(t, o), y = r + s, n = y > 0 ? Math.round(r / y * 100) : 50, l = 100 - n, _ = Math.abs(n - l), I = Math.max(n, l), k = (i === a.id ? n : l) === I, u = k ? Math.max(5, Math.round(100 - _ * 1.8)) : 0;
    return {
      leftPercent: n,
      rightPercent: l,
      difference: _,
      isCorrect: k,
      points: u
    };
  }
  function za(g, e) {
    var _a2;
    const { categoryId: a, leftItem: t, rightItem: i, chosenItemId: o, roundIndex: r, sessionId: s } = e, y = fa(g, a, t, i, o), n = Date.now();
    return g.player.guessScore = ((_a2 = g.player.guessScore) != null ? _a2 : 0) + y.points, g.guessHistory = Array.isArray(g.guessHistory) ? g.guessHistory : [], g.guessHistory.push({
      id: "".concat(s, "-").concat(r + 1, "-").concat(o),
      categoryId: a,
      leftItemId: t.id,
      rightItemId: i.id,
      chosenItemId: o,
      leftPercent: y.leftPercent,
      rightPercent: y.rightPercent,
      isCorrect: y.isCorrect,
      points: y.points,
      roundIndex: r,
      sessionId: s,
      playedAt: n
    }), y;
  }
  const ne = "ratingGameState";
  function j() {
    const g = Date.now();
    return {
      version: 1,
      player: {
        id: "local-player-".concat(Math.random().toString(36).slice(2, 10)),
        guessScore: 0,
        createdAt: g,
        updatedAt: g
      },
      categoryProgress: {},
      itemRatings: {},
      matchHistory: [],
      guessHistory: []
    };
  }
  function ce(g) {
    var _a2, _b, _c, _d;
    const e = j(), a = g && typeof g == "object" ? g : e;
    return {
      version: (_a2 = a.version) != null ? _a2 : 1,
      player: {
        ...e.player,
        ...(_b = a.player) != null ? _b : {}
      },
      categoryProgress: (_c = a.categoryProgress) != null ? _c : {},
      itemRatings: (_d = a.itemRatings) != null ? _d : {},
      matchHistory: Array.isArray(a.matchHistory) ? a.matchHistory : [],
      guessHistory: Array.isArray(a.guessHistory) ? a.guessHistory : []
    };
  }
  function wa() {
    try {
      const g = localStorage.getItem(ne);
      if (!g) {
        const e = j();
        return x(e), e;
      }
      return ce(JSON.parse(g));
    } catch (g) {
      console.warn("Failed to load local game state", g);
      const e = j();
      return x(e), e;
    }
  }
  function x(g) {
    const e = ce(g);
    return e.player.updatedAt = Date.now(), localStorage.setItem(ne, JSON.stringify(e)), e;
  }
  function Sa() {
    const g = j();
    return x(g), g;
  }
  function ge(g = "") {
    return g.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((a) => {
      var _a2, _b;
      return (_b = (_a2 = a[0]) == null ? void 0 : _a2.toUpperCase()) != null ? _b : "";
    }).join("");
  }
  function F(g) {
    return "".concat(Math.min(g, 10), " / 10");
  }
  function Ca(g) {
    return new Promise((e) => window.setTimeout(e, g));
  }
  class xa {
    constructor(e) {
      this.gameContext = e, this.ui = e.ui, this.events = e.events, this.categories = Q, this.categoriesById = Object.fromEntries(Q.map((a) => [
        a.id,
        a
      ])), this.state = wa(), this.currentSession = null, this.currentGuessSession = null, this.choiceLocked = false, this.guessLocked = false, this.guessResultShown = false, this.lastCompletedCategoryId = null, this.lastGuessCategoryId = null, this.elements = {
        categoriesList: document.querySelector('[data-role="categories-list"]'),
        guessCategoriesList: document.querySelector('[data-role="guess-categories-list"]'),
        choiceCategoryTitle: document.querySelector('[data-role="choice-category-title"]'),
        choiceRoundLabel: document.querySelector('[data-role="choice-round-label"]'),
        choiceQuestion: document.querySelector('[data-role="choice-question"]'),
        progressFill: document.querySelector('[data-role="session-progress-fill"]'),
        progressText: document.querySelector('[data-role="session-progress-text"]'),
        leftCard: document.querySelector('[data-role="choice-left"]'),
        rightCard: document.querySelector('[data-role="choice-right"]'),
        guessCategoryTitle: document.querySelector('[data-role="guess-category-title"]'),
        guessRoundLabel: document.querySelector('[data-role="guess-round-label"]'),
        guessQuestion: document.querySelector('[data-role="guess-question"]'),
        guessProgressFill: document.querySelector('[data-role="guess-progress-fill"]'),
        guessProgressText: document.querySelector('[data-role="guess-progress-text"]'),
        guessLeftCard: document.querySelector('[data-role="guess-left"]'),
        guessRightCard: document.querySelector('[data-role="guess-right"]'),
        guessNextButton: document.querySelector('[data-action="next_guess_round"]'),
        guessCompleteTitle: document.querySelector('[data-role="guess-complete-title"]'),
        guessCompleteText: document.querySelector('[data-role="guess-complete-text"]'),
        guessCompleteProgress: document.querySelector('[data-role="guess-complete-progress"]'),
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
        this.state = Sa(), this.renderCategories(), this.renderGuessCategories(), this.renderGuessPlayerStats(), this.showCategories();
      }), window.addEventListener("locale-changed", () => {
        this.renderCategories(), this.renderGuessCategories(), this.renderGuessPlayerStats(), this.currentSession && this.renderCurrentRound(), this.currentGuessSession && this.renderCurrentGuessRound();
      });
    }
    init() {
      this.renderCategories(), this.renderGuessCategories(), this.renderGuessPlayerStats(), this.showMainMenu();
    }
    showMainMenu() {
      this.ui.show("main_screen");
    }
    showCategories() {
      this.renderCategories(), this.ui.show("categories_screen");
    }
    showGuessCategories() {
      this.renderGuessCategories(), this.renderGuessPlayerStats(), this.ui.show("guess_categories_screen");
    }
    startCategorySession(e) {
      const a = this.categoriesById[e];
      if (a) {
        if (this.currentSession = _a(a), !this.currentSession.totalRounds) {
          this.showCategories();
          return;
        }
        this.choiceLocked = false, this.renderCurrentRound(), this.ui.show("choice_screen"), this.gameContext.emotionsClass.react("pair_presented");
      }
    }
    renderCategories() {
      const e = this.elements.categoriesList;
      e && (e.innerHTML = this.categories.map((a) => {
        var _a2;
        const t = (_a2 = this.state.categoryProgress[a.id]) != null ? _a2 : {
          completedRounds: 0,
          guessModeUnlocked: false
        }, i = Math.floor(a.itemIds.length / 2), o = t.guessModeUnlocked ? d("guessModeUnlocked") : "".concat(d("guessModeLocked"), " ").concat(F(t.completedRounds));
        return '\n        <button class="category-card btn-reset" data-action="start_category_session" data-category-id="'.concat(a.id, '">\n          <span class="category-card__badge">').concat(i, " ").concat(d("roundsShort"), '</span>\n          <span class="category-card__title">').concat(a.title, '</span>\n          <span class="category-card__meta">').concat(a.itemIds.length, " ").concat(d("itemsLabel"), '</span>\n          <span class="category-card__progress">').concat(o, "</span>\n        </button>\n      ");
      }).join(""));
    }
    renderGuessPlayerStats() {
      var _a2;
      const e = (_a2 = this.state.player.guessScore) != null ? _a2 : 0, a = ae(e);
      document.querySelectorAll('[data-role="guess-score"]').forEach((t) => {
        t.textContent = "".concat(d("guessScoreLabel"), " ").concat(e);
      }), document.querySelectorAll('[data-role="guess-rating"]').forEach((t) => {
        t.textContent = a.title;
      });
    }
    renderGuessCategories() {
      const e = this.elements.guessCategoriesList;
      e && (e.innerHTML = this.categories.map((a) => {
        const t = te(a, this.state);
        let o = "".concat(Math.floor(t.availableItemsCount / 2), " ").concat(d("roundsShort"));
        return t.reason === "locked" ? o = "".concat(d("guessModeLocked"), " ").concat(F(t.completedRounds)) : t.reason === "not_enough_data" && (o = d("guessNotEnoughData")), '\n        <button class="category-card category-card--guess btn-reset '.concat(t.canPlay ? "" : "is-locked", '"\n          data-action="start_guess_session"\n          data-category-id="').concat(a.id, '"\n          ').concat(t.canPlay ? "" : "disabled", '>\n          <span class="category-card__badge">').concat(t.canPlay ? d("guessReady") : d("guessLockedBadge"), '</span>\n          <span class="category-card__title">').concat(a.title, '</span>\n          <span class="category-card__meta">').concat(t.availableItemsCount, " ").concat(d("itemsWithDataLabel"), '</span>\n          <span class="category-card__progress">').concat(o, "</span>\n        </button>\n      ");
      }).join(""));
    }
    renderCurrentRound() {
      var _a2, _b;
      if (!this.currentSession) return;
      const e = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!e) return;
      const [a, t] = e, i = this.currentSession.currentRoundIndex + 1, o = (i - 1) / this.currentSession.totalRounds * 100;
      this.elements.choiceCategoryTitle && (this.elements.choiceCategoryTitle.textContent = (_b = (_a2 = this.categoriesById[this.currentSession.categoryId]) == null ? void 0 : _a2.title) != null ? _b : ""), this.elements.choiceRoundLabel && (this.elements.choiceRoundLabel.textContent = "".concat(d("roundLabel"), " ").concat(i, " ").concat(d("roundOf"), " ").concat(this.currentSession.totalRounds)), this.elements.choiceQuestion && (this.elements.choiceQuestion.textContent = d("choiceQuestion")), this.elements.progressFill && (this.elements.progressFill.style.width = "".concat(o, "%")), this.elements.progressText && (this.elements.progressText.textContent = "".concat(i - 1, "/").concat(this.currentSession.totalRounds)), this.renderChoiceCard(this.elements.leftCard, a, "left"), this.renderChoiceCard(this.elements.rightCard, t, "right");
    }
    renderChoiceCard(e, a, t) {
      var _a2;
      !e || !a || (e.dataset.itemId = a.id, e.dataset.side = t, e.classList.remove("is-chosen", "is-loser", "is-idle"), e.style.setProperty("--card-accent", (_a2 = a.accent) != null ? _a2 : "#ffffff"), e.innerHTML = '\n      <span class="choice-card__art" aria-hidden="true">\n        <span class="choice-card__initials">'.concat(ge(a.title), '</span>\n      </span>\n      <span class="choice-card__title">').concat(a.title, '</span>\n      <span class="choice-card__hint">').concat(d("tapToChoose"), "</span>\n    "));
    }
    renderGuessCard(e, a, t) {
      var _a2;
      !e || !a || (e.dataset.itemId = a.id, e.dataset.side = t, e.classList.remove("is-chosen", "is-loser", "is-correct", "is-revealed"), e.style.setProperty("--card-accent", (_a2 = a.accent) != null ? _a2 : "#ffffff"), e.innerHTML = '\n      <span class="choice-card__art" aria-hidden="true">\n        <span class="choice-card__initials">'.concat(ge(a.title), '</span>\n      </span>\n      <span class="choice-card__title">').concat(a.title, '</span>\n      <span class="guess-percent" data-role="guess-percent" hidden></span>\n    '));
    }
    async chooseItem(e) {
      if (!this.currentSession || this.choiceLocked) return;
      const a = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!a) return;
      const [t, i] = a;
      if (t.id !== e && i.id !== e) return;
      this.choiceLocked = true;
      const o = t.id === e ? "left" : "right", r = o === "left" ? "right" : "left", s = o === "left" ? this.elements.leftCard : this.elements.rightCard, y = r === "left" ? this.elements.leftCard : this.elements.rightCard;
      if (s == null ? void 0 : s.classList.add("is-chosen"), y == null ? void 0 : y.classList.add("is-loser"), Ia(this.state, {
        playerId: this.state.player.id,
        categoryId: this.currentSession.categoryId,
        leftItem: t,
        rightItem: i,
        chosenItemId: e,
        roundIndex: this.currentSession.currentRoundIndex,
        sessionId: this.currentSession.sessionId
      }), this.state = x(this.state), this.gameContext.emotionsClass.react("player_choice", {
        chosenItemId: e
      }), await new Promise((n) => window.setTimeout(n, 420)), this.currentSession.currentRoundIndex += 1, this.currentSession.currentRoundIndex >= this.currentSession.totalRounds) {
        this.finishCurrentSession();
        return;
      }
      this.choiceLocked = false, this.renderCurrentRound(), this.gameContext.emotionsClass.react("pair_presented");
    }
    finishCurrentSession() {
      var _a2;
      if (!this.currentSession) return;
      this.lastCompletedCategoryId = this.currentSession.categoryId;
      const e = (_a2 = this.state.categoryProgress[this.currentSession.categoryId]) != null ? _a2 : {
        completedRounds: 0,
        guessModeUnlocked: false
      };
      this.elements.completeTitle && (this.elements.completeTitle.textContent = d("sessionCompleteTitle")), this.elements.completeText && (this.elements.completeText.textContent = e.guessModeUnlocked ? d("sessionCompleteUnlocked") : d("sessionCompleteSaved")), this.elements.completeProgress && (this.elements.completeProgress.textContent = e.guessModeUnlocked ? d("guessModeUnlocked") : "".concat(d("guessModeLocked"), " ").concat(F(e.completedRounds))), this.ui.show("session_complete_screen"), this.gameContext.emotionsClass.react(e.guessModeUnlocked ? "category_complete" : "guess_correct", {
        categoryId: this.currentSession.categoryId
      }), this.currentSession = null, this.choiceLocked = false;
    }
    startGuessSession(e) {
      const a = this.categoriesById[e];
      if (!a) return;
      if (!te(a, this.state).canPlay) {
        this.showGuessCategories();
        return;
      }
      if (this.currentGuessSession = Na(a, this.state), !this.currentGuessSession.totalRounds) {
        this.showGuessCategories();
        return;
      }
      this.lastGuessCategoryId = e, this.guessLocked = false, this.guessResultShown = false, this.renderCurrentGuessRound(), this.ui.show("guess_screen"), this.gameContext.emotionsClass.react("pair_presented");
    }
    renderCurrentGuessRound() {
      var _a2, _b;
      if (!this.currentGuessSession) return;
      const e = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
      if (!e) return;
      const [a, t] = e, i = this.currentGuessSession.currentRoundIndex + 1, o = (i - 1) / this.currentGuessSession.totalRounds * 100;
      this.elements.guessCategoryTitle && (this.elements.guessCategoryTitle.textContent = (_b = (_a2 = this.categoriesById[this.currentGuessSession.categoryId]) == null ? void 0 : _a2.title) != null ? _b : ""), this.elements.guessRoundLabel && (this.elements.guessRoundLabel.textContent = "".concat(d("roundLabel"), " ").concat(i, " ").concat(d("roundOf"), " ").concat(this.currentGuessSession.totalRounds)), this.elements.guessQuestion && (this.elements.guessQuestion.textContent = d("guessQuestion")), this.elements.guessProgressFill && (this.elements.guessProgressFill.style.width = "".concat(o, "%")), this.elements.guessProgressText && (this.elements.guessProgressText.textContent = "".concat(i - 1, "/").concat(this.currentGuessSession.totalRounds)), this.elements.guessNextButton && (this.elements.guessNextButton.hidden = true), this.renderGuessCard(this.elements.guessLeftCard, a, "left"), this.renderGuessCard(this.elements.guessRightCard, t, "right");
    }
    async chooseGuessItem(e) {
      var _a2, _b;
      if (!this.currentGuessSession || this.guessLocked) return;
      const a = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
      if (!a) return;
      const [t, i] = a;
      if (t.id !== e && i.id !== e) return;
      this.guessLocked = true;
      const o = t.id === e ? "left" : "right", r = o === "left" ? this.elements.guessLeftCard : this.elements.guessRightCard, s = o === "left" ? this.elements.guessRightCard : this.elements.guessLeftCard;
      r == null ? void 0 : r.classList.add("is-chosen"), s == null ? void 0 : s.classList.add("is-loser");
      const y = za(this.state, {
        categoryId: this.currentGuessSession.categoryId,
        leftItem: t,
        rightItem: i,
        chosenItemId: e,
        roundIndex: this.currentGuessSession.currentRoundIndex,
        sessionId: this.currentGuessSession.sessionId
      });
      this.state = x(this.state), await this.animateGuessPercent(r, o === "left" ? y.leftPercent : y.rightPercent), this.revealGuessPercent(this.elements.guessLeftCard, y.leftPercent), this.revealGuessPercent(this.elements.guessRightCard, y.rightPercent);
      const n = y.leftPercent === Math.max(y.leftPercent, y.rightPercent), l = y.rightPercent === Math.max(y.leftPercent, y.rightPercent);
      (_a2 = this.elements.guessLeftCard) == null ? void 0 : _a2.classList.toggle("is-correct", n), (_b = this.elements.guessRightCard) == null ? void 0 : _b.classList.toggle("is-correct", l), this.elements.guessQuestion && (this.elements.guessQuestion.textContent = y.isCorrect ? "".concat(d("guessCorrect"), " +").concat(y.points) : d("guessWrong")), this.renderGuessPlayerStats(), this.gameContext.emotionsClass.react(y.isCorrect ? "guess_correct" : "guess_wrong"), await Ca(220), this.elements.guessNextButton && (this.elements.guessNextButton.hidden = false, this.elements.guessNextButton.textContent = this.isLastGuessRound() ? d("finish") : d("next")), this.guessResultShown = true;
    }
    async animateGuessPercent(e, a) {
      const t = e == null ? void 0 : e.querySelector('[data-role="guess-percent"]');
      if (!t) return;
      t.hidden = false;
      const i = 900, o = performance.now();
      return new Promise((r) => {
        const s = (y) => {
          const n = Math.min((y - o) / i, 1), l = 1 - (1 - n) ** 3;
          if (t.textContent = "".concat(Math.round(a * l), "%"), n < 1) {
            requestAnimationFrame(s);
            return;
          }
          r();
        };
        requestAnimationFrame(s);
      });
    }
    revealGuessPercent(e, a) {
      const t = e == null ? void 0 : e.querySelector('[data-role="guess-percent"]');
      t && (e.classList.add("is-revealed"), t.hidden = false, t.textContent = "".concat(a, "%"));
    }
    isLastGuessRound() {
      return this.currentGuessSession ? this.currentGuessSession.currentRoundIndex >= this.currentGuessSession.totalRounds - 1 : true;
    }
    nextGuessRound() {
      if (!(!this.currentGuessSession || !this.guessResultShown)) {
        if (this.currentGuessSession.currentRoundIndex += 1, this.currentGuessSession.currentRoundIndex >= this.currentGuessSession.totalRounds) {
          this.finishGuessSession();
          return;
        }
        this.guessLocked = false, this.guessResultShown = false, this.renderCurrentGuessRound(), this.gameContext.emotionsClass.react("pair_presented");
      }
    }
    finishGuessSession() {
      var _a2;
      if (!this.currentGuessSession) return;
      this.lastGuessCategoryId = this.currentGuessSession.categoryId;
      const e = (_a2 = this.state.player.guessScore) != null ? _a2 : 0, a = ae(e);
      this.elements.guessCompleteTitle && (this.elements.guessCompleteTitle.textContent = d("guessCompleteTitle")), this.elements.guessCompleteText && (this.elements.guessCompleteText.textContent = "".concat(d("guessCompleteText"), " ").concat(a.title)), this.elements.guessCompleteProgress && (this.elements.guessCompleteProgress.textContent = "".concat(d("guessScoreLabel"), " ").concat(e)), this.currentGuessSession = null, this.guessLocked = false, this.guessResultShown = false, this.ui.show("guess_complete_screen"), this.gameContext.emotionsClass.react("category_complete");
    }
  }
  console.clear();
  const m = {};
  m.clock = new re();
  async function Ta(g) {
    try {
      await La();
    } catch (e) {
      window.showInitError ? window.showInitError(e) : console.error("Init error", e);
    }
  }
  async function La() {
    const g = document.querySelector(".loader_line");
    g && (g.style.width = "30%"), await Ra(), await Ma(), g && (g.style.width = "100%"), m.paramsClass.gameInit = true, Ea(), m.appController.init(), Pa();
  }
  function Ea() {
    m.gameClass.loadMesh(), m.instancesClass.init(), m.worldClass.loadLight(true, true), m.paramsClass.startGame(), m.emotionsClass.react("pair_presented");
  }
  async function Ra() {
    m.initClass = new $e(m), m.events = new Fe(), m.scene = m.initClass.scene, m.camera = m.initClass.camera, m.renderer = m.initClass.renderer, m.gui = new Oe();
    const g = m.gui.addFolder("\u041A\u0430\u043C\u0435\u0440\u0430"), e = {
      orbitEnabled: m.initClass.controls.enabled
    };
    g.add(e, "orbitEnabled").name("OrbitControls").onChange((t) => {
      m.initClass.controls.enabled = t;
    }), m.ui = new Ke(m), m.paramsClass = new Ue(m), m.assetsManager = new qe(m), m.audioClass = new Xe(m), m.dataClass = new We(m), m.controlClass = new He(m), m.gameClass = new Qe(m), m.worldClass = new Je(m), m.instancesClass = new na(m), m.emotionsClass = new ya(m), m.emotionsClass.attachGui(m.gui), m.appController = new xa(m);
    const a = m.emotionsClass.getConfigs();
    m.spectatorConfigs = a, a.forEach(() => {
      const t = new sa(m);
      m.gameClass.characters.push(t);
    });
  }
  async function Ma() {
    typeof q == "function" && await q(), m.paramsClass.initCustomScroll(), Ve("ru"), await m.assetsManager.loadTextures();
    for (let g = 0; g < m.gameClass.characters.length; g++) await m.gameClass.characters[g].loadCharacter(m.spectatorConfigs[g]), m.emotionsClass.registerCharacter(m.gameClass.characters[g], m.spectatorConfigs[g]);
    m.emotionsClass.enterIdle(), m.gameClass.applySceneLayout("main_screen"), await m.audioClass.loadAudio(), await m.controlClass.addKeyListeners(), location.hostname === "localhost" && m.gui.addFolder("\u0424\u0438\u0437\u0438\u043A\u0430");
  }
  function Ga(g) {
    if (m.paramsClass) switch (m.gameClass.update(g, m.emotionsClass.roundActive), m.paramsClass.currentGameState) {
      case m.paramsClass.gameState.play:
        m.emotionsClass.update(g);
        break;
    }
  }
  function Aa() {
    m.initClass && m.initClass.stats && m.initClass.stats.update(), m.initClass && m.initClass.controls && m.initClass.controls.update(), m.renderer && m.scene && m.camera && m.renderer.render(m.scene, m.camera);
  }
  function Pa() {
    let g = 0;
    const e = 1 / 60, a = 0.1;
    m.renderer.setAnimationLoop(() => {
      let t = m.clock.getDelta();
      t > a && (t = a), g += t;
      let i = 5;
      for (; g >= e && i > 0; ) Ga(e), g -= e, i--;
      g > e && (g = 0), Aa();
    });
  }
  const ja = new Be(Ta);
  ja.init();
})();
export {
  __tla,
  Da as __vite_legacy_guard
};
