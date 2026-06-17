import { B as he, V as h, M as ue, S as _e, P as Ie, a as je, W as ke, b as ve, c as be, A as fe, O as Ne, d as z, e as ze, f as we, g as Se, R as se, T as Ce, h as L, G as xe, i as Le, C as re, j as M, k as Re, l as Te, D, m as v, n as me, o as B, p as U, q as ye, r as Me, s as W, t as Ee, u as V, E as Pe, v as Ge, w as q, H as Ae, x as De, y as K, z as Ye, F as Oe, I as Be, J as Fe, K as $e, L as ce } from "./three-APxl9ASr.js";
import { g as T } from "./gsap-Cy3i8ghA.js";
let Ha;
let __tla = (async () => {
  Ha = function() {
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
      for (const g of i) if (g.type === "childList") for (const r of g.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && t(r);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function a(i) {
      const g = {};
      return i.integrity && (g.integrity = i.integrity), i.referrerPolicy && (g.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? g.credentials = "include" : i.crossOrigin === "anonymous" ? g.credentials = "omit" : g.credentials = "same-origin", g;
    }
    function t(i) {
      if (i.ep) return;
      i.ep = true;
      const g = a(i);
      fetch(i.href, g);
    }
  })();
  class He {
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
  function S(o, e) {
    return Math.random() * (e - o) + o;
  }
  async function Z() {
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
    let o;
    document.addEventListener("touchstart", (e) => {
      o = setTimeout(() => {
        e.preventDefault();
      }, 500);
    }, {
      passive: false
    }), document.addEventListener("touchend", () => {
      clearTimeout(o);
    }), document.addEventListener("touchmove", () => {
      clearTimeout(o);
    }), document.addEventListener("dblclick", (e) => (e.preventDefault(), false), {
      capture: true
    }), (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (e) => {
      e.target.closest(".new_game_btn, .category-card, .choice-card, .small-pill, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || e.preventDefault();
    }, {
      passive: false
    });
  }
  new he(new h(-0.5, -0.5, -0.5), new h(0.5, 0.5, 0.5));
  new ue();
  class Ue {
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
  class Xe {
    constructor(e) {
      var _a2;
      this.gameContext = e, this.onWindowResize = this.onWindowResize.bind(this), this.setVhVar = this.setVhVar.bind(this), this.onVisibilitychange = this.onVisibilitychange.bind(this), this.updateOrbitDebugHud = this.updateOrbitDebugHud.bind(this), this.scene = new _e(), this.scene.background = null, this.camera = new Ie(25, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.x = 0, this.camera.position.y = 3.2, this.camera.position.z = 27;
      const a = 16 / 9, t = z.degToRad(25);
      this.FIXED_HFOV = 2 * Math.atan(Math.tan(t / 2) * a);
      const i = new URLSearchParams(location.search);
      this.debugUiEnabled = i.has("debug"), this.orbitDebugEnabled = this.debugUiEnabled || i.has("debug2") || i.has("orbitHud"), this.orbitDebugHud = null, this.orbitDebugLastValue = "", this.debugUiEnabled ? (this.stats = new je(), document.body.appendChild(this.stats.dom), this.stats.dom.style.top = "0", this.stats.dom.style.left = "0") : this.stats = null, this.renderer = new ke({
        antialias: true,
        alpha: true
      }), this.renderer.setClearColor(0, 0), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = true, this.renderer.shadowMap.type = ve, this.renderer.outputColorSpace = be, this.renderer.toneMapping = fe, this.renderer.toneMappingExposure = 1.05, this.controls = new Ne(this.camera, document.body), this.controls.enabled = false, this.controls.enableDamping = true, this.controls.dampingFactor = 0.08, this.controls.target.set(0, -0.75, 0), this.controls.update(), this.createOrbitDebugHud(), this.controls.addEventListener("change", this.updateOrbitDebugHud), this.setVhVar(), window.addEventListener("resize", this.setVhVar), window.addEventListener("orientationchange", this.setVhVar), (_a2 = window.visualViewport) == null ? void 0 : _a2.addEventListener("resize", this.setVhVar), window.addEventListener("resize", this.onWindowResize), window.addEventListener("visibilitychange", this.onVisibilitychange), this.onWindowResize(), this.onVisibilitychange();
    }
    createOrbitDebugHud() {
      this.orbitDebugEnabled && (this.orbitDebugHud = document.createElement("pre"), this.orbitDebugHud.className = "orbit-debug-hud", this.orbitDebugHud.setAttribute("aria-label", "Orbit camera debug coordinates"), document.body.appendChild(this.orbitDebugHud), this.updateOrbitDebugHud());
    }
    updateOrbitDebugHud() {
      if (!this.orbitDebugHud) return;
      const e = (g) => Number.parseFloat(g.toFixed(3)), a = (g) => "(".concat(e(g.x), ", ").concat(e(g.y), ", ").concat(e(g.z), ")"), t = this.camera.rotation, i = [
        "screen: ".concat(window.innerWidth, " x ").concat(window.innerHeight),
        "aspect: ".concat(e(this.camera.aspect)),
        "fov: ".concat(e(this.camera.fov)),
        "cameraPosition: ".concat(a(this.camera.position)),
        "target: ".concat(a(this.controls.target)),
        "rotation: (".concat(e(t.x), ", ").concat(e(t.y), ", ").concat(e(t.z), ")")
      ].join("\n");
      i !== this.orbitDebugLastValue && (this.orbitDebugLastValue = i, this.orbitDebugHud.textContent = i);
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
      const g = z.degToRad(4), r = z.degToRad(90);
      i = z.clamp(i, g, r), this.camera.fov = z.radToDeg(i), this.camera.aspect = t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, a), this.updateOrbitDebugHud();
    }
  }
  class We {
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
      let a = null, t = null, i = null, g = false, r = 0, s = 0;
      const y = () => {
        for (const I of e) {
          const b = document.querySelector(I);
          if (b && !b.classList.contains("hidden_screen")) return b;
        }
        return null;
      }, c = () => {
        const I = y();
        I !== a && (a && a.removeEventListener("scroll", d, {
          passive: true
        }), i && (i.removeEventListener("mousedown", l), i.removeEventListener("touchstart", l)), a = I, t = a ? a.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, a && a.addEventListener("scroll", d, {
          passive: true
        }), i && (i.addEventListener("mousedown", l), i.addEventListener("touchstart", l)), d());
      }, d = () => {
        if (!a || !t || !i) return;
        const I = a.clientHeight, b = a.scrollHeight, R = a.scrollTop;
        if (b <= I + 1) {
          t.classList.remove("visible");
          return;
        }
        t.classList.add("visible");
        const C = t.getBoundingClientRect().height, f = Math.max(I / b * C, 24), N = b - I, x = C - f, pe = N > 0 ? R / N * x : 0;
        i.style.height = "".concat(f, "px"), i.style.top = "".concat(pe, "px");
      }, l = (I) => {
        !a || !i || (g = true, r = I.touches ? I.touches[0].clientY : I.clientY, s = a.scrollTop, document.body.style.userSelect = "none", I.preventDefault());
      }, u = (I) => {
        if (!g || !a || !i || !t) return;
        const R = (I.touches ? I.touches[0].clientY : I.clientY) - r, C = t.getBoundingClientRect().height, w = a.clientHeight, f = a.scrollHeight, N = Math.max(1, C - i.offsetHeight), x = (f - w) / N;
        a.scrollTop = s + R * x;
      }, j = () => {
        g = false, document.body.style.userSelect = "";
      };
      window.addEventListener("resize", () => {
        c(), d();
      }), window.addEventListener("mousemove", u, {
        passive: false
      }), window.addEventListener("touchmove", u, {
        passive: false
      }), window.addEventListener("mouseup", j), window.addEventListener("touchend", j), new MutationObserver(() => {
        c();
      }).observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: [
          "class"
        ]
      }), c();
    }
  }
  class Ve {
    constructor() {
      this.takeAudio, this._attached = false, this.listener = new ze(), this.musicOn = true, this.musics = [];
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
      const e = new we(), a = [
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        }
      ];
      (await Promise.all(a.map((i) => e.loadAsync(i.path).catch((g) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(i.path, ":"), g), null))))).forEach((i, g) => {
        const r = a[g];
        if (!i) return;
        const s = new Se(this.listener);
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
        this.musics.find((g) => g.name === a).music.stop();
      }));
    }
    pauseMusic(e) {
      this.musicOn && e.forEach((a, t, i) => {
        this.musics.find((g) => g.name === a).music.pause();
      });
    }
    playMusic(e) {
      e.forEach((a, t, i) => {
        let g = this.musics.find((r) => r.name === a).music;
        !g.isPlaying && this.musicOn && g.play();
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
  class qe {
    constructor(e) {
      this.renderer = e.renderer, this.camera = e.camera, this.events = e.events, this.mouse = new h(), this.raycaster = new se(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
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
  const Y = {
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
  function F(o, e) {
    return e.split(".").reduce((a, t) => a && a[t], o);
  }
  function Q(o = "ru", e = document) {
    const a = Y[o] || Y.ru;
    if (e.querySelectorAll("[data-i18n]").forEach((i) => {
      const g = i.dataset.i18n, r = F(a, g);
      r != null && (i.textContent = r);
    }), e.querySelectorAll("[data-text]").forEach((i) => {
      const g = i.dataset.i18n, r = F(a, g);
      r != null && (i.dataset.text = r);
    }), document.documentElement.lang = o, localStorage.setItem("locale", o), document.getElementById("lang-toggle")) {
      const i = document.getElementById("flag");
      F(a, "ui.langToggle") === "ru" || o === "ru" ? (i.classList.remove("us"), i.classList.add("ru"), i.src = "images/ru.svg", i.alt = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u0444\u043B\u0430\u0433") : (i.classList.remove("ru"), i.classList.add("us"), i.src = "images/us.svg", i.alt = "US flag");
    }
  }
  function Ke(o) {
    Q(o);
    const e = document.getElementById("lang-toggle");
    e && e.addEventListener("click", () => {
      const t = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      Q(t), window.dispatchEvent(new CustomEvent("locale-changed", {
        detail: {
          locale: t
        }
      }));
    });
  }
  function p(o, e = "") {
    var _a2;
    const a = localStorage.getItem("locale") || "ru", t = Y[a] || Y.ru;
    return (_a2 = o.split(".").reduce((g, r) => g && g[r], t)) != null ? _a2 : e;
  }
  class Ze {
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
  class Qe {
    constructor() {
      this.planeGrass = {
        texture: null,
        material: null
      }, this.model = null;
    }
    async loadTextures() {
      const e = new Ce(), [a] = await Promise.all([
        e.loadAsync("textures/grass.jpg")
      ]);
      this.planeGrass.texture = a, this.planeGrass.material = new L({
        map: a
      });
    }
    async loadModels() {
      await new xe().loadAsync("models/model.glb").then((t) => {
        const i = t.scene, g = t.animations;
        i.scale.x = 2, i.scale.y = 2, i.scale.z = 2, i.position.y = 0, i.rotation.y = -Math.PI / 3, this.model = i, this.model.userData.mixer = new Le(this.model), this.model.userData.action = this.model.userData.mixer.clipAction(g[0]), this.model.userData.action.play(), this.model.userData.clock = new re();
      });
    }
  }
  class Je {
    constructor(e) {
      this.events = e.events, this.gameContext = e, this.screens = document.querySelectorAll(".screen"), this.currentScreen = null, document.querySelector("body").addEventListener("click", (a) => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const t = a.target.closest("[data-action]");
        if (!t) return;
        const i = t.dataset.action, g = t.dataset.categoryId;
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
            g && ((_f = e.appController) == null ? void 0 : _f.startCategorySession(g));
            break;
          case "start_guess_session":
            g && ((_g = e.appController) == null ? void 0 : _g.startGuessSession(g));
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
  const ea = 2.3;
  class aa {
    constructor(e) {
      this.gameContext = e, this.scene = e.scene, this.camera = e.camera, this.ground = null, this.podium = null, this.podiumParts = {}, this.menuCharacterSettings = {
        desktopSpacing: 1.63,
        mobileSpacing: 1.4
      }, this.podiumSettings = {
        x: 0,
        y: 0,
        z: 0,
        topWidth: 8.38,
        topDepth: 7.78,
        topHeight: 0.47,
        topRounding: 0,
        baseWidth: 10.62,
        baseDepth: 10.46,
        baseHeight: 0.41,
        baseRounding: 0,
        baseDrop: 0.27,
        lowerWidth: 12.45,
        lowerDepth: 12,
        lowerHeight: 0.35,
        lowerRounding: 0,
        rimLift: -0.025,
        rimThickness: 0.069,
        topColor: "#c89bff",
        sideColor: "#8b55e8",
        lowerColor: "#6b35ca",
        rimColor: "#fbd5fb",
        roughness: 1,
        metalness: 0,
        glow: 5,
        shadowOpacity: 0.07,
        shadowScale: 1.01
      }, this.options = {
        size: {
          w: 10,
          h: 10,
          d: 0.2
        },
        name: "ground"
      }, this.characters = [], this.dot = null, this.dotBasePosition = new h(-4.2, 0.8, 0.3), this.dotTime = 0, this.eyeTrackingEnabled = true, this.eyeTrackingMode = "dot", this.mouseNdc = new M(0, 0), this.mouseWorldPosition = new h(0, 0.5, 1.2), this.mouseLookPlane = new Re(new h(0, 0, 1), -1.2), this.raycaster = new se(), this._dotWorldPosition = new h(), this._layoutProjection = new h(), this.currentSceneMode = "menu", this.applySceneLayout = this.applySceneLayout.bind(this), window.addEventListener("resize", () => {
        this.applySceneLayout(this.currentSceneMode);
      }), window.addEventListener("pointermove", (a) => {
        this.updateMouseLookTarget(a);
      }, {
        passive: true
      });
    }
    loadMesh() {
      let e = new Te(this.options.size.w, this.options.size.h, this.options.size.d), a = new L({
        color: 8349420,
        roughness: 0.58,
        metalness: 0.04,
        side: D
      });
      this.ground = new v(e, a), this.ground.userData = {
        ...this.options
      }, this.ground.rotateX(Math.PI / 2), this.ground.position.y = -2.2, this.ground.receiveShadow = true, this.scene.add(this.ground), this.podium = new me(), this.podium.userData = {
        name: "menu-podium"
      };
      const t = new B({
        clearcoat: 0.75,
        clearcoatRoughness: 0.18
      }), i = new B({
        clearcoat: 0.55,
        clearcoatRoughness: 0.24
      }), g = new B({
        clearcoat: 0.35,
        clearcoatRoughness: 0.3
      }), r = new L({
        emissive: 16777215,
        toneMapped: false
      }), s = new U({
        color: 2953839,
        transparent: true,
        depthWrite: false
      }), y = new v(this.createPodiumLayerGeometry(this.podiumSettings.topRounding), t), c = new v(this.createPodiumLayerGeometry(this.podiumSettings.baseRounding), i), d = new v(this.createPodiumLayerGeometry(this.podiumSettings.lowerRounding), g), l = new v(new ye(1, 0.018, 16, 128), r), u = new v(new Me(1, 128), s);
      l.rotation.x = Math.PI / 2, u.rotation.x = -Math.PI / 2, y.receiveShadow = true, c.receiveShadow = true, d.receiveShadow = true, this.podium.add(u, d, c, y, l), this.podiumParts = {
        top: y,
        base: c,
        lower: d,
        rim: l,
        shadow: u,
        topMaterial: t,
        sideMaterial: i,
        lowerMaterial: g,
        rimMaterial: r,
        shadowMaterial: s
      }, y.userData.rounding = this.podiumSettings.topRounding, c.userData.rounding = this.podiumSettings.baseRounding, d.userData.rounding = this.podiumSettings.lowerRounding, this.scene.add(this.podium), this.applyPodiumSettings();
      let j = new W(0.2), k = new Ee({
        color: 10392058,
        side: D
      });
      this.dot = new v(j, k), this.dot.userData = {
        ...this.options
      }, this.dot.position.copy(this.dotBasePosition), this.scene.add(this.dot);
    }
    getSceneLayout(e) {
      const a = window.innerWidth || 1, t = window.innerHeight || 1, g = a / t < 1, r = t < 720, s = {
        menu: {
          cameraPosition: new h(0, r ? 5.05 : 4.6, g ? 19.5 : 30.5),
          target: new h(0, g ? -1.08 : -0.54, 0),
          characterSpacing: g ? this.menuCharacterSettings.mobileSpacing : this.menuCharacterSettings.desktopSpacing,
          characterZ: g ? 0.55 : 0.42,
          groundScale: new h(g ? 0.92 : 1.14, g ? 0.7 : 0.82, 1),
          groundPosition: new h(0, g ? -6.35 : r ? -3.92 : -3.72, g ? 0.58 : 0.42),
          podiumScale: new h(g ? 0.72 : 1, 1, g ? 0.78 : 1)
        },
        choice: {
          cameraPosition: new h(0, r ? 3.85 : 3.95, g ? 5 : 28),
          target: new h(0, g ? -0.45 : -0.95, 0),
          characterSpacing: g ? 1.65 : 1.55,
          characterZ: 0.25,
          groundScale: new h(g ? 1.18 : 1, g ? 1.22 : 0.9, 1),
          groundPosition: new h(0, -1.9, 0.25)
        },
        background: {
          cameraPosition: new h(0, 4.6, g ? 34 : 31),
          target: new h(0, -1.4, 0),
          characterSpacing: g ? 1.15 : 1.45,
          characterZ: 0.6,
          groundScale: new h(g ? 0.72 : 0.9, 0.82, 1),
          groundPosition: new h(0, -2.2, 0.55)
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
      const i = this.getSceneClearanceOffset(a), g = a.groundPosition.clone();
      g.y += i, this.ground && (this.ground.visible = a.mode !== "menu", this.ground.position.copy(g), this.ground.scale.copy(a.groundScale)), this.podium && (this.podium.visible = a.mode === "menu", this.podium.position.set(g.x + this.podiumSettings.x, g.y + this.podiumSettings.y, g.z + this.podiumSettings.z), this.podium.scale.copy(a.podiumScale || new h(0.86, 1, 0.36)), this.applyPodiumSettings());
      const r = (this.characters.length - 1) / 2, s = this.getCharacterBaseY(a, i);
      this.characters.forEach((y, c) => {
        y.characterGroup && (y.characterGroup.position.x = (c - r) * a.characterSpacing, y.characterGroup.position.y = s, y.characterGroup.position.z = a.characterZ);
      });
    }
    createPodiumLayerGeometry(e = 0) {
      const a = new V();
      a.absellipse(0, 0, 1, 1, 0, Math.PI * 2, false, 0);
      const t = z.clamp(e, 0, 0.35), i = new Pe(a, {
        depth: 1,
        curveSegments: 96,
        steps: 1,
        bevelEnabled: t > 0,
        bevelSegments: 5,
        bevelSize: t,
        bevelThickness: t
      });
      i.center(), i.rotateX(-Math.PI / 2), i.computeBoundingBox();
      const g = new h();
      return i.boundingBox.getSize(g), i.scale(2 / (g.x || 1), 1 / (g.y || 1), 2 / (g.z || 1)), i.computeVertexNormals(), i;
    }
    updatePodiumLayerGeometry(e, a) {
      !e || e.userData.rounding === a || (e.geometry.dispose(), e.geometry = this.createPodiumLayerGeometry(a), e.userData.rounding = a);
    }
    applyPodiumSettings() {
      if (!this.podium || !this.podiumParts.top) return;
      const e = this.podiumSettings, { top: a, base: t, lower: i, rim: g, shadow: r, topMaterial: s, sideMaterial: y, lowerMaterial: c, rimMaterial: d, shadowMaterial: l } = this.podiumParts, u = 0.1;
      this.updatePodiumLayerGeometry(a, e.topRounding), this.updatePodiumLayerGeometry(t, e.baseRounding), this.updatePodiumLayerGeometry(i, e.lowerRounding), a.scale.set(e.topWidth / 2, e.topHeight, e.topDepth / 2), a.position.y = u - e.topHeight / 2, t.scale.set(e.baseWidth / 2, e.baseHeight, e.baseDepth / 2), t.position.y = u - e.topHeight - e.baseHeight / 2, i.scale.set(e.lowerWidth / 2, e.lowerHeight, e.lowerDepth / 2), i.position.y = u - e.topHeight - e.baseHeight - e.baseDrop, g.scale.set(e.topWidth / 2 * 0.99, e.topDepth / 2 * 0.99, e.rimThickness / 0.018), g.position.y = u + e.rimLift, r.scale.set(e.lowerWidth / 2 * e.shadowScale, e.lowerDepth / 2 * e.shadowScale, 1), r.position.y = i.position.y - e.lowerHeight / 2 - 0.03, s.color.set(e.topColor), y.color.set(e.sideColor), c.color.set(e.lowerColor), d.color.set(e.rimColor), d.emissive.set(e.rimColor), d.emissiveIntensity = e.glow, l.opacity = e.shadowOpacity, [
        s,
        y,
        c
      ].forEach((j) => {
        j.roughness = e.roughness, j.metalness = e.metalness;
      });
    }
    getActiveUiBottom() {
      const e = document.querySelector(".screen.active");
      if (!e) return 0;
      const a = e.querySelector(".menu-shell, .panel-shell");
      return a ? a.getBoundingClientRect().bottom : 0;
    }
    getCharacterBaseY(e, a = 0) {
      return e.groundPosition.y + a + ea;
    }
    getTallestCharacterTopY(e) {
      return this.characters.length ? this.characters.reduce((a, t) => {
        var _a2, _b;
        const i = (_a2 = t.heightBody) != null ? _a2 : 4.2, g = (_b = t.savedScaleY) != null ? _b : 1, r = i * g - 2.2;
        return Math.max(a, e + r);
      }, e) : e;
    }
    projectWorldYToScreen(e, a) {
      return this.camera ? (this.camera.updateMatrixWorld(), this._layoutProjection.set(0, e, a).project(this.camera), (1 - this._layoutProjection.y) * 0.5 * window.innerHeight) : window.innerHeight;
    }
    getSceneClearanceOffset(e) {
      const a = this.getActiveUiBottom();
      if (!a || !this.camera) return 0;
      const i = e.mode === "menu" ? window.innerHeight < 720 ? 18 : 34 : window.innerHeight < 720 ? 28 : 44, g = a + i;
      let r = 0;
      for (let s = 0; s < 80; s += 1) {
        const y = this.getTallestCharacterTopY(this.getCharacterBaseY(e, r));
        if (this.projectWorldYToScreen(y, e.characterZ) >= g) break;
        r -= 0.08;
      }
      return r;
    }
    update(e, a = false) {
      if (!this.dot) return;
      this.dotTime += e;
      const t = this.dotBasePosition.x + Math.sin(this.dotTime * 0.9) * 7.1, i = this.dotBasePosition.y + Math.sin(this.dotTime * 1.6) * 0.7 + Math.cos(this.dotTime * 0.55) * 10.45, g = this.dotBasePosition.z + Math.cos(this.dotTime * 1.15) * 0.75 + 1;
      this.dot.position.set(t, i, g);
    }
    getSpectatorFocusTarget() {
      return this.eyeTrackingEnabled ? this.eyeTrackingMode === "mouse" ? this.mouseWorldPosition : this.dot ? this.dot.getWorldPosition(this._dotWorldPosition) : null : null;
    }
    updateMouseLookTarget(e) {
      this.camera && (this.mouseNdc.set(e.clientX / window.innerWidth * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1), this.raycaster.setFromCamera(this.mouseNdc, this.camera), this.raycaster.ray.intersectPlane(this.mouseLookPlane, this.mouseWorldPosition));
    }
  }
  class ta {
    constructor(e) {
      this.scene = e.scene, this.dirLight = null, this.ambientLight = null, this.fillLight = null, this.rimLight = null, this.shadowSettings = {
        radius: 12.8,
        blurSamples: 28,
        bias: -0.0106,
        normalBias: 0.126,
        mapSize: 1024
      };
    }
    loadLight(e = true, a = true) {
      this.ambientLight = new Ge(14604031, 1.25), this.dirLight = new q(16777215, 1.55), this.dirLight.position.set(-4, 7, 4), this.dirLight.castShadow = true, this.dirLight.shadow.camera.near = 0.5, this.dirLight.shadow.camera.far = 100, this.dirLight.shadow.camera.left = -7, this.dirLight.shadow.camera.right = 7, this.dirLight.shadow.camera.top = 7, this.dirLight.shadow.camera.bottom = -7, this.applyShadowSettings(), this.fillLight = new Ae(16767231, 4007066, 1.25), this.rimLight = new q(10411007, 0.9), this.rimLight.position.set(5, 4, -5), e && this.scene.add(this.ambientLight), a && (this.scene.add(this.dirLight), this.scene.add(this.fillLight), this.scene.add(this.rimLight));
    }
    applyShadowSettings() {
      var _a2;
      if (!this.dirLight) return;
      const e = this.shadowSettings;
      this.dirLight.shadow.radius = e.radius, this.dirLight.shadow.blurSamples = Math.round(e.blurSamples), this.dirLight.shadow.bias = e.bias, this.dirLight.shadow.normalBias = e.normalBias;
      const a = Math.round(e.mapSize);
      (this.dirLight.shadow.mapSize.width !== a || this.dirLight.shadow.mapSize.height !== a) && (this.dirLight.shadow.mapSize.set(a, a), (_a2 = this.dirLight.shadow.map) == null ? void 0 : _a2.dispose(), this.dirLight.shadow.map = null), this.dirLight.shadow.needsUpdate = true;
    }
  }
  const ia = (o) => JSON.parse(JSON.stringify(o)), _ = {
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
  }, $ = {
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
  }, n = {
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
  }, P = {
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
        ...n.tense
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
        ...n.smileSoft
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
        ...n.smileSoft
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
        ...n.neutral
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
  }, G = {
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
          ...n.tense,
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
          ...n.smileSoft
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
          ...n.frownSoft
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
          ...n.openMedium
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
          ...n.puzzled
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
          ...n.tense
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
          ...n.grin
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
          ...n.frownDeep
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
          ...n.neutral
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
          ...n.puzzled,
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
          ...n.smileWide
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
          ...n.frownSoft
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
          ...n.openSmall
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
          ...n.puzzled,
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
          ...n.tense
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
          ...n.grin,
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
          ...n.frownDeep,
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
          ...n.neutral
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
          ...n.puzzled,
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
          ...n.smileSoft,
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
          ...n.frownSoft,
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
          ...n.openBig,
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
          ...n.puzzled,
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
          ...n.tense,
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
          ...n.grin,
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
          ...n.frownSoft,
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
          ...n.puzzled,
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
          ...n.smileSoft,
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
          ...n.frownDeep,
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
          ...n.openBig
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
          ...n.puzzled,
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
          ...n.tense,
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
          ...n.smileSoft,
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
          ...n.frownDeep,
          y: -0.2
        }
      }
    }
  }, ga = [
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
  ], oa = {
    angry: {
      role: "angry",
      basePose: P.angry,
      states: G.angry,
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
      basePose: P.kind,
      states: G.kind,
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
      basePose: P.silly,
      states: G.silly,
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
      basePose: P.coward,
      states: G.coward,
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
  }, X = [
    "mode",
    "width",
    "height",
    "thickness",
    "curve"
  ];
  function sa(...o) {
    const e = ia(_);
    return o.forEach((a) => {
      a && (a.bodyRotate !== void 0 && (e.bodyRotate += a.bodyRotate), a.color !== void 0 && (e.color = a.color), [
        "eyes",
        "eyesBack",
        "brows",
        "cheeks"
      ].forEach((t) => {
        a[t] && Object.keys(a[t]).forEach((i) => {
          const g = a[t][i];
          Array.isArray(g) && Array.isArray(e[t][i]) && (e[t][i][0] += g[0], e[t][i][1] += g[1]);
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
      }), X.forEach((t) => {
        a.mouth[t] !== void 0 && (e.mouth[t] = a.mouth[t]);
      })));
    }), e;
  }
  const J = (o) => JSON.parse(JSON.stringify(o));
  function ra(o, e) {
    const a = new V();
    return a.absellipse(0, 0, o / 2, e / 2, 0, Math.PI * 2, false, 0), a;
  }
  function ma(o, e, a) {
    const t = Math.max(o / 2, 1e-3), i = Math.max(a / 2, 1e-3), g = 24, r = [], s = [];
    for (let c = 0; c <= g; c++) {
      const d = c / g, l = z.lerp(-t, t, d), u = (1 - Math.pow(2 * d - 1, 2)) * e;
      r.push(new M(l, u + i)), s.push(new M(l, u - i));
    }
    const y = new V();
    return y.moveTo(r[0].x, r[0].y), r.slice(1).forEach((c) => y.lineTo(c.x, c.y)), s.reverse().forEach((c) => y.lineTo(c.x, c.y)), y.closePath(), y;
  }
  class ya {
    constructor(e) {
      this.scene = e.scene, this.characterGroup = new me(), this.eyes = [], this.eyesBack = [], this.brows = [], this.cheeks = [], this.mouth = null, this.body = null, this.currentMouthParams = {}, this.faceZ = 0.62, this.heightBody = 4.2, this.savedScaleY = 1, this.role = "kind", this.lookTarget = null, this.lookOffset = new M(), this.desiredLookOffset = new M(), this._tmpLocalTarget = new h(), this.blinkFactor = 1, this.defaults = J(_), this.params = J(_), this.bodyMat = new L({
        color: 9364655,
        roughness: 0.52,
        metalness: 0.04
      }), this.blackMat = new L({
        color: 7556154,
        side: D
      }), this.eyeMat = new L({
        color: 7556154,
        side: D,
        transparent: true,
        opacity: 1
      }), this.blinkTween = null, this.idleMotionTween = null;
    }
    async loadCharacter(e) {
      var _a2, _b, _c;
      this.role = e.role, this.savedScaleY = (_a2 = e.scaleY) != null ? _a2 : 1, this.scene.add(this.characterGroup), this.characterGroup.position.x = (_b = e.positionX) != null ? _b : 0, this.body = new v(new De(1.6, this.heightBody * this.savedScaleY, 1.2, 8, 0.3), this.bodyMat), this.body.position.y = this.heightBody * this.savedScaleY / 2 - 2.2, this.body.material.color.set((_c = e.color) != null ? _c : this.defaults.color), this.body.castShadow = true, this.body.receiveShadow = true, this.characterGroup.add(this.body);
      const a = new U({
        color: 16751001,
        transparent: true,
        opacity: 0.7
      }), t = new K(0.07, 0.07, 0.05, 32);
      t.rotateX(Math.PI / 2);
      for (let s = 0; s < 2; s++) {
        const y = new v(t, this.eyeMat);
        this.characterGroup.add(y), this.eyes.push(y);
      }
      const i = new K(0.3, 0.12, 0.05, 32);
      i.rotateX(Math.PI / 2);
      for (let s = 0; s < 2; s++) {
        const y = new v(i, new U({
          color: 16777215,
          transparent: true,
          opacity: 0.4
        }));
        this.characterGroup.add(y), this.eyesBack.push(y);
      }
      const g = new ye(0.08, 0.025, 16, 30, Math.PI / 1.1);
      for (let s = 0; s < 2; s++) {
        const y = new v(g, this.blackMat);
        this.characterGroup.add(y), this.brows.push(y);
      }
      this.updateMouthGeometry(this.defaults.mouth);
      const r = new W(0.18, 32, 16);
      r.scale(1, 0.6, 0.2);
      for (let s = 0; s < 2; s++) {
        const y = new v(r, a);
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
        const t = z.clamp(this._tmpLocalTarget.x * 0.07, -0.12, 0.12), i = z.clamp((this._tmpLocalTarget.y - 1.2) * 0.08, -0.12, 0.12);
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
      (_a2 = this.idleMotionTween) == null ? void 0 : _a2.kill(), this.characterGroup.scale.set(1, 1, 1), this.idleMotionTween = T.to(this.characterGroup.scale, {
        duration: S(e[0], e[1]),
        y: "+=0.03",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    applyState(e, a = {}) {
      var _a2, _b, _c;
      const t = (_a2 = a.duration) != null ? _a2 : 1.1, i = (_b = a.ease) != null ? _b : "back.out(1.7)";
      T.to(this.params, {
        bodyRotate: e.bodyRotate,
        duration: t,
        ease: i,
        onUpdate: () => this.updateCharacterVisuals()
      });
      const g = (_c = e.color) != null ? _c : "#".concat(this.body.material.color.getHexString()), r = new Ye(g);
      T.to(this.body.material.color, {
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
        Object.keys(e[y]).forEach((c) => {
          T.to(this.params[y][c], {
            0: e[y][c][0],
            1: e[y][c][1],
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
        ...X.filter((y) => y !== "mode")
      ].forEach((y) => {
        s[y] = e.mouth[y];
      }), e.mouth.mode !== this.params.mouth.mode && (this.params.mouth.mode = e.mouth.mode), T.to(this.params.mouth, {
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
      for (const g of X) if (this.currentMouthParams[g] !== e[g]) {
        a = true;
        break;
      }
      if (!a && this.mouth) return;
      ((_a2 = this.mouth) == null ? void 0 : _a2.geometry) && this.mouth.geometry.dispose();
      let t;
      switch (e.mode) {
        case "oval":
          t = ra(e.width, e.height);
          break;
        case "curve":
        default:
          t = ma(e.width, e.curve || 0, e.thickness || 0.02);
          break;
      }
      const i = new Oe(t, 24);
      i.center(), this.mouth ? this.mouth.geometry = i : (this.mouth = new v(i, this.blackMat), this.characterGroup.add(this.mouth)), this.currentMouthParams = {
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
      this.blinkTween = T.to(a, {
        val: 0.1 * e,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onUpdate: () => {
          this.blinkFactor = a.val, this.updateCharacterVisuals(), this.eyes.forEach((t, i) => {
            const g = a.val / e;
            t.material.opacity = g > 0.7 ? 1 : 0;
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
      const e = this.savedScaleY || 1, a = this.heightBody * e / 2 - 2.2, t = Math.max(e, 0.65), i = 2.1, g = this.heightBody * e / 2, r = (s) => {
        const y = i - s;
        return a + g - y * t;
      };
      this.characterGroup.rotation.y = this.params.bodyRotate;
      for (let s = 0; s < 2; s++) this.eyes[s].position.set((this.params.eyes.x[s] + this.lookOffset.x) * t, r(this.params.eyes.y[s] + this.lookOffset.y), this.faceZ), this.eyes[s].scale.set(this.params.eyes.scaleX[s] * t, this.params.eyes.scaleY[s] * t, 1), this.eyesBack[s].position.set((this.params.eyesBack.x[s] + this.lookOffset.x * 0.35) * t, r(this.params.eyesBack.y[s] + this.lookOffset.y * 0.35) + 0.02, this.faceZ - 0.01), this.eyesBack[s].scale.set(this.params.eyesBack.scaleX[s] * t, this.params.eyesBack.scaleY[s] * t * this.blinkFactor, 1), this.brows[s].position.set(this.params.brows.x[s] * t, r(this.params.brows.y[s]), this.faceZ), this.brows[s].rotation.z = this.params.brows.rotation[s], this.brows[s].scale.set(this.params.brows.scaleX[s] * t, this.params.brows.scaleY[s] * t, 1), this.cheeks[s].position.set(this.params.cheeks.x[s] * t * 1.1, r(this.params.cheeks.y[s]), this.faceZ), this.cheeks[s].scale.set(this.params.cheeks.scaleX[s] * t, this.params.cheeks.scaleY[s] * 0.6 * t, 0.2), this.cheeks[s].material.opacity !== void 0 && (this.cheeks[s].material.opacity = this.params.cheeks.opacity[s]);
      this.mouth && (this.mouth.position.set(this.params.mouth.x, r(this.params.mouth.y), this.faceZ), this.mouth.rotation.x = this.params.mouth.rotationX, this.mouth.rotation.y = this.params.mouth.rotationY, this.mouth.rotation.z = this.params.mouth.rotationZ, this.mouth.scale.set(this.params.mouth.scaleX * t, this.params.mouth.scaleY * t, 1));
    }
  }
  const ca = 0, da = 2e3;
  class na {
    constructor(e) {
      this.gameContext = e, this.gui = null, this.spectators = [], this.focus = "center", this.roundActive = false, this.debugMouthOverride = null;
    }
    getConfigs() {
      return ga.map((e) => ({
        ...e
      }));
    }
    registerCharacter(e, a) {
      const t = oa[a.role];
      if (!t) throw new Error("Unknown spectator role: ".concat(a.role));
      const i = performance.now(), g = {
        character: e,
        config: a,
        profile: t,
        role: a.role,
        currentState: "idle",
        focus: "center",
        stickyState: "idle",
        tempUntil: 0,
        nextLookAt: i + this.getLookDelay(),
        nextBlinkAt: i + S(a.blinkRange[0], a.blinkRange[1]),
        nextAmbientAt: i + this.getAmbientDelay(a, false)
      };
      this.spectators.push(g), this.applyEntryState(g, "idle", {
        duration: 0.4,
        sticky: true,
        resetFocus: true
      });
    }
    attachGui(e) {
      if (this.gui = e, !e) return;
      const a = {
        focus: "center",
        event: "pair_presented",
        followDot: this.gameContext.gameClass.eyeTrackingEnabled,
        eyeTrackingMode: this.gameContext.gameClass.eyeTrackingMode,
        mouthMode: _.mouth.mode,
        mouthWidth: _.mouth.width,
        mouthHeight: _.mouth.height,
        mouthThickness: _.mouth.thickness,
        mouthCurve: _.mouth.curve,
        mouthX: _.mouth.x,
        mouthY: _.mouth.y,
        mouthScaleX: _.mouth.scaleX,
        mouthScaleY: _.mouth.scaleY,
        mouthRotationZ: _.mouth.rotationZ,
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
          a.mouthMode = _.mouth.mode, a.mouthWidth = _.mouth.width, a.mouthHeight = _.mouth.height, a.mouthThickness = _.mouth.thickness, a.mouthCurve = _.mouth.curve, a.mouthX = _.mouth.x, a.mouthY = _.mouth.y, a.mouthScaleX = _.mouth.scaleX, a.mouthScaleY = _.mouth.scaleY, a.mouthRotationZ = _.mouth.rotationZ, this.debugMouthOverride = this.buildDebugMouthOverride(a), t.forEach((d) => d.updateDisplay()), this.refreshCurrentStates();
        }
      }, t = [], i = {
        \u0426\u0435\u043D\u0442\u0440: "center",
        \u0412\u043B\u0435\u0432\u043E: "left",
        \u0412\u043F\u0440\u0430\u0432\u043E: "right",
        \u0412\u0432\u0435\u0440\u0445: "top",
        \u0412\u043D\u0438\u0437: "bottom"
      }, g = {
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
      s.add(a, "focus", i).name("\u0424\u043E\u043A\u0443\u0441").onChange((d) => {
        this.setFocus(d);
      }), s.add(a, "followDot").name("\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0448\u0430\u0440\u043E\u043C").onChange((d) => {
        this.gameContext.gameClass.eyeTrackingEnabled = d, d || this.spectators.forEach((l) => {
          l.character.clearLookTarget(), l.nextLookAt = performance.now() + this.getLookDelay(), l.character.update(1 / 60);
        });
      }), s.add(a, "eyeTrackingMode", r).name("\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430").onChange((d) => {
        this.gameContext.gameClass.eyeTrackingMode = d;
      }), s.add(a, "event", g).name("\u0421\u043E\u0431\u044B\u0442\u0438\u0435"), s.add(a, "triggerEvent").name("\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"), s.add(a, "startRound").name("\u0421\u0442\u0430\u0440\u0442 \u0440\u0430\u0443\u043D\u0434\u0430"), s.add(a, "enterIdle").name("\u0412 \u043F\u043E\u043A\u043E\u0439"), s.add(a, "resetRound").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
      const y = e.addFolder("\u0420\u043E\u0442"), c = () => {
        this.debugMouthOverride = this.buildDebugMouthOverride(a), this.refreshCurrentStates();
      };
      t.push(y.add(a, "mouthMode", {
        \u041B\u0438\u043D\u0438\u044F: "curve",
        \u041E\u0432\u0430\u043B: "oval"
      }).name("\u0422\u0438\u043F").onChange(c), y.add(a, "mouthWidth", 5e-3, 1.2, 5e-3).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(c), y.add(a, "mouthHeight", 1e-3, 0.8, 5e-3).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(c), y.add(a, "mouthThickness", 1e-3, 0.3, 2e-3).name("\u0422\u043E\u043B\u0449\u0438\u043D\u0430").onChange(c), y.add(a, "mouthCurve", -0.8, 0.8, 5e-3).name("\u0418\u0437\u0433\u0438\u0431").onChange(c), y.add(a, "mouthX", -0.8, 0.8, 5e-3).name("X").onChange(c), y.add(a, "mouthY", -0.2, 2, 5e-3).name("Y").onChange(c), y.add(a, "mouthScaleX", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 X").onChange(c), y.add(a, "mouthScaleY", 0.1, 5, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431 Y").onChange(c), y.add(a, "mouthRotationZ", -3.14, 3.14, 0.01).name("\u041F\u043E\u0432\u043E\u0440\u043E\u0442").onChange(c)), y.add(a, "resetMouth").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u043E\u0442");
    }
    update(e) {
      const a = performance.now(), t = this.gameContext.gameClass.getSpectatorFocusTarget();
      this.spectators.forEach((i) => {
        if (t ? a >= i.nextLookAt && (i.character.setLookTarget(t), i.nextLookAt = a + this.getLookDelay()) : (i.character.clearLookTarget(), i.nextLookAt = a + this.getLookDelay()), i.character.update(e), a >= i.nextBlinkAt && (i.character.blink(), i.nextBlinkAt = a + S(i.config.blinkRange[0], i.config.blinkRange[1])), i.tempUntil && a >= i.tempUntil && (i.tempUntil = 0, this.applyEntryState(i, i.stickyState, {
          duration: 0.7
        })), !i.tempUntil && this.roundActive && a >= i.nextAmbientAt) {
          const g = this.roundActive ? i.profile.watchingStates : i.profile.idleStates, r = g[Math.floor(Math.random() * g.length)] || i.stickyState;
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
      return S(ca, da);
    }
    setFocus(e = "center") {
      this.focus = $[e] ? e : "center", this.spectators.forEach((a) => {
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
        const g = i.profile.reactions[e];
        if (!g) return;
        const r = typeof g == "function" ? g(a, i) : g.state, s = (typeof g == "function" ? 1.4 : (_a2 = g.duration) != null ? _a2 : 1.4) / ((_b = i.config.reactionSpeed) != null ? _b : 1);
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
      const i = $[t.resetFocus ? "center" : e.focus] || $.center, g = sa(e.profile.basePose, e.profile.states[a] || e.profile.states.idle, i, this.debugMouthOverride);
      g.color = e.config.color, e.currentState = a, t.sticky ? e.stickyState = a : this.roundActive ? e.stickyState = "watching" : e.stickyState = "idle", t.resetFocus && (e.focus = "center"), e.character.applyState(g, {
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
      return S(t[0], t[1]);
    }
  }
  class la {
    constructor(e) {
      this.scene = e.scene, this.countInst1 = 3, this.instancesObjs = {
        instances1: {
          data: Array.from({
            length: this.countInst1
          }, (a, t) => ({
            position: new h(0, 0.2, 0),
            rotation: new Be(0, 0, 0),
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
          geometryInst1: new W(0.2),
          materialInst1: new L({
            color: 52224
          }),
          inst1: null
        }
      }, this.instancesObjs.instances1.inst1 = new Fe(this.instancesObjs.instances1.geometryInst1, this.instancesObjs.instances1.materialInst1, this.countInst1), this.instancesObjs.instances1.inst1.instanceMatrix.setUsage($e), this.instancesObjs.instances1.inst1.receiveShadow = true, this.instancesObjs.instances1.inst1.castShadow = true, this.instancesObjs.instances1.inst1.frustumCulled = false;
    }
    init() {
      for (let e = 0; e < this.countInst1; e++) this.instancesObjs.instances1.data[e].position.x = S(-3, 3), this.instancesObjs.instances1.data[e].position.z = S(-3, 3), this.instancesObjs.instances1.data[e].position.y = S(1, 2);
      this.instancesObjs.instances1.inst1.instanceMatrix.needsUpdate = true;
    }
    toVec3(e) {
      var _a2, _b, _c;
      return typeof e == "number" ? new h(e, e, e) : (e == null ? void 0 : e.isVector3) ? e : e ? new h((_a2 = e.x) != null ? _a2 : 1, (_b = e.y) != null ? _b : 1, (_c = e.z) != null ? _c : 1) : new h(1, 1, 1);
    }
  }
  const pa = [
    {
      id: "yabloko",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u044F\u0431\u043B\u043E\u043A\u043E",
      image: "/images/items/frukty/yabloko.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "banan",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0431\u0430\u043D\u0430\u043D",
      image: "/images/items/frukty/banan.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "grusha",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0443\u0448\u0430",
      image: "/images/items/frukty/grusha.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "apelsin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D",
      image: "/images/items/frukty/apelsin.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "mandarin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043D\u0434\u0430\u0440\u0438\u043D",
      image: "/images/items/frukty/mandarin.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "vinograd",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434",
      image: "/images/items/frukty/vinograd.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "kivi",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u0438\u0432\u0438",
      image: "/images/items/frukty/kivi.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "ananas",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u043D\u0430\u043D\u0430\u0441",
      image: "/images/items/frukty/ananas.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "mango",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043D\u0433\u043E",
      image: "/images/items/frukty/mango.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "granat",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0430\u043D\u0430\u0442",
      image: "/images/items/frukty/granat.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "arbuz",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0440\u0431\u0443\u0437",
      image: "/images/items/frukty/arbuz.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "dynya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0434\u044B\u043D\u044F",
      image: "/images/items/frukty/dynya.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "persik",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A",
      image: "/images/items/frukty/persik.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "abrikos",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0431\u0440\u0438\u043A\u043E\u0441",
      image: "/images/items/frukty/abrikos.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "sliva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0441\u043B\u0438\u0432\u0430",
      image: "/images/items/frukty/sliva.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "vishnya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0432\u0438\u0448\u043D\u044F",
      image: "/images/items/frukty/vishnya.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "chereshnya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0447\u0435\u0440\u0435\u0448\u043D\u044F",
      image: "/images/items/frukty/chereshnya.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "limon",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0438\u043C\u043E\u043D",
      image: "/images/items/frukty/limon.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "laym",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0430\u0439\u043C",
      image: "/images/items/frukty/laym.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "kokos",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043E\u043A\u043E\u0441",
      image: "/images/items/frukty/kokos.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "avokado",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0432\u043E\u043A\u0430\u0434\u043E",
      image: "/images/items/frukty/avokado.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "klubnika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043B\u0443\u0431\u043D\u0438\u043A\u0430",
      image: "/images/items/frukty/klubnika.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "malina",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u043B\u0438\u043D\u0430",
      image: "/images/items/frukty/malina.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "ezhevika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0435\u0436\u0435\u0432\u0438\u043A\u0430",
      image: "/images/items/frukty/ezhevika.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "golubika",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u043E\u043B\u0443\u0431\u0438\u043A\u0430",
      image: "/images/items/frukty/golubika.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "klyukva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043A\u043B\u044E\u043A\u0432\u0430",
      image: "/images/items/frukty/klyukva.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "smorodina",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0441\u043C\u043E\u0440\u043E\u0434\u0438\u043D\u0430",
      image: "/images/items/frukty/smorodina.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "inzhir",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0438\u043D\u0436\u0438\u0440",
      image: "/images/items/frukty/inzhir.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "finik",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0444\u0438\u043D\u0438\u043A",
      image: "/images/items/frukty/finik.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "hurma",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0445\u0443\u0440\u043C\u0430",
      image: "/images/items/frukty/hurma.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "papayya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u0430\u043F\u0430\u0439\u044F",
      image: "/images/items/frukty/papayya.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "marakuyya",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043C\u0430\u0440\u0430\u043A\u0443\u0439\u044F",
      image: "/images/items/frukty/marakuyya.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "lichi",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043B\u0438\u0447\u0438",
      image: "/images/items/frukty/lichi.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "rambutan",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0440\u0430\u043C\u0431\u0443\u0442\u0430\u043D",
      image: "/images/items/frukty/rambutan.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "guava",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0443\u0430\u0432\u0430",
      image: "/images/items/frukty/guava.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "pomelo",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043F\u043E\u043C\u0435\u043B\u043E",
      image: "/images/items/frukty/pomelo.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "greypfrut",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0433\u0440\u0435\u0439\u043F\u0444\u0440\u0443\u0442",
      image: "/images/items/frukty/greypfrut.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "nektarin",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u043D\u0435\u043A\u0442\u0430\u0440\u0438\u043D",
      image: "/images/items/frukty/nektarin.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "ayva",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0430\u0439\u0432\u0430",
      image: "/images/items/frukty/ayva.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "dragonfrut",
      categoryId: "frukty",
      categoryName: "\u0424\u0440\u0443\u043A\u0442\u044B",
      title: "\u0434\u0440\u0430\u0433\u043E\u043D\u0444\u0440\u0443\u0442",
      image: "/images/items/frukty/dragonfrut.jpg",
      categoryImage: "/images/categories/frukty.jpg"
    },
    {
      id: "kartofel",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C",
      image: "/images/items/ovoshchi/kartofel.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "morkov",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043C\u043E\u0440\u043A\u043E\u0432\u044C",
      image: "/images/items/ovoshchi/morkov.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "svekla",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0432\u0451\u043A\u043B\u0430",
      image: "/images/items/ovoshchi/svekla.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "kapusta",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u043F\u0443\u0441\u0442\u0430",
      image: "/images/items/ovoshchi/kapusta.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "tsvetnaya_kapusta",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0446\u0432\u0435\u0442\u043D\u0430\u044F \u043A\u0430\u043F\u0443\u0441\u0442\u0430",
      image: "/images/items/ovoshchi/tsvetnaya_kapusta.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "brokkoli",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0440\u043E\u043A\u043A\u043E\u043B\u0438",
      image: "/images/items/ovoshchi/brokkoli.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "ogurets",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043E\u0433\u0443\u0440\u0435\u0446",
      image: "/images/items/ovoshchi/ogurets.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "pomidor",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u043E\u043C\u0438\u0434\u043E\u0440",
      image: "/images/items/ovoshchi/pomidor.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "sladkiy_perets",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u043B\u0430\u0434\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/ovoshchi/sladkiy_perets.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "perets_chili",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0435\u0440\u0435\u0446 \u0447\u0438\u043B\u0438",
      image: "/images/items/ovoshchi/perets_chili.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "tykva",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0442\u044B\u043A\u0432\u0430",
      image: "/images/items/ovoshchi/tykva.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "kabachok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0430\u0431\u0430\u0447\u043E\u043A",
      image: "/images/items/ovoshchi/kabachok.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "baklazhan",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u043A\u043B\u0430\u0436\u0430\u043D",
      image: "/images/items/ovoshchi/baklazhan.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "kukuruza",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0443\u043A\u0443\u0440\u0443\u0437\u0430",
      image: "/images/items/ovoshchi/kukuruza.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "zelenyy_goroh",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0445",
      image: "/images/items/ovoshchi/zelenyy_goroh.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "fasol",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0444\u0430\u0441\u043E\u043B\u044C",
      image: "/images/items/ovoshchi/fasol.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "chechevitsa",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0447\u0435\u0447\u0435\u0432\u0438\u0446\u0430",
      image: "/images/items/ovoshchi/chechevitsa.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "luk",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043B\u0443\u043A",
      image: "/images/items/ovoshchi/luk.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "zelenyy_luk",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u043B\u0443\u043A",
      image: "/images/items/ovoshchi/zelenyy_luk.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "chesnok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0447\u0435\u0441\u043D\u043E\u043A",
      image: "/images/items/ovoshchi/chesnok.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "redis",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0435\u0434\u0438\u0441",
      image: "/images/items/ovoshchi/redis.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "daykon",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0434\u0430\u0439\u043A\u043E\u043D",
      image: "/images/items/ovoshchi/daykon.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "batat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u0442\u0430\u0442",
      image: "/images/items/ovoshchi/batat.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "pasternak",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0430\u0441\u0442\u0435\u0440\u043D\u0430\u043A",
      image: "/images/items/ovoshchi/pasternak.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "selderey",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0435\u043B\u044C\u0434\u0435\u0440\u0435\u0439",
      image: "/images/items/ovoshchi/selderey.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "petrushka",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043F\u0435\u0442\u0440\u0443\u0448\u043A\u0430",
      image: "/images/items/ovoshchi/petrushka.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "ukrop",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0443\u043A\u0440\u043E\u043F",
      image: "/images/items/ovoshchi/ukrop.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "kinza",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u043A\u0438\u043D\u0437\u0430",
      image: "/images/items/ovoshchi/kinza.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "bazilik",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0430\u0437\u0438\u043B\u0438\u043A",
      image: "/images/items/ovoshchi/bazilik.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "imbir",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0438\u043C\u0431\u0438\u0440\u044C",
      image: "/images/items/ovoshchi/imbir.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "hren",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0445\u0440\u0435\u043D",
      image: "/images/items/ovoshchi/hren.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "artishok",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0430\u0440\u0442\u0438\u0448\u043E\u043A",
      image: "/images/items/ovoshchi/artishok.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "fenhel",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0444\u0435\u043D\u0445\u0435\u043B\u044C",
      image: "/images/items/ovoshchi/fenhel.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "rukkola",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0443\u043A\u043A\u043E\u043B\u0430",
      image: "/images/items/ovoshchi/rukkola.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "shpinat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0448\u043F\u0438\u043D\u0430\u0442",
      image: "/images/items/ovoshchi/shpinat.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "salat",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u0430\u043B\u0430\u0442",
      image: "/images/items/ovoshchi/salat.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "repa",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0440\u0435\u043F\u0430",
      image: "/images/items/ovoshchi/repa.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "bryukva",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0431\u0440\u044E\u043A\u0432\u0430",
      image: "/images/items/ovoshchi/bryukva.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "topinambur",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0442\u043E\u043F\u0438\u043D\u0430\u043C\u0431\u0443\u0440",
      image: "/images/items/ovoshchi/topinambur.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "sparzha",
      categoryId: "ovoshchi",
      categoryName: "\u041E\u0432\u043E\u0449\u0438",
      title: "\u0441\u043F\u0430\u0440\u0436\u0430",
      image: "/images/items/ovoshchi/sparzha.jpg",
      categoryImage: "/images/categories/ovoshchi.jpg"
    },
    {
      id: "shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/shokolad.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "molochnyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/molochnyy_shokolad.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "temnyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u0451\u043C\u043D\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/temnyy_shokolad.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "belyy_shokolad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u0435\u043B\u044B\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/belyy_shokolad.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "karamel",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0430\u0440\u0430\u043C\u0435\u043B\u044C",
      image: "/images/items/sladosti_i_deserty/karamel.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "iris",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0438\u0440\u0438\u0441",
      image: "/images/items/sladosti_i_deserty/iris.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "marmelad",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0440\u043C\u0435\u043B\u0430\u0434",
      image: "/images/items/sladosti_i_deserty/marmelad.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "ledentsy",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043B\u0435\u0434\u0435\u043D\u0446\u044B",
      image: "/images/items/sladosti_i_deserty/ledentsy.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "pechene",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0435\u0447\u0435\u043D\u044C\u0435",
      image: "/images/items/sladosti_i_deserty/pechene.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "vafli",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0432\u0430\u0444\u043B\u0438",
      image: "/images/items/sladosti_i_deserty/vafli.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "pryaniki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0440\u044F\u043D\u0438\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/pryaniki.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "keks",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0435\u043A\u0441",
      image: "/images/items/sladosti_i_deserty/keks.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "maffin",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0444\u0444\u0438\u043D",
      image: "/images/items/sladosti_i_deserty/maffin.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "kruassan",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043A\u0440\u0443\u0430\u0441\u0441\u0430\u043D",
      image: "/images/items/sladosti_i_deserty/kruassan.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "ekler",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u044D\u043A\u043B\u0435\u0440",
      image: "/images/items/sladosti_i_deserty/ekler.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "makaruny",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u043A\u0430\u0440\u0443\u043D\u044B",
      image: "/images/items/sladosti_i_deserty/makaruny.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "tort",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u043E\u0440\u0442",
      image: "/images/items/sladosti_i_deserty/tort.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "chizkeyk",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0447\u0438\u0437\u043A\u0435\u0439\u043A",
      image: "/images/items/sladosti_i_deserty/chizkeyk.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "tiramisu",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0442\u0438\u0440\u0430\u043C\u0438\u0441\u0443",
      image: "/images/items/sladosti_i_deserty/tiramisu.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "medovik",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0435\u0434\u043E\u0432\u0438\u043A",
      image: "/images/items/sladosti_i_deserty/medovik.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "napoleon",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043D\u0430\u043F\u043E\u043B\u0435\u043E\u043D",
      image: "/images/items/sladosti_i_deserty/napoleon.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "morozhenoe",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",
      image: "/images/items/sladosti_i_deserty/morozhenoe.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "plombir",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u043B\u043E\u043C\u0431\u0438\u0440",
      image: "/images/items/sladosti_i_deserty/plombir.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "sorbet",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0441\u043E\u0440\u0431\u0435\u0442",
      image: "/images/items/sladosti_i_deserty/sorbet.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "zefir",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0437\u0435\u0444\u0438\u0440",
      image: "/images/items/sladosti_i_deserty/zefir.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "pastila",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u0441\u0442\u0438\u043B\u0430",
      image: "/images/items/sladosti_i_deserty/pastila.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "sufle",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0441\u0443\u0444\u043B\u0435",
      image: "/images/items/sladosti_i_deserty/sufle.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "martsipan",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0430\u0440\u0446\u0438\u043F\u0430\u043D",
      image: "/images/items/sladosti_i_deserty/martsipan.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "nuga",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043D\u0443\u0433\u0430",
      image: "/images/items/sladosti_i_deserty/nuga.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "halva",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0445\u0430\u043B\u0432\u0430",
      image: "/images/items/sladosti_i_deserty/halva.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "pahlava",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u0445\u043B\u0430\u0432\u0430",
      image: "/images/items/sladosti_i_deserty/pahlava.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "varene",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0432\u0430\u0440\u0435\u043D\u044C\u0435",
      image: "/images/items/sladosti_i_deserty/varene.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "dzhem",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0434\u0436\u0435\u043C",
      image: "/images/items/sladosti_i_deserty/dzhem.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "med",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043C\u0451\u0434",
      image: "/images/items/sladosti_i_deserty/med.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "pankeyki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u0430\u043D\u043A\u0435\u0439\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/pankeyki.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "bliny",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u043B\u0438\u043D\u044B",
      image: "/images/items/sladosti_i_deserty/bliny.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "ponchiki",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u043F\u043E\u043D\u0447\u0438\u043A\u0438",
      image: "/images/items/sladosti_i_deserty/ponchiki.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "shtrudel",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u0442\u0440\u0443\u0434\u0435\u043B\u044C",
      image: "/images/items/sladosti_i_deserty/shtrudel.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "brauni",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0431\u0440\u0430\u0443\u043D\u0438",
      image: "/images/items/sladosti_i_deserty/brauni.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "shokoladnyy_muss",
      categoryId: "sladosti_i_deserty",
      categoryName: "\u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u044B",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439 \u043C\u0443\u0441\u0441",
      image: "/images/items/sladosti_i_deserty/shokoladnyy_muss.jpg",
      categoryImage: "/images/categories/sladosti_i_deserty.jpg"
    },
    {
      id: "voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/voda.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "mineralnaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/mineralnaya_voda.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "gazirovannaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/gazirovannaya_voda.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kola",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043B\u0430",
      image: "/images/items/napitki_bezalkogolnye/kola.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "limonad",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043B\u0438\u043C\u043E\u043D\u0430\u0434",
      image: "/images/items/napitki_bezalkogolnye/limonad.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "apelsinovyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/apelsinovyy_sok.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "yablochnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044F\u0431\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/yablochnyy_sok.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "vinogradnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/vinogradnyy_sok.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "granatovyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u0440\u0430\u043D\u0430\u0442\u043E\u0432\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/granatovyy_sok.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "tomatnyy_sok",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0442\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0441\u043E\u043A",
      image: "/images/items/napitki_bezalkogolnye/tomatnyy_sok.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "chernyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/chernyy_chay.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "zelenyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/zelenyy_chay.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "travyanoy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0442\u0440\u0430\u0432\u044F\u043D\u043E\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/travyanoy_chay.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "belyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/belyy_chay.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "ulun",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0443\u043B\u0443\u043D",
      image: "/images/items/napitki_bezalkogolnye/ulun.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "puer",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043F\u0443\u044D\u0440",
      image: "/images/items/napitki_bezalkogolnye/puer.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kofe",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u0444\u0435",
      image: "/images/items/napitki_bezalkogolnye/kofe.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "espresso",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044D\u0441\u043F\u0440\u0435\u0441\u0441\u043E",
      image: "/images/items/napitki_bezalkogolnye/espresso.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "latte",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043B\u0430\u0442\u0442\u0435",
      image: "/images/items/napitki_bezalkogolnye/latte.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kapuchino",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0430\u043F\u0443\u0447\u0438\u043D\u043E",
      image: "/images/items/napitki_bezalkogolnye/kapuchino.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "amerikano",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u043E",
      image: "/images/items/napitki_bezalkogolnye/amerikano.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "mokko",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043A\u043A\u043E",
      image: "/images/items/napitki_bezalkogolnye/mokko.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kakao",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0430\u043A\u0430\u043E",
      image: "/images/items/napitki_bezalkogolnye/kakao.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "goryachiy_shokolad",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0433\u043E\u0440\u044F\u0447\u0438\u0439 \u0448\u043E\u043A\u043E\u043B\u0430\u0434",
      image: "/images/items/napitki_bezalkogolnye/goryachiy_shokolad.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kompot",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043C\u043F\u043E\u0442",
      image: "/images/items/napitki_bezalkogolnye/kompot.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "mors",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441",
      image: "/images/items/napitki_bezalkogolnye/mors.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kvas",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0432\u0430\u0441",
      image: "/images/items/napitki_bezalkogolnye/kvas.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "molochnyy_kokteyl",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C",
      image: "/images/items/napitki_bezalkogolnye/molochnyy_kokteyl.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "smuzi",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0441\u043C\u0443\u0437\u0438",
      image: "/images/items/napitki_bezalkogolnye/smuzi.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "fresh",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0444\u0440\u0435\u0448",
      image: "/images/items/napitki_bezalkogolnye/fresh.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kokosovaya_voda",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u043E\u043A\u043E\u0441\u043E\u0432\u0430\u044F \u0432\u043E\u0434\u0430",
      image: "/images/items/napitki_bezalkogolnye/kokosovaya_voda.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "energetik",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A",
      image: "/images/items/napitki_bezalkogolnye/energetik.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "ayran",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0430\u0439\u0440\u0430\u043D",
      image: "/images/items/napitki_bezalkogolnye/ayran.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "kefir",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043A\u0435\u0444\u0438\u0440",
      image: "/images/items/napitki_bezalkogolnye/kefir.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "pitevoy_yogurt",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043F\u0438\u0442\u044C\u0435\u0432\u043E\u0439 \u0439\u043E\u0433\u0443\u0440\u0442",
      image: "/images/items/napitki_bezalkogolnye/pitevoy_yogurt.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "moloko",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u043E\u043B\u043E\u043A\u043E",
      image: "/images/items/napitki_bezalkogolnye/moloko.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "matcha",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u043C\u0430\u0442\u0447\u0430",
      image: "/images/items/napitki_bezalkogolnye/matcha.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "holodnyy_chay",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0447\u0430\u0439",
      image: "/images/items/napitki_bezalkogolnye/holodnyy_chay.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "raf_kofe",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0440\u0430\u0444-\u043A\u043E\u0444\u0435",
      image: "/images/items/napitki_bezalkogolnye/raf_kofe.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "chay_s_limonom",
      categoryId: "napitki_bezalkogolnye",
      categoryName: "\u041D\u0430\u043F\u0438\u0442\u043A\u0438 \u0431\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435",
      title: "\u0447\u0430\u0439 \u0441 \u043B\u0438\u043C\u043E\u043D\u043E\u043C",
      image: "/images/items/napitki_bezalkogolnye/chay_s_limonom.jpg",
      categoryImage: "/images/categories/napitki_bezalkogolnye.jpg"
    },
    {
      id: "pitstsa",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0438\u0446\u0446\u0430",
      image: "/images/items/populyarnye_blyuda/pitstsa.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "burger",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/populyarnye_blyuda/burger.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "sushi",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0443\u0448\u0438",
      image: "/images/items/populyarnye_blyuda/sushi.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "rolly",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u043E\u043B\u043B\u044B",
      image: "/images/items/populyarnye_blyuda/rolly.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "pasta",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0430\u0441\u0442\u0430",
      image: "/images/items/populyarnye_blyuda/pasta.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "steyk",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0442\u0435\u0439\u043A",
      image: "/images/items/populyarnye_blyuda/steyk.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "shashlyk",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0448\u0430\u0448\u043B\u044B\u043A",
      image: "/images/items/populyarnye_blyuda/shashlyk.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "pelmeni",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0435\u043B\u044C\u043C\u0435\u043D\u0438",
      image: "/images/items/populyarnye_blyuda/pelmeni.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "vareniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0432\u0430\u0440\u0435\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/vareniki.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "borsch",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u043E\u0440\u0449",
      image: "/images/items/populyarnye_blyuda/borsch.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "plov",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u043B\u043E\u0432",
      image: "/images/items/populyarnye_blyuda/plov.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "kartoshka_fri",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",
      image: "/images/items/populyarnye_blyuda/kartoshka_fri.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "hot_dog",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u043E\u0442-\u0434\u043E\u0433",
      image: "/images/items/populyarnye_blyuda/hot_dog.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "tako",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0442\u0430\u043A\u043E",
      image: "/images/items/populyarnye_blyuda/tako.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "shaurma",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0448\u0430\u0443\u0440\u043C\u0430",
      image: "/images/items/populyarnye_blyuda/shaurma.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "lazanya",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043B\u0430\u0437\u0430\u043D\u044C\u044F",
      image: "/images/items/populyarnye_blyuda/lazanya.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "rizotto",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0438\u0437\u043E\u0442\u0442\u043E",
      image: "/images/items/populyarnye_blyuda/rizotto.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "omlet",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043E\u043C\u043B\u0435\u0442",
      image: "/images/items/populyarnye_blyuda/omlet.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "bliny",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0431\u043B\u0438\u043D\u044B",
      image: "/images/items/populyarnye_blyuda/bliny.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "salat_tsezar",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u0430\u043B\u0430\u0442 \u0446\u0435\u0437\u0430\u0440\u044C",
      image: "/images/items/populyarnye_blyuda/salat_tsezar.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "grecheskiy_salat",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u043B\u0430\u0442",
      image: "/images/items/populyarnye_blyuda/grecheskiy_salat.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "ramen",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0430\u043C\u0435\u043D",
      image: "/images/items/populyarnye_blyuda/ramen.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "tom_yam",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0442\u043E\u043C-\u044F\u043C",
      image: "/images/items/populyarnye_blyuda/tom_yam.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "lapsha_vok",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043B\u0430\u043F\u0448\u0430 \u0432\u043E\u043A",
      image: "/images/items/populyarnye_blyuda/lapsha_vok.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "kurinye_krylyshki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/kurinye_krylyshki.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "naggetsy",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043D\u0430\u0433\u0433\u0435\u0442\u0441\u044B",
      image: "/images/items/populyarnye_blyuda/naggetsy.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "kotleta",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043A\u043E\u0442\u043B\u0435\u0442\u0430",
      image: "/images/items/populyarnye_blyuda/kotleta.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "pyure",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u044E\u0440\u0435",
      image: "/images/items/populyarnye_blyuda/pyure.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "grechka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0440\u0435\u0447\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/grechka.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "ris",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0440\u0438\u0441",
      image: "/images/items/populyarnye_blyuda/ris.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "hinkali",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u0438\u043D\u043A\u0430\u043B\u0438",
      image: "/images/items/populyarnye_blyuda/hinkali.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "hachapuri",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0445\u0430\u0447\u0430\u043F\u0443\u0440\u0438",
      image: "/images/items/populyarnye_blyuda/hachapuri.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "falafel",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0444\u0430\u043B\u0430\u0444\u0435\u043B\u044C",
      image: "/images/items/populyarnye_blyuda/falafel.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "paelya",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043F\u0430\u044D\u043B\u044C\u044F",
      image: "/images/items/populyarnye_blyuda/paelya.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "gulyash",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0433\u0443\u043B\u044F\u0448",
      image: "/images/items/populyarnye_blyuda/gulyash.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "okroshka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u043E\u043A\u0440\u043E\u0448\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/okroshka.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "solyanka",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u043E\u043B\u044F\u043D\u043A\u0430",
      image: "/images/items/populyarnye_blyuda/solyanka.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "syrniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0441\u044B\u0440\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/syrniki.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "draniki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0434\u0440\u0430\u043D\u0438\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/draniki.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "chebureki",
      categoryId: "populyarnye_blyuda",
      categoryName: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0431\u043B\u044E\u0434\u0430",
      title: "\u0447\u0435\u0431\u0443\u0440\u0435\u043A\u0438",
      image: "/images/items/populyarnye_blyuda/chebureki.jpg",
      categoryImage: "/images/categories/populyarnye_blyuda.jpg"
    },
    {
      id: "burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/burger.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "chizburger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0447\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/chizburger.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "dvoynoy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/dvoynoy_burger.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kartoshka_fri",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",
      image: "/images/items/fastfud/kartoshka_fri.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "naggetsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043D\u0430\u0433\u0433\u0435\u0442\u0441\u044B",
      image: "/images/items/fastfud/naggetsy.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "hot_dog",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0445\u043E\u0442-\u0434\u043E\u0433",
      image: "/images/items/fastfud/hot_dog.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "shaurma",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0448\u0430\u0443\u0440\u043C\u0430",
      image: "/images/items/fastfud/shaurma.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "doner",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0434\u043E\u043D\u0435\u0440",
      image: "/images/items/fastfud/doner.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "tako",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0442\u0430\u043A\u043E",
      image: "/images/items/fastfud/tako.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "burrito",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0440\u0438\u0442\u043E",
      image: "/images/items/fastfud/burrito.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pitstsa_pepperoni",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043F\u0435\u043F\u043F\u0435\u0440\u043E\u043D\u0438",
      image: "/images/items/fastfud/pitstsa_pepperoni.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pitstsa_margarita",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",
      image: "/images/items/fastfud/pitstsa_margarita.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "sendvich",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447",
      image: "/images/items/fastfud/sendvich.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "klab_sendvich",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043B\u0430\u0431-\u0441\u044D\u043D\u0434\u0432\u0438\u0447",
      image: "/images/items/fastfud/klab_sendvich.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kurinye_krylyshki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043A\u0440\u044B\u043B\u044B\u0448\u043A\u0438",
      image: "/images/items/fastfud/kurinye_krylyshki.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "lukovye_koltsa",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043B\u0443\u043A\u043E\u0432\u044B\u0435 \u043A\u043E\u043B\u044C\u0446\u0430",
      image: "/images/items/fastfud/lukovye_koltsa.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "stripsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u0442\u0440\u0438\u043F\u0441\u044B",
      image: "/images/items/fastfud/stripsy.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kesadilya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0435\u0441\u0430\u0434\u0438\u043B\u044C\u044F",
      image: "/images/items/fastfud/kesadilya.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "falafel",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0444\u0430\u043B\u0430\u0444\u0435\u043B\u044C",
      image: "/images/items/fastfud/falafel.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "giros",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0433\u0438\u0440\u043E\u0441",
      image: "/images/items/fastfud/giros.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "panini",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0430\u043D\u0438\u043D\u0438",
      image: "/images/items/fastfud/panini.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kebab",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0435\u0431\u0430\u0431",
      image: "/images/items/fastfud/kebab.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pita",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0442\u0430",
      image: "/images/items/fastfud/pita.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "roll_s_kuritsey",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0440\u043E\u043B\u043B \u0441 \u043A\u0443\u0440\u0438\u0446\u0435\u0439",
      image: "/images/items/fastfud/roll_s_kuritsey.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "chipsy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0447\u0438\u043F\u0441\u044B",
      image: "/images/items/fastfud/chipsy.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "nachos",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043D\u0430\u0447\u043E\u0441",
      image: "/images/items/fastfud/nachos.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "korn_dog",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043E\u0440\u043D-\u0434\u043E\u0433",
      image: "/images/items/fastfud/korn_dog.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "burger_s_bekonom",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0435\u043A\u043E\u043D\u043E\u043C",
      image: "/images/items/fastfud/burger_s_bekonom.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "rybnyy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0440\u044B\u0431\u043D\u044B\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/rybnyy_burger.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "veganskiy_burger",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0432\u0435\u0433\u0430\u043D\u0441\u043A\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
      image: "/images/items/fastfud/veganskiy_burger.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "molochnyy_kokteyl",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C",
      image: "/images/items/fastfud/molochnyy_kokteyl.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kola",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u043E\u043B\u0430",
      image: "/images/items/fastfud/kola.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "limonad",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043B\u0438\u043C\u043E\u043D\u0430\u0434",
      image: "/images/items/fastfud/limonad.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "kartofelnye_dolki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043A\u0430\u0440\u0442\u043E\u0444\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043B\u044C\u043A\u0438",
      image: "/images/items/fastfud/kartofelnye_dolki.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "syrnye_palochki",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044B\u0440\u043D\u044B\u0435 \u043F\u0430\u043B\u043E\u0447\u043A\u0438",
      image: "/images/items/fastfud/syrnye_palochki.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pitstsa_chetyre_syra",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u044B\u0440\u0430",
      image: "/images/items/fastfud/pitstsa_chetyre_syra.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pitstsa_gavayskaya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u0433\u0430\u0432\u0430\u0439\u0441\u043A\u0430\u044F",
      image: "/images/items/fastfud/pitstsa_gavayskaya.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "pitstsa_myasnaya",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u043F\u0438\u0446\u0446\u0430 \u043C\u044F\u0441\u043D\u0430\u044F",
      image: "/images/items/fastfud/pitstsa_myasnaya.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "sendvich_s_tuntsom",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447 \u0441 \u0442\u0443\u043D\u0446\u043E\u043C",
      image: "/images/items/fastfud/sendvich_s_tuntsom.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "sendvich_s_indeykoy",
      categoryId: "fastfud",
      categoryName: "\u0424\u0430\u0441\u0442\u0444\u0443\u0434",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447 \u0441 \u0438\u043D\u0434\u0435\u0439\u043A\u043E\u0439",
      image: "/images/items/fastfud/sendvich_s_indeykoy.jpg",
      categoryImage: "/images/categories/fastfud.jpg"
    },
    {
      id: "ketchup",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0435\u0442\u0447\u0443\u043F",
      image: "/images/items/sousy_i_pripravy/ketchup.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "mayonez",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u0430\u0439\u043E\u043D\u0435\u0437",
      image: "/images/items/sousy_i_pripravy/mayonez.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "gorchitsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0433\u043E\u0440\u0447\u0438\u0446\u0430",
      image: "/images/items/sousy_i_pripravy/gorchitsa.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "soevyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u043E\u0435\u0432\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/soevyy_sous.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "barbekyu_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0430\u0440\u0431\u0435\u043A\u044E \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/barbekyu_sous.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "syrnyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u044B\u0440\u043D\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/syrnyy_sous.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "chesnochnyy_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0435\u0441\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/chesnochnyy_sous.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "chili_sous",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0438\u043B\u0438 \u0441\u043E\u0443\u0441",
      image: "/images/items/sousy_i_pripravy/chili_sous.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "tabasko",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0430\u0431\u0430\u0441\u043A\u043E",
      image: "/images/items/sousy_i_pripravy/tabasko.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "pesto",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0435\u0441\u0442\u043E",
      image: "/images/items/sousy_i_pripravy/pesto.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "salsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0441\u0430\u043B\u044C\u0441\u0430",
      image: "/images/items/sousy_i_pripravy/salsa.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "teriyaki",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0435\u0440\u0438\u044F\u043A\u0438",
      image: "/images/items/sousy_i_pripravy/teriyaki.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "tkemali",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u043A\u0435\u043C\u0430\u043B\u0438",
      image: "/images/items/sousy_i_pripravy/tkemali.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "adzhika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0430\u0434\u0436\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/adzhika.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "hren",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0445\u0440\u0435\u043D",
      image: "/images/items/sousy_i_pripravy/hren.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "vasabi",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0432\u0430\u0441\u0430\u0431\u0438",
      image: "/images/items/sousy_i_pripravy/vasabi.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "karri",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0430\u0440\u0440\u0438",
      image: "/images/items/sousy_i_pripravy/karri.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "paprika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0430\u043F\u0440\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/paprika.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "chernyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/chernyy_perets.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "belyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0435\u043B\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/belyy_perets.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "krasnyy_perets",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0446",
      image: "/images/items/sousy_i_pripravy/krasnyy_perets.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "kurkuma",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0443\u0440\u043A\u0443\u043C\u0430",
      image: "/images/items/sousy_i_pripravy/kurkuma.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "koritsa",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u043E\u0440\u0438\u0446\u0430",
      image: "/images/items/sousy_i_pripravy/koritsa.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "muskatnyy_oreh",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u0443\u0441\u043A\u0430\u0442\u043D\u044B\u0439 \u043E\u0440\u0435\u0445",
      image: "/images/items/sousy_i_pripravy/muskatnyy_oreh.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "imbir",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0438\u043C\u0431\u0438\u0440\u044C",
      image: "/images/items/sousy_i_pripravy/imbir.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "koriandr",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u043E\u0440\u0438\u0430\u043D\u0434\u0440",
      image: "/images/items/sousy_i_pripravy/koriandr.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "zira",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0437\u0438\u0440\u0430",
      image: "/images/items/sousy_i_pripravy/zira.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "oregano",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043E\u0440\u0435\u0433\u0430\u043D\u043E",
      image: "/images/items/sousy_i_pripravy/oregano.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "bazilik",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0431\u0430\u0437\u0438\u043B\u0438\u043A",
      image: "/images/items/sousy_i_pripravy/bazilik.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "timyan",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0442\u0438\u043C\u044C\u044F\u043D",
      image: "/images/items/sousy_i_pripravy/timyan.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "rozmarin",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0440\u043E\u0437\u043C\u0430\u0440\u0438\u043D",
      image: "/images/items/sousy_i_pripravy/rozmarin.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "lavrovyy_list",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043B\u0430\u0432\u0440\u043E\u0432\u044B\u0439 \u043B\u0438\u0441\u0442",
      image: "/images/items/sousy_i_pripravy/lavrovyy_list.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "ukrop",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0443\u043A\u0440\u043E\u043F",
      image: "/images/items/sousy_i_pripravy/ukrop.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "petrushka",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043F\u0435\u0442\u0440\u0443\u0448\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/petrushka.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "kinza",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0438\u043D\u0437\u0430",
      image: "/images/items/sousy_i_pripravy/kinza.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "myata",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043C\u044F\u0442\u0430",
      image: "/images/items/sousy_i_pripravy/myata.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "shafran",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0448\u0430\u0444\u0440\u0430\u043D",
      image: "/images/items/sousy_i_pripravy/shafran.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "kardamon",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u043A\u0430\u0440\u0434\u0430\u043C\u043E\u043D",
      image: "/images/items/sousy_i_pripravy/kardamon.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "gvozdika",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0433\u0432\u043E\u0437\u0434\u0438\u043A\u0430",
      image: "/images/items/sousy_i_pripravy/gvozdika.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "vanil",
      categoryId: "sousy_i_pripravy",
      categoryName: "\u0421\u043E\u0443\u0441\u044B \u0438 \u043F\u0440\u0438\u043F\u0440\u0430\u0432\u044B",
      title: "\u0432\u0430\u043D\u0438\u043B\u044C",
      image: "/images/items/sousy_i_pripravy/vanil.jpg",
      categoryImage: "/images/categories/sousy_i_pripravy.jpg"
    },
    {
      id: "futbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0443\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/futbol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "basketbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/basketbol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "tennis",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0435\u043D\u043D\u0438\u0441",
      image: "/images/items/vidy_sporta/tennis.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "voleybol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u043E\u043B\u0435\u0439\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/voleybol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "hokkey",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0445\u043E\u043A\u043A\u0435\u0439",
      image: "/images/items/vidy_sporta/hokkey.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "boks",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u043E\u043A\u0441",
      image: "/images/items/vidy_sporta/boks.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "mma",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "MMA",
      image: "/images/items/vidy_sporta/mma.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "plavanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u043B\u0430\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/plavanie.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "beg",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0435\u0433",
      image: "/images/items/vidy_sporta/beg.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "velosport",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u0435\u043B\u043E\u0441\u043F\u043E\u0440\u0442",
      image: "/images/items/vidy_sporta/velosport.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "biatlon",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0438\u0430\u0442\u043B\u043E\u043D",
      image: "/images/items/vidy_sporta/biatlon.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "lyzhi",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043B\u044B\u0436\u0438",
      image: "/images/items/vidy_sporta/lyzhi.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "snoubord",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043D\u043E\u0443\u0431\u043E\u0440\u0434",
      image: "/images/items/vidy_sporta/snoubord.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "skeytbording",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/skeytbording.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "serfing",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u0435\u0440\u0444\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/serfing.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "shahmaty",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/vidy_sporta/shahmaty.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "nastolnyy_tennis",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043D\u043D\u0438\u0441",
      image: "/images/items/vidy_sporta/nastolnyy_tennis.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "gimnastika",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u0438\u043C\u043D\u0430\u0441\u0442\u0438\u043A\u0430",
      image: "/images/items/vidy_sporta/gimnastika.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "formula_1",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u043E\u0440\u043C\u0443\u043B\u0430-1",
      image: "/images/items/vidy_sporta/formula_1.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "karate",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u0430\u0440\u0430\u0442\u0435",
      image: "/images/items/vidy_sporta/karate.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "dzyudo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0434\u0437\u044E\u0434\u043E",
      image: "/images/items/vidy_sporta/dzyudo.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "thekvondo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0445\u044D\u043A\u0432\u043E\u043D\u0434\u043E",
      image: "/images/items/vidy_sporta/thekvondo.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "regbi",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0440\u0435\u0433\u0431\u0438",
      image: "/images/items/vidy_sporta/regbi.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "golf",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u043E\u043B\u044C\u0444",
      image: "/images/items/vidy_sporta/golf.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "beysbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0431\u0435\u0439\u0441\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/beysbol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "amerikanskiy_futbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0444\u0443\u0442\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/amerikanskiy_futbol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "kriket",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u0440\u0438\u043A\u0435\u0442",
      image: "/images/items/vidy_sporta/kriket.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "figurnoe_katanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0438\u0433\u0443\u0440\u043D\u043E\u0435 \u043A\u0430\u0442\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/figurnoe_katanie.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "konkobezhnyy_sport",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043A\u043E\u043D\u044C\u043A\u043E\u0431\u0435\u0436\u043D\u044B\u0439 \u0441\u043F\u043E\u0440\u0442",
      image: "/images/items/vidy_sporta/konkobezhnyy_sport.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "skalolazanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u043A\u0430\u043B\u043E\u043B\u0430\u0437\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/skalolazanie.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "yoga",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0439\u043E\u0433\u0430",
      image: "/images/items/vidy_sporta/yoga.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "pilates",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u0438\u043B\u0430\u0442\u0435\u0441",
      image: "/images/items/vidy_sporta/pilates.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "tyazhelaya_atletika",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u044F\u0436\u0451\u043B\u0430\u044F \u0430\u0442\u043B\u0435\u0442\u0438\u043A\u0430",
      image: "/images/items/vidy_sporta/tyazhelaya_atletika.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "pauerlifting",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u043F\u0430\u0443\u044D\u0440\u043B\u0438\u0444\u0442\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/pauerlifting.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "strelba_iz_luka",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0441\u0442\u0440\u0435\u043B\u044C\u0431\u0430 \u0438\u0437 \u043B\u0443\u043A\u0430",
      image: "/images/items/vidy_sporta/strelba_iz_luka.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "fehtovanie",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0444\u0435\u0445\u0442\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/vidy_sporta/fehtovanie.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "gandbol",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0433\u0430\u043D\u0434\u0431\u043E\u043B",
      image: "/images/items/vidy_sporta/gandbol.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "vodnoe_polo",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0432\u043E\u0434\u043D\u043E\u0435 \u043F\u043E\u043B\u043E",
      image: "/images/items/vidy_sporta/vodnoe_polo.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "dayving",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0434\u0430\u0439\u0432\u0438\u043D\u0433",
      image: "/images/items/vidy_sporta/dayving.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "triatlon",
      categoryId: "vidy_sporta",
      categoryName: "\u0412\u0438\u0434\u044B \u0441\u043F\u043E\u0440\u0442\u0430",
      title: "\u0442\u0440\u0438\u0430\u0442\u043B\u043E\u043D",
      image: "/images/items/vidy_sporta/triatlon.jpg",
      categoryImage: "/images/categories/vidy_sporta.jpg"
    },
    {
      id: "risovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/risovanie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "fotografiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
      image: "/images/items/hobbi/fotografiya.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "puteshestviya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F",
      image: "/images/items/hobbi/puteshestviya.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "chtenie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0447\u0442\u0435\u043D\u0438\u0435",
      image: "/images/items/hobbi/chtenie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "sadovodstvo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u0430\u0434\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
      image: "/images/items/hobbi/sadovodstvo.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "rybalka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0440\u044B\u0431\u0430\u043B\u043A\u0430",
      image: "/images/items/hobbi/rybalka.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "ohota",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043E\u0445\u043E\u0442\u0430",
      image: "/images/items/hobbi/ohota.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "kulinariya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",
      image: "/images/items/hobbi/kulinariya.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "vypechka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u044B\u043F\u0435\u0447\u043A\u0430",
      image: "/images/items/hobbi/vypechka.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "nastolnye_igry",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      image: "/images/items/hobbi/nastolnye_igry.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "videoigry",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      image: "/images/items/hobbi/videoigry.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "kollektsionirovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/kollektsionirovanie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "vyazanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u044F\u0437\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/vyazanie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "shite",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0448\u0438\u0442\u044C\u0451",
      image: "/images/items/hobbi/shite.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "modelirovanie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      image: "/images/items/hobbi/modelirovanie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "origami",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043E\u0440\u0438\u0433\u0430\u043C\u0438",
      image: "/images/items/hobbi/origami.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "tantsy",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0442\u0430\u043D\u0446\u044B",
      image: "/images/items/hobbi/tantsy.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "penie",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u0435\u043D\u0438\u0435",
      image: "/images/items/hobbi/penie.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "igra_na_gitare",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0433\u0440\u0430 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435",
      image: "/images/items/hobbi/igra_na_gitare.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "igra_na_pianino",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0433\u0440\u0430 \u043D\u0430 \u043F\u0438\u0430\u043D\u0438\u043D\u043E",
      image: "/images/items/hobbi/igra_na_pianino.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "bloging",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0431\u043B\u043E\u0433\u0438\u043D\u0433",
      image: "/images/items/hobbi/bloging.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "podkasty",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u043E\u0434\u043A\u0430\u0441\u0442\u044B",
      image: "/images/items/hobbi/podkasty.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "yoga",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0439\u043E\u0433\u0430",
      image: "/images/items/hobbi/yoga.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "fitnes",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0444\u0438\u0442\u043D\u0435\u0441",
      image: "/images/items/hobbi/fitnes.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "beg",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0431\u0435\u0433",
      image: "/images/items/hobbi/beg.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "veloprogulki",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u0435\u043B\u043E\u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438",
      image: "/images/items/hobbi/veloprogulki.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "pohody",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043F\u043E\u0445\u043E\u0434\u044B",
      image: "/images/items/hobbi/pohody.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "kemping",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0435\u043C\u043F\u0438\u043D\u0433",
      image: "/images/items/hobbi/kemping.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "dayving",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0434\u0430\u0439\u0432\u0438\u043D\u0433",
      image: "/images/items/hobbi/dayving.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "snoubord",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u043D\u043E\u0443\u0431\u043E\u0440\u0434",
      image: "/images/items/hobbi/snoubord.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "skeytbording",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434\u0438\u043D\u0433",
      image: "/images/items/hobbi/skeytbording.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "shahmaty",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/hobbi/shahmaty.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "izuchenie_yazykov",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u043E\u0432",
      image: "/images/items/hobbi/izuchenie_yazykov.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "kalligrafiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u0430\u043B\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u044F",
      image: "/images/items/hobbi/kalligrafiya.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "goncharnoe_delo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0433\u043E\u043D\u0447\u0430\u0440\u043D\u043E\u0435 \u0434\u0435\u043B\u043E",
      image: "/images/items/hobbi/goncharnoe_delo.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "derevoobrabotka",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0434\u0435\u0440\u0435\u0432\u043E\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
      image: "/images/items/hobbi/derevoobrabotka.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "akvariumistika",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0430\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u0438\u0441\u0442\u0438\u043A\u0430",
      image: "/images/items/hobbi/akvariumistika.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "astronomiya",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0430\u0441\u0442\u0440\u043E\u043D\u043E\u043C\u0438\u044F",
      image: "/images/items/hobbi/astronomiya.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "kospley",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u043A\u043E\u0441\u043F\u043B\u0435\u0439",
      image: "/images/items/hobbi/kospley.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "volonterstvo",
      categoryId: "hobbi",
      categoryName: "\u0425\u043E\u0431\u0431\u0438",
      title: "\u0432\u043E\u043B\u043E\u043D\u0442\u0451\u0440\u0441\u0442\u0432\u043E",
      image: "/images/items/hobbi/volonterstvo.jpg",
      categoryImage: "/images/categories/hobbi.jpg"
    },
    {
      id: "minecraft",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Minecraft",
      image: "/images/items/videoigry/minecraft.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "gta_v",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "GTA V",
      image: "/images/items/videoigry/gta_v.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "counter_strike_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Counter-Strike 2",
      image: "/images/items/videoigry/counter_strike_2.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "dota_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Dota 2",
      image: "/images/items/videoigry/dota_2.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "fortnite",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Fortnite",
      image: "/images/items/videoigry/fortnite.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "pubg",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "PUBG",
      image: "/images/items/videoigry/pubg.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "roblox",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Roblox",
      image: "/images/items/videoigry/roblox.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "terraria",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Terraria",
      image: "/images/items/videoigry/terraria.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "the_witcher_3",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "The Witcher 3",
      image: "/images/items/videoigry/the_witcher_3.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "cyberpunk_2077",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Cyberpunk 2077",
      image: "/images/items/videoigry/cyberpunk_2077.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "skyrim",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Skyrim",
      image: "/images/items/videoigry/skyrim.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "half_life_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Half-Life 2",
      image: "/images/items/videoigry/half_life_2.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "portal_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Portal 2",
      image: "/images/items/videoigry/portal_2.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "among_us",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Among Us",
      image: "/images/items/videoigry/among_us.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "brawl_stars",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Brawl Stars",
      image: "/images/items/videoigry/brawl_stars.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "clash_royale",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Clash Royale",
      image: "/images/items/videoigry/clash_royale.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "fifa",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "FIFA",
      image: "/images/items/videoigry/fifa.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "need_for_speed",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Need for Speed",
      image: "/images/items/videoigry/need_for_speed.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "stardew_valley",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Stardew Valley",
      image: "/images/items/videoigry/stardew_valley.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "rust",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Rust",
      image: "/images/items/videoigry/rust.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "valorant",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Valorant",
      image: "/images/items/videoigry/valorant.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "league_of_legends",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "League of Legends",
      image: "/images/items/videoigry/league_of_legends.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "world_of_warcraft",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "World of Warcraft",
      image: "/images/items/videoigry/world_of_warcraft.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "overwatch",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Overwatch",
      image: "/images/items/videoigry/overwatch.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "apex_legends",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Apex Legends",
      image: "/images/items/videoigry/apex_legends.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "call_of_duty",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Call of Duty",
      image: "/images/items/videoigry/call_of_duty.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "battlefield",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Battlefield",
      image: "/images/items/videoigry/battlefield.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "red_dead_redemption_2",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Red Dead Redemption 2",
      image: "/images/items/videoigry/red_dead_redemption_2.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "elden_ring",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Elden Ring",
      image: "/images/items/videoigry/elden_ring.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "dark_souls",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Dark Souls",
      image: "/images/items/videoigry/dark_souls.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "hogwarts_legacy",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Hogwarts Legacy",
      image: "/images/items/videoigry/hogwarts_legacy.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "the_last_of_us",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "The Last of Us",
      image: "/images/items/videoigry/the_last_of_us.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "god_of_war",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "God of War",
      image: "/images/items/videoigry/god_of_war.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "uncharted",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Uncharted",
      image: "/images/items/videoigry/uncharted.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "resident_evil",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Resident Evil",
      image: "/images/items/videoigry/resident_evil.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "silent_hill",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Silent Hill",
      image: "/images/items/videoigry/silent_hill.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "mortal_kombat",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Mortal Kombat",
      image: "/images/items/videoigry/mortal_kombat.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "tekken",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Tekken",
      image: "/images/items/videoigry/tekken.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "street_fighter",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Street Fighter",
      image: "/images/items/videoigry/street_fighter.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "sims",
      categoryId: "videoigry",
      categoryName: "\u0412\u0438\u0434\u0435\u043E\u0438\u0433\u0440\u044B",
      title: "Sims",
      image: "/images/items/videoigry/sims.jpg",
      categoryImage: "/images/categories/videoigry.jpg"
    },
    {
      id: "monopoliya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u043E\u043D\u043E\u043F\u043E\u043B\u0438\u044F",
      image: "/images/items/nastolnye_igry/monopoliya.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "manchkin",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0430\u043D\u0447\u043A\u0438\u043D",
      image: "/images/items/nastolnye_igry/manchkin.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "imadzhinarium",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0418\u043C\u0430\u0434\u0436\u0438\u043D\u0430\u0440\u0438\u0443\u043C",
      image: "/images/items/nastolnye_igry/imadzhinarium.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "diksit",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u0438\u043A\u0441\u0438\u0442",
      image: "/images/items/nastolnye_igry/diksit.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "uno",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0423\u043D\u043E",
      image: "/images/items/nastolnye_igry/uno.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "dzhenga",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u0436\u0435\u043D\u0433\u0430",
      image: "/images/items/nastolnye_igry/dzhenga.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "erudit",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u042D\u0440\u0443\u0434\u0438\u0442",
      image: "/images/items/nastolnye_igry/erudit.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "karkasson",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0430\u0440\u043A\u0430\u0441\u0441\u043E\u043D",
      image: "/images/items/nastolnye_igry/karkasson.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "kolonizatory",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043E\u043B\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u044B",
      image: "/images/items/nastolnye_igry/kolonizatory.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "bilet_na_poezd",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0411\u0438\u043B\u0435\u0442 \u043D\u0430 \u043F\u043E\u0435\u0437\u0434",
      image: "/images/items/nastolnye_igry/bilet_na_poezd.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "kodovye_imena",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043E\u0434\u043E\u0432\u044B\u0435 \u0438\u043C\u0435\u043D\u0430",
      image: "/images/items/nastolnye_igry/kodovye_imena.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "mafiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0430\u0444\u0438\u044F",
      image: "/images/items/nastolnye_igry/mafiya.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "krokodil",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B",
      image: "/images/items/nastolnye_igry/krokodil.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "alias",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0410\u043B\u0438\u0430\u0441",
      image: "/images/items/nastolnye_igry/alias.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "aktiviti",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0410\u043A\u0442\u0438\u0432\u0438\u0442\u0438",
      image: "/images/items/nastolnye_igry/aktiviti.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "domino",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u043E\u043C\u0438\u043D\u043E",
      image: "/images/items/nastolnye_igry/domino.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "shashki",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0448\u0430\u0448\u043A\u0438",
      image: "/images/items/nastolnye_igry/shashki.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "shahmaty",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0448\u0430\u0445\u043C\u0430\u0442\u044B",
      image: "/images/items/nastolnye_igry/shahmaty.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "nardy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043D\u0430\u0440\u0434\u044B",
      image: "/images/items/nastolnye_igry/nardy.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "morskoy_boy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439",
      image: "/images/items/nastolnye_igry/morskoy_boy.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "poker",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043F\u043E\u043A\u0435\u0440",
      image: "/images/items/nastolnye_igry/poker.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "durak",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0434\u0443\u0440\u0430\u043A",
      image: "/images/items/nastolnye_igry/durak.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "preferans",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043F\u0440\u0435\u0444\u0435\u0440\u0430\u043D\u0441",
      image: "/images/items/nastolnye_igry/preferans.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "bridzh",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0431\u0440\u0438\u0434\u0436",
      image: "/images/items/nastolnye_igry/bridzh.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "loto",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u043B\u043E\u0442\u043E",
      image: "/images/items/nastolnye_igry/loto.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "svintus",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u0432\u0438\u043D\u0442\u0443\u0441",
      image: "/images/items/nastolnye_igry/svintus.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "beng",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0411\u044D\u043D\u0433",
      image: "/images/items/nastolnye_igry/beng.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "evolyutsiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u042D\u0432\u043E\u043B\u044E\u0446\u0438\u044F",
      image: "/images/items/nastolnye_igry/evolyutsiya.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "pandemiya",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041F\u0430\u043D\u0434\u0435\u043C\u0438\u044F",
      image: "/images/items/nastolnye_igry/pandemiya.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "gnomy_vrediteli",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0413\u043D\u043E\u043C\u044B-\u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/nastolnye_igry/gnomy_vrediteli.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "7_chudes",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "7 \u0447\u0443\u0434\u0435\u0441",
      image: "/images/items/nastolnye_igry/7_chudes.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "tsitadeli",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0426\u0438\u0442\u0430\u0434\u0435\u043B\u0438",
      image: "/images/items/nastolnye_igry/tsitadeli.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "karty_konflikta",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u0430\u0440\u0442\u044B \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430",
      image: "/images/items/nastolnye_igry/karty_konflikta.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "spyaschie_korolevy",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u043F\u044F\u0449\u0438\u0435 \u043A\u043E\u0440\u043E\u043B\u0435\u0432\u044B",
      image: "/images/items/nastolnye_igry/spyaschie_korolevy.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "dobbl",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0414\u043E\u0431\u0431\u043B\u044C",
      image: "/images/items/nastolnye_igry/dobbl.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "memo",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041C\u0435\u043C\u043E",
      image: "/images/items/nastolnye_igry/memo.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "kluedo",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u041A\u043B\u0443\u044D\u0434\u043E",
      image: "/images/items/nastolnye_igry/kluedo.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "risk",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0420\u0438\u0441\u043A",
      image: "/images/items/nastolnye_igry/risk.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "uzhas_arkhema",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0423\u0436\u0430\u0441 \u0410\u0440\u043A\u0445\u044D\u043C\u0430",
      image: "/images/items/nastolnye_igry/uzhas_arkhema.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "serp",
      categoryId: "nastolnye_igry",
      categoryName: "\u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",
      title: "\u0421\u0435\u0440\u043F",
      image: "/images/items/nastolnye_igry/serp.jpg",
      categoryImage: "/images/categories/nastolnye_igry.jpg"
    },
    {
      id: "titanik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0438\u0442\u0430\u043D\u0438\u043A",
      image: "/images/items/filmy/titanik.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "avatar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0410\u0432\u0430\u0442\u0430\u0440",
      image: "/images/items/filmy/avatar.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "interstellar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u043D\u0442\u0435\u0440\u0441\u0442\u0435\u043B\u043B\u0430\u0440",
      image: "/images/items/filmy/interstellar.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "matritsa",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0430\u0442\u0440\u0438\u0446\u0430",
      image: "/images/items/filmy/matritsa.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "forrest_gamp",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0424\u043E\u0440\u0440\u0435\u0441\u0442 \u0413\u0430\u043C\u043F",
      image: "/images/items/filmy/forrest_gamp.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "gladiator",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u043B\u0430\u0434\u0438\u0430\u0442\u043E\u0440",
      image: "/images/items/filmy/gladiator.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "dyuna",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u044E\u043D\u0430",
      image: "/images/items/filmy/dyuna.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "oppengeymer",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041E\u043F\u043F\u0435\u043D\u0433\u0435\u0439\u043C\u0435\u0440",
      image: "/images/items/filmy/oppengeymer.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "dzhoker",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0436\u043E\u043A\u0435\u0440",
      image: "/images/items/filmy/dzhoker.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "temnyy_rytsar",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0451\u043C\u043D\u044B\u0439 \u0440\u044B\u0446\u0430\u0440\u044C",
      image: "/images/items/filmy/temnyy_rytsar.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "shrek",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0428\u0440\u0435\u043A",
      image: "/images/items/filmy/shrek.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "korol_lev",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0440\u043E\u043B\u044C \u041B\u0435\u0432",
      image: "/images/items/filmy/korol_lev.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "holodnoe_serdtse",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
      image: "/images/items/filmy/holodnoe_serdtse.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "garri_potter",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0430\u0440\u0440\u0438 \u041F\u043E\u0442\u0442\u0435\u0440",
      image: "/images/items/filmy/garri_potter.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "vlastelin_kolets",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u043B\u0430\u0441\u0442\u0435\u043B\u0438\u043D \u043A\u043E\u043B\u0435\u0446",
      image: "/images/items/filmy/vlastelin_kolets.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "piraty_karibskogo_morya",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0438\u0440\u0430\u0442\u044B \u041A\u0430\u0440\u0438\u0431\u0441\u043A\u043E\u0433\u043E \u043C\u043E\u0440\u044F",
      image: "/images/items/filmy/piraty_karibskogo_morya.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "mstiteli",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0441\u0442\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/filmy/mstiteli.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "chelovek_pauk",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043F\u0430\u0443\u043A",
      image: "/images/items/filmy/chelovek_pauk.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "odin_doma",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041E\u0434\u0438\u043D \u0434\u043E\u043C\u0430",
      image: "/images/items/filmy/odin_doma.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "nazad_v_buduschee",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041D\u0430\u0437\u0430\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435",
      image: "/images/items/filmy/nazad_v_buduschee.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "terminator_2",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u0442\u043E\u0440 2",
      image: "/images/items/filmy/terminator_2.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "chuzhoy",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0443\u0436\u043E\u0439",
      image: "/images/items/filmy/chuzhoy.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "hischnik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u0438\u0449\u043D\u0438\u043A",
      image: "/images/items/filmy/hischnik.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "zelenaya_milya",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0435\u043B\u0451\u043D\u0430\u044F \u043C\u0438\u043B\u044F",
      image: "/images/items/filmy/zelenaya_milya.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "pobeg_iz_shoushenka",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u043E\u0431\u0435\u0433 \u0438\u0437 \u0428\u043E\u0443\u0448\u0435\u043D\u043A\u0430",
      image: "/images/items/filmy/pobeg_iz_shoushenka.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "boytsovskiy_klub",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u043E\u0439\u0446\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u043B\u0443\u0431",
      image: "/images/items/filmy/boytsovskiy_klub.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "kriminalnoe_chtivo",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0440\u0438\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0442\u0438\u0432\u043E",
      image: "/images/items/filmy/kriminalnoe_chtivo.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "nachalo",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041D\u0430\u0447\u0430\u043B\u043E",
      image: "/images/items/filmy/nachalo.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "la_la_lend",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0430-\u041B\u0430 \u041B\u0435\u043D\u0434",
      image: "/images/items/filmy/la_la_lend.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "zvezdnye_voyny",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0435 \u0432\u043E\u0439\u043D\u044B",
      image: "/images/items/filmy/zvezdnye_voyny.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "park_yurskogo_perioda",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0430\u0440\u043A \u042E\u0440\u0441\u043A\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430",
      image: "/images/items/filmy/park_yurskogo_perioda.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "missiya_nevypolnima",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0438\u0441\u0441\u0438\u044F \u043D\u0435\u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043C\u0430",
      image: "/images/items/filmy/missiya_nevypolnima.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "dzhon_uik",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0436\u043E\u043D \u0423\u0438\u043A",
      image: "/images/items/filmy/dzhon_uik.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "bezumnyy_maks",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u041C\u0430\u043A\u0441",
      image: "/images/items/filmy/bezumnyy_maks.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "igra_prestolov",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u0433\u0440\u0430 \u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043E\u0432",
      image: "/images/items/filmy/igra_prestolov.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "doktor_strendzh",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u0440\u044D\u043D\u0434\u0436",
      image: "/images/items/filmy/doktor_strendzh.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "betmen",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u044D\u0442\u043C\u0435\u043D",
      image: "/images/items/filmy/betmen.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "supermen",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0443\u043F\u0435\u0440\u043C\u0435\u043D",
      image: "/images/items/filmy/supermen.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "zheleznyy_chelovek",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
      image: "/images/items/filmy/zheleznyy_chelovek.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "chernaya_pantera",
      categoryId: "filmy",
      categoryName: "\u0424\u0438\u043B\u044C\u043C\u044B",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u043F\u0430\u043D\u0442\u0435\u0440\u0430",
      image: "/images/items/filmy/chernaya_pantera.jpg",
      categoryImage: "/images/categories/filmy.jpg"
    },
    {
      id: "shrek",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0428\u0440\u0435\u043A",
      image: "/images/items/multfilmy/shrek.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "korol_lev",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0440\u043E\u043B\u044C \u041B\u0435\u0432",
      image: "/images/items/multfilmy/korol_lev.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "holodnoe_serdtse",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0425\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",
      image: "/images/items/multfilmy/holodnoe_serdtse.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "istoriya_igrushek",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0433\u0440\u0443\u0448\u0435\u043A",
      image: "/images/items/multfilmy/istoriya_igrushek.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "v_poiskah_nemo",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412 \u043F\u043E\u0438\u0441\u043A\u0430\u0445 \u041D\u0435\u043C\u043E",
      image: "/images/items/multfilmy/v_poiskah_nemo.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "ratatuy",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u0442\u0430\u0442\u0443\u0439",
      image: "/images/items/multfilmy/ratatuy.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "vverh",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u0432\u0435\u0440\u0445",
      image: "/images/items/multfilmy/vverh.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "vall_i",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0412\u0410\u041B\u041B-\u0418",
      image: "/images/items/multfilmy/vall_i.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "zveropolis",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0417\u0432\u0435\u0440\u043E\u043F\u043E\u043B\u0438\u0441",
      image: "/images/items/multfilmy/zveropolis.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "moana",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u043E\u0430\u043D\u0430",
      image: "/images/items/multfilmy/moana.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "tayna_koko",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0439\u043D\u0430 \u041A\u043E\u043A\u043E",
      image: "/images/items/multfilmy/tayna_koko.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "gadkiy_ya",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0430\u0434\u043A\u0438\u0439 \u044F",
      image: "/images/items/multfilmy/gadkiy_ya.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "minony",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0438\u043D\u044C\u043E\u043D\u044B",
      image: "/images/items/multfilmy/minony.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "madagaskar",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0430\u0434\u0430\u0433\u0430\u0441\u043A\u0430\u0440",
      image: "/images/items/multfilmy/madagaskar.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "kung_fu_panda",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0443\u043D\u0433-\u0444\u0443 \u041F\u0430\u043D\u0434\u0430",
      image: "/images/items/multfilmy/kung_fu_panda.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "kak_priruchit_drakona",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0430\u043A \u043F\u0440\u0438\u0440\u0443\u0447\u0438\u0442\u044C \u0434\u0440\u0430\u043A\u043E\u043D\u0430",
      image: "/images/items/multfilmy/kak_priruchit_drakona.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "lednikovyy_period",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0435\u0434\u043D\u0438\u043A\u043E\u0432\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434",
      image: "/images/items/multfilmy/lednikovyy_period.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "tachki",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0447\u043A\u0438",
      image: "/images/items/multfilmy/tachki.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "supersemeyka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0443\u043F\u0435\u0440\u0441\u0435\u043C\u0435\u0439\u043A\u0430",
      image: "/images/items/multfilmy/supersemeyka.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "monstry_na_kanikulah",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u043E\u043D\u0441\u0442\u0440\u044B \u043D\u0430 \u043A\u0430\u043D\u0438\u043A\u0443\u043B\u0430\u0445",
      image: "/images/items/multfilmy/monstry_na_kanikulah.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "spirit",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u043F\u0438\u0440\u0438\u0442",
      image: "/images/items/multfilmy/spirit.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "rango",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u043D\u0433\u043E",
      image: "/images/items/multfilmy/rango.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "kot_v_sapogah",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043E\u0442 \u0432 \u0441\u0430\u043F\u043E\u0433\u0430\u0445",
      image: "/images/items/multfilmy/kot_v_sapogah.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "semeyka_kruds",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u0435\u043C\u0435\u0439\u043A\u0430 \u041A\u0440\u0443\u0434\u0441",
      image: "/images/items/multfilmy/semeyka_kruds.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "balto",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0430\u043B\u0442\u043E",
      image: "/images/items/multfilmy/balto.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "aladdin",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0410\u043B\u0430\u0434\u0434\u0438\u043D",
      image: "/images/items/multfilmy/aladdin.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "krasavitsa_i_chudovische",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430 \u0438 \u0447\u0443\u0434\u043E\u0432\u0438\u0449\u0435",
      image: "/images/items/multfilmy/krasavitsa_i_chudovische.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "rusalochka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0443\u0441\u0430\u043B\u043E\u0447\u043A\u0430",
      image: "/images/items/multfilmy/rusalochka.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "mulan",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041C\u0443\u043B\u0430\u043D",
      image: "/images/items/multfilmy/mulan.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "pokahontas",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u043E\u043A\u0430\u0445\u043E\u043D\u0442\u0430\u0441",
      image: "/images/items/multfilmy/pokahontas.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "spyaschaya_krasavitsa",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0421\u043F\u044F\u0449\u0430\u044F \u043A\u0440\u0430\u0441\u0430\u0432\u0438\u0446\u0430",
      image: "/images/items/multfilmy/spyaschaya_krasavitsa.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "belosnezhka",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u0435\u043B\u043E\u0441\u043D\u0435\u0436\u043A\u0430",
      image: "/images/items/multfilmy/belosnezhka.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "bembi",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0411\u044D\u043C\u0431\u0438",
      image: "/images/items/multfilmy/bembi.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "dambo",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0414\u0430\u043C\u0431\u043E",
      image: "/images/items/multfilmy/dambo.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "pinokkio",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041F\u0438\u043D\u043E\u043A\u043A\u0438\u043E",
      image: "/images/items/multfilmy/pinokkio.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "lilo_i_stich",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041B\u0438\u043B\u043E \u0438 \u0421\u0442\u0438\u0447",
      image: "/images/items/multfilmy/lilo_i_stich.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "ralf",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0420\u0430\u043B\u044C\u0444",
      image: "/images/items/multfilmy/ralf.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "gerkules",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0413\u0435\u0440\u043A\u0443\u043B\u0435\u0441",
      image: "/images/items/multfilmy/gerkules.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "tarzan",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u0422\u0430\u0440\u0437\u0430\u043D",
      image: "/images/items/multfilmy/tarzan.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "kniga_dzhungley",
      categoryId: "multfilmy",
      categoryName: "\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",
      title: "\u041A\u043D\u0438\u0433\u0430 \u0434\u0436\u0443\u043D\u0433\u043B\u0435\u0439",
      image: "/images/items/multfilmy/kniga_dzhungley.jpg",
      categoryImage: "/images/categories/multfilmy.jpg"
    },
    {
      id: "vo_vse_tyazhkie",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0412\u043E \u0432\u0441\u0435 \u0442\u044F\u0436\u043A\u0438\u0435",
      image: "/images/items/serialy/vo_vse_tyazhkie.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "igra_prestolov",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0418\u0433\u0440\u0430 \u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043E\u0432",
      image: "/images/items/serialy/igra_prestolov.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "druzya",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u0440\u0443\u0437\u044C\u044F",
      image: "/images/items/serialy/druzya.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "ofis",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0444\u0438\u0441",
      image: "/images/items/serialy/ofis.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "teoriya_bolshogo_vzryva",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0422\u0435\u043E\u0440\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0432\u0437\u0440\u044B\u0432\u0430",
      image: "/images/items/serialy/teoriya_bolshogo_vzryva.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "doktor_haus",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0425\u0430\u0443\u0441",
      image: "/images/items/serialy/doktor_haus.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "sherlok",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0428\u0435\u0440\u043B\u043E\u043A",
      image: "/images/items/serialy/sherlok.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "ochen_strannye_dela",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0447\u0435\u043D\u044C \u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u0434\u0435\u043B\u0430",
      image: "/images/items/serialy/ochen_strannye_dela.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "hodyachie_mertvetsy",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0425\u043E\u0434\u044F\u0447\u0438\u0435 \u043C\u0435\u0440\u0442\u0432\u0435\u0446\u044B",
      image: "/images/items/serialy/hodyachie_mertvetsy.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "ostatsya_v_zhivyh",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0432 \u0436\u0438\u0432\u044B\u0445",
      image: "/images/items/serialy/ostatsya_v_zhivyh.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "klan_soprano",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u043B\u0430\u043D \u0421\u043E\u043F\u0440\u0430\u043D\u043E",
      image: "/images/items/serialy/klan_soprano.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "luchshe_zvonite_solu",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041B\u0443\u0447\u0448\u0435 \u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0421\u043E\u043B\u0443",
      image: "/images/items/serialy/luchshe_zvonite_solu.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "chernobyl",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0427\u0435\u0440\u043D\u043E\u0431\u044B\u043B\u044C",
      image: "/images/items/serialy/chernobyl.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "nastoyaschiy_detektiv",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0434\u0435\u0442\u0435\u043A\u0442\u0438\u0432",
      image: "/images/items/serialy/nastoyaschiy_detektiv.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "mandalorets",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0430\u043D\u0434\u0430\u043B\u043E\u0440\u0435\u0446",
      image: "/images/items/serialy/mandalorets.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "vedmak",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0412\u0435\u0434\u044C\u043C\u0430\u043A",
      image: "/images/items/serialy/vedmak.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "doktor_kto",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u041A\u0442\u043E",
      image: "/images/items/serialy/doktor_kto.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "sverhestestvennoe",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0432\u0435\u0440\u0445\u044A\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435",
      image: "/images/items/serialy/sverhestestvennoe.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "dekster",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0414\u0435\u043A\u0441\u0442\u0435\u0440",
      image: "/images/items/serialy/dekster.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "fargo",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0424\u0430\u0440\u0433\u043E",
      image: "/images/items/serialy/fargo.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "kartochnyy_domik",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u0430\u0440\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043C\u0438\u043A",
      image: "/images/items/serialy/kartochnyy_domik.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "mir_dikogo_zapada",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0438\u0440 \u0414\u0438\u043A\u043E\u0433\u043E \u0417\u0430\u043F\u0430\u0434\u0430",
      image: "/images/items/serialy/mir_dikogo_zapada.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "chernoe_zerkalo",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0427\u0451\u0440\u043D\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E",
      image: "/images/items/serialy/chernoe_zerkalo.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "bumazhnyy_dom",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0439 \u0434\u043E\u043C",
      image: "/images/items/serialy/bumazhnyy_dom.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "bridzhertony",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0411\u0440\u0438\u0434\u0436\u0435\u0440\u0442\u043E\u043D\u044B",
      image: "/images/items/serialy/bridzhertony.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "eyforiya",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u042D\u0439\u0444\u043E\u0440\u0438\u044F",
      image: "/images/items/serialy/eyforiya.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "tvin_piks",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0422\u0432\u0438\u043D \u041F\u0438\u043A\u0441",
      image: "/images/items/serialy/tvin_piks.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "sekretnye_materialy",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
      image: "/images/items/serialy/sekretnye_materialy.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "klinika",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u043B\u0438\u043D\u0438\u043A\u0430",
      image: "/images/items/serialy/klinika.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "kak_ya_vstretil_vashu_mamu",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041A\u0430\u043A \u044F \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B \u0432\u0430\u0448\u0443 \u043C\u0430\u043C\u0443",
      image: "/images/items/serialy/kak_ya_vstretil_vashu_mamu.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "simpsony",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0421\u0438\u043C\u043F\u0441\u043E\u043D\u044B",
      image: "/images/items/serialy/simpsony.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "futurama",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0424\u0443\u0442\u0443\u0440\u0430\u043C\u0430",
      image: "/images/items/serialy/futurama.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "yuzhnyy_park",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u042E\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u043A",
      image: "/images/items/serialy/yuzhnyy_park.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "griffiny",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0413\u0440\u0438\u0444\u0444\u0438\u043D\u044B",
      image: "/images/items/serialy/griffiny.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "rik_i_morti",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0420\u0438\u043A \u0438 \u041C\u043E\u0440\u0442\u0438",
      image: "/images/items/serialy/rik_i_morti.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "avatar_legenda_ob_aange",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0410\u0432\u0430\u0442\u0430\u0440: \u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u043E\u0431 \u0410\u0430\u043D\u0433\u0435",
      image: "/images/items/serialy/avatar_legenda_ob_aange.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "patsany",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041F\u0430\u0446\u0430\u043D\u044B",
      image: "/images/items/serialy/patsany.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "loki",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041B\u043E\u043A\u0438",
      image: "/images/items/serialy/loki.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "uensdey",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u0423\u044D\u043D\u0441\u0434\u0435\u0439",
      image: "/images/items/serialy/uensdey.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "mister_robot",
      categoryId: "serialy",
      categoryName: "\u0421\u0435\u0440\u0438\u0430\u043B\u044B",
      title: "\u041C\u0438\u0441\u0442\u0435\u0440 \u0420\u043E\u0431\u043E\u0442",
      image: "/images/items/serialy/mister_robot.jpg",
      categoryImage: "/images/categories/serialy.jpg"
    },
    {
      id: "pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/pop.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/rok.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "rep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u044D\u043F",
      image: "/images/items/muzykalnye_zhanry/rep.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "hip_hop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0445\u0438\u043F-\u0445\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/hip_hop.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "dzhaz",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0436\u0430\u0437",
      image: "/images/items/muzykalnye_zhanry/dzhaz.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "blyuz",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0431\u043B\u044E\u0437",
      image: "/images/items/muzykalnye_zhanry/blyuz.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "klassika",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/klassika.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "metal",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043C\u0435\u0442\u0430\u043B",
      image: "/images/items/muzykalnye_zhanry/metal.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "pank",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u0430\u043D\u043A",
      image: "/images/items/muzykalnye_zhanry/pank.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "elektronika",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/elektronika.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "haus",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0445\u0430\u0443\u0441",
      image: "/images/items/muzykalnye_zhanry/haus.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "tehno",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0435\u0445\u043D\u043E",
      image: "/images/items/muzykalnye_zhanry/tehno.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "trans",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0440\u0430\u043D\u0441",
      image: "/images/items/muzykalnye_zhanry/trans.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "dram_n_beys",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0440\u0430\u043C-\u043D-\u0431\u0435\u0439\u0441",
      image: "/images/items/muzykalnye_zhanry/dram_n_beys.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "dabstep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0430\u0431\u0441\u0442\u0435\u043F",
      image: "/images/items/muzykalnye_zhanry/dabstep.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "indi",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0438\u043D\u0434\u0438",
      image: "/images/items/muzykalnye_zhanry/indi.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "reggi",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u0435\u0433\u0433\u0438",
      image: "/images/items/muzykalnye_zhanry/reggi.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "disko",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0438\u0441\u043A\u043E",
      image: "/images/items/muzykalnye_zhanry/disko.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "fank",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0444\u0430\u043D\u043A",
      image: "/images/items/muzykalnye_zhanry/fank.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "soul",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u043E\u0443\u043B",
      image: "/images/items/muzykalnye_zhanry/soul.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "r_b",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "R&B",
      image: "/images/items/muzykalnye_zhanry/r_b.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "kantri",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A\u0430\u043D\u0442\u0440\u0438",
      image: "/images/items/muzykalnye_zhanry/kantri.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "folk",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0444\u043E\u043B\u043A",
      image: "/images/items/muzykalnye_zhanry/folk.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "shanson",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0448\u0430\u043D\u0441\u043E\u043D",
      image: "/images/items/muzykalnye_zhanry/shanson.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "latino",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043B\u0430\u0442\u0438\u043D\u043E",
      image: "/images/items/muzykalnye_zhanry/latino.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "k_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043A-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/k_pop.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "dzhey_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0434\u0436\u0435\u0439-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/dzhey_pop.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "embient",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u044D\u043C\u0431\u0438\u0435\u043D\u0442",
      image: "/images/items/muzykalnye_zhanry/embient.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "loufay",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043B\u043E\u0443\u0444\u0430\u0439",
      image: "/images/items/muzykalnye_zhanry/loufay.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "sinti_pop",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u0438\u043D\u0442\u0438-\u043F\u043E\u043F",
      image: "/images/items/muzykalnye_zhanry/sinti_pop.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "alternativa",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430",
      image: "/images/items/muzykalnye_zhanry/alternativa.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "post_rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u043E\u0441\u0442-\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/post_rok.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "progressiv_rok",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0438\u0432-\u0440\u043E\u043A",
      image: "/images/items/muzykalnye_zhanry/progressiv_rok.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "granzh",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0433\u0440\u0430\u043D\u0436",
      image: "/images/items/muzykalnye_zhanry/granzh.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "ska",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u043A\u0430",
      image: "/images/items/muzykalnye_zhanry/ska.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "gospel",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0433\u043E\u0441\u043F\u0435\u043B",
      image: "/images/items/muzykalnye_zhanry/gospel.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "opera",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u043E\u043F\u0435\u0440\u0430",
      image: "/images/items/muzykalnye_zhanry/opera.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "saundtrek",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0441\u0430\u0443\u043D\u0434\u0442\u0440\u0435\u043A",
      image: "/images/items/muzykalnye_zhanry/saundtrek.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "rok_n_roll",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B",
      image: "/images/items/muzykalnye_zhanry/rok_n_roll.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "trep",
      categoryId: "muzykalnye_zhanry",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0436\u0430\u043D\u0440\u044B",
      title: "\u0442\u0440\u044D\u043F",
      image: "/images/items/muzykalnye_zhanry/trep.jpg",
      categoryImage: "/images/categories/muzykalnye_zhanry.jpg"
    },
    {
      id: "gitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/gitara.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "elektrogitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/elektrogitara.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "bas_gitara",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u0441-\u0433\u0438\u0442\u0430\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/bas_gitara.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "pianino",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043F\u0438\u0430\u043D\u0438\u043D\u043E",
      image: "/images/items/muzykalnye_instrumenty/pianino.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "royal",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0440\u043E\u044F\u043B\u044C",
      image: "/images/items/muzykalnye_instrumenty/royal.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "sintezator",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0438\u043D\u0442\u0435\u0437\u0430\u0442\u043E\u0440",
      image: "/images/items/muzykalnye_instrumenty/sintezator.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "skripka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u043A\u0440\u0438\u043F\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/skripka.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "alt",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u043B\u044C\u0442",
      image: "/images/items/muzykalnye_instrumenty/alt.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "violonchel",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0432\u0438\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u044C",
      image: "/images/items/muzykalnye_instrumenty/violonchel.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "kontrabas",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u043E\u043D\u0442\u0440\u0430\u0431\u0430\u0441",
      image: "/images/items/muzykalnye_instrumenty/kontrabas.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "barabany",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u0440\u0430\u0431\u0430\u043D\u044B",
      image: "/images/items/muzykalnye_instrumenty/barabany.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "saksofon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0430\u043A\u0441\u043E\u0444\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/saksofon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "truba",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0440\u0443\u0431\u0430",
      image: "/images/items/muzykalnye_instrumenty/truba.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "trombon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0440\u043E\u043C\u0431\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/trombon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "fleyta",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0444\u043B\u0435\u0439\u0442\u0430",
      image: "/images/items/muzykalnye_instrumenty/fleyta.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "klarnet",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u043B\u0430\u0440\u043D\u0435\u0442",
      image: "/images/items/muzykalnye_instrumenty/klarnet.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "goboy",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u043E\u0431\u043E\u0439",
      image: "/images/items/muzykalnye_instrumenty/goboy.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "fagot",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0444\u0430\u0433\u043E\u0442",
      image: "/images/items/muzykalnye_instrumenty/fagot.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "akkordeon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u043A\u043A\u043E\u0440\u0434\u0435\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/akkordeon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "bayan",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u044F\u043D",
      image: "/images/items/muzykalnye_instrumenty/bayan.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "garmon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0430\u0440\u043C\u043E\u043D\u044C",
      image: "/images/items/muzykalnye_instrumenty/garmon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "ukulele",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
      image: "/images/items/muzykalnye_instrumenty/ukulele.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "mandolina",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0430\u043D\u0434\u043E\u043B\u0438\u043D\u0430",
      image: "/images/items/muzykalnye_instrumenty/mandolina.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "arfa",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0430\u0440\u0444\u0430",
      image: "/images/items/muzykalnye_instrumenty/arfa.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "balalayka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u043B\u0430\u043B\u0430\u0439\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/balalayka.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "domra",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0434\u043E\u043C\u0440\u0430",
      image: "/images/items/muzykalnye_instrumenty/domra.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "sitar",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0441\u0438\u0442\u0430\u0440",
      image: "/images/items/muzykalnye_instrumenty/sitar.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "bandzho",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0430\u043D\u0434\u0436\u043E",
      image: "/images/items/muzykalnye_instrumenty/bandzho.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "ksilofon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0441\u0438\u043B\u043E\u0444\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/ksilofon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "marimba",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0430\u0440\u0438\u043C\u0431\u0430",
      image: "/images/items/muzykalnye_instrumenty/marimba.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "litavry",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043B\u0438\u0442\u0430\u0432\u0440\u044B",
      image: "/images/items/muzykalnye_instrumenty/litavry.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "buben",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0431\u0443\u0431\u0435\u043D",
      image: "/images/items/muzykalnye_instrumenty/buben.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "kastanety",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0430\u0441\u0442\u0430\u043D\u044C\u0435\u0442\u044B",
      image: "/images/items/muzykalnye_instrumenty/kastanety.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "didzheyskiy_pult",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0434\u0438\u0434\u0436\u0435\u0439\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0442",
      image: "/images/items/muzykalnye_instrumenty/didzheyskiy_pult.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "termenvoks",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0442\u0435\u0440\u043C\u0435\u043D\u0432\u043E\u043A\u0441",
      image: "/images/items/muzykalnye_instrumenty/termenvoks.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "volynka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0432\u043E\u043B\u044B\u043D\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/volynka.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "gubnaya_garmoshka",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u0433\u0443\u0431\u043D\u0430\u044F \u0433\u0430\u0440\u043C\u043E\u0448\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/gubnaya_garmoshka.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "organ",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043E\u0440\u0433\u0430\u043D",
      image: "/images/items/muzykalnye_instrumenty/organ.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "melodika",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043C\u0435\u043B\u043E\u0434\u0438\u043A\u0430",
      image: "/images/items/muzykalnye_instrumenty/melodika.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "kahon",
      categoryId: "muzykalnye_instrumenty",
      categoryName: "\u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
      title: "\u043A\u0430\u0445\u043E\u043D",
      image: "/images/items/muzykalnye_instrumenty/kahon.jpg",
      categoryImage: "/images/categories/muzykalnye_instrumenty.jpg"
    },
    {
      id: "rossiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0420\u043E\u0441\u0441\u0438\u044F",
      image: "/images/items/strany/rossiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "ssha",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0428\u0410",
      image: "/images/items/strany/ssha.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "kanada",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041A\u0430\u043D\u0430\u0434\u0430",
      image: "/images/items/strany/kanada.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "braziliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F",
      image: "/images/items/strany/braziliya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "argentina",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0430",
      image: "/images/items/strany/argentina.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "meksika",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041C\u0435\u043A\u0441\u0438\u043A\u0430",
      image: "/images/items/strany/meksika.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "kitay",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041A\u0438\u0442\u0430\u0439",
      image: "/images/items/strany/kitay.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "yaponiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042F\u043F\u043E\u043D\u0438\u044F",
      image: "/images/items/strany/yaponiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "yuzhnaya_koreya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042E\u0436\u043D\u0430\u044F \u041A\u043E\u0440\u0435\u044F",
      image: "/images/items/strany/yuzhnaya_koreya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "indiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/indiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "tailand",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0422\u0430\u0438\u043B\u0430\u043D\u0434",
      image: "/images/items/strany/tailand.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "vetnam",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0412\u044C\u0435\u0442\u043D\u0430\u043C",
      image: "/images/items/strany/vetnam.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "turtsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0422\u0443\u0440\u0446\u0438\u044F",
      image: "/images/items/strany/turtsiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "egipet",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0415\u0433\u0438\u043F\u0435\u0442",
      image: "/images/items/strany/egipet.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "frantsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0424\u0440\u0430\u043D\u0446\u0438\u044F",
      image: "/images/items/strany/frantsiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "germaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/germaniya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "italiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0442\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/italiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "ispaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0441\u043F\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/ispaniya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "portugaliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/portugaliya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "velikobritaniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/velikobritaniya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "irlandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/irlandiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "niderlandy",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B",
      image: "/images/items/strany/niderlandy.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "belgiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0411\u0435\u043B\u044C\u0433\u0438\u044F",
      image: "/images/items/strany/belgiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "shveytsariya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F",
      image: "/images/items/strany/shveytsariya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "avstriya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0432\u0441\u0442\u0440\u0438\u044F",
      image: "/images/items/strany/avstriya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "shvetsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0428\u0432\u0435\u0446\u0438\u044F",
      image: "/images/items/strany/shvetsiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "norvegiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F",
      image: "/images/items/strany/norvegiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "finlyandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/finlyandiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "daniya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0414\u0430\u043D\u0438\u044F",
      image: "/images/items/strany/daniya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "polsha",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041F\u043E\u043B\u044C\u0448\u0430",
      image: "/images/items/strany/polsha.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "chehiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0427\u0435\u0445\u0438\u044F",
      image: "/images/items/strany/chehiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "gretsiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0413\u0440\u0435\u0446\u0438\u044F",
      image: "/images/items/strany/gretsiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "horvatiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F",
      image: "/images/items/strany/horvatiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "serbiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0435\u0440\u0431\u0438\u044F",
      image: "/images/items/strany/serbiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "oae",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041E\u0410\u042D",
      image: "/images/items/strany/oae.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "saudovskaya_araviya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u0430\u044F \u0410\u0440\u0430\u0432\u0438\u044F",
      image: "/images/items/strany/saudovskaya_araviya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "avstraliya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F",
      image: "/images/items/strany/avstraliya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "novaya_zelandiya",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041D\u043E\u0432\u0430\u044F \u0417\u0435\u043B\u0430\u043D\u0434\u0438\u044F",
      image: "/images/items/strany/novaya_zelandiya.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "yuar",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u042E\u0410\u0420",
      image: "/images/items/strany/yuar.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "marokko",
      categoryId: "strany",
      categoryName: "\u0421\u0442\u0440\u0430\u043D\u044B",
      title: "\u041C\u0430\u0440\u043E\u043A\u043A\u043E",
      image: "/images/items/strany/marokko.jpg",
      categoryImage: "/images/categories/strany.jpg"
    },
    {
      id: "moskva",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u043E\u0441\u043A\u0432\u0430",
      image: "/images/items/goroda/moskva.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "sankt_peterburg",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
      image: "/images/items/goroda/sankt_peterburg.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "nyu_york",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",
      image: "/images/items/goroda/nyu_york.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "london",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u043E\u043D\u0434\u043E\u043D",
      image: "/images/items/goroda/london.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "parizh",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0430\u0440\u0438\u0436",
      image: "/images/items/goroda/parizh.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "rim",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0420\u0438\u043C",
      image: "/images/items/goroda/rim.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "barselona",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430",
      image: "/images/items/goroda/barselona.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "berlin",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0435\u0440\u043B\u0438\u043D",
      image: "/images/items/goroda/berlin.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "amsterdam",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C",
      image: "/images/items/goroda/amsterdam.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "stambul",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0442\u0430\u043C\u0431\u0443\u043B",
      image: "/images/items/goroda/stambul.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "dubay",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0414\u0443\u0431\u0430\u0439",
      image: "/images/items/goroda/dubay.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "tokio",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0422\u043E\u043A\u0438\u043E",
      image: "/images/items/goroda/tokio.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "seul",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0435\u0443\u043B",
      image: "/images/items/goroda/seul.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "pekin",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0435\u043A\u0438\u043D",
      image: "/images/items/goroda/pekin.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "shanhay",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0428\u0430\u043D\u0445\u0430\u0439",
      image: "/images/items/goroda/shanhay.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "bangkok",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0430\u043D\u0433\u043A\u043E\u043A",
      image: "/images/items/goroda/bangkok.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "singapur",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",
      image: "/images/items/goroda/singapur.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "sidney",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0438\u0434\u043D\u0435\u0439",
      image: "/images/items/goroda/sidney.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "melburn",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0435\u043B\u044C\u0431\u0443\u0440\u043D",
      image: "/images/items/goroda/melburn.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "los_andzheles",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441",
      image: "/images/items/goroda/los_andzheles.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "san_frantsisko",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E",
      image: "/images/items/goroda/san_frantsisko.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "chikago",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0427\u0438\u043A\u0430\u0433\u043E",
      image: "/images/items/goroda/chikago.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "mayami",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0430\u0439\u0430\u043C\u0438",
      image: "/images/items/goroda/mayami.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "toronto",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0422\u043E\u0440\u043E\u043D\u0442\u043E",
      image: "/images/items/goroda/toronto.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "vankuver",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440",
      image: "/images/items/goroda/vankuver.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "mehiko",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0435\u0445\u0438\u043A\u043E",
      image: "/images/items/goroda/mehiko.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "rio_de_zhaneyro",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0420\u0438\u043E-\u0434\u0435-\u0416\u0430\u043D\u0435\u0439\u0440\u043E",
      image: "/images/items/goroda/rio_de_zhaneyro.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "buenos_ayres",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0443\u044D\u043D\u043E\u0441-\u0410\u0439\u0440\u0435\u0441",
      image: "/images/items/goroda/buenos_ayres.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "lissabon",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041B\u0438\u0441\u0441\u0430\u0431\u043E\u043D",
      image: "/images/items/goroda/lissabon.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "praga",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041F\u0440\u0430\u0433\u0430",
      image: "/images/items/goroda/praga.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "vena",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0435\u043D\u0430",
      image: "/images/items/goroda/vena.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "budapesht",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0411\u0443\u0434\u0430\u043F\u0435\u0448\u0442",
      image: "/images/items/goroda/budapesht.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "afiny",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0410\u0444\u0438\u043D\u044B",
      image: "/images/items/goroda/afiny.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "kair",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u0430\u0438\u0440",
      image: "/images/items/goroda/kair.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "keyptaun",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u0435\u0439\u043F\u0442\u0430\u0443\u043D",
      image: "/images/items/goroda/keyptaun.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "milan",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0438\u043B\u0430\u043D",
      image: "/images/items/goroda/milan.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "venetsiya",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0412\u0435\u043D\u0435\u0446\u0438\u044F",
      image: "/images/items/goroda/venetsiya.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "florentsiya",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u0424\u043B\u043E\u0440\u0435\u043D\u0446\u0438\u044F",
      image: "/images/items/goroda/florentsiya.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "madrid",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041C\u0430\u0434\u0440\u0438\u0434",
      image: "/images/items/goroda/madrid.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "kopengagen",
      categoryId: "goroda",
      categoryName: "\u0413\u043E\u0440\u043E\u0434\u0430",
      title: "\u041A\u043E\u043F\u0435\u043D\u0433\u0430\u0433\u0435\u043D",
      image: "/images/items/goroda/kopengagen.jpg",
      categoryImage: "/images/categories/goroda.jpg"
    },
    {
      id: "eyfeleva_bashnya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0439\u0444\u0435\u043B\u0435\u0432\u0430 \u0431\u0430\u0448\u043D\u044F",
      image: "/images/items/dostoprimechatelnosti/eyfeleva_bashnya.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "big_ben",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0438\u0433-\u0411\u0435\u043D",
      image: "/images/items/dostoprimechatelnosti/big_ben.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "kolizey",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u043E\u043B\u0438\u0437\u0435\u0439",
      image: "/images/items/dostoprimechatelnosti/kolizey.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "pizanskaya_bashnya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0438\u0437\u0430\u043D\u0441\u043A\u0430\u044F \u0431\u0430\u0448\u043D\u044F",
      image: "/images/items/dostoprimechatelnosti/pizanskaya_bashnya.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "statuya_svobody",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0442\u0430\u0442\u0443\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u044B",
      image: "/images/items/dostoprimechatelnosti/statuya_svobody.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "tadzh_mahal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0422\u0430\u0434\u0436-\u041C\u0430\u0445\u0430\u043B",
      image: "/images/items/dostoprimechatelnosti/tadzh_mahal.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "velikaya_kitayskaya_stena",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0435\u043B\u0438\u043A\u0430\u044F \u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0430\u044F \u0441\u0442\u0435\u043D\u0430",
      image: "/images/items/dostoprimechatelnosti/velikaya_kitayskaya_stena.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "piramidy_gizy",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0438\u0440\u0430\u043C\u0438\u0434\u044B \u0413\u0438\u0437\u044B",
      image: "/images/items/dostoprimechatelnosti/piramidy_gizy.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "sfinks",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0444\u0438\u043D\u043A\u0441",
      image: "/images/items/dostoprimechatelnosti/sfinks.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "burdzh_halifa",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0443\u0440\u0434\u0436-\u0425\u0430\u043B\u0438\u0444\u0430",
      image: "/images/items/dostoprimechatelnosti/burdzh_halifa.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "sidneyskaya_opera",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0438\u0434\u043D\u0435\u0439\u0441\u043A\u0430\u044F \u043E\u043F\u0435\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/sidneyskaya_opera.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "luvr",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041B\u0443\u0432\u0440",
      image: "/images/items/dostoprimechatelnosti/luvr.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "ermitazh",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0440\u043C\u0438\u0442\u0430\u0436",
      image: "/images/items/dostoprimechatelnosti/ermitazh.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "krasnaya_ploschad",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C",
      image: "/images/items/dostoprimechatelnosti/krasnaya_ploschad.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "kreml",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041A\u0440\u0435\u043C\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/kreml.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "sobor_vasiliya_blazhennogo",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u043E\u0431\u043E\u0440 \u0412\u0430\u0441\u0438\u043B\u0438\u044F \u0411\u043B\u0430\u0436\u0435\u043D\u043D\u043E\u0433\u043E",
      image: "/images/items/dostoprimechatelnosti/sobor_vasiliya_blazhennogo.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "sagrada_familiya",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0430\u0433\u0440\u0430\u0434\u0430 \u0424\u0430\u043C\u0438\u043B\u0438\u044F",
      image: "/images/items/dostoprimechatelnosti/sagrada_familiya.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "akropol",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043A\u0440\u043E\u043F\u043E\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/akropol.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "machu_pikchu",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u0430\u0447\u0443-\u041F\u0438\u043A\u0447\u0443",
      image: "/images/items/dostoprimechatelnosti/machu_pikchu.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "stounhendzh",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0442\u043E\u0443\u043D\u0445\u0435\u043D\u0434\u0436",
      image: "/images/items/dostoprimechatelnosti/stounhendzh.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "niagarskiy_vodopad",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041D\u0438\u0430\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u0432\u043E\u0434\u043E\u043F\u0430\u0434",
      image: "/images/items/dostoprimechatelnosti/niagarskiy_vodopad.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "grand_kanon",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0413\u0440\u0430\u043D\u0434-\u041A\u0430\u043D\u044C\u043E\u043D",
      image: "/images/items/dostoprimechatelnosti/grand_kanon.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "yelloustoun",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0419\u0435\u043B\u043B\u043E\u0443\u0441\u0442\u043E\u0443\u043D",
      image: "/images/items/dostoprimechatelnosti/yelloustoun.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "petra",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0435\u0442\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/petra.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "angkor_vat",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043D\u0433\u043A\u043E\u0440-\u0412\u0430\u0442",
      image: "/images/items/dostoprimechatelnosti/angkor_vat.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "chichen_itsa",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0427\u0438\u0447\u0435\u043D-\u0418\u0446\u0430",
      image: "/images/items/dostoprimechatelnosti/chichen_itsa.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "gora_fudzi",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0433\u043E\u0440\u0430 \u0424\u0443\u0434\u0437\u0438",
      image: "/images/items/dostoprimechatelnosti/gora_fudzi.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "everest",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u042D\u0432\u0435\u0440\u0435\u0441\u0442",
      image: "/images/items/dostoprimechatelnosti/everest.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "baykal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0430\u0439\u043A\u0430\u043B",
      image: "/images/items/dostoprimechatelnosti/baykal.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "pamukkale",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041F\u0430\u043C\u0443\u043A\u043A\u0430\u043B\u0435",
      image: "/images/items/dostoprimechatelnosti/pamukkale.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "mertvoe_more",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u0435\u0440\u0442\u0432\u043E\u0435 \u043C\u043E\u0440\u0435",
      image: "/images/items/dostoprimechatelnosti/mertvoe_more.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "most_zolotye_vorota",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u043E\u0441\u0442 \u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u0412\u043E\u0440\u043E\u0442\u0430",
      image: "/images/items/dostoprimechatelnosti/most_zolotye_vorota.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "tayms_skver",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0422\u0430\u0439\u043C\u0441-\u0441\u043A\u0432\u0435\u0440",
      image: "/images/items/dostoprimechatelnosti/tayms_skver.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "las_vegas_strip",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041B\u0430\u0441-\u0412\u0435\u0433\u0430\u0441-\u0421\u0442\u0440\u0438\u043F",
      image: "/images/items/dostoprimechatelnosti/las_vegas_strip.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "versal",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0435\u0440\u0441\u0430\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/versal.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "brandenburgskie_vorota",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0411\u0440\u0430\u043D\u0434\u0435\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u0442\u0430",
      image: "/images/items/dostoprimechatelnosti/brandenburgskie_vorota.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "algambra",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0410\u043B\u044C\u0433\u0430\u043C\u0431\u0440\u0430",
      image: "/images/items/dostoprimechatelnosti/algambra.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "vatikan",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0412\u0430\u0442\u0438\u043A\u0430\u043D",
      image: "/images/items/dostoprimechatelnosti/vatikan.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "sikstinskaya_kapella",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u0421\u0438\u043A\u0441\u0442\u0438\u043D\u0441\u043A\u0430\u044F \u043A\u0430\u043F\u0435\u043B\u043B\u0430",
      image: "/images/items/dostoprimechatelnosti/sikstinskaya_kapella.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "mon_sen_mishel",
      categoryId: "dostoprimechatelnosti",
      categoryName: "\u0414\u043E\u0441\u0442\u043E\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      title: "\u041C\u043E\u043D-\u0421\u0435\u043D-\u041C\u0438\u0448\u0435\u043B\u044C",
      image: "/images/items/dostoprimechatelnosti/mon_sen_mishel.jpg",
      categoryImage: "/images/categories/dostoprimechatelnosti.jpg"
    },
    {
      id: "apple",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Apple",
      image: "/images/items/tekhnologicheskie_brendy/apple.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "samsung",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Samsung",
      image: "/images/items/tekhnologicheskie_brendy/samsung.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "microsoft",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Microsoft",
      image: "/images/items/tekhnologicheskie_brendy/microsoft.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "google",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Google",
      image: "/images/items/tekhnologicheskie_brendy/google.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "amazon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Amazon",
      image: "/images/items/tekhnologicheskie_brendy/amazon.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "sony",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Sony",
      image: "/images/items/tekhnologicheskie_brendy/sony.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "intel",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Intel",
      image: "/images/items/tekhnologicheskie_brendy/intel.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "amd",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "AMD",
      image: "/images/items/tekhnologicheskie_brendy/amd.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "nvidia",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nvidia",
      image: "/images/items/tekhnologicheskie_brendy/nvidia.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "lenovo",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lenovo",
      image: "/images/items/tekhnologicheskie_brendy/lenovo.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "hp",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "HP",
      image: "/images/items/tekhnologicheskie_brendy/hp.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "dell",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Dell",
      image: "/images/items/tekhnologicheskie_brendy/dell.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "xiaomi",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Xiaomi",
      image: "/images/items/tekhnologicheskie_brendy/xiaomi.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "huawei",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Huawei",
      image: "/images/items/tekhnologicheskie_brendy/huawei.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "oneplus",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "OnePlus",
      image: "/images/items/tekhnologicheskie_brendy/oneplus.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "realme",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Realme",
      image: "/images/items/tekhnologicheskie_brendy/realme.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "vivo",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Vivo",
      image: "/images/items/tekhnologicheskie_brendy/vivo.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "honor",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Honor",
      image: "/images/items/tekhnologicheskie_brendy/honor.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "asus",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Asus",
      image: "/images/items/tekhnologicheskie_brendy/asus.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "acer",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Acer",
      image: "/images/items/tekhnologicheskie_brendy/acer.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "msi",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "MSI",
      image: "/images/items/tekhnologicheskie_brendy/msi.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "razer",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Razer",
      image: "/images/items/tekhnologicheskie_brendy/razer.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "logitech",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Logitech",
      image: "/images/items/tekhnologicheskie_brendy/logitech.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "canon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Canon",
      image: "/images/items/tekhnologicheskie_brendy/canon.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "nikon",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nikon",
      image: "/images/items/tekhnologicheskie_brendy/nikon.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "gopro",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "GoPro",
      image: "/images/items/tekhnologicheskie_brendy/gopro.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "dji",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "DJI",
      image: "/images/items/tekhnologicheskie_brendy/dji.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "meta",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Meta",
      image: "/images/items/tekhnologicheskie_brendy/meta.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "openai",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "OpenAI",
      image: "/images/items/tekhnologicheskie_brendy/openai.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "tesla",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Tesla",
      image: "/images/items/tekhnologicheskie_brendy/tesla.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "spacex",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "SpaceX",
      image: "/images/items/tekhnologicheskie_brendy/spacex.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "ibm",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "IBM",
      image: "/images/items/tekhnologicheskie_brendy/ibm.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "oracle",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Oracle",
      image: "/images/items/tekhnologicheskie_brendy/oracle.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "cisco",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Cisco",
      image: "/images/items/tekhnologicheskie_brendy/cisco.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "adobe",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Adobe",
      image: "/images/items/tekhnologicheskie_brendy/adobe.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "spotify",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Spotify",
      image: "/images/items/tekhnologicheskie_brendy/spotify.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "netflix",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Netflix",
      image: "/images/items/tekhnologicheskie_brendy/netflix.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "uber",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Uber",
      image: "/images/items/tekhnologicheskie_brendy/uber.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "airbnb",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Airbnb",
      image: "/images/items/tekhnologicheskie_brendy/airbnb.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "tiktok",
      categoryId: "tekhnologicheskie_brendy",
      categoryName: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "TikTok",
      image: "/images/items/tekhnologicheskie_brendy/tiktok.jpg",
      categoryImage: "/images/categories/tekhnologicheskie_brendy.jpg"
    },
    {
      id: "toyota",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Toyota",
      image: "/images/items/avtomobilnye_brendy/toyota.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "bmw",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "BMW",
      image: "/images/items/avtomobilnye_brendy/bmw.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "mercedes_benz",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mercedes-Benz",
      image: "/images/items/avtomobilnye_brendy/mercedes_benz.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "audi",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Audi",
      image: "/images/items/avtomobilnye_brendy/audi.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "volkswagen",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Volkswagen",
      image: "/images/items/avtomobilnye_brendy/volkswagen.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "porsche",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Porsche",
      image: "/images/items/avtomobilnye_brendy/porsche.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "tesla",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Tesla",
      image: "/images/items/avtomobilnye_brendy/tesla.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "ford",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Ford",
      image: "/images/items/avtomobilnye_brendy/ford.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "chevrolet",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Chevrolet",
      image: "/images/items/avtomobilnye_brendy/chevrolet.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "dodge",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Dodge",
      image: "/images/items/avtomobilnye_brendy/dodge.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "jeep",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Jeep",
      image: "/images/items/avtomobilnye_brendy/jeep.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "honda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Honda",
      image: "/images/items/avtomobilnye_brendy/honda.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "nissan",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Nissan",
      image: "/images/items/avtomobilnye_brendy/nissan.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "mazda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mazda",
      image: "/images/items/avtomobilnye_brendy/mazda.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "subaru",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Subaru",
      image: "/images/items/avtomobilnye_brendy/subaru.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "mitsubishi",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mitsubishi",
      image: "/images/items/avtomobilnye_brendy/mitsubishi.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "hyundai",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Hyundai",
      image: "/images/items/avtomobilnye_brendy/hyundai.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "kia",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Kia",
      image: "/images/items/avtomobilnye_brendy/kia.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "lexus",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lexus",
      image: "/images/items/avtomobilnye_brendy/lexus.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "infiniti",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Infiniti",
      image: "/images/items/avtomobilnye_brendy/infiniti.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "volvo",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Volvo",
      image: "/images/items/avtomobilnye_brendy/volvo.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "peugeot",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Peugeot",
      image: "/images/items/avtomobilnye_brendy/peugeot.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "renault",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Renault",
      image: "/images/items/avtomobilnye_brendy/renault.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "citroen",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Citroen",
      image: "/images/items/avtomobilnye_brendy/citroen.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "fiat",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Fiat",
      image: "/images/items/avtomobilnye_brendy/fiat.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "alfa_romeo",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Alfa Romeo",
      image: "/images/items/avtomobilnye_brendy/alfa_romeo.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "ferrari",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Ferrari",
      image: "/images/items/avtomobilnye_brendy/ferrari.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "lamborghini",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Lamborghini",
      image: "/images/items/avtomobilnye_brendy/lamborghini.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "maserati",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Maserati",
      image: "/images/items/avtomobilnye_brendy/maserati.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "bugatti",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Bugatti",
      image: "/images/items/avtomobilnye_brendy/bugatti.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "bentley",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Bentley",
      image: "/images/items/avtomobilnye_brendy/bentley.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "rolls_royce",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Rolls-Royce",
      image: "/images/items/avtomobilnye_brendy/rolls_royce.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "aston_martin",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Aston Martin",
      image: "/images/items/avtomobilnye_brendy/aston_martin.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "jaguar",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Jaguar",
      image: "/images/items/avtomobilnye_brendy/jaguar.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "land_rover",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Land Rover",
      image: "/images/items/avtomobilnye_brendy/land_rover.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "mini",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Mini",
      image: "/images/items/avtomobilnye_brendy/mini.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "skoda",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Skoda",
      image: "/images/items/avtomobilnye_brendy/skoda.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "seat",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Seat",
      image: "/images/items/avtomobilnye_brendy/seat.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "genesis",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Genesis",
      image: "/images/items/avtomobilnye_brendy/genesis.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "cadillac",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Cadillac",
      image: "/images/items/avtomobilnye_brendy/cadillac.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "vaz",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "\u0412\u0410\u0417",
      image: "/images/items/avtomobilnye_brendy/vaz.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "kamaz",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "\u041A\u0430\u043C\u0430\u0437",
      image: "/images/items/avtomobilnye_brendy/kamaz.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "moskvich",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "\u041C\u043E\u0441\u043A\u0432\u0438\u0447",
      image: "/images/items/avtomobilnye_brendy/moskvich.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "gilly",
      categoryId: "avtomobilnye_brendy",
      categoryName: "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
      title: "Gilly",
      image: "/images/items/avtomobilnye_brendy/gilly.jpg",
      categoryImage: "/images/categories/avtomobilnye_brendy.jpg"
    },
    {
      id: "nike",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Nike",
      image: "/images/items/odezhda_i_obuv/nike.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "adidas",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Adidas",
      image: "/images/items/odezhda_i_obuv/adidas.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "puma",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Puma",
      image: "/images/items/odezhda_i_obuv/puma.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "reebok",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Reebok",
      image: "/images/items/odezhda_i_obuv/reebok.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "new_balance",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "New Balance",
      image: "/images/items/odezhda_i_obuv/new_balance.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "asics",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Asics",
      image: "/images/items/odezhda_i_obuv/asics.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "converse",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Converse",
      image: "/images/items/odezhda_i_obuv/converse.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "vans",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Vans",
      image: "/images/items/odezhda_i_obuv/vans.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "dr_martens",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Dr. Martens",
      image: "/images/items/odezhda_i_obuv/dr_martens.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "timberland",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Timberland",
      image: "/images/items/odezhda_i_obuv/timberland.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "zara",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Zara",
      image: "/images/items/odezhda_i_obuv/zara.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "h_m",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "H&M",
      image: "/images/items/odezhda_i_obuv/h_m.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "uniqlo",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Uniqlo",
      image: "/images/items/odezhda_i_obuv/uniqlo.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "levi_s",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Levi's",
      image: "/images/items/odezhda_i_obuv/levi_s.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "diesel",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Diesel",
      image: "/images/items/odezhda_i_obuv/diesel.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "calvin_klein",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Calvin Klein",
      image: "/images/items/odezhda_i_obuv/calvin_klein.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "tommy_hilfiger",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Tommy Hilfiger",
      image: "/images/items/odezhda_i_obuv/tommy_hilfiger.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "lacoste",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Lacoste",
      image: "/images/items/odezhda_i_obuv/lacoste.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "ralph_lauren",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Ralph Lauren",
      image: "/images/items/odezhda_i_obuv/ralph_lauren.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "the_north_face",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "The North Face",
      image: "/images/items/odezhda_i_obuv/the_north_face.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "columbia",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Columbia",
      image: "/images/items/odezhda_i_obuv/columbia.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "patagonia",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Patagonia",
      image: "/images/items/odezhda_i_obuv/patagonia.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "gucci",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Gucci",
      image: "/images/items/odezhda_i_obuv/gucci.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "prada",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Prada",
      image: "/images/items/odezhda_i_obuv/prada.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "louis_vuitton",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Louis Vuitton",
      image: "/images/items/odezhda_i_obuv/louis_vuitton.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "dior",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Dior",
      image: "/images/items/odezhda_i_obuv/dior.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "chanel",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Chanel",
      image: "/images/items/odezhda_i_obuv/chanel.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "balenciaga",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Balenciaga",
      image: "/images/items/odezhda_i_obuv/balenciaga.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "versace",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Versace",
      image: "/images/items/odezhda_i_obuv/versace.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "armani",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Armani",
      image: "/images/items/odezhda_i_obuv/armani.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "stone_island",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Stone Island",
      image: "/images/items/odezhda_i_obuv/stone_island.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "supreme",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Supreme",
      image: "/images/items/odezhda_i_obuv/supreme.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "off_white",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Off-White",
      image: "/images/items/odezhda_i_obuv/off_white.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "burberry",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Burberry",
      image: "/images/items/odezhda_i_obuv/burberry.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "moncler",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Moncler",
      image: "/images/items/odezhda_i_obuv/moncler.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "crocs",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Crocs",
      image: "/images/items/odezhda_i_obuv/crocs.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "fila",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Fila",
      image: "/images/items/odezhda_i_obuv/fila.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "under_armour",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Under Armour",
      image: "/images/items/odezhda_i_obuv/under_armour.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "mango",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Mango",
      image: "/images/items/odezhda_i_obuv/mango.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "reserved",
      categoryId: "odezhda_i_obuv",
      categoryName: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0438 \u043E\u0431\u0443\u0432\u044C",
      title: "Reserved",
      image: "/images/items/odezhda_i_obuv/reserved.jpg",
      categoryImage: "/images/categories/odezhda_i_obuv.jpg"
    },
    {
      id: "krovat",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u043E\u0432\u0430\u0442\u044C",
      image: "/images/items/predmety_byta/krovat.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "divan",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0434\u0438\u0432\u0430\u043D",
      image: "/images/items/predmety_byta/divan.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "kreslo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u0435\u0441\u043B\u043E",
      image: "/images/items/predmety_byta/kreslo.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "stol",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u043E\u043B",
      image: "/images/items/predmety_byta/stol.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "stul",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u0443\u043B",
      image: "/images/items/predmety_byta/stul.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "shkaf",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u043A\u0430\u0444",
      image: "/images/items/predmety_byta/shkaf.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "komod",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u043C\u043E\u0434",
      image: "/images/items/predmety_byta/komod.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "polka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/polka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "zerkalo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u0435\u0440\u043A\u0430\u043B\u043E",
      image: "/images/items/predmety_byta/zerkalo.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "lampa",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043B\u0430\u043C\u043F\u0430",
      image: "/images/items/predmety_byta/lampa.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "kover",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u0432\u0451\u0440",
      image: "/images/items/predmety_byta/kover.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "podushka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u0434\u0443\u0448\u043A\u0430",
      image: "/images/items/predmety_byta/podushka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "odeyalo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043E\u0434\u0435\u044F\u043B\u043E",
      image: "/images/items/predmety_byta/odeyalo.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "pled",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043B\u0435\u0434",
      image: "/images/items/predmety_byta/pled.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "shtory",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0442\u043E\u0440\u044B",
      image: "/images/items/predmety_byta/shtory.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "posuda",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u0441\u0443\u0434\u0430",
      image: "/images/items/predmety_byta/posuda.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "tarelka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0442\u0430\u0440\u0435\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/tarelka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "kruzhka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0440\u0443\u0436\u043A\u0430",
      image: "/images/items/predmety_byta/kruzhka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "stakan",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u0442\u0430\u043A\u0430\u043D",
      image: "/images/items/predmety_byta/stakan.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "lozhka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043B\u043E\u0436\u043A\u0430",
      image: "/images/items/predmety_byta/lozhka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "vilka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0438\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/vilka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "nozh",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043D\u043E\u0436",
      image: "/images/items/predmety_byta/nozh.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "kastryulya",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u0430\u0441\u0442\u0440\u044E\u043B\u044F",
      image: "/images/items/predmety_byta/kastryulya.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "skovoroda",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0441\u043A\u043E\u0432\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/predmety_byta/skovoroda.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "chaynik",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0447\u0430\u0439\u043D\u0438\u043A",
      image: "/images/items/predmety_byta/chaynik.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "utyug",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0443\u0442\u044E\u0433",
      image: "/images/items/predmety_byta/utyug.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "pylesos",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u044B\u043B\u0435\u0441\u043E\u0441",
      image: "/images/items/predmety_byta/pylesos.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "shvabra",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0432\u0430\u0431\u0440\u0430",
      image: "/images/items/predmety_byta/shvabra.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "vedro",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0435\u0434\u0440\u043E",
      image: "/images/items/predmety_byta/vedro.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "korzina",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043E\u0440\u0437\u0438\u043D\u0430",
      image: "/images/items/predmety_byta/korzina.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "polotentse",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043F\u043E\u043B\u043E\u0442\u0435\u043D\u0446\u0435",
      image: "/images/items/predmety_byta/polotentse.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "zubnaya_schetka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u0443\u0431\u043D\u0430\u044F \u0449\u0451\u0442\u043A\u0430",
      image: "/images/items/predmety_byta/zubnaya_schetka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "mylo",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043C\u044B\u043B\u043E",
      image: "/images/items/predmety_byta/mylo.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "shampun",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0448\u0430\u043C\u043F\u0443\u043D\u044C",
      image: "/images/items/predmety_byta/shampun.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "rascheska",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0440\u0430\u0441\u0447\u0451\u0441\u043A\u0430",
      image: "/images/items/predmety_byta/rascheska.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "fen",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0444\u0435\u043D",
      image: "/images/items/predmety_byta/fen.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "budilnik",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0431\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/predmety_byta/budilnik.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "veshalka",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0432\u0435\u0448\u0430\u043B\u043A\u0430",
      image: "/images/items/predmety_byta/veshalka.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "klyuchi",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u043A\u043B\u044E\u0447\u0438",
      image: "/images/items/predmety_byta/klyuchi.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "zont",
      categoryId: "predmety_byta",
      categoryName: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0431\u044B\u0442\u0430",
      title: "\u0437\u043E\u043D\u0442",
      image: "/images/items/predmety_byta/zont.jpg",
      categoryImage: "/images/categories/predmety_byta.jpg"
    },
    {
      id: "holodilnik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/holodilnik.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/plita.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "duhovka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0434\u0443\u0445\u043E\u0432\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/duhovka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "mikrovolnovka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/mikrovolnovka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "chaynik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0447\u0430\u0439\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/chaynik.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "kofevarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u043E\u0444\u0435\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/kofevarka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "kofemashina",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u043E\u0444\u0435\u043C\u0430\u0448\u0438\u043D\u0430",
      image: "/images/items/kuhonnaya_tehnika/kofemashina.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "toster",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u043E\u0441\u0442\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/toster.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "blender",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0431\u043B\u0435\u043D\u0434\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/blender.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "mikser",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0438\u043A\u0441\u0435\u0440",
      image: "/images/items/kuhonnaya_tehnika/mikser.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "multivarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/multivarka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "parovarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u0430\u0440\u043E\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/parovarka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "risovarka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0440\u0438\u0441\u043E\u0432\u0430\u0440\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/risovarka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "aerogril",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0430\u044D\u0440\u043E\u0433\u0440\u0438\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/aerogril.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "gril",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0433\u0440\u0438\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/gril.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "vafelnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u0430\u0444\u0435\u043B\u044C\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/vafelnitsa.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "sendvichnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u044D\u043D\u0434\u0432\u0438\u0447\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/sendvichnitsa.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "myasorubka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u044F\u0441\u043E\u0440\u0443\u0431\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/myasorubka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "kuhonnyy_kombayn",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u0431\u0430\u0439\u043D",
      image: "/images/items/kuhonnaya_tehnika/kuhonnyy_kombayn.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "sokovyzhimalka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u043E\u043A\u043E\u0432\u044B\u0436\u0438\u043C\u0430\u043B\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/sokovyzhimalka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "posudomoechnaya_mashina",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043E\u0441\u0443\u0434\u043E\u043C\u043E\u0435\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",
      image: "/images/items/kuhonnaya_tehnika/posudomoechnaya_mashina.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "morozilnik",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/kuhonnaya_tehnika/morozilnik.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "vinnyy_shkaf",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u0438\u043D\u043D\u044B\u0439 \u0448\u043A\u0430\u0444",
      image: "/images/items/kuhonnaya_tehnika/vinnyy_shkaf.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "elektricheskaya_skovoroda",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043A\u043E\u0432\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/kuhonnaya_tehnika/elektricheskaya_skovoroda.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "yogurtnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0439\u043E\u0433\u0443\u0440\u0442\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/yogurtnitsa.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "hlebopechka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0445\u043B\u0435\u0431\u043E\u043F\u0435\u0447\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/hlebopechka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "kuhonnye_vesy",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u0432\u0435\u0441\u044B",
      image: "/images/items/kuhonnaya_tehnika/kuhonnye_vesy.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "termometr",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u0435\u0440\u043C\u043E\u043C\u0435\u0442\u0440",
      image: "/images/items/kuhonnaya_tehnika/termometr.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "izmelchitel",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/kuhonnaya_tehnika/izmelchitel.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "ovoscherezka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043E\u0432\u043E\u0449\u0435\u0440\u0435\u0437\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/ovoscherezka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "lapsherezka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043B\u0430\u043F\u0448\u0435\u0440\u0435\u0437\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/lapsherezka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "sushilka_dlya_ovoschey",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u0443\u0448\u0438\u043B\u043A\u0430 \u0434\u043B\u044F \u043E\u0432\u043E\u0449\u0435\u0439",
      image: "/images/items/kuhonnaya_tehnika/sushilka_dlya_ovoschey.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "popkornitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u043F\u043E\u043F\u043A\u043E\u0440\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/popkornitsa.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "frityurnitsa",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0444\u0440\u0438\u0442\u044E\u0440\u043D\u0438\u0446\u0430",
      image: "/images/items/kuhonnaya_tehnika/frityurnitsa.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "induktsionnaya_plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0438\u043D\u0434\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/induktsionnaya_plita.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "gazovaya_plita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0433\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/gazovaya_plita.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "elektroplita",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u043B\u0438\u0442\u0430",
      image: "/images/items/kuhonnaya_tehnika/elektroplita.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "vytyazhka",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0432\u044B\u0442\u044F\u0436\u043A\u0430",
      image: "/images/items/kuhonnaya_tehnika/vytyazhka.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "termopot",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0442\u0435\u0440\u043C\u043E\u043F\u043E\u0442",
      image: "/images/items/kuhonnaya_tehnika/termopot.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "samovar",
      categoryId: "kuhonnaya_tehnika",
      categoryName: "\u041A\u0443\u0445\u043E\u043D\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",
      title: "\u0441\u0430\u043C\u043E\u0432\u0430\u0440",
      image: "/images/items/kuhonnaya_tehnika/samovar.jpg",
      categoryImage: "/images/categories/kuhonnaya_tehnika.jpg"
    },
    {
      id: "smartfon",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D",
      image: "/images/items/gadjety/smartfon.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "planshet",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u043B\u0430\u043D\u0448\u0435\u0442",
      image: "/images/items/gadjety/planshet.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "noutbuk",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043D\u043E\u0443\u0442\u0431\u0443\u043A",
      image: "/images/items/gadjety/noutbuk.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "kompyuter",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",
      image: "/images/items/gadjety/kompyuter.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "monitor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u043E\u043D\u0438\u0442\u043E\u0440",
      image: "/images/items/gadjety/monitor.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "klaviatura",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",
      image: "/images/items/gadjety/klaviatura.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "mysh",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u044B\u0448\u044C",
      image: "/images/items/gadjety/mysh.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "naushniki",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0438",
      image: "/images/items/gadjety/naushniki.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "kolonka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u043E\u043B\u043E\u043D\u043A\u0430",
      image: "/images/items/gadjety/kolonka.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "umnye_chasy",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u044B\u0435 \u0447\u0430\u0441\u044B",
      image: "/images/items/gadjety/umnye_chasy.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "fitnes_braslet",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0444\u0438\u0442\u043D\u0435\u0441-\u0431\u0440\u0430\u0441\u043B\u0435\u0442",
      image: "/images/items/gadjety/fitnes_braslet.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "elektronnaya_kniga",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430",
      image: "/images/items/gadjety/elektronnaya_kniga.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "igrovaya_pristavka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0438\u0433\u0440\u043E\u0432\u0430\u044F \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430",
      image: "/images/items/gadjety/igrovaya_pristavka.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "geympad",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0433\u0435\u0439\u043C\u043F\u0430\u0434",
      image: "/images/items/gadjety/geympad.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "vr_shlem",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "VR-\u0448\u043B\u0435\u043C",
      image: "/images/items/gadjety/vr_shlem.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/kamera.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "ekshn_kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043A\u0448\u043D-\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/ekshn_kamera.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "dron",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0434\u0440\u043E\u043D",
      image: "/images/items/gadjety/dron.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "pauerbank",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0430\u0443\u044D\u0440\u0431\u0430\u043D\u043A",
      image: "/images/items/gadjety/pauerbank.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "router",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0440\u043E\u0443\u0442\u0435\u0440",
      image: "/images/items/gadjety/router.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "modem",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u043E\u0434\u0435\u043C",
      image: "/images/items/gadjety/modem.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "mikrofon",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",
      image: "/images/items/gadjety/mikrofon.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "veb_kamera",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0432\u0435\u0431-\u043A\u0430\u043C\u0435\u0440\u0430",
      image: "/images/items/gadjety/veb_kamera.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "printer",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0440\u0438\u043D\u0442\u0435\u0440",
      image: "/images/items/gadjety/printer.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "skaner",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u043A\u0430\u043D\u0435\u0440",
      image: "/images/items/gadjety/skaner.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "proektor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0440",
      image: "/images/items/gadjety/proektor.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "televizor",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440",
      image: "/images/items/gadjety/televizor.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "saundbar",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0441\u0430\u0443\u043D\u0434\u0431\u0430\u0440",
      image: "/images/items/gadjety/saundbar.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "umnaya_lampa",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u0430\u044F \u043B\u0430\u043C\u043F\u0430",
      image: "/images/items/gadjety/umnaya_lampa.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "umnaya_rozetka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0443\u043C\u043D\u0430\u044F \u0440\u043E\u0437\u0435\u0442\u043A\u0430",
      image: "/images/items/gadjety/umnaya_rozetka.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "robot_pylesos",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0440\u043E\u0431\u043E\u0442-\u043F\u044B\u043B\u0435\u0441\u043E\u0441",
      image: "/images/items/gadjety/robot_pylesos.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "elektrosamokat",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/gadjety/elektrosamokat.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "giroskuter",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0433\u0438\u0440\u043E\u0441\u043A\u0443\u0442\u0435\u0440",
      image: "/images/items/gadjety/giroskuter.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "3d_printer",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "3D-\u043F\u0440\u0438\u043D\u0442\u0435\u0440",
      image: "/images/items/gadjety/3d_printer.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "nas",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "NAS",
      image: "/images/items/gadjety/nas.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "ssd",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "SSD",
      image: "/images/items/gadjety/ssd.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "zhestkiy_disk",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0436\u0451\u0441\u0442\u043A\u0438\u0439 \u0434\u0438\u0441\u043A",
      image: "/images/items/gadjety/zhestkiy_disk.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "fleshka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0444\u043B\u0435\u0448\u043A\u0430",
      image: "/images/items/gadjety/fleshka.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "zaryadka",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0437\u0430\u0440\u044F\u0434\u043A\u0430",
      image: "/images/items/gadjety/zaryadka.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "dok_stantsiya",
      categoryId: "gadjety",
      categoryName: "\u0413\u0430\u0434\u0436\u0435\u0442\u044B",
      title: "\u0434\u043E\u043A-\u0441\u0442\u0430\u043D\u0446\u0438\u044F",
      image: "/images/items/gadjety/dok_stantsiya.jpg",
      categoryImage: "/images/categories/gadjety.jpg"
    },
    {
      id: "vrach",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u0440\u0430\u0447",
      image: "/images/items/professii/vrach.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "uchitel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0443\u0447\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/uchitel.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "programmist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442",
      image: "/images/items/professii/programmist.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "dizayner",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440",
      image: "/images/items/professii/dizayner.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "inzhener",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0438\u043D\u0436\u0435\u043D\u0435\u0440",
      image: "/images/items/professii/inzhener.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "arhitektor",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440",
      image: "/images/items/professii/arhitektor.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "yurist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u044E\u0440\u0438\u0441\u0442",
      image: "/images/items/professii/yurist.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "buhgalter",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
      image: "/images/items/professii/buhgalter.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "marketolog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/marketolog.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "menedzher",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
      image: "/images/items/professii/menedzher.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "predprinimatel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/predprinimatel.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "povar",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u0432\u0430\u0440",
      image: "/images/items/professii/povar.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "ofitsiant",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043E\u0444\u0438\u0446\u0438\u0430\u043D\u0442",
      image: "/images/items/professii/ofitsiant.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "barista",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0431\u0430\u0440\u0438\u0441\u0442\u0430",
      image: "/images/items/professii/barista.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "voditel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/voditel.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "pilot",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0438\u043B\u043E\u0442",
      image: "/images/items/professii/pilot.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "politseyskiy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u043B\u0438\u0446\u0435\u0439\u0441\u043A\u0438\u0439",
      image: "/images/items/professii/politseyskiy.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "pozharnyy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u043E\u0436\u0430\u0440\u043D\u044B\u0439",
      image: "/images/items/professii/pozharnyy.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "voennyy",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u043E\u0435\u043D\u043D\u044B\u0439",
      image: "/images/items/professii/voennyy.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "akter",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u043A\u0442\u0451\u0440",
      image: "/images/items/professii/akter.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "muzykant",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442",
      image: "/images/items/professii/muzykant.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "hudozhnik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A",
      image: "/images/items/professii/hudozhnik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "fotograf",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444",
      image: "/images/items/professii/fotograf.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "zhurnalist",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442",
      image: "/images/items/professii/zhurnalist.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "pisatel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/pisatel.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "perevodchik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",
      image: "/images/items/professii/perevodchik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "psiholog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/psiholog.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "trener",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0442\u0440\u0435\u043D\u0435\u0440",
      image: "/images/items/professii/trener.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "sportsmen",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D",
      image: "/images/items/professii/sportsmen.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "stroitel",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C",
      image: "/images/items/professii/stroitel.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "elektrik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A",
      image: "/images/items/professii/elektrik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "santehnik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A",
      image: "/images/items/professii/santehnik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "mehanik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043C\u0435\u0445\u0430\u043D\u0438\u043A",
      image: "/images/items/professii/mehanik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "fermer",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u0435\u0440\u043C\u0435\u0440",
      image: "/images/items/professii/fermer.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "veterinar",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440",
      image: "/images/items/professii/veterinar.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "farmatsevt",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0444\u0430\u0440\u043C\u0430\u0446\u0435\u0432\u0442",
      image: "/images/items/professii/farmatsevt.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "stomatolog",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433",
      image: "/images/items/professii/stomatolog.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "parikmaher",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440",
      image: "/images/items/professii/parikmaher.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "kurer",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u043A\u0443\u0440\u044C\u0435\u0440",
      image: "/images/items/professii/kurer.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "analitik",
      categoryId: "professii",
      categoryName: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438",
      title: "\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A",
      image: "/images/items/professii/analitik.jpg",
      categoryImage: "/images/categories/professii.jpg"
    },
    {
      id: "krasnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
      image: "/images/items/cveta/krasnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "siniy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0438\u043D\u0438\u0439",
      image: "/images/items/cveta/siniy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "zelenyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0437\u0435\u043B\u0451\u043D\u044B\u0439",
      image: "/images/items/cveta/zelenyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "zheltyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0436\u0451\u043B\u0442\u044B\u0439",
      image: "/images/items/cveta/zheltyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "oranzhevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/oranzhevyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "fioletovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/fioletovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "rozovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/rozovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "chernyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0447\u0451\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/chernyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "belyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0435\u043B\u044B\u0439",
      image: "/images/items/cveta/belyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "seryy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0435\u0440\u044B\u0439",
      image: "/images/items/cveta/seryy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "korichnevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/korichnevyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "goluboy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0433\u043E\u043B\u0443\u0431\u043E\u0439",
      image: "/images/items/cveta/goluboy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "biryuzovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/biryuzovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "bezhevyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u0435\u0436\u0435\u0432\u044B\u0439",
      image: "/images/items/cveta/bezhevyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "zolotoy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0437\u043E\u043B\u043E\u0442\u043E\u0439",
      image: "/images/items/cveta/zolotoy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "serebryanyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439",
      image: "/images/items/cveta/serebryanyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "bordovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0431\u043E\u0440\u0434\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/bordovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "malinovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u0430\u043B\u0438\u043D\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/malinovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "salatovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0441\u0430\u043B\u0430\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/salatovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "olivkovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043E\u043B\u0438\u0432\u043A\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/olivkovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "haki",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0445\u0430\u043A\u0438",
      image: "/images/items/cveta/haki.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "lilovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0438\u043B\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/lilovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "indigo",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0438\u043D\u0434\u0438\u0433\u043E",
      image: "/images/items/cveta/indigo.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "lazurnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0430\u0437\u0443\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/lazurnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "korallovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u043E\u0440\u0430\u043B\u043B\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/korallovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "persikovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/persikovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "myatnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u044F\u0442\u043D\u044B\u0439",
      image: "/images/items/cveta/myatnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "izumrudnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0438\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439",
      image: "/images/items/cveta/izumrudnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "purpurnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0443\u0440\u043F\u0443\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/purpurnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "shokoladnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439",
      image: "/images/items/cveta/shokoladnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "kremovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043A\u0440\u0435\u043C\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/kremovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "pesochnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043F\u0435\u0441\u043E\u0447\u043D\u044B\u0439",
      image: "/images/items/cveta/pesochnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "grafitovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0433\u0440\u0430\u0444\u0438\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/grafitovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "terrakotovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/terrakotovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "yantarnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u044F\u043D\u0442\u0430\u0440\u043D\u044B\u0439",
      image: "/images/items/cveta/yantarnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "lavandovyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u044B\u0439",
      image: "/images/items/cveta/lavandovyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "nebesnyy",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0439",
      image: "/images/items/cveta/nebesnyy.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "morskoy_volny",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0432\u043E\u043B\u043D\u044B",
      image: "/images/items/cveta/morskoy_volny.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "fuksiya",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0444\u0443\u043A\u0441\u0438\u044F",
      image: "/images/items/cveta/fuksiya.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "ultramarin",
      categoryId: "cveta",
      categoryName: "\u0426\u0432\u0435\u0442\u0430",
      title: "\u0443\u043B\u044C\u0442\u0440\u0430\u043C\u0430\u0440\u0438\u043D",
      image: "/images/items/cveta/ultramarin.jpg",
      categoryImage: "/images/categories/cveta.jpg"
    },
    {
      id: "roza",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u0437\u0430",
      image: "/images/items/cvety/roza.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "tyulpan",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0442\u044E\u043B\u044C\u043F\u0430\u043D",
      image: "/images/items/cvety/tyulpan.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "romashka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u043C\u0430\u0448\u043A\u0430",
      image: "/images/items/cvety/romashka.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "liliya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u0438\u043B\u0438\u044F",
      image: "/images/items/cvety/liliya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "orhideya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043E\u0440\u0445\u0438\u0434\u0435\u044F",
      image: "/images/items/cvety/orhideya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "pion",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u0438\u043E\u043D",
      image: "/images/items/cvety/pion.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "gvozdika",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0432\u043E\u0437\u0434\u0438\u043A\u0430",
      image: "/images/items/cvety/gvozdika.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "hrizantema",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0445\u0440\u0438\u0437\u0430\u043D\u0442\u0435\u043C\u0430",
      image: "/images/items/cvety/hrizantema.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "iris",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0438\u0440\u0438\u0441",
      image: "/images/items/cvety/iris.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "nartsiss",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043D\u0430\u0440\u0446\u0438\u0441\u0441",
      image: "/images/items/cvety/nartsiss.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "podsolnuh",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u043E\u0434\u0441\u043E\u043B\u043D\u0443\u0445",
      image: "/images/items/cvety/podsolnuh.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "lavanda",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u0430\u0432\u0430\u043D\u0434\u0430",
      image: "/images/items/cvety/lavanda.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "siren",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0441\u0438\u0440\u0435\u043D\u044C",
      image: "/images/items/cvety/siren.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "giatsint",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0438\u0430\u0446\u0438\u043D\u0442",
      image: "/images/items/cvety/giatsint.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "georgin",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0435\u043E\u0440\u0433\u0438\u043D",
      image: "/images/items/cvety/georgin.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "gerbera",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u0435\u0440\u0431\u0435\u0440\u0430",
      image: "/images/items/cvety/gerbera.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "mak",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u043A",
      image: "/images/items/cvety/mak.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "vasilek",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0432\u0430\u0441\u0438\u043B\u0451\u043A",
      image: "/images/items/cvety/vasilek.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "nezabudka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043D\u0435\u0437\u0430\u0431\u0443\u0434\u043A\u0430",
      image: "/images/items/cvety/nezabudka.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "kolokolchik",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A",
      image: "/images/items/cvety/kolokolchik.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "lotos",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u043E\u0442\u043E\u0441",
      image: "/images/items/cvety/lotos.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "magnoliya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u0433\u043D\u043E\u043B\u0438\u044F",
      image: "/images/items/cvety/magnoliya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "zhasmin",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0436\u0430\u0441\u043C\u0438\u043D",
      image: "/images/items/cvety/zhasmin.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "mimoza",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0438\u043C\u043E\u0437\u0430",
      image: "/images/items/cvety/mimoza.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "freziya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0444\u0440\u0435\u0437\u0438\u044F",
      image: "/images/items/cvety/freziya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "anemon",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0430\u043D\u0435\u043C\u043E\u043D",
      image: "/images/items/cvety/anemon.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "astra",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0430\u0441\u0442\u0440\u0430",
      image: "/images/items/cvety/astra.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "krokus",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u0440\u043E\u043A\u0443\u0441",
      image: "/images/items/cvety/krokus.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "gladiolus",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u043B\u0430\u0434\u0438\u043E\u043B\u0443\u0441",
      image: "/images/items/cvety/gladiolus.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "begoniya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0431\u0435\u0433\u043E\u043D\u0438\u044F",
      image: "/images/items/cvety/begoniya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "fialka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0444\u0438\u0430\u043B\u043A\u0430",
      image: "/images/items/cvety/fialka.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "gortenziya",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0433\u043E\u0440\u0442\u0435\u043D\u0437\u0438\u044F",
      image: "/images/items/cvety/gortenziya.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "kalendula",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u0430\u043B\u0435\u043D\u0434\u0443\u043B\u0430",
      image: "/images/items/cvety/kalendula.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "klematis",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043A\u043B\u0435\u043C\u0430\u0442\u0438\u0441",
      image: "/images/items/cvety/klematis.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "lyutik",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043B\u044E\u0442\u0438\u043A",
      image: "/images/items/cvety/lyutik.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "margaritka",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043C\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u043A\u0430",
      image: "/images/items/cvety/margaritka.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "primula",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u043F\u0440\u0438\u043C\u0443\u043B\u0430",
      image: "/images/items/cvety/primula.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "rododendron",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0440\u043E\u0434\u043E\u0434\u0435\u043D\u0434\u0440\u043E\u043D",
      image: "/images/items/cvety/rododendron.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "tsiklamen",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u0446\u0438\u043A\u043B\u0430\u043C\u0435\u043D",
      image: "/images/items/cvety/tsiklamen.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "eustoma",
      categoryId: "cvety",
      categoryName: "\u0426\u0432\u0435\u0442\u044B",
      title: "\u044D\u0443\u0441\u0442\u043E\u043C\u0430",
      image: "/images/items/cvety/eustoma.jpg",
      categoryImage: "/images/categories/cvety.jpg"
    },
    {
      id: "avtomobil",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
      image: "/images/items/transport/avtomobil.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "mototsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/mototsikl.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "velosiped",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434",
      image: "/images/items/transport/velosiped.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "samokat",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/transport/samokat.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "elektrosamokat",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/transport/elektrosamokat.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "skeytbord",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434",
      image: "/images/items/transport/skeytbord.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "roliki",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0440\u043E\u043B\u0438\u043A\u0438",
      image: "/images/items/transport/roliki.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "avtobus",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0430\u0432\u0442\u043E\u0431\u0443\u0441",
      image: "/images/items/transport/avtobus.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "trolleybus",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u043E\u043B\u043B\u0435\u0439\u0431\u0443\u0441",
      image: "/images/items/transport/trolleybus.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "tramvay",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u0430\u043C\u0432\u0430\u0439",
      image: "/images/items/transport/tramvay.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "metro",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u0435\u0442\u0440\u043E",
      image: "/images/items/transport/metro.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "poezd",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u043E\u0435\u0437\u0434",
      image: "/images/items/transport/poezd.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "elektrichka",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u043A\u0430",
      image: "/images/items/transport/elektrichka.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "samolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u0430\u043C\u043E\u043B\u0451\u0442",
      image: "/images/items/transport/samolet.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "vertolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u0435\u0440\u0442\u043E\u043B\u0451\u0442",
      image: "/images/items/transport/vertolet.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "dirizhabl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0434\u0438\u0440\u0438\u0436\u0430\u0431\u043B\u044C",
      image: "/images/items/transport/dirizhabl.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "korabl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u043E\u0440\u0430\u0431\u043B\u044C",
      image: "/images/items/transport/korabl.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "lodka",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043B\u043E\u0434\u043A\u0430",
      image: "/images/items/transport/lodka.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "yahta",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044F\u0445\u0442\u0430",
      image: "/images/items/transport/yahta.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "kater",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0442\u0435\u0440",
      image: "/images/items/transport/kater.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "parom",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u0430\u0440\u043E\u043C",
      image: "/images/items/transport/parom.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "gruzovik",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",
      image: "/images/items/transport/gruzovik.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "traktor",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0440\u0430\u043A\u0442\u043E\u0440",
      image: "/images/items/transport/traktor.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "ekskavator",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u044D\u043A\u0441\u043A\u0430\u0432\u0430\u0442\u043E\u0440",
      image: "/images/items/transport/ekskavator.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "buldozer",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0431\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440",
      image: "/images/items/transport/buldozer.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "taksi",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0442\u0430\u043A\u0441\u0438",
      image: "/images/items/transport/taksi.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "karshering",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0440\u0448\u0435\u0440\u0438\u043D\u0433",
      image: "/images/items/transport/karshering.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "sportkar",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043F\u043E\u0440\u0442\u043A\u0430\u0440",
      image: "/images/items/transport/sportkar.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "pikap",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043F\u0438\u043A\u0430\u043F",
      image: "/images/items/transport/pikap.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "kabriolet",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442",
      image: "/images/items/transport/kabriolet.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "miniven",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u0438\u043D\u0438\u0432\u044D\u043D",
      image: "/images/items/transport/miniven.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "vnedorozhnik",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0432\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
      image: "/images/items/transport/vnedorozhnik.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "skuter",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043A\u0443\u0442\u0435\u0440",
      image: "/images/items/transport/skuter.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "moped",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u043F\u0435\u0434",
      image: "/images/items/transport/moped.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "kvadrotsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0432\u0430\u0434\u0440\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/kvadrotsikl.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "snegohod",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0441\u043D\u0435\u0433\u043E\u0445\u043E\u0434",
      image: "/images/items/transport/snegohod.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "gidrotsikl",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0433\u0438\u0434\u0440\u043E\u0446\u0438\u043A\u043B",
      image: "/images/items/transport/gidrotsikl.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "monorels",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043C\u043E\u043D\u043E\u0440\u0435\u043B\u044C\u0441",
      image: "/images/items/transport/monorels.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "kanatnaya_doroga",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u043A\u0430\u043D\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430",
      image: "/images/items/transport/kanatnaya_doroga.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "raketa",
      categoryId: "transport",
      categoryName: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
      title: "\u0440\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/transport/raketa.jpg",
      categoryImage: "/images/categories/transport.jpg"
    },
    {
      id: "frantsuzskiy_buldog",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439 \u0431\u0443\u043B\u044C\u0434\u043E\u0433",
      image: "/images/items/porody_sobak/frantsuzskiy_buldog.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "labrador_retriver",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043B\u0430\u0431\u0440\u0430\u0434\u043E\u0440 \u0440\u0435\u0442\u0440\u0438\u0432\u0435\u0440",
      image: "/images/items/porody_sobak/labrador_retriver.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "zolotistyy_retriver",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0437\u043E\u043B\u043E\u0442\u0438\u0441\u0442\u044B\u0439 \u0440\u0435\u0442\u0440\u0438\u0432\u0435\u0440",
      image: "/images/items/porody_sobak/zolotistyy_retriver.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "nemetskaya_ovcharka",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043E\u0432\u0447\u0430\u0440\u043A\u0430",
      image: "/images/items/porody_sobak/nemetskaya_ovcharka.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "pudel",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u0443\u0434\u0435\u043B\u044C",
      image: "/images/items/porody_sobak/pudel.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "bigl",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0438\u0433\u043B\u044C",
      image: "/images/items/porody_sobak/bigl.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "buldog",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0443\u043B\u044C\u0434\u043E\u0433",
      image: "/images/items/porody_sobak/buldog.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "rotveyler",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0440\u043E\u0442\u0432\u0435\u0439\u043B\u0435\u0440",
      image: "/images/items/porody_sobak/rotveyler.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "taksa",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0442\u0430\u043A\u0441\u0430",
      image: "/images/items/porody_sobak/taksa.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "bokser",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043E\u043A\u0441\u0435\u0440",
      image: "/images/items/porody_sobak/bokser.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "doberman",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u043E\u0431\u0435\u0440\u043C\u0430\u043D",
      image: "/images/items/porody_sobak/doberman.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "dalmatin",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u0430\u043B\u043C\u0430\u0442\u0438\u043D",
      image: "/images/items/porody_sobak/dalmatin.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "mops",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043C\u043E\u043F\u0441",
      image: "/images/items/porody_sobak/mops.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "chihuahua",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0447\u0438\u0445\u0443\u0430\u0445\u0443\u0430",
      image: "/images/items/porody_sobak/chihuahua.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "yorkshirskiy_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0439\u043E\u0440\u043A\u0448\u0438\u0440\u0441\u043A\u0438\u0439 \u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/yorkshirskiy_terer.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "pekines",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u0435\u043A\u0438\u043D\u0435\u0441",
      image: "/images/items/porody_sobak/pekines.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "shiba_inu",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0438\u0431\u0430-\u0438\u043D\u0443",
      image: "/images/items/porody_sobak/shiba_inu.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "akita_inu",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043A\u0438\u0442\u0430-\u0438\u043D\u0443",
      image: "/images/items/porody_sobak/akita_inu.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "sibirskiy_haski",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0445\u0430\u0441\u043A\u0438",
      image: "/images/items/porody_sobak/sibirskiy_haski.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "samoed",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0430\u043C\u043E\u0435\u0434",
      image: "/images/items/porody_sobak/samoed.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "maltiyskaya_bolonka",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043C\u0430\u043B\u044C\u0442\u0438\u0439\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u043E\u043D\u043A\u0430",
      image: "/images/items/porody_sobak/maltiyskaya_bolonka.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "pomeranskiy_shpits",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043F\u043E\u043C\u0435\u0440\u0430\u043D\u0441\u043A\u0438\u0439 \u0448\u043F\u0438\u0446",
      image: "/images/items/porody_sobak/pomeranskiy_shpits.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "basendzhi",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0430\u0441\u0435\u043D\u0434\u0436\u0438",
      image: "/images/items/porody_sobak/basendzhi.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "shelti",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0435\u043B\u0442\u0438",
      image: "/images/items/porody_sobak/shelti.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "border_kolli",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043E\u0440\u0434\u0435\u0440-\u043A\u043E\u043B\u043B\u0438",
      image: "/images/items/porody_sobak/border_kolli.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "kolli",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u043E\u043B\u043B\u0438",
      image: "/images/items/porody_sobak/kolli.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "bulmastif",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0443\u043B\u044C\u043C\u0430\u0441\u0442\u0438\u0444",
      image: "/images/items/porody_sobak/bulmastif.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "staffordshirskiy_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0442\u0430\u0444\u0444\u043E\u0440\u0434\u0448\u0438\u0440\u0441\u043A\u0438\u0439 \u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/staffordshirskiy_terer.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "greyhaund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0433\u0440\u0435\u0439\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/greyhaund.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "irlandskiy_setter",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0438\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0441\u0435\u0442\u0442\u0435\u0440",
      image: "/images/items/porody_sobak/irlandskiy_setter.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "angliyskiy_setter",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0441\u0435\u0442\u0442\u0435\u0440",
      image: "/images/items/porody_sobak/angliyskiy_setter.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "bladhaund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u043B\u0430\u0434\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/bladhaund.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "afganskaya_borzaya",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u0444\u0433\u0430\u043D\u0441\u043A\u0430\u044F \u0431\u043E\u0440\u0437\u0430\u044F",
      image: "/images/items/porody_sobak/afganskaya_borzaya.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "alabay",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0430\u043B\u0430\u0431\u0430\u0439",
      image: "/images/items/porody_sobak/alabay.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "sharpey",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0448\u0430\u0440\u043F\u0435\u0439",
      image: "/images/items/porody_sobak/sharpey.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "kitayskaya_hohlataya",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0430\u044F \u0445\u043E\u0445\u043B\u0430\u0442\u0430\u044F",
      image: "/images/items/porody_sobak/kitayskaya_hohlataya.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "basset_haund",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0431\u0430\u0441\u0441\u0435\u0442-\u0445\u0430\u0443\u043D\u0434",
      image: "/images/items/porody_sobak/basset_haund.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "dzhek_rassel_terer",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0434\u0436\u0435\u043A-\u0440\u0430\u0441\u0441\u0435\u043B-\u0442\u0435\u0440\u044C\u0435\u0440",
      image: "/images/items/porody_sobak/dzhek_rassel_terer.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "kane_korso",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u043A\u0430\u043D\u0435-\u043A\u043E\u0440\u0441\u043E",
      image: "/images/items/porody_sobak/kane_korso.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "senbernar",
      categoryId: "porody_sobak",
      categoryName: "\u041F\u043E\u0440\u043E\u0434\u044B \u0441\u043E\u0431\u0430\u043A",
      title: "\u0441\u0435\u043D\u0431\u0435\u0440\u043D\u0430\u0440",
      image: "/images/items/porody_sobak/senbernar.jpg",
      categoryImage: "/images/categories/porody_sobak.jpg"
    },
    {
      id: "sobaka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043E\u0431\u0430\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/sobaka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "koshka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0448\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/koshka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "homyak",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0445\u043E\u043C\u044F\u043A",
      image: "/images/items/domashnie_zhivotnye/homyak.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "morskaya_svinka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0441\u0432\u0438\u043D\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/morskaya_svinka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "krolik",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u043E\u043B\u0438\u043A",
      image: "/images/items/domashnie_zhivotnye/krolik.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "popugay",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/domashnie_zhivotnye/popugay.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "kanareyka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/kanareyka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "volnistyy_popugaychik",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u043E\u043B\u043D\u0438\u0441\u0442\u044B\u0439 \u043F\u043E\u043F\u0443\u0433\u0430\u0439\u0447\u0438\u043A",
      image: "/images/items/domashnie_zhivotnye/volnistyy_popugaychik.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "krysa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u044B\u0441\u0430",
      image: "/images/items/domashnie_zhivotnye/krysa.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "mysh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u044B\u0448\u044C",
      image: "/images/items/domashnie_zhivotnye/mysh.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "shinshilla",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0448\u0438\u043D\u0448\u0438\u043B\u043B\u0430",
      image: "/images/items/domashnie_zhivotnye/shinshilla.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "degu",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0435\u0433\u0443",
      image: "/images/items/domashnie_zhivotnye/degu.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "horek",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0445\u043E\u0440\u0451\u043A",
      image: "/images/items/domashnie_zhivotnye/horek.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "ezh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0451\u0436",
      image: "/images/items/domashnie_zhivotnye/ezh.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "cherepaha",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/domashnie_zhivotnye/cherepaha.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "krasnouhaya_cherepaha",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0430\u0441\u043D\u043E\u0443\u0445\u0430\u044F \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/domashnie_zhivotnye/krasnouhaya_cherepaha.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "zolotaya_rybka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0437\u043E\u043B\u043E\u0442\u0430\u044F \u0440\u044B\u0431\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/zolotaya_rybka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "guppi",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0443\u043F\u043F\u0438",
      image: "/images/items/domashnie_zhivotnye/guppi.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "karpy_koi",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0440\u043F\u044B \u043A\u043E\u0438",
      image: "/images/items/domashnie_zhivotnye/karpy_koi.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "petuh",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u0442\u0443\u0445",
      image: "/images/items/domashnie_zhivotnye/petuh.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "kuritsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0443\u0440\u0438\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/kuritsa.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "utka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0442\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/utka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "gus",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0443\u0441\u044C",
      image: "/images/items/domashnie_zhivotnye/gus.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "indeyka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0438\u043D\u0434\u0435\u0439\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/indeyka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "perepel",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u0440\u0435\u043F\u0435\u043B",
      image: "/images/items/domashnie_zhivotnye/perepel.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "golub",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u043E\u043B\u0443\u0431\u044C",
      image: "/images/items/domashnie_zhivotnye/golub.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "pavlin",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0430\u0432\u043B\u0438\u043D",
      image: "/images/items/domashnie_zhivotnye/pavlin.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "fazan",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0444\u0430\u0437\u0430\u043D",
      image: "/images/items/domashnie_zhivotnye/fazan.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "loshad",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0448\u0430\u0434\u044C",
      image: "/images/items/domashnie_zhivotnye/loshad.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "osel",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0441\u0451\u043B",
      image: "/images/items/domashnie_zhivotnye/osel.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "poni",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u043E\u043D\u0438",
      image: "/images/items/domashnie_zhivotnye/poni.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "korova",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0440\u043E\u0432\u0430",
      image: "/images/items/domashnie_zhivotnye/korova.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "ovtsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0432\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/ovtsa.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "koza",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0437\u0430",
      image: "/images/items/domashnie_zhivotnye/koza.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "svinya",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u0432\u0438\u043D\u044C\u044F",
      image: "/images/items/domashnie_zhivotnye/svinya.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "verblyud",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u0435\u0440\u0431\u043B\u044E\u0434",
      image: "/images/items/domashnie_zhivotnye/verblyud.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "lama",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043C\u0430",
      image: "/images/items/domashnie_zhivotnye/lama.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "alpaka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043B\u044C\u043F\u0430\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/alpaka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "akvariumnaya_rybka",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043A\u0432\u0430\u0440\u0438\u0443\u043C\u043D\u0430\u044F \u0440\u044B\u0431\u043A\u0430",
      image: "/images/items/domashnie_zhivotnye/akvariumnaya_rybka.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "yascheritsa",
      categoryId: "domashnie_zhivotnye",
      categoryName: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u044F\u0449\u0435\u0440\u0438\u0446\u0430",
      image: "/images/items/domashnie_zhivotnye/yascheritsa.jpg",
      categoryImage: "/images/categories/domashnie_zhivotnye.jpg"
    },
    {
      id: "lev",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u0432",
      image: "/images/items/dikie_zhivotnye/lev.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "tigr",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0438\u0433\u0440",
      image: "/images/items/dikie_zhivotnye/tigr.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "leopard",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u043E\u043F\u0430\u0440\u0434",
      image: "/images/items/dikie_zhivotnye/leopard.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "yaguar",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u044F\u0433\u0443\u0430\u0440",
      image: "/images/items/dikie_zhivotnye/yaguar.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "gepard",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0435\u043F\u0430\u0440\u0434",
      image: "/images/items/dikie_zhivotnye/gepard.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "buryy_medved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0443\u0440\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C",
      image: "/images/items/dikie_zhivotnye/buryy_medved.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "belyy_medved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C",
      image: "/images/items/dikie_zhivotnye/belyy_medved.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "volk",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u043E\u043B\u043A",
      image: "/images/items/dikie_zhivotnye/volk.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "lisa",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0438\u0441\u0430",
      image: "/images/items/dikie_zhivotnye/lisa.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "koyot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0439\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/koyot.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "giena",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u0438\u0435\u043D\u0430",
      image: "/images/items/dikie_zhivotnye/giena.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "rys",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0441\u044C",
      image: "/images/items/dikie_zhivotnye/rys.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "puma",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0443\u043C\u0430",
      image: "/images/items/dikie_zhivotnye/puma.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "snezhnyy_bars",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043D\u0435\u0436\u043D\u044B\u0439 \u0431\u0430\u0440\u0441",
      image: "/images/items/dikie_zhivotnye/snezhnyy_bars.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "obezyana",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0431\u0435\u0437\u044C\u044F\u043D\u0430",
      image: "/images/items/dikie_zhivotnye/obezyana.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "gorilla",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0433\u043E\u0440\u0438\u043B\u043B\u0430",
      image: "/images/items/dikie_zhivotnye/gorilla.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "shimpanze",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0448\u0438\u043C\u043F\u0430\u043D\u0437\u0435",
      image: "/images/items/dikie_zhivotnye/shimpanze.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "orangutan",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0440\u0430\u043D\u0433\u0443\u0442\u0430\u043D",
      image: "/images/items/dikie_zhivotnye/orangutan.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "slon",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043B\u043E\u043D",
      image: "/images/items/dikie_zhivotnye/slon.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "zebra",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0437\u0435\u0431\u0440\u0430",
      image: "/images/items/dikie_zhivotnye/zebra.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "zhiraf",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0436\u0438\u0440\u0430\u0444",
      image: "/images/items/dikie_zhivotnye/zhiraf.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "nosorog",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043D\u043E\u0441\u043E\u0440\u043E\u0433",
      image: "/images/items/dikie_zhivotnye/nosorog.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "begemot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u0433\u0435\u043C\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/begemot.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "buyvol",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0443\u0439\u0432\u043E\u043B",
      image: "/images/items/dikie_zhivotnye/buyvol.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "bizon",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0438\u0437\u043E\u043D",
      image: "/images/items/dikie_zhivotnye/bizon.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "kaban",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0431\u0430\u043D",
      image: "/images/items/dikie_zhivotnye/kaban.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "olen",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u043B\u0435\u043D\u044C",
      image: "/images/items/dikie_zhivotnye/olen.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "los",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0441\u044C",
      image: "/images/items/dikie_zhivotnye/los.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "antilopa",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043D\u0442\u0438\u043B\u043E\u043F\u0430",
      image: "/images/items/dikie_zhivotnye/antilopa.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "barsuk",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0430\u0440\u0441\u0443\u043A",
      image: "/images/items/dikie_zhivotnye/barsuk.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "rosomaha",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u043E\u0441\u043E\u043C\u0430\u0445\u0430",
      image: "/images/items/dikie_zhivotnye/rosomaha.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "skuns",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043A\u0443\u043D\u0441",
      image: "/images/items/dikie_zhivotnye/skuns.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "enot",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0435\u043D\u043E\u0442",
      image: "/images/items/dikie_zhivotnye/enot.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "vydra",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0432\u044B\u0434\u0440\u0430",
      image: "/images/items/dikie_zhivotnye/vydra.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "dikobraz",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0438\u043A\u043E\u0431\u0440\u0430\u0437",
      image: "/images/items/dikie_zhivotnye/dikobraz.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "tapir",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0430\u043F\u0438\u0440",
      image: "/images/items/dikie_zhivotnye/tapir.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "lenivets",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0435\u043D\u0438\u0432\u0435\u0446",
      image: "/images/items/dikie_zhivotnye/lenivets.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "muraved",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0443\u0440\u0430\u0432\u044C\u0435\u0434",
      image: "/images/items/dikie_zhivotnye/muraved.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "koala",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u043E\u0430\u043B\u0430",
      image: "/images/items/dikie_zhivotnye/koala.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "kenguru",
      categoryId: "dikie_zhivotnye",
      categoryName: "\u0414\u0438\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0435\u043D\u0433\u0443\u0440\u0443",
      image: "/images/items/dikie_zhivotnye/kenguru.jpg",
      categoryImage: "/images/categories/dikie_zhivotnye.jpg"
    },
    {
      id: "akula",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043A\u0443\u043B\u0430",
      image: "/images/items/morskie_zhivotnye/akula.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "delfin",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0434\u0435\u043B\u044C\u0444\u0438\u043D",
      image: "/images/items/morskie_zhivotnye/delfin.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "kit",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0438\u0442",
      image: "/images/items/morskie_zhivotnye/kit.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "kasatka",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0441\u0430\u0442\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/kasatka.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "narval",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043D\u0430\u0440\u0432\u0430\u043B",
      image: "/images/items/morskie_zhivotnye/narval.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "beluha",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0435\u043B\u0443\u0445\u0430",
      image: "/images/items/morskie_zhivotnye/beluha.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morzh",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0436",
      image: "/images/items/morskie_zhivotnye/morzh.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "tyulen",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u044E\u043B\u0435\u043D\u044C",
      image: "/images/items/morskie_zhivotnye/tyulen.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morskoy_lev",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043B\u0435\u0432",
      image: "/images/items/morskie_zhivotnye/morskoy_lev.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "lamantiny",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043C\u0430\u043D\u0442\u0438\u043D\u044B",
      image: "/images/items/morskie_zhivotnye/lamantiny.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "ryba_kloun",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u043A\u043B\u043E\u0443\u043D",
      image: "/images/items/morskie_zhivotnye/ryba_kloun.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "ryba_hirurg",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u0445\u0438\u0440\u0443\u0440\u0433",
      image: "/images/items/morskie_zhivotnye/ryba_hirurg.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "ryba_popugay",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0440\u044B\u0431\u0430-\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/morskie_zhivotnye/ryba_popugay.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "skat",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0441\u043A\u0430\u0442",
      image: "/images/items/morskie_zhivotnye/skat.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "manta",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0430\u043D\u0442\u0430",
      image: "/images/items/morskie_zhivotnye/manta.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morskaya_zvezda",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430",
      image: "/images/items/morskie_zhivotnye/morskaya_zvezda.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morskoy_ezh",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0451\u0436",
      image: "/images/items/morskie_zhivotnye/morskoy_ezh.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "meduza",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0435\u0434\u0443\u0437\u0430",
      image: "/images/items/morskie_zhivotnye/meduza.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "osminog",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433",
      image: "/images/items/morskie_zhivotnye/osminog.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "kalmar",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043B\u044C\u043C\u0430\u0440",
      image: "/images/items/morskie_zhivotnye/kalmar.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "karakatitsa",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u0440\u0430\u043A\u0430\u0442\u0438\u0446\u0430",
      image: "/images/items/morskie_zhivotnye/karakatitsa.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "krab",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0430\u0431",
      image: "/images/items/morskie_zhivotnye/krab.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "omar",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043E\u043C\u0430\u0440",
      image: "/images/items/morskie_zhivotnye/omar.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "langust",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u0430\u043D\u0433\u0443\u0441\u0442",
      image: "/images/items/morskie_zhivotnye/langust.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "krevetka",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/krevetka.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "midiya",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0438\u0434\u0438\u044F",
      image: "/images/items/morskie_zhivotnye/midiya.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "ustritsa",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0441\u0442\u0440\u0438\u0446\u0430",
      image: "/images/items/morskie_zhivotnye/ustritsa.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morskoy_konek",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0451\u043A",
      image: "/images/items/morskie_zhivotnye/morskoy_konek.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "ugor",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0443\u0433\u043E\u0440\u044C",
      image: "/images/items/morskie_zhivotnye/ugor.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "barrakuda",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0431\u0430\u0440\u0440\u0430\u043A\u0443\u0434\u0430",
      image: "/images/items/morskie_zhivotnye/barrakuda.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "tunets",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0443\u043D\u0435\u0446",
      image: "/images/items/morskie_zhivotnye/tunets.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "losos",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043B\u043E\u0441\u043E\u0441\u044C",
      image: "/images/items/morskie_zhivotnye/losos.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "treska",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0442\u0440\u0435\u0441\u043A\u0430",
      image: "/images/items/morskie_zhivotnye/treska.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "kambala",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043A\u0430\u043C\u0431\u0430\u043B\u0430",
      image: "/images/items/morskie_zhivotnye/kambala.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "morskaya_cherepaha",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u043E\u0440\u0441\u043A\u0430\u044F \u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",
      image: "/images/items/morskie_zhivotnye/morskaya_cherepaha.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "pingvin",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0438\u043D\u0433\u0432\u0438\u043D",
      image: "/images/items/morskie_zhivotnye/pingvin.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "albatros",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0430\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
      image: "/images/items/morskie_zhivotnye/albatros.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "pelikan",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043F\u0435\u043B\u0438\u043A\u0430\u043D",
      image: "/images/items/morskie_zhivotnye/pelikan.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "fugu",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u0444\u0443\u0433\u0443",
      image: "/images/items/morskie_zhivotnye/fugu.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "murena",
      categoryId: "morskie_zhivotnye",
      categoryName: "\u041C\u043E\u0440\u0441\u043A\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435",
      title: "\u043C\u0443\u0440\u0435\u043D\u0430",
      image: "/images/items/morskie_zhivotnye/murena.jpg",
      categoryImage: "/images/categories/morskie_zhivotnye.jpg"
    },
    {
      id: "vorobey",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0432\u043E\u0440\u043E\u0431\u0435\u0439",
      image: "/images/items/ptitsy/vorobey.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "golub",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u043E\u043B\u0443\u0431\u044C",
      image: "/images/items/ptitsy/golub.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "vorona",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0432\u043E\u0440\u043E\u043D\u0430",
      image: "/images/items/ptitsy/vorona.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "soroka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u0440\u043E\u043A\u0430",
      image: "/images/items/ptitsy/soroka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "sinitsa",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0438\u043D\u0438\u0446\u0430",
      image: "/images/items/ptitsy/sinitsa.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "snegir",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043D\u0435\u0433\u0438\u0440\u044C",
      image: "/images/items/ptitsy/snegir.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "lastochka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043B\u0430\u0441\u0442\u043E\u0447\u043A\u0430",
      image: "/images/items/ptitsy/lastochka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "strizh",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0442\u0440\u0438\u0436",
      image: "/images/items/ptitsy/strizh.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "skvorets",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043A\u0432\u043E\u0440\u0435\u0446",
      image: "/images/items/ptitsy/skvorets.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "dyatel",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0434\u044F\u0442\u0435\u043B",
      image: "/images/items/ptitsy/dyatel.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "sova",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u0432\u0430",
      image: "/images/items/ptitsy/sova.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "filin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u0438\u043B\u0438\u043D",
      image: "/images/items/ptitsy/filin.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "orel",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043E\u0440\u0451\u043B",
      image: "/images/items/ptitsy/orel.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "sokol",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u043E\u043A\u043E\u043B",
      image: "/images/items/ptitsy/sokol.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "yastreb",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u044F\u0441\u0442\u0440\u0435\u0431",
      image: "/images/items/ptitsy/yastreb.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "zhuravl",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0436\u0443\u0440\u0430\u0432\u043B\u044C",
      image: "/images/items/ptitsy/zhuravl.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "aist",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0430\u0438\u0441\u0442",
      image: "/images/items/ptitsy/aist.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "tsaplya",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0446\u0430\u043F\u043B\u044F",
      image: "/images/items/ptitsy/tsaplya.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "lebed",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043B\u0435\u0431\u0435\u0434\u044C",
      image: "/images/items/ptitsy/lebed.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "gus",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u0443\u0441\u044C",
      image: "/images/items/ptitsy/gus.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "utka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0443\u0442\u043A\u0430",
      image: "/images/items/ptitsy/utka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "pelikan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0435\u043B\u0438\u043A\u0430\u043D",
      image: "/images/items/ptitsy/pelikan.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "flamingo",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u043B\u0430\u043C\u0438\u043D\u0433\u043E",
      image: "/images/items/ptitsy/flamingo.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "pingvin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0438\u043D\u0433\u0432\u0438\u043D",
      image: "/images/items/ptitsy/pingvin.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "straus",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0441\u0442\u0440\u0430\u0443\u0441",
      image: "/images/items/ptitsy/straus.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "pavlin",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0430\u0432\u043B\u0438\u043D",
      image: "/images/items/ptitsy/pavlin.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "popugay",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u043E\u043F\u0443\u0433\u0430\u0439",
      image: "/images/items/ptitsy/popugay.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "kanareyka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0430",
      image: "/images/items/ptitsy/kanareyka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "kolibri",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u043E\u043B\u0438\u0431\u0440\u0438",
      image: "/images/items/ptitsy/kolibri.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "kukushka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u043A\u0443\u0448\u043A\u0430",
      image: "/images/items/ptitsy/kukushka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "chayka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0447\u0430\u0439\u043A\u0430",
      image: "/images/items/ptitsy/chayka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "albatros",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0430\u043B\u044C\u0431\u0430\u0442\u0440\u043E\u0441",
      image: "/images/items/ptitsy/albatros.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "baklan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0431\u0430\u043A\u043B\u0430\u043D",
      image: "/images/items/ptitsy/baklan.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "fazan",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0444\u0430\u0437\u0430\u043D",
      image: "/images/items/ptitsy/fazan.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "kuropatka",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u0440\u043E\u043F\u0430\u0442\u043A\u0430",
      image: "/images/items/ptitsy/kuropatka.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "teterev",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0442\u0435\u0442\u0435\u0440\u0435\u0432",
      image: "/images/items/ptitsy/teterev.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "gluhar",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0433\u043B\u0443\u0445\u0430\u0440\u044C",
      image: "/images/items/ptitsy/gluhar.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "indyuk",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u0438\u043D\u0434\u044E\u043A",
      image: "/images/items/ptitsy/indyuk.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "kuritsa",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043A\u0443\u0440\u0438\u0446\u0430",
      image: "/images/items/ptitsy/kuritsa.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "petuh",
      categoryId: "ptitsy",
      categoryName: "\u041F\u0442\u0438\u0446\u044B",
      title: "\u043F\u0435\u0442\u0443\u0445",
      image: "/images/items/ptitsy/petuh.jpg",
      categoryImage: "/images/categories/ptitsy.jpg"
    },
    {
      id: "dub",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0434\u0443\u0431",
      image: "/images/items/derevya/dub.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "bereza",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0435\u0440\u0451\u0437\u0430",
      image: "/images/items/derevya/bereza.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "sosna",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u043E\u0441\u043D\u0430",
      image: "/images/items/derevya/sosna.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "el",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0435\u043B\u044C",
      image: "/images/items/derevya/el.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "lipa",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043B\u0438\u043F\u0430",
      image: "/images/items/derevya/lipa.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "klen",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u043B\u0451\u043D",
      image: "/images/items/derevya/klen.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "topol",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0442\u043E\u043F\u043E\u043B\u044C",
      image: "/images/items/derevya/topol.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "iva",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0438\u0432\u0430",
      image: "/images/items/derevya/iva.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "osina",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043E\u0441\u0438\u043D\u0430",
      image: "/images/items/derevya/osina.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "ryabina",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0440\u044F\u0431\u0438\u043D\u0430",
      image: "/images/items/derevya/ryabina.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "kashtan",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0430\u0448\u0442\u0430\u043D",
      image: "/images/items/derevya/kashtan.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "yasen",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044F\u0441\u0435\u043D\u044C",
      image: "/images/items/derevya/yasen.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "buk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0443\u043A",
      image: "/images/items/derevya/buk.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "grab",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0430\u0431",
      image: "/images/items/derevya/grab.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "olha",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043E\u043B\u044C\u0445\u0430",
      image: "/images/items/derevya/olha.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "vyaz",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0432\u044F\u0437",
      image: "/images/items/derevya/vyaz.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "listvennitsa",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043B\u0438\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u0446\u0430",
      image: "/images/items/derevya/listvennitsa.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "kedr",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0435\u0434\u0440",
      image: "/images/items/derevya/kedr.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "pihta",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0438\u0445\u0442\u0430",
      image: "/images/items/derevya/pihta.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "mozhzhevelnik",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u043E\u0436\u0436\u0435\u0432\u0435\u043B\u044C\u043D\u0438\u043A",
      image: "/images/items/derevya/mozhzhevelnik.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "yablonya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044F\u0431\u043B\u043E\u043D\u044F",
      image: "/images/items/derevya/yablonya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "grusha",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0443\u0448\u0430",
      image: "/images/items/derevya/grusha.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "vishnya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0432\u0438\u0448\u043D\u044F",
      image: "/images/items/derevya/vishnya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "sliva",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u043B\u0438\u0432\u0430",
      image: "/images/items/derevya/sliva.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "abrikos",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0430\u0431\u0440\u0438\u043A\u043E\u0441",
      image: "/images/items/derevya/abrikos.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "persik",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0435\u0440\u0441\u0438\u043A",
      image: "/images/items/derevya/persik.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "gretskiy_oreh",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0433\u0440\u0435\u0446\u043A\u0438\u0439 \u043E\u0440\u0435\u0445",
      image: "/images/items/derevya/gretskiy_oreh.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "funduk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0444\u0443\u043D\u0434\u0443\u043A",
      image: "/images/items/derevya/funduk.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "mindal",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u0438\u043D\u0434\u0430\u043B\u044C",
      image: "/images/items/derevya/mindal.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "palma",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043F\u0430\u043B\u044C\u043C\u0430",
      image: "/images/items/derevya/palma.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "kiparis",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043A\u0438\u043F\u0430\u0440\u0438\u0441",
      image: "/images/items/derevya/kiparis.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "sekvoyya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0435\u043A\u0432\u043E\u0439\u044F",
      image: "/images/items/derevya/sekvoyya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "baobab",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0430\u043E\u0431\u0430\u0431",
      image: "/images/items/derevya/baobab.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "evkalipt",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u044D\u0432\u043A\u0430\u043B\u0438\u043F\u0442",
      image: "/images/items/derevya/evkalipt.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "akatsiya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0430\u043A\u0430\u0446\u0438\u044F",
      image: "/images/items/derevya/akatsiya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "magnoliya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u043C\u0430\u0433\u043D\u043E\u043B\u0438\u044F",
      image: "/images/items/derevya/magnoliya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "sakura",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0430\u043A\u0443\u0440\u0430",
      image: "/images/items/derevya/sakura.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "bambuk",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0431\u0430\u043C\u0431\u0443\u043A",
      image: "/images/items/derevya/bambuk.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "tuya",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0442\u0443\u044F",
      image: "/images/items/derevya/tuya.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "samshit",
      categoryId: "derevya",
      categoryName: "\u0414\u0435\u0440\u0435\u0432\u044C\u044F",
      title: "\u0441\u0430\u043C\u0448\u0438\u0442",
      image: "/images/items/derevya/samshit.jpg",
      categoryImage: "/images/categories/derevya.jpg"
    },
    {
      id: "novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/novyy_god.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "rozhdestvo",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",
      image: "/images/items/prazdniki/rozhdestvo.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_rozhdeniya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
      image: "/images/items/prazdniki/den_rozhdeniya.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "8_marta",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "8 \u041C\u0430\u0440\u0442\u0430",
      image: "/images/items/prazdniki/8_marta.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "23_fevralya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "23 \u0424\u0435\u0432\u0440\u0430\u043B\u044F",
      image: "/images/items/prazdniki/23_fevralya.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_pobedy",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u041F\u043E\u0431\u0435\u0434\u044B",
      image: "/images/items/prazdniki/den_pobedy.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "pasha",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041F\u0430\u0441\u0445\u0430",
      image: "/images/items/prazdniki/pasha.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "hellouin",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0425\u044D\u043B\u043B\u043E\u0443\u0438\u043D",
      image: "/images/items/prazdniki/hellouin.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_svyatogo_valentina",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0432\u044F\u0442\u043E\u0433\u043E \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430",
      image: "/images/items/prazdniki/den_svyatogo_valentina.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "maslenitsa",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041C\u0430\u0441\u043B\u0435\u043D\u0438\u0446\u0430",
      image: "/images/items/prazdniki/maslenitsa.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_znaniy",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0437\u043D\u0430\u043D\u0438\u0439",
      image: "/images/items/prazdniki/den_znaniy.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_uchitelya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0443\u0447\u0438\u0442\u0435\u043B\u044F",
      image: "/images/items/prazdniki/den_uchitelya.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_materi",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043C\u0430\u0442\u0435\u0440\u0438",
      image: "/images/items/prazdniki/den_materi.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_ottsa",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043E\u0442\u0446\u0430",
      image: "/images/items/prazdniki/den_ottsa.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_goroda",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0433\u043E\u0440\u043E\u0434\u0430",
      image: "/images/items/prazdniki/den_goroda.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_rossii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0420\u043E\u0441\u0441\u0438\u0438",
      image: "/images/items/prazdniki/den_rossii.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_narodnogo_edinstva",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0430",
      image: "/images/items/prazdniki/den_narodnogo_edinstva.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "staryy_novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0421\u0442\u0430\u0440\u044B\u0439 \u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/staryy_novyy_god.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_kosmonavtiki",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442\u0438\u043A\u0438",
      image: "/images/items/prazdniki/den_kosmonavtiki.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_zaschity_detey",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B \u0434\u0435\u0442\u0435\u0439",
      image: "/images/items/prazdniki/den_zaschity_detey.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_studenta",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430",
      image: "/images/items/prazdniki/den_studenta.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_semi",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0435\u043C\u044C\u0438",
      image: "/images/items/prazdniki/den_semi.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_smeha",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u043C\u0435\u0445\u0430",
      image: "/images/items/prazdniki/den_smeha.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_truda",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0442\u0440\u0443\u0434\u0430",
      image: "/images/items/prazdniki/den_truda.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_konstitutsii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438",
      image: "/images/items/prazdniki/den_konstitutsii.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_vdv",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0412\u0414\u0412",
      image: "/images/items/prazdniki/den_vdv.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_flota",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0444\u043B\u043E\u0442\u0430",
      image: "/images/items/prazdniki/den_flota.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_programmista",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430",
      image: "/images/items/prazdniki/den_programmista.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_medika",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043C\u0435\u0434\u0438\u043A\u0430",
      image: "/images/items/prazdniki/den_medika.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_stroitelya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044F",
      image: "/images/items/prazdniki/den_stroitelya.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_shahtera",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0448\u0430\u0445\u0442\u0451\u0440\u0430",
      image: "/images/items/prazdniki/den_shahtera.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_avtomobilista",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438\u0441\u0442\u0430",
      image: "/images/items/prazdniki/den_avtomobilista.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_politsii",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u043F\u043E\u043B\u0438\u0446\u0438\u0438",
      image: "/images/items/prazdniki/den_politsii.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_energetika",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430",
      image: "/images/items/prazdniki/den_energetika.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_vseh_vlyublennyh",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0432\u0441\u0435\u0445 \u0432\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0445",
      image: "/images/items/prazdniki/den_vseh_vlyublennyh.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "kitayskiy_novyy_god",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434",
      image: "/images/items/prazdniki/kitayskiy_novyy_god.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "den_blagodareniya",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0414\u0435\u043D\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0435\u043D\u0438\u044F",
      image: "/images/items/prazdniki/den_blagodareniya.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "oktoberfest",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041E\u043A\u0442\u043E\u0431\u0435\u0440\u0444\u0435\u0441\u0442",
      image: "/images/items/prazdniki/oktoberfest.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "ramadan",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u0420\u0430\u043C\u0430\u0434\u0430\u043D",
      image: "/images/items/prazdniki/ramadan.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "navruz",
      categoryId: "prazdniki",
      categoryName: "\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0438",
      title: "\u041D\u0430\u0432\u0440\u0443\u0437",
      image: "/images/items/prazdniki/navruz.jpg",
      categoryImage: "/images/categories/prazdniki.jpg"
    },
    {
      id: "telegram",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Telegram",
      image: "/images/items/sotsseti_i_servisy/telegram.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "whatsapp",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "WhatsApp",
      image: "/images/items/sotsseti_i_servisy/whatsapp.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "youtube",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "YouTube",
      image: "/images/items/sotsseti_i_servisy/youtube.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "tiktok",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "TikTok",
      image: "/images/items/sotsseti_i_servisy/tiktok.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "instagram",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Instagram",
      image: "/images/items/sotsseti_i_servisy/instagram.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "vk",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "VK",
      image: "/images/items/sotsseti_i_servisy/vk.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "facebook",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Facebook",
      image: "/images/items/sotsseti_i_servisy/facebook.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "x",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "X",
      image: "/images/items/sotsseti_i_servisy/x.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "reddit",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Reddit",
      image: "/images/items/sotsseti_i_servisy/reddit.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "discord",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Discord",
      image: "/images/items/sotsseti_i_servisy/discord.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "twitch",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Twitch",
      image: "/images/items/sotsseti_i_servisy/twitch.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "pinterest",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Pinterest",
      image: "/images/items/sotsseti_i_servisy/pinterest.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "snapchat",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Snapchat",
      image: "/images/items/sotsseti_i_servisy/snapchat.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "linkedin",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "LinkedIn",
      image: "/images/items/sotsseti_i_servisy/linkedin.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "threads",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Threads",
      image: "/images/items/sotsseti_i_servisy/threads.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "rutube",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Rutube",
      image: "/images/items/sotsseti_i_servisy/rutube.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "dzen",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Dzen",
      image: "/images/items/sotsseti_i_servisy/dzen.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "odnoklassniki",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "\u041E\u0434\u043D\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438",
      image: "/images/items/sotsseti_i_servisy/odnoklassniki.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "spotify",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Spotify",
      image: "/images/items/sotsseti_i_servisy/spotify.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "netflix",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Netflix",
      image: "/images/items/sotsseti_i_servisy/netflix.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "kinopoisk",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Kinopoisk",
      image: "/images/items/sotsseti_i_servisy/kinopoisk.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "okko",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Okko",
      image: "/images/items/sotsseti_i_servisy/okko.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "ivi",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "IVI",
      image: "/images/items/sotsseti_i_servisy/ivi.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "kion",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Kion",
      image: "/images/items/sotsseti_i_servisy/kion.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "yandeks_muzyka",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041C\u0443\u0437\u044B\u043A\u0430",
      image: "/images/items/sotsseti_i_servisy/yandeks_muzyka.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "apple_music",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Apple Music",
      image: "/images/items/sotsseti_i_servisy/apple_music.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "soundcloud",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "SoundCloud",
      image: "/images/items/sotsseti_i_servisy/soundcloud.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "steam",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Steam",
      image: "/images/items/sotsseti_i_servisy/steam.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "epic_games_store",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Epic Games Store",
      image: "/images/items/sotsseti_i_servisy/epic_games_store.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "playstation_network",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "PlayStation Network",
      image: "/images/items/sotsseti_i_servisy/playstation_network.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "xbox_live",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Xbox Live",
      image: "/images/items/sotsseti_i_servisy/xbox_live.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "google_drive",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Google Drive",
      image: "/images/items/sotsseti_i_servisy/google_drive.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "dropbox",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Dropbox",
      image: "/images/items/sotsseti_i_servisy/dropbox.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "notion",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Notion",
      image: "/images/items/sotsseti_i_servisy/notion.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "trello",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Trello",
      image: "/images/items/sotsseti_i_servisy/trello.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "figma",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Figma",
      image: "/images/items/sotsseti_i_servisy/figma.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "canva",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Canva",
      image: "/images/items/sotsseti_i_servisy/canva.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "zoom",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Zoom",
      image: "/images/items/sotsseti_i_servisy/zoom.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "google_meet",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Google Meet",
      image: "/images/items/sotsseti_i_servisy/google_meet.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "skype",
      categoryId: "sotsseti_i_servisy",
      categoryName: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
      title: "Skype",
      image: "/images/items/sotsseti_i_servisy/skype.jpg",
      categoryImage: "/images/categories/sotsseti_i_servisy.jpg"
    },
    {
      id: "telegram",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Telegram",
      image: "/images/items/mobilnye_prilozheniya/telegram.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "whatsapp",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "WhatsApp",
      image: "/images/items/mobilnye_prilozheniya/whatsapp.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "youtube",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "YouTube",
      image: "/images/items/mobilnye_prilozheniya/youtube.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "tiktok",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "TikTok",
      image: "/images/items/mobilnye_prilozheniya/tiktok.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "vk",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "VK",
      image: "/images/items/mobilnye_prilozheniya/vk.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "instagram",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Instagram",
      image: "/images/items/mobilnye_prilozheniya/instagram.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "google_maps",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google Maps",
      image: "/images/items/mobilnye_prilozheniya/google_maps.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "yandeks_karty",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B",
      image: "/images/items/mobilnye_prilozheniya/yandeks_karty.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "2gis",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "2\u0413\u0418\u0421",
      image: "/images/items/mobilnye_prilozheniya/2gis.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "uber",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Uber",
      image: "/images/items/mobilnye_prilozheniya/uber.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "yandeks_go",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 Go",
      image: "/images/items/mobilnye_prilozheniya/yandeks_go.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "delivery_club",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Delivery Club",
      image: "/images/items/mobilnye_prilozheniya/delivery_club.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "samokat",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0421\u0430\u043C\u043E\u043A\u0430\u0442",
      image: "/images/items/mobilnye_prilozheniya/samokat.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "ozon",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Ozon",
      image: "/images/items/mobilnye_prilozheniya/ozon.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "wildberries",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Wildberries",
      image: "/images/items/mobilnye_prilozheniya/wildberries.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "aliexpress",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "AliExpress",
      image: "/images/items/mobilnye_prilozheniya/aliexpress.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "avito",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Avito",
      image: "/images/items/mobilnye_prilozheniya/avito.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "gmail",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Gmail",
      image: "/images/items/mobilnye_prilozheniya/gmail.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "google_foto",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google \u0424\u043E\u0442\u043E",
      image: "/images/items/mobilnye_prilozheniya/google_foto.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "google_drive",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Google Drive",
      image: "/images/items/mobilnye_prilozheniya/google_drive.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "sberbank_onlayn",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u041E\u043D\u043B\u0430\u0439\u043D",
      image: "/images/items/mobilnye_prilozheniya/sberbank_onlayn.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "t_bank",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0422-\u0411\u0430\u043D\u043A",
      image: "/images/items/mobilnye_prilozheniya/t_bank.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "gosuslugi",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433\u0438",
      image: "/images/items/mobilnye_prilozheniya/gosuslugi.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "spotify",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Spotify",
      image: "/images/items/mobilnye_prilozheniya/spotify.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "yandeks_muzyka",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u042F\u043D\u0434\u0435\u043A\u0441 \u041C\u0443\u0437\u044B\u043A\u0430",
      image: "/images/items/mobilnye_prilozheniya/yandeks_muzyka.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "shazam",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Shazam",
      image: "/images/items/mobilnye_prilozheniya/shazam.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "netflix",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Netflix",
      image: "/images/items/mobilnye_prilozheniya/netflix.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "kinopoisk",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "\u041A\u0438\u043D\u043E\u043F\u043E\u0438\u0441\u043A",
      image: "/images/items/mobilnye_prilozheniya/kinopoisk.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "duolingo",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Duolingo",
      image: "/images/items/mobilnye_prilozheniya/duolingo.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "notion",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Notion",
      image: "/images/items/mobilnye_prilozheniya/notion.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "todoist",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Todoist",
      image: "/images/items/mobilnye_prilozheniya/todoist.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "capcut",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "CapCut",
      image: "/images/items/mobilnye_prilozheniya/capcut.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "snapseed",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Snapseed",
      image: "/images/items/mobilnye_prilozheniya/snapseed.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "canva",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Canva",
      image: "/images/items/mobilnye_prilozheniya/canva.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "figma",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Figma",
      image: "/images/items/mobilnye_prilozheniya/figma.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "discord",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Discord",
      image: "/images/items/mobilnye_prilozheniya/discord.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "twitch",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Twitch",
      image: "/images/items/mobilnye_prilozheniya/twitch.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "steam",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Steam",
      image: "/images/items/mobilnye_prilozheniya/steam.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "chatgpt",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "ChatGPT",
      image: "/images/items/mobilnye_prilozheniya/chatgpt.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "pinterest",
      categoryId: "mobilnye_prilozheniya",
      categoryName: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      title: "Pinterest",
      image: "/images/items/mobilnye_prilozheniya/pinterest.jpg",
      categoryImage: "/images/categories/mobilnye_prilozheniya.jpg"
    },
    {
      id: "naruto",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041D\u0430\u0440\u0443\u0442\u043E",
      image: "/images/items/anime/naruto.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "van_pis",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0430\u043D-\u041F\u0438\u0441",
      image: "/images/items/anime/van_pis.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "blich",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u043B\u0438\u0447",
      image: "/images/items/anime/blich.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "ataka_titanov",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0410\u0442\u0430\u043A\u0430 \u0442\u0438\u0442\u0430\u043D\u043E\u0432",
      image: "/images/items/anime/ataka_titanov.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "tetrad_smerti",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u0435\u0442\u0440\u0430\u0434\u044C \u0441\u043C\u0435\u0440\u0442\u0438",
      image: "/images/items/anime/tetrad_smerti.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "stalnoy_alhimik",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0430\u043B\u0445\u0438\u043C\u0438\u043A",
      image: "/images/items/anime/stalnoy_alhimik.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "klinok_rassekayuschiy_demonov",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043B\u0438\u043D\u043E\u043A, \u0440\u0430\u0441\u0441\u0435\u043A\u0430\u044E\u0449\u0438\u0439 \u0434\u0435\u043C\u043E\u043D\u043E\u0432",
      image: "/images/items/anime/klinok_rassekayuschiy_demonov.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "magicheskaya_bitva",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0438\u0442\u0432\u0430",
      image: "/images/items/anime/magicheskaya_bitva.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "moya_geroyskaya_akademiya",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u044F \u0433\u0435\u0440\u043E\u0439\u0441\u043A\u0430\u044F \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u044F",
      image: "/images/items/anime/moya_geroyskaya_akademiya.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "vanpanchmen",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0430\u043D\u043F\u0430\u043D\u0447\u043C\u0435\u043D",
      image: "/images/items/anime/vanpanchmen.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "evangelion",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0415\u0432\u0430\u043D\u0433\u0435\u043B\u0438\u043E\u043D",
      image: "/images/items/anime/evangelion.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "kovboy_bibop",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043E\u0432\u0431\u043E\u0439 \u0411\u0438\u0431\u043E\u043F",
      image: "/images/items/anime/kovboy_bibop.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "hanter_h_hanter",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u0430\u043D\u0442\u0435\u0440 \u0445 \u0425\u0430\u043D\u0442\u0435\u0440",
      image: "/images/items/anime/hanter_h_hanter.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "tokiyskiy_gul",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u043E\u043A\u0438\u0439\u0441\u043A\u0438\u0439 \u0433\u0443\u043B\u044C",
      image: "/images/items/anime/tokiyskiy_gul.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "berserk",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u0435\u0440\u0441\u0435\u0440\u043A",
      image: "/images/items/anime/berserk.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "dzhodzho",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u0436\u043E\u0414\u0436\u043E",
      image: "/images/items/anime/dzhodzho.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "pokemon",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u043E\u043A\u0435\u043C\u043E\u043D",
      image: "/images/items/anime/pokemon.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "seylor_mun",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0435\u0439\u043B\u043E\u0440 \u041C\u0443\u043D",
      image: "/images/items/anime/seylor_mun.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "drakoniy_zhemchug",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u0440\u0430\u043A\u043E\u043D\u0438\u0439 \u0436\u0435\u043C\u0447\u0443\u0433",
      image: "/images/items/anime/drakoniy_zhemchug.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "hodyachiy_zamok",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u043E\u0434\u044F\u0447\u0438\u0439 \u0437\u0430\u043C\u043E\u043A",
      image: "/images/items/anime/hodyachiy_zamok.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "unesennye_prizrakami",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0423\u043D\u0435\u0441\u0451\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u0437\u0440\u0430\u043A\u0430\u043C\u0438",
      image: "/images/items/anime/unesennye_prizrakami.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "moy_sosed_totoro",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u0439 \u0441\u043E\u0441\u0435\u0434 \u0422\u043E\u0442\u043E\u0440\u043E",
      image: "/images/items/anime/moy_sosed_totoro.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "printsessa_mononoke",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u041C\u043E\u043D\u043E\u043D\u043E\u043A\u0435",
      image: "/images/items/anime/printsessa_mononoke.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "tvoe_imya",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u0432\u043E\u0451 \u0438\u043C\u044F",
      image: "/images/items/anime/tvoe_imya.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "forma_golosa",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0424\u043E\u0440\u043C\u0430 \u0433\u043E\u043B\u043E\u0441\u0430",
      image: "/images/items/anime/forma_golosa.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "vrata_shteyna",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u0440\u0430\u0442\u0430 \u0428\u0442\u0435\u0439\u043D\u0430",
      image: "/images/items/anime/vrata_shteyna.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "kod_gias",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041A\u043E\u0434 \u0413\u0438\u0430\u0441",
      image: "/images/items/anime/kod_gias.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "voleybol",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B",
      image: "/images/items/anime/voleybol.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "basketbol_kuroko",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B \u041A\u0443\u0440\u043E\u043A\u043E",
      image: "/images/items/anime/basketbol_kuroko.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "sinyaya_tyurma",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0438\u043D\u044F\u044F \u0442\u044E\u0440\u044C\u043C\u0430",
      image: "/images/items/anime/sinyaya_tyurma.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "monstr",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u043D\u0441\u0442\u0440",
      image: "/images/items/anime/monstr.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "elfiyskaya_pesn",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u042D\u043B\u044C\u0444\u0438\u0439\u0441\u043A\u0430\u044F \u043F\u0435\u0441\u043D\u044C",
      image: "/images/items/anime/elfiyskaya_pesn.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "parazit",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041F\u0430\u0440\u0430\u0437\u0438\u0442",
      image: "/images/items/anime/parazit.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "mob_psiho_100",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u041C\u043E\u0431 \u041F\u0441\u0438\u0445\u043E 100",
      image: "/images/items/anime/mob_psiho_100.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "semya_shpiona",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0435\u043C\u044C\u044F \u0448\u043F\u0438\u043E\u043D\u0430",
      image: "/images/items/anime/semya_shpiona.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "doktor_stoun",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u043E\u0443\u043D",
      image: "/images/items/anime/doktor_stoun.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "chernyy_klever",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0427\u0451\u0440\u043D\u044B\u0439 \u043A\u043B\u0435\u0432\u0435\u0440",
      image: "/images/items/anime/chernyy_klever.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "hvost_fei",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0425\u0432\u043E\u0441\u0442 \u0424\u0435\u0438",
      image: "/images/items/anime/hvost_fei.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "saga_o_vinlande",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0421\u0430\u0433\u0430 \u043E \u0412\u0438\u043D\u043B\u0430\u043D\u0434\u0435",
      image: "/images/items/anime/saga_o_vinlande.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "tokiyskie_mstiteli",
      categoryId: "anime",
      categoryName: "\u0410\u043D\u0438\u043C\u0435",
      title: "\u0422\u043E\u043A\u0438\u0439\u0441\u043A\u0438\u0435 \u043C\u0441\u0442\u0438\u0442\u0435\u043B\u0438",
      image: "/images/items/anime/tokiyskie_mstiteli.jpg",
      categoryImage: "/images/categories/anime.jpg"
    },
    {
      id: "chelovek_pauk",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043F\u0430\u0443\u043A",
      image: "/images/items/supergeroi/chelovek_pauk.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "betmen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0411\u044D\u0442\u043C\u0435\u043D",
      image: "/images/items/supergeroi/betmen.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "supermen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u0443\u043F\u0435\u0440\u043C\u0435\u043D",
      image: "/images/items/supergeroi/supermen.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "zheleznyy_chelovek",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
      image: "/images/items/supergeroi/zheleznyy_chelovek.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "kapitan_amerika",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041A\u0430\u043F\u0438\u0442\u0430\u043D \u0410\u043C\u0435\u0440\u0438\u043A\u0430",
      image: "/images/items/supergeroi/kapitan_amerika.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "tor",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0422\u043E\u0440",
      image: "/images/items/supergeroi/tor.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "halk",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0425\u0430\u043B\u043A",
      image: "/images/items/supergeroi/halk.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "chernaya_vdova",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u0432\u0434\u043E\u0432\u0430",
      image: "/images/items/supergeroi/chernaya_vdova.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "doktor_strendzh",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u0440\u044D\u043D\u0434\u0436",
      image: "/images/items/supergeroi/doktor_strendzh.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "chernaya_pantera",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0451\u0440\u043D\u0430\u044F \u043F\u0430\u043D\u0442\u0435\u0440\u0430",
      image: "/images/items/supergeroi/chernaya_pantera.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "rosomaha",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0420\u043E\u0441\u043E\u043C\u0430\u0445\u0430",
      image: "/images/items/supergeroi/rosomaha.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "dedpul",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u044D\u0434\u043F\u0443\u043B",
      image: "/images/items/supergeroi/dedpul.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "flesh",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0424\u043B\u044D\u0448",
      image: "/images/items/supergeroi/flesh.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "akvamen",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0410\u043A\u0432\u0430\u043C\u0435\u043D",
      image: "/images/items/supergeroi/akvamen.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "chudo_zhenschina",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0443\u0434\u043E-\u0436\u0435\u043D\u0449\u0438\u043D\u0430",
      image: "/images/items/supergeroi/chudo_zhenschina.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "zelenyy_fonar",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u0424\u043E\u043D\u0430\u0440\u044C",
      image: "/images/items/supergeroi/zelenyy_fonar.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "sorvigolova",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u043E\u0440\u0432\u0438\u0433\u043E\u043B\u043E\u0432\u0430",
      image: "/images/items/supergeroi/sorvigolova.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "karatel",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041A\u0430\u0440\u0430\u0442\u0435\u043B\u044C",
      image: "/images/items/supergeroi/karatel.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "loki",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041B\u043E\u043A\u0438",
      image: "/images/items/supergeroi/loki.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "sokolinyy_glaz",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u043E\u043A\u043E\u043B\u0438\u043D\u044B\u0439 \u0433\u043B\u0430\u0437",
      image: "/images/items/supergeroi/sokolinyy_glaz.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "alaya_vedma",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0410\u043B\u0430\u044F \u0412\u0435\u0434\u044C\u043C\u0430",
      image: "/images/items/supergeroi/alaya_vedma.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "vizhn",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0412\u0438\u0436\u043D",
      image: "/images/items/supergeroi/vizhn.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "chelovek_muravey",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u043B\u043E\u0432\u0435\u043A-\u043C\u0443\u0440\u0430\u0432\u0435\u0439",
      image: "/images/items/supergeroi/chelovek_muravey.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "osa",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041E\u0441\u0430",
      image: "/images/items/supergeroi/osa.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "zvezdnyy_lord",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u041B\u043E\u0440\u0434",
      image: "/images/items/supergeroi/zvezdnyy_lord.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "grut",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0413\u0440\u0443\u0442",
      image: "/images/items/supergeroi/grut.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "raketa",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0420\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/supergeroi/raketa.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "draks",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0414\u0440\u0430\u043A\u0441",
      image: "/images/items/supergeroi/draks.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "gamora",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0413\u0430\u043C\u043E\u0440\u0430",
      image: "/images/items/supergeroi/gamora.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "shazam",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0428\u0430\u0437\u0430\u043C",
      image: "/images/items/supergeroi/shazam.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "supergerl",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0421\u0443\u043F\u0435\u0440\u0433\u0451\u0440\u043B",
      image: "/images/items/supergeroi/supergerl.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "tsiklop",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0426\u0438\u043A\u043B\u043E\u043F",
      image: "/images/items/supergeroi/tsiklop.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "shtorm",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0428\u0442\u043E\u0440\u043C",
      image: "/images/items/supergeroi/shtorm.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "professor_iks",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440 \u0418\u043A\u0441",
      image: "/images/items/supergeroi/professor_iks.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "magneto",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041C\u0430\u0433\u043D\u0435\u0442\u043E",
      image: "/images/items/supergeroi/magneto.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "fantasticheskaya_chetverka",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0424\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0447\u0435\u0442\u0432\u0451\u0440\u043A\u0430",
      image: "/images/items/supergeroi/fantasticheskaya_chetverka.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "bleyd",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0411\u043B\u0435\u0439\u0434",
      image: "/images/items/supergeroi/bleyd.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "prizrachnyy_gonschik",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u041F\u0440\u0438\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0433\u043E\u043D\u0449\u0438\u043A",
      image: "/images/items/supergeroi/prizrachnyy_gonschik.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "hellboy",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0425\u0435\u043B\u043B\u0431\u043E\u0439",
      image: "/images/items/supergeroi/hellboy.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "cherepashki_nindzya",
      categoryId: "supergeroi",
      categoryName: "\u0421\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0438",
      title: "\u0427\u0435\u0440\u0435\u043F\u0430\u0448\u043A\u0438-\u043D\u0438\u043D\u0434\u0437\u044F",
      image: "/images/items/supergeroi/cherepashki_nindzya.jpg",
      categoryImage: "/images/categories/supergeroi.jpg"
    },
    {
      id: "solntse",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0421\u043E\u043B\u043D\u0446\u0435",
      image: "/images/items/kosmos/solntse.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "luna",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041B\u0443\u043D\u0430",
      image: "/images/items/kosmos/luna.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "merkuriy",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439",
      image: "/images/items/kosmos/merkuriy.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "venera",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0412\u0435\u043D\u0435\u0440\u0430",
      image: "/images/items/kosmos/venera.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "zemlya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0417\u0435\u043C\u043B\u044F",
      image: "/images/items/kosmos/zemlya.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "mars",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u0430\u0440\u0441",
      image: "/images/items/kosmos/mars.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "yupiter",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u042E\u043F\u0438\u0442\u0435\u0440",
      image: "/images/items/kosmos/yupiter.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "saturn",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0421\u0430\u0442\u0443\u0440\u043D",
      image: "/images/items/kosmos/saturn.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "uran",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0423\u0440\u0430\u043D",
      image: "/images/items/kosmos/uran.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "neptun",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041D\u0435\u043F\u0442\u0443\u043D",
      image: "/images/items/kosmos/neptun.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "pluton",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041F\u043B\u0443\u0442\u043E\u043D",
      image: "/images/items/kosmos/pluton.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "kometa",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u043C\u0435\u0442\u0430",
      image: "/images/items/kosmos/kometa.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "asteroid",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0430\u0441\u0442\u0435\u0440\u043E\u0438\u0434",
      image: "/images/items/kosmos/asteroid.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "meteorit",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",
      image: "/images/items/kosmos/meteorit.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "galaktika",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430",
      image: "/images/items/kosmos/galaktika.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "mlechnyy_put",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u043B\u0435\u0447\u043D\u044B\u0439 \u041F\u0443\u0442\u044C",
      image: "/images/items/kosmos/mlechnyy_put.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "chernaya_dyra",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0447\u0451\u0440\u043D\u0430\u044F \u0434\u044B\u0440\u0430",
      image: "/images/items/kosmos/chernaya_dyra.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "neytronnaya_zvezda",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043D\u0435\u0439\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430",
      image: "/images/items/kosmos/neytronnaya_zvezda.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "pulsar",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043F\u0443\u043B\u044C\u0441\u0430\u0440",
      image: "/images/items/kosmos/pulsar.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "kvazar",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u0432\u0430\u0437\u0430\u0440",
      image: "/images/items/kosmos/kvazar.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "tumannost",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0442\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C",
      image: "/images/items/kosmos/tumannost.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "sozvezdie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043E\u0437\u0432\u0435\u0437\u0434\u0438\u0435",
      image: "/images/items/kosmos/sozvezdie.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "orbita",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043E\u0440\u0431\u0438\u0442\u0430",
      image: "/images/items/kosmos/orbita.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "raketa",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0440\u0430\u043A\u0435\u0442\u0430",
      image: "/images/items/kosmos/raketa.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "sputnik",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043F\u0443\u0442\u043D\u0438\u043A",
      image: "/images/items/kosmos/sputnik.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "skafandr",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043A\u0430\u0444\u0430\u043D\u0434\u0440",
      image: "/images/items/kosmos/skafandr.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "kosmonavt",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442",
      image: "/images/items/kosmos/kosmonavt.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "astronavt",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0430\u0441\u0442\u0440\u043E\u043D\u0430\u0432\u0442",
      image: "/images/items/kosmos/astronavt.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "mks",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u041C\u041A\u0421",
      image: "/images/items/kosmos/mks.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "teleskop",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0442\u0435\u043B\u0435\u0441\u043A\u043E\u043F",
      image: "/images/items/kosmos/teleskop.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "marsohod",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043C\u0430\u0440\u0441\u043E\u0445\u043E\u0434",
      image: "/images/items/kosmos/marsohod.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "lunohod",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043B\u0443\u043D\u043E\u0445\u043E\u0434",
      image: "/images/items/kosmos/lunohod.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "kosmodrom",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043A\u043E\u0441\u043C\u043E\u0434\u0440\u043E\u043C",
      image: "/images/items/kosmos/kosmodrom.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "solnechnoe_zatmenie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435 \u0437\u0430\u0442\u043C\u0435\u043D\u0438\u0435",
      image: "/images/items/kosmos/solnechnoe_zatmenie.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "lunnoe_zatmenie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043B\u0443\u043D\u043D\u043E\u0435 \u0437\u0430\u0442\u043C\u0435\u043D\u0438\u0435",
      image: "/images/items/kosmos/lunnoe_zatmenie.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "severnoe_siyanie",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",
      image: "/images/items/kosmos/severnoe_siyanie.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "ekzoplaneta",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u044D\u043A\u0437\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u0430",
      image: "/images/items/kosmos/ekzoplaneta.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "sverhnovaya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0441\u0432\u0435\u0440\u0445\u043D\u043E\u0432\u0430\u044F",
      image: "/images/items/kosmos/sverhnovaya.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "gravitatsiya",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",
      image: "/images/items/kosmos/gravitatsiya.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "nevesomost",
      categoryId: "kosmos",
      categoryName: "\u041A\u043E\u0441\u043C\u043E\u0441",
      title: "\u043D\u0435\u0432\u0435\u0441\u043E\u043C\u043E\u0441\u0442\u044C",
      image: "/images/items/kosmos/nevesomost.jpg",
      categoryImage: "/images/categories/kosmos.jpg"
    },
    {
      id: "solntse",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u043E\u043B\u043D\u0446\u0435",
      image: "/images/items/pogoda_i_priroda/solntse.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "dozhd",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0434\u043E\u0436\u0434\u044C",
      image: "/images/items/pogoda_i_priroda/dozhd.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "sneg",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u043D\u0435\u0433",
      image: "/images/items/pogoda_i_priroda/sneg.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "grad",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u0440\u0430\u0434",
      image: "/images/items/pogoda_i_priroda/grad.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "veter",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0432\u0435\u0442\u0435\u0440",
      image: "/images/items/pogoda_i_priroda/veter.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "tuman",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0442\u0443\u043C\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/tuman.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "groza",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u0440\u043E\u0437\u0430",
      image: "/images/items/pogoda_i_priroda/groza.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "molniya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u043B\u043D\u0438\u044F",
      image: "/images/items/pogoda_i_priroda/molniya.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "raduga",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u0430\u0434\u0443\u0433\u0430",
      image: "/images/items/pogoda_i_priroda/raduga.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "oblaka",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0431\u043B\u0430\u043A\u0430",
      image: "/images/items/pogoda_i_priroda/oblaka.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "uragan",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0443\u0440\u0430\u0433\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/uragan.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "tornado",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0442\u043E\u0440\u043D\u0430\u0434\u043E",
      image: "/images/items/pogoda_i_priroda/tornado.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "shtorm",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0448\u0442\u043E\u0440\u043C",
      image: "/images/items/pogoda_i_priroda/shtorm.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "metel",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u0435\u0442\u0435\u043B\u044C",
      image: "/images/items/pogoda_i_priroda/metel.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "zhara",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0436\u0430\u0440\u0430",
      image: "/images/items/pogoda_i_priroda/zhara.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "moroz",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u0440\u043E\u0437",
      image: "/images/items/pogoda_i_priroda/moroz.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "rosa",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u043E\u0441\u0430",
      image: "/images/items/pogoda_i_priroda/rosa.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "iney",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0438\u043D\u0435\u0439",
      image: "/images/items/pogoda_i_priroda/iney.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "led",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0435\u0434",
      image: "/images/items/pogoda_i_priroda/led.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "liven",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0438\u0432\u0435\u043D\u044C",
      image: "/images/items/pogoda_i_priroda/liven.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "zasuha",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0437\u0430\u0441\u0443\u0445\u0430",
      image: "/images/items/pogoda_i_priroda/zasuha.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "navodnenie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043D\u0430\u0432\u043E\u0434\u043D\u0435\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/navodnenie.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "zemletryasenie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0437\u0435\u043C\u043B\u0435\u0442\u0440\u044F\u0441\u0435\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/zemletryasenie.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "izverzhenie_vulkana",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0438\u0437\u0432\u0435\u0440\u0436\u0435\u043D\u0438\u0435 \u0432\u0443\u043B\u043A\u0430\u043D\u0430",
      image: "/images/items/pogoda_i_priroda/izverzhenie_vulkana.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "tsunami",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0446\u0443\u043D\u0430\u043C\u0438",
      image: "/images/items/pogoda_i_priroda/tsunami.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "lavina",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0430\u0432\u0438\u043D\u0430",
      image: "/images/items/pogoda_i_priroda/lavina.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "opolzen",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u043F\u043E\u043B\u0437\u0435\u043D\u044C",
      image: "/images/items/pogoda_i_priroda/opolzen.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "peschanaya_burya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0435\u0441\u0447\u0430\u043D\u0430\u044F \u0431\u0443\u0440\u044F",
      image: "/images/items/pogoda_i_priroda/peschanaya_burya.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "severnoe_siyanie",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",
      image: "/images/items/pogoda_i_priroda/severnoe_siyanie.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "priliv",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0440\u0438\u043B\u0438\u0432",
      image: "/images/items/pogoda_i_priroda/priliv.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "otliv",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0442\u043B\u0438\u0432",
      image: "/images/items/pogoda_i_priroda/otliv.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "vodopad",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0432\u043E\u0434\u043E\u043F\u0430\u0434",
      image: "/images/items/pogoda_i_priroda/vodopad.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "reka",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0440\u0435\u043A\u0430",
      image: "/images/items/pogoda_i_priroda/reka.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "ozero",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u0437\u0435\u0440\u043E",
      image: "/images/items/pogoda_i_priroda/ozero.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "more",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043C\u043E\u0440\u0435",
      image: "/images/items/pogoda_i_priroda/more.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "okean",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043E\u043A\u0435\u0430\u043D",
      image: "/images/items/pogoda_i_priroda/okean.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "gora",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0433\u043E\u0440\u0430",
      image: "/images/items/pogoda_i_priroda/gora.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "les",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043B\u0435\u0441",
      image: "/images/items/pogoda_i_priroda/les.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "pustynya",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u043F\u0443\u0441\u0442\u044B\u043D\u044F",
      image: "/images/items/pogoda_i_priroda/pustynya.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    },
    {
      id: "step",
      categoryId: "pogoda_i_priroda",
      categoryName: "\u041F\u043E\u0433\u043E\u0434\u0430 \u0438 \u043F\u0440\u0438\u0440\u043E\u0434\u0430",
      title: "\u0441\u0442\u0435\u043F\u044C",
      image: "/images/items/pogoda_i_priroda/step.jpg",
      categoryImage: "/images/categories/pogoda_i_priroda.jpg"
    }
  ];
  function ha(o) {
    return o.split("_").filter(Boolean).map((e) => {
      var _a2;
      return ((_a2 = e[0]) == null ? void 0 : _a2.toUpperCase()) + e.slice(1);
    }).join(" ");
  }
  function ua(o) {
    const e = /* @__PURE__ */ new Map();
    return o.forEach((a) => {
      var _a2, _b;
      if (!a.categoryId) return;
      e.has(a.categoryId) || e.set(a.categoryId, {
        id: a.categoryId,
        title: (_a2 = a.categoryName) != null ? _a2 : ha(a.categoryId),
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
  const ee = ua(pa);
  function _a(o) {
    const e = [
      ...o
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
  function Ia(o) {
    return "".concat(o, "-").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8));
  }
  function ja(o) {
    const e = Array.isArray(o.items) ? o.items : [], a = _a(e), t = Math.floor(a.length / 2), i = [];
    for (let g = 0; g < t * 2; g += 2) i.push([
      a[g],
      a[g + 1]
    ]);
    return {
      sessionId: Ia(o.id),
      categoryId: o.id,
      pairs: i,
      totalRounds: t,
      currentRoundIndex: 0,
      status: "playing"
    };
  }
  const ka = 1e3, ae = 10;
  function te(o = {}) {
    var _a2, _b, _c, _d, _e2, _f;
    return {
      rating: (_a2 = o.rating) != null ? _a2 : ka,
      wins: (_b = o.wins) != null ? _b : 0,
      losses: (_c = o.losses) != null ? _c : 0,
      shown: (_d = o.shown) != null ? _d : 0,
      chosen: (_e2 = o.chosen) != null ? _e2 : 0,
      updatedAt: (_f = o.updatedAt) != null ? _f : Date.now()
    };
  }
  function va(o, e) {
    var _a2, _b;
    const { playerId: a, categoryId: t, leftItem: i, rightItem: g, chosenItemId: r, roundIndex: s, sessionId: y } = e, c = r === i.id ? g.id : i.id, d = (_a2 = o.itemRatings[t]) != null ? _a2 : {}, l = te(d[r]), u = te(d[c]), j = Date.now();
    l.rating += ae, l.wins += 1, l.shown += 1, l.chosen += 1, l.updatedAt = j, u.rating -= ae, u.losses += 1, u.shown += 1, u.updatedAt = j, o.itemRatings[t] = {
      ...d,
      [r]: l,
      [c]: u
    };
    const k = (_b = o.categoryProgress[t]) != null ? _b : {
      completedRounds: 0,
      guessModeUnlocked: false,
      lastPlayedAt: j
    };
    return k.completedRounds += 1, k.guessModeUnlocked = k.completedRounds >= 10, k.lastPlayedAt = j, o.categoryProgress[t] = k, o.matchHistory.push({
      id: "".concat(y, "-").concat(s + 1, "-").concat(r),
      playerId: a,
      categoryId: t,
      leftItemId: i.id,
      rightItemId: g.id,
      chosenItemId: r,
      loserItemId: c,
      roundIndex: s,
      sessionId: y,
      playedAt: j
    }), {
      chosenItemId: r,
      loserItemId: c,
      progress: k
    };
  }
  const A = [
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
  ], ba = [
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
  function fa(o) {
    const e = [
      ...o
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
  function Na(o) {
    return "guess-".concat(o, "-").concat(Date.now(), "-").concat(Math.random().toString(36).slice(2, 8));
  }
  function ie(o = 0) {
    var _a2;
    const e = Number.isFinite(o) ? o : 0;
    let a = 1;
    for (let i = 0; i < A.length; i += 1) e >= A[i] && (a = i + 1);
    const t = Math.min(a, 10);
    return {
      level: t,
      title: "".concat(ba[t - 1], " (").concat(t, ")"),
      currentThreshold: A[t - 1],
      nextThreshold: (_a2 = A[t]) != null ? _a2 : null
    };
  }
  function de(o, e) {
    var _a2, _b;
    const a = (_b = (_a2 = e.itemRatings) == null ? void 0 : _a2[o.id]) != null ? _b : {};
    return (Array.isArray(o.items) ? o.items : []).filter((i) => {
      const g = a[i.id];
      return g && g.shown > 0;
    });
  }
  function za(o, e) {
    const a = de(o, e), t = fa(a), i = Math.floor(t.length / 2), g = [];
    for (let r = 0; r < i * 2; r += 2) g.push([
      t[r],
      t[r + 1]
    ]);
    return {
      sessionId: Na(o.id),
      categoryId: o.id,
      pairs: g,
      totalRounds: i,
      currentRoundIndex: 0,
      status: "playing"
    };
  }
  function ge(o, e) {
    var _a2, _b, _c, _d, _e2;
    const a = (_b = (_a2 = e.categoryProgress) == null ? void 0 : _a2[o.id]) != null ? _b : {
      completedRounds: 0,
      guessModeUnlocked: false
    }, t = de(o, e);
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
  function oe(o, e) {
    const a = e[o.id];
    return !a || !a.shown ? 0 : a.chosen / a.shown;
  }
  function wa(o, e, a, t, i) {
    var _a2, _b;
    const g = (_b = (_a2 = o.itemRatings) == null ? void 0 : _a2[e]) != null ? _b : {}, r = oe(a, g), s = oe(t, g), y = r + s, c = y > 0 ? Math.round(r / y * 100) : 50, d = 100 - c, l = Math.abs(c - d), u = Math.max(c, d), k = (i === a.id ? c : d) === u, I = k ? Math.max(5, Math.round(100 - l * 1.8)) : 0;
    return {
      leftPercent: c,
      rightPercent: d,
      difference: l,
      isCorrect: k,
      points: I
    };
  }
  function Sa(o, e) {
    var _a2;
    const { categoryId: a, leftItem: t, rightItem: i, chosenItemId: g, roundIndex: r, sessionId: s } = e, y = wa(o, a, t, i, g), c = Date.now();
    return o.player.guessScore = ((_a2 = o.player.guessScore) != null ? _a2 : 0) + y.points, o.guessHistory = Array.isArray(o.guessHistory) ? o.guessHistory : [], o.guessHistory.push({
      id: "".concat(s, "-").concat(r + 1, "-").concat(g),
      categoryId: a,
      leftItemId: t.id,
      rightItemId: i.id,
      chosenItemId: g,
      leftPercent: y.leftPercent,
      rightPercent: y.rightPercent,
      isCorrect: y.isCorrect,
      points: y.points,
      roundIndex: r,
      sessionId: s,
      playedAt: c
    }), y;
  }
  const ne = "ratingGameState";
  function O() {
    const o = Date.now();
    return {
      version: 1,
      player: {
        id: "local-player-".concat(Math.random().toString(36).slice(2, 10)),
        guessScore: 0,
        createdAt: o,
        updatedAt: o
      },
      categoryProgress: {},
      itemRatings: {},
      matchHistory: [],
      guessHistory: []
    };
  }
  function le(o) {
    var _a2, _b, _c, _d;
    const e = O(), a = o && typeof o == "object" ? o : e;
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
  function Ca() {
    try {
      const o = localStorage.getItem(ne);
      if (!o) {
        const e = O();
        return E(e), e;
      }
      return le(JSON.parse(o));
    } catch (o) {
      console.warn("Failed to load local game state", o);
      const e = O();
      return E(e), e;
    }
  }
  function E(o) {
    const e = le(o);
    return e.player.updatedAt = Date.now(), localStorage.setItem(ne, JSON.stringify(e)), e;
  }
  function xa() {
    const o = O();
    return E(o), o;
  }
  function La(o = "") {
    return o.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((a) => {
      var _a2, _b;
      return (_b = (_a2 = a[0]) == null ? void 0 : _a2.toUpperCase()) != null ? _b : "";
    }).join("");
  }
  function H(o) {
    return "".concat(Math.min(o, 10), " / 10");
  }
  function Ra(o) {
    return new Promise((e) => window.setTimeout(e, o));
  }
  class Ta {
    constructor(e) {
      this.gameContext = e, this.ui = e.ui, this.events = e.events, this.categories = ee, this.categoriesById = Object.fromEntries(ee.map((a) => [
        a.id,
        a
      ])), this.state = Ca(), this.currentSession = null, this.currentGuessSession = null, this.choiceLocked = false, this.guessLocked = false, this.guessResultShown = false, this.lastCompletedCategoryId = null, this.lastGuessCategoryId = null, this.elements = {
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
        this.state = xa(), this.renderCategories(), this.renderGuessCategories(), this.renderGuessPlayerStats(), this.showCategories();
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
        if (this.currentSession = ja(a), !this.currentSession.totalRounds) {
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
        }, i = Math.floor(a.itemIds.length / 2), g = t.guessModeUnlocked ? p("guessModeUnlocked") : "".concat(p("guessModeLocked"), " ").concat(H(t.completedRounds));
        return '\n        <button class="category-card btn-reset" data-action="start_category_session" data-category-id="'.concat(a.id, '">\n          <span class="category-card__badge">').concat(i, " ").concat(p("roundsShort"), '</span>\n          <span class="category-card__title">').concat(a.title, '</span>\n          <span class="category-card__meta">').concat(a.itemIds.length, " ").concat(p("itemsLabel"), '</span>\n          <span class="category-card__progress">').concat(g, "</span>\n        </button>\n      ");
      }).join(""));
    }
    renderGuessPlayerStats() {
      var _a2;
      const e = (_a2 = this.state.player.guessScore) != null ? _a2 : 0, a = ie(e);
      document.querySelectorAll('[data-role="guess-score"]').forEach((t) => {
        t.textContent = "".concat(p("guessScoreLabel"), " ").concat(e);
      }), document.querySelectorAll('[data-role="guess-rating"]').forEach((t) => {
        t.textContent = a.title;
      });
    }
    renderGuessCategories() {
      const e = this.elements.guessCategoriesList;
      e && (e.innerHTML = this.categories.map((a) => {
        const t = ge(a, this.state);
        let g = "".concat(Math.floor(t.availableItemsCount / 2), " ").concat(p("roundsShort"));
        return t.reason === "locked" ? g = "".concat(p("guessModeLocked"), " ").concat(H(t.completedRounds)) : t.reason === "not_enough_data" && (g = p("guessNotEnoughData")), '\n        <button class="category-card category-card--guess btn-reset '.concat(t.canPlay ? "" : "is-locked", '"\n          data-action="start_guess_session"\n          data-category-id="').concat(a.id, '"\n          ').concat(t.canPlay ? "" : "disabled", '>\n          <span class="category-card__badge">').concat(t.canPlay ? p("guessReady") : p("guessLockedBadge"), '</span>\n          <span class="category-card__title">').concat(a.title, '</span>\n          <span class="category-card__meta">').concat(t.availableItemsCount, " ").concat(p("itemsWithDataLabel"), '</span>\n          <span class="category-card__progress">').concat(g, "</span>\n        </button>\n      ");
      }).join(""));
    }
    renderCurrentRound() {
      var _a2, _b;
      if (!this.currentSession) return;
      const e = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!e) return;
      const [a, t] = e, i = this.currentSession.currentRoundIndex + 1, g = (i - 1) / this.currentSession.totalRounds * 100;
      this.elements.choiceCategoryTitle && (this.elements.choiceCategoryTitle.textContent = (_b = (_a2 = this.categoriesById[this.currentSession.categoryId]) == null ? void 0 : _a2.title) != null ? _b : ""), this.elements.choiceRoundLabel && (this.elements.choiceRoundLabel.textContent = "".concat(p("roundLabel"), " ").concat(i, " ").concat(p("roundOf"), " ").concat(this.currentSession.totalRounds)), this.elements.choiceQuestion && (this.elements.choiceQuestion.textContent = p("choiceQuestion")), this.elements.progressFill && (this.elements.progressFill.style.width = "".concat(g, "%")), this.elements.progressText && (this.elements.progressText.textContent = "".concat(i - 1, "/").concat(this.currentSession.totalRounds)), this.renderChoiceCard(this.elements.leftCard, a, "left"), this.renderChoiceCard(this.elements.rightCard, t, "right");
    }
    renderItemArt(e) {
      const a = La(e.title);
      return e.image ? '\n      <img\n        class="choice-card__image"\n        src="'.concat(e.image, '"\n        alt=""\n        draggable="false"\n        decoding="async"\n        onerror="this.hidden=true;this.nextElementSibling.hidden=false"\n      >\n      <span class="choice-card__initials" hidden>').concat(a, "</span>\n    ") : '<span class="choice-card__initials">'.concat(a, "</span>");
    }
    renderChoiceCard(e, a, t) {
      var _a2;
      !e || !a || (e.dataset.itemId = a.id, e.dataset.side = t, e.classList.remove("is-chosen", "is-loser", "is-idle"), e.style.setProperty("--card-accent", (_a2 = a.accent) != null ? _a2 : "#ffffff"), e.innerHTML = '\n      <span class="choice-card__art" aria-hidden="true">\n        '.concat(this.renderItemArt(a), '\n      </span>\n      <span class="choice-card__title">').concat(a.title, '</span>\n      <span class="choice-card__hint">').concat(p("tapToChoose"), "</span>\n    "));
    }
    renderGuessCard(e, a, t) {
      var _a2;
      !e || !a || (e.dataset.itemId = a.id, e.dataset.side = t, e.classList.remove("is-chosen", "is-loser", "is-correct", "is-revealed"), e.style.setProperty("--card-accent", (_a2 = a.accent) != null ? _a2 : "#ffffff"), e.innerHTML = '\n      <span class="choice-card__art" aria-hidden="true">\n        '.concat(this.renderItemArt(a), '\n      </span>\n      <span class="choice-card__title">').concat(a.title, '</span>\n      <span class="guess-percent" data-role="guess-percent" hidden></span>\n    '));
    }
    async chooseItem(e) {
      if (!this.currentSession || this.choiceLocked) return;
      const a = this.currentSession.pairs[this.currentSession.currentRoundIndex];
      if (!a) return;
      const [t, i] = a;
      if (t.id !== e && i.id !== e) return;
      this.choiceLocked = true;
      const g = t.id === e ? "left" : "right", r = g === "left" ? "right" : "left", s = g === "left" ? this.elements.leftCard : this.elements.rightCard, y = r === "left" ? this.elements.leftCard : this.elements.rightCard;
      if (s == null ? void 0 : s.classList.add("is-chosen"), y == null ? void 0 : y.classList.add("is-loser"), va(this.state, {
        playerId: this.state.player.id,
        categoryId: this.currentSession.categoryId,
        leftItem: t,
        rightItem: i,
        chosenItemId: e,
        roundIndex: this.currentSession.currentRoundIndex,
        sessionId: this.currentSession.sessionId
      }), this.state = E(this.state), this.gameContext.emotionsClass.react("player_choice", {
        chosenItemId: e
      }), await new Promise((c) => window.setTimeout(c, 420)), this.currentSession.currentRoundIndex += 1, this.currentSession.currentRoundIndex >= this.currentSession.totalRounds) {
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
      this.elements.completeTitle && (this.elements.completeTitle.textContent = p("sessionCompleteTitle")), this.elements.completeText && (this.elements.completeText.textContent = e.guessModeUnlocked ? p("sessionCompleteUnlocked") : p("sessionCompleteSaved")), this.elements.completeProgress && (this.elements.completeProgress.textContent = e.guessModeUnlocked ? p("guessModeUnlocked") : "".concat(p("guessModeLocked"), " ").concat(H(e.completedRounds))), this.ui.show("session_complete_screen"), this.gameContext.emotionsClass.react(e.guessModeUnlocked ? "category_complete" : "guess_correct", {
        categoryId: this.currentSession.categoryId
      }), this.currentSession = null, this.choiceLocked = false;
    }
    startGuessSession(e) {
      const a = this.categoriesById[e];
      if (!a) return;
      if (!ge(a, this.state).canPlay) {
        this.showGuessCategories();
        return;
      }
      if (this.currentGuessSession = za(a, this.state), !this.currentGuessSession.totalRounds) {
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
      const [a, t] = e, i = this.currentGuessSession.currentRoundIndex + 1, g = (i - 1) / this.currentGuessSession.totalRounds * 100;
      this.elements.guessCategoryTitle && (this.elements.guessCategoryTitle.textContent = (_b = (_a2 = this.categoriesById[this.currentGuessSession.categoryId]) == null ? void 0 : _a2.title) != null ? _b : ""), this.elements.guessRoundLabel && (this.elements.guessRoundLabel.textContent = "".concat(p("roundLabel"), " ").concat(i, " ").concat(p("roundOf"), " ").concat(this.currentGuessSession.totalRounds)), this.elements.guessQuestion && (this.elements.guessQuestion.textContent = p("guessQuestion")), this.elements.guessProgressFill && (this.elements.guessProgressFill.style.width = "".concat(g, "%")), this.elements.guessProgressText && (this.elements.guessProgressText.textContent = "".concat(i - 1, "/").concat(this.currentGuessSession.totalRounds)), this.elements.guessNextButton && (this.elements.guessNextButton.hidden = true), this.renderGuessCard(this.elements.guessLeftCard, a, "left"), this.renderGuessCard(this.elements.guessRightCard, t, "right");
    }
    async chooseGuessItem(e) {
      var _a2, _b;
      if (!this.currentGuessSession || this.guessLocked) return;
      const a = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
      if (!a) return;
      const [t, i] = a;
      if (t.id !== e && i.id !== e) return;
      this.guessLocked = true;
      const g = t.id === e ? "left" : "right", r = g === "left" ? this.elements.guessLeftCard : this.elements.guessRightCard, s = g === "left" ? this.elements.guessRightCard : this.elements.guessLeftCard;
      r == null ? void 0 : r.classList.add("is-chosen"), s == null ? void 0 : s.classList.add("is-loser");
      const y = Sa(this.state, {
        categoryId: this.currentGuessSession.categoryId,
        leftItem: t,
        rightItem: i,
        chosenItemId: e,
        roundIndex: this.currentGuessSession.currentRoundIndex,
        sessionId: this.currentGuessSession.sessionId
      });
      this.state = E(this.state), await this.animateGuessPercent(r, g === "left" ? y.leftPercent : y.rightPercent), this.revealGuessPercent(this.elements.guessLeftCard, y.leftPercent), this.revealGuessPercent(this.elements.guessRightCard, y.rightPercent);
      const c = y.leftPercent === Math.max(y.leftPercent, y.rightPercent), d = y.rightPercent === Math.max(y.leftPercent, y.rightPercent);
      (_a2 = this.elements.guessLeftCard) == null ? void 0 : _a2.classList.toggle("is-correct", c), (_b = this.elements.guessRightCard) == null ? void 0 : _b.classList.toggle("is-correct", d), this.elements.guessQuestion && (this.elements.guessQuestion.textContent = y.isCorrect ? "".concat(p("guessCorrect"), " +").concat(y.points) : p("guessWrong")), this.renderGuessPlayerStats(), this.gameContext.emotionsClass.react(y.isCorrect ? "guess_correct" : "guess_wrong"), await Ra(220), this.elements.guessNextButton && (this.elements.guessNextButton.hidden = false, this.elements.guessNextButton.textContent = this.isLastGuessRound() ? p("finish") : p("next")), this.guessResultShown = true;
    }
    async animateGuessPercent(e, a) {
      const t = e == null ? void 0 : e.querySelector('[data-role="guess-percent"]');
      if (!t) return;
      t.hidden = false;
      const i = 900, g = performance.now();
      return new Promise((r) => {
        const s = (y) => {
          const c = Math.min((y - g) / i, 1), d = 1 - (1 - c) ** 3;
          if (t.textContent = "".concat(Math.round(a * d), "%"), c < 1) {
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
      const e = (_a2 = this.state.player.guessScore) != null ? _a2 : 0, a = ie(e);
      this.elements.guessCompleteTitle && (this.elements.guessCompleteTitle.textContent = p("guessCompleteTitle")), this.elements.guessCompleteText && (this.elements.guessCompleteText.textContent = "".concat(p("guessCompleteText"), " ").concat(a.title)), this.elements.guessCompleteProgress && (this.elements.guessCompleteProgress.textContent = "".concat(p("guessScoreLabel"), " ").concat(e)), this.currentGuessSession = null, this.guessLocked = false, this.guessResultShown = false, this.ui.show("guess_complete_screen"), this.gameContext.emotionsClass.react("category_complete");
    }
  }
  console.clear();
  const m = {};
  m.clock = new re();
  async function Ma(o) {
    try {
      await Ea();
    } catch (e) {
      window.showInitError ? window.showInitError(e) : console.error("Init error", e);
    }
  }
  async function Ea() {
    const o = document.querySelector(".loader_line");
    o && (o.style.width = "30%"), await Da(), Pa(), await Ya(), o && (o.style.width = "100%"), m.paramsClass.gameInit = true, Aa(), Ga(), m.appController.init(), Fa();
  }
  function Pa() {
    if (!new URLSearchParams(location.search).has("debug2")) return;
    const o = document.documentElement, e = {
      artOpacity: 1,
      artScale: 1,
      artX: 0,
      artY: 0,
      artBlur: 0,
      artBrightness: 1,
      artSaturation: 1
    }, a = {
      ...e
    }, t = () => {
      o.style.setProperty("--main-bg-art-opacity", a.artOpacity), o.style.setProperty("--main-bg-art-scale", a.artScale), o.style.setProperty("--main-bg-art-x", "".concat(a.artX, "px")), o.style.setProperty("--main-bg-art-y", "".concat(a.artY, "px")), o.style.setProperty("--main-bg-art-blur", "".concat(a.artBlur, "px")), o.style.setProperty("--main-bg-art-brightness", a.artBrightness), o.style.setProperty("--main-bg-art-saturation", a.artSaturation);
    }, i = new ce({
      title: "\u0424\u043E\u043D \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430"
    });
    i.domElement.style.right = m.gui ? "260px" : "0";
    const g = i.addFolder("\u0424\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430");
    g.add(a, "artOpacity", 0, 1, 0.01).name("\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C").onChange(t), g.add(a, "artScale", 0.5, 1.8, 0.01).name("\u041C\u0430\u0441\u0448\u0442\u0430\u0431").onChange(t), g.add(a, "artX", -500, 500, 1).name("\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 X").onChange(t), g.add(a, "artY", -500, 500, 1).name("\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 Y").onChange(t), g.add(a, "artBlur", 0, 20, 0.1).name("\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435").onChange(t), g.add(a, "artBrightness", 0.3, 2, 0.01).name("\u042F\u0440\u043A\u043E\u0441\u0442\u044C").onChange(t), g.add(a, "artSaturation", 0, 2, 0.01).name("\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C").onChange(t);
    const r = {
      reset: () => {
        Object.assign(a, e), t(), i.controllersRecursive().forEach((s) => s.updateDisplay());
      }
    };
    i.add(r, "reset").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u043E\u043D"), t(), m.backgroundGui = i;
  }
  function Ga() {
    if (!new URLSearchParams(location.search).has("debug2")) return;
    const o = m.backgroundGui, e = m.gameClass;
    if (!o || !(e == null ? void 0 : e.podium)) return;
    const a = e.podiumSettings, t = () => {
      e.applySceneLayout(e.currentSceneMode);
    }, i = {
      orbitEnabled: m.initClass.controls.enabled
    };
    o.addFolder("\u041A\u0430\u043C\u0435\u0440\u0430").add(i, "orbitEnabled").name("OrbitControls").onChange((x) => {
      m.initClass.controls.enabled = x;
    });
    const r = o.addFolder("\u041F\u043E\u0434\u0438\u0443\u043C"), s = r.addFolder("\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435");
    s.add(a, "x", -8, 8, 0.01).name("X").onChange(t), s.add(a, "y", -5, 5, 0.01).name("Y").onChange(t), s.add(a, "z", -5, 5, 0.01).name("Z").onChange(t);
    const y = r.addFolder("\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u044F\u0440\u0443\u0441");
    y.add(a, "topWidth", 3, 18, 0.01).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(t), y.add(a, "topDepth", 1, 12, 0.01).name("\u0414\u043B\u0438\u043D\u0430").onChange(t), y.add(a, "topHeight", 0.04, 1.5, 0.01).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(t), y.add(a, "topRounding", 0, 0.35, 5e-3).name("\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435").onChange(t);
    const c = r.addFolder("\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u044F\u0440\u0443\u0441");
    c.add(a, "baseWidth", 3, 18, 0.01).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(t), c.add(a, "baseDepth", 1, 12, 0.01).name("\u0414\u043B\u0438\u043D\u0430").onChange(t), c.add(a, "baseHeight", 0.04, 1.5, 0.01).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(t), c.add(a, "baseRounding", 0, 0.35, 5e-3).name("\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435").onChange(t);
    const d = r.addFolder("\u041D\u0438\u0436\u043D\u0438\u0439 \u044F\u0440\u0443\u0441");
    d.add(a, "lowerWidth", 3, 18, 0.01).name("\u0428\u0438\u0440\u0438\u043D\u0430").onChange(t), d.add(a, "lowerDepth", 1, 12, 0.01).name("\u0414\u043B\u0438\u043D\u0430").onChange(t), d.add(a, "lowerHeight", 0.02, 1.5, 0.01).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(t), d.add(a, "lowerRounding", 0, 0.35, 5e-3).name("\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435").onChange(t), d.add(a, "baseDrop", 0, 1.5, 0.01).name("\u041E\u0442\u0441\u0442\u0443\u043F").onChange(t);
    const l = r.addFolder("\u0421\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u0430\u043D\u0442");
    l.add(a, "rimLift", -0.3, 0.5, 5e-3).name("\u0412\u044B\u0441\u043E\u0442\u0430").onChange(t), l.add(a, "rimThickness", 5e-3, 0.15, 1e-3).name("\u0422\u043E\u043B\u0449\u0438\u043D\u0430").onChange(t), l.add(a, "glow", 0, 5, 0.01).name("\u0421\u0432\u0435\u0447\u0435\u043D\u0438\u0435").onChange(t), l.addColor(a, "rimColor").name("\u0426\u0432\u0435\u0442").onChange(t);
    const u = r.addFolder("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B");
    u.addColor(a, "topColor").name("\u0412\u0435\u0440\u0445").onChange(t), u.addColor(a, "sideColor").name("\u0411\u043E\u043A").onChange(t), u.addColor(a, "lowerColor").name("\u041D\u0438\u0437").onChange(t), u.add(a, "roughness", 0, 1, 0.01).name("\u0428\u0435\u0440\u043E\u0445\u043E\u0432\u0430\u0442\u043E\u0441\u0442\u044C").onChange(t), u.add(a, "metalness", 0, 1, 0.01).name("\u041C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C").onChange(t);
    const j = r.addFolder("\u0422\u0435\u043D\u044C");
    j.add(a, "shadowOpacity", 0, 1, 0.01).name("\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C").onChange(t), j.add(a, "shadowScale", 0.7, 1.8, 0.01).name("\u0420\u0430\u0437\u043C\u0435\u0440").onChange(t);
    const k = {
      ...a
    }, I = {
      reset: () => {
        Object.assign(a, k), t(), r.controllersRecursive().forEach((x) => x.updateDisplay());
      }
    };
    r.add(I, "reset").name("\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0434\u0438\u0443\u043C"), r.open();
    const b = e.menuCharacterSettings, R = o.addFolder("\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438");
    R.add(b, "desktopSpacing", 1.4, 3, 0.01).name("\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B desktop").onChange(t), R.add(b, "mobileSpacing", 0.9, 2.4, 0.01).name("\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B mobile").onChange(t);
    const C = m.worldClass, w = C.shadowSettings, f = o.addFolder("\u0422\u0435\u043D\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439"), N = () => C.applyShadowSettings();
    f.add(w, "radius", 0, 20, 0.1).name("\u0420\u0430\u0437\u043C\u044B\u0442\u0438\u0435").onChange(N), f.add(w, "blurSamples", 1, 32, 1).name("\u0421\u044D\u043C\u043F\u043B\u044B").onChange(N), f.add(w, "bias", -0.02, 0.02, 1e-4).name("Bias").onChange(N), f.add(w, "normalBias", 0, 0.2, 1e-3).name("Normal bias").onChange(N), f.add(w, "mapSize", {
      512: 512,
      1024: 1024,
      2048: 2048
    }).name("\u041A\u0430\u0440\u0442\u0430 \u0442\u0435\u043D\u0438").onChange(N);
  }
  function Aa() {
    m.gameClass.loadMesh(), m.instancesClass.init(), m.worldClass.loadLight(true, true), m.paramsClass.startGame(), m.emotionsClass.react("pair_presented");
  }
  async function Da() {
    if (m.initClass = new Xe(m), m.events = new Ue(), m.scene = m.initClass.scene, m.camera = m.initClass.camera, m.renderer = m.initClass.renderer, m.debugUiEnabled = m.initClass.debugUiEnabled, m.gui = m.debugUiEnabled ? new ce() : null, m.gui) {
      const e = m.gui.addFolder("\u041A\u0430\u043C\u0435\u0440\u0430"), a = {
        orbitEnabled: m.initClass.controls.enabled
      };
      e.add(a, "orbitEnabled").name("OrbitControls").onChange((t) => {
        m.initClass.controls.enabled = t;
      });
    }
    m.ui = new Je(m), m.paramsClass = new We(m), m.assetsManager = new Qe(m), m.audioClass = new Ve(m), m.dataClass = new Ze(m), m.controlClass = new qe(m), m.gameClass = new aa(m), m.worldClass = new ta(m), m.instancesClass = new la(m), m.emotionsClass = new na(m), m.emotionsClass.attachGui(m.gui), m.appController = new Ta(m);
    const o = m.emotionsClass.getConfigs();
    m.spectatorConfigs = o, o.forEach(() => {
      const e = new ya(m);
      m.gameClass.characters.push(e);
    });
  }
  async function Ya() {
    typeof Z == "function" && await Z(), m.paramsClass.initCustomScroll(), Ke("ru"), await m.assetsManager.loadTextures();
    for (let o = 0; o < m.gameClass.characters.length; o++) await m.gameClass.characters[o].loadCharacter(m.spectatorConfigs[o]), m.emotionsClass.registerCharacter(m.gameClass.characters[o], m.spectatorConfigs[o]);
    m.emotionsClass.enterIdle(), m.gameClass.applySceneLayout("main_screen"), await m.audioClass.loadAudio(), await m.controlClass.addKeyListeners(), m.gui && m.gui.addFolder("\u0424\u0438\u0437\u0438\u043A\u0430");
  }
  function Oa(o) {
    if (m.paramsClass) switch (m.gameClass.update(o, m.emotionsClass.roundActive), m.paramsClass.currentGameState) {
      case m.paramsClass.gameState.play:
        m.emotionsClass.update(o);
        break;
    }
  }
  function Ba() {
    m.initClass && m.initClass.stats && m.initClass.stats.update(), m.initClass && m.initClass.controls && (m.initClass.controls.update(), m.initClass.updateOrbitDebugHud()), m.renderer && m.scene && m.camera && m.renderer.render(m.scene, m.camera);
  }
  function Fa() {
    let o = 0;
    const e = 1 / 60, a = 0.1;
    m.renderer.setAnimationLoop(() => {
      let t = m.clock.getDelta();
      t > a && (t = a), o += t;
      let i = 5;
      for (; o >= e && i > 0; ) Oa(e), o -= e, i--;
      o > e && (o = 0), Ba();
    });
  }
  const $a = new He(Ma);
  $a.init();
})();
export {
  __tla,
  Ha as __vite_legacy_guard
};
