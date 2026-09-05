// SdkManager.js
export class SdkManager {
    constructor(startGameCallback) {
        this.startGameCallback = startGameCallback;
        this.ysdk = null;
        this.payments = null;
        this.player = null;
        this.gameplayActive = false;
        this.gameplayRequested = false;
        this.platformPaused = false;
        this.adPaused = false;
        this.mobileStickyBannerInitialized = false;
        this.mobileStickyBannerVisible = null;
        this.mobileStickyBannerSyncTimer = null;
        this.mobileStickyBannerRequest = 0;

        // Сразу вешаем глобальные обработчики ошибок
        this._setupGlobalErrorListeners();
    }

    /**
     * Основной метод инициализации
     */
    init() {
        // Проверяем готовность DOM, как в оригинальном коде
        if (document.readyState === 'complete') {
            this._initYaGames();
        } else {
            window.addEventListener('load', () => {
                this._initYaGames();
            });
        }
    }

    showFullscreenAdv(callbacks = {}) {
        if (!this.ysdk?.adv?.showFullscreenAdv) return false;

        this.ysdk.adv.showFullscreenAdv({
            callbacks: {
                onOpen: () => {
                    this.setAdPaused(true);
                    callbacks.onOpen?.();
                },
                onClose: (wasShown) => {
                    this.setAdPaused(false);
                    callbacks.onClose?.(wasShown);
                },
                onError: (error) => {
                    this.setAdPaused(false);
                    console.warn('Fullscreen ad error:', error);
                    callbacks.onError?.(error);
                }
            }
        });
        return true;
    }

    initializeMobileStickyBanner() {
        if (this.mobileStickyBannerInitialized || !this.ysdk?.adv) return;

        const deviceInfo = this.ysdk.deviceInfo;
        const isMobile = typeof deviceInfo?.isMobile === 'function'
            ? deviceInfo.isMobile()
            : deviceInfo?.type === 'mobile';
        if (!isMobile) return;

        this.mobileStickyBannerInitialized = true;
        const scheduleSync = () => {
            window.clearTimeout(this.mobileStickyBannerSyncTimer);
            this.mobileStickyBannerSyncTimer = window.setTimeout(() => {
                this._syncMobileStickyBanner();
            }, 250);
        };

        window.addEventListener('resize', scheduleSync, { passive: true });
        window.addEventListener('orientationchange', scheduleSync, { passive: true });
        window.visualViewport?.addEventListener('resize', scheduleSync, { passive: true });
        this._syncMobileStickyBanner();
    }

    async _syncMobileStickyBanner() {
        const adv = this.ysdk?.adv;
        if (!adv?.showBannerAdv || !adv?.hideBannerAdv) return;

        const viewportHeight = Math.round(window.visualViewport?.height || window.innerHeight || 0);
        // Showing the banner can shrink the viewport, so use a lower hide threshold.
        const minHeight = this.mobileStickyBannerVisible ? 560 : 640;
        const shouldShow = viewportHeight >= minHeight;
        if (this.mobileStickyBannerVisible === shouldShow) return;

        const request = ++this.mobileStickyBannerRequest;
        try {
            const result = shouldShow
                ? await adv.showBannerAdv()
                : await adv.hideBannerAdv();
            if (request !== this.mobileStickyBannerRequest) return;
            this.mobileStickyBannerVisible = Boolean(result?.stickyAdvIsShowing);
        } catch (error) {
            if (request !== this.mobileStickyBannerRequest) return;
            console.warn('Sticky banner error:', error);
        }
    }

    setGameplayActive(active) {
        this.gameplayRequested = Boolean(active);
        this._applyGameplayState();
    }

    setAdPaused(active) {
        this.adPaused = Boolean(active);
        this._applyGameplayState();
    }

    _applyGameplayState() {
        const nextState = this.gameplayRequested && !this.platformPaused && !this.adPaused;
        if (!this.ysdk || this.gameplayActive === nextState) return;

        this.gameplayActive = nextState;
        this.ysdk.features?.GameplayAPI?.[nextState ? 'start' : 'stop']?.();
    }

    showRewardedVideo(callbacks) {
        if (!this.ysdk) return false;
        let gameplayResumed = false;
        const resumeGameplay = () => {
            if (gameplayResumed) return;
            gameplayResumed = true;
        };
        this.ysdk.adv.showRewardedVideo({
            callbacks: {
                onOpen: () => {
                    gameplayResumed = false;
                    this.setAdPaused(true);
                    callbacks.onOpen && callbacks.onOpen();
                },
                onRewarded: () => {
                    callbacks.onRewarded && callbacks.onRewarded();
                },
                onClose: (wasShown) => {
                    this.setAdPaused(false);
                    resumeGameplay();
                    callbacks.onClose && callbacks.onClose(wasShown);
                },
                onError: (e) => {
                    this.setAdPaused(false);
                    resumeGameplay();
                    console.error('Reward error:', e);
                    callbacks.onError && callbacks.onError(e);
                }
            }
        });
        return true;
    }

    getLanguage() {
        const platformLanguage = this.ysdk?.environment?.i18n?.lang;
        if (!platformLanguage) return undefined;
        return platformLanguage.toLowerCase().startsWith('ru') ? 'ru' : 'en';
    }

    async getLeaderboardEntries(leaderboardName, options = {}) {
        if (!this.ysdk?.leaderboards?.getEntries) return null;
        return this.ysdk.leaderboards.getEntries(leaderboardName, options);
    }

    async getLeaderboardPlayerEntry(leaderboardName) {
        if (!this.ysdk?.leaderboards?.getPlayerEntry) return null;
        return this.ysdk.leaderboards.getPlayerEntry(leaderboardName);
    }

    async setLeaderboardScore(leaderboardName, score) {
        if (!this.ysdk?.leaderboards?.setScore) return false;
        await this.ysdk.leaderboards.setScore(leaderboardName, Math.max(0, Math.floor(score)));
        return true;
    }

    async getPayments() {
        if (!this.ysdk) return null;
        if (!this.payments) {
            this.payments = await this.ysdk.getPayments();
        }
        return this.payments;
    }

    async getPlayer({ force = false } = {}) {
        if (!this.ysdk) return null;
        if (!this.player || force) {
            this.player = await this.ysdk.getPlayer();
        }
        return this.player;
    }

    async getPlayerData(keys) {
        const player = await this.getPlayer();
        if (!player?.getData) return null;
        return player.getData(keys);
    }

    async setPlayerData(data, { flush = false } = {}) {
        const player = await this.getPlayer();
        if (!player?.setData) return false;
        await player.setData(data, flush);
        return true;
    }

    async authorizePlayer() {
        if (!this.ysdk?.auth?.openAuthDialog) return null;
        await this.ysdk.auth.openAuthDialog();
        return this.getPlayer({ force: true });
    }

    async purchase(productId, developerPayload = '') {
        const payments = await this.getPayments();
        if (!payments) {
            return {
                productID: productId,
                developerPayload,
                purchaseToken: null,
                local: true,
            };
        }

        return payments.purchase({ id: productId, developerPayload });
    }

    async getPendingPurchases() {
        const payments = await this.getPayments();
        return payments ? payments.getPurchases() : [];
    }

    async getProductCatalog() {
        const payments = await this.getPayments();
        return payments ? payments.getCatalog() : [];
    }

    async consumePurchase(purchaseToken) {
        if (!purchaseToken) return;
        const payments = await this.getPayments();
        await payments?.consumePurchase(purchaseToken);
    }

    /**
     * Внутренняя логика загрузки SDK
     */
    _initYaGames() {
        if (typeof YaGames !== 'undefined') {
            YaGames.init()
                .then((ysdkInstance) => {
                    console.log('YaGames SDK initialized');
                    this.ysdk = ysdkInstance;
                    window.ysdk = ysdkInstance; // Для глобального доступа, если нужно
                    this._subscribeToPlatformEvents();
                    
                    // Запускаем игру
                    if (this.startGameCallback) {
                        this.startGameCallback(ysdkInstance);
                    }
                })
                .catch((error) => {
                    this.showInitError(error);
                });
        } else {
            // Если скрипт sdk.js не подключен или не загрузился
            // (В локальной разработке это нормально, если вы не используете мок)
            console.warn('YaGames is not defined (running in offline/dev mode?)');
            
            // Пробуем запустить игру без SDK (null)
            if (this.startGameCallback) {
                this.startGameCallback(null);
            }
        }
    }

    notifyGameReady() {
        if (this.gameReadyNotified || !this.ysdk?.features?.LoadingAPI?.ready) return;
        this.gameReadyNotified = true;
        this.ysdk.features.LoadingAPI.ready();
    }

    _subscribeToPlatformEvents() {
        if (!this.ysdk?.on) return;

        this.ysdk.on('game_api_pause', () => {
            this.platformPaused = true;
            this._applyGameplayState();
        });
        this.ysdk.on('game_api_resume', () => {
            this.platformPaused = false;
            this._applyGameplayState();
        });
    }

    /**
     * Отображение ошибки на экране (Overlay)
     */
    showInitError(error) {
        let message = 'Init error';
        if (error) {
            if (error.message) message += ': ' + error.message;
            else message += ': ' + String(error);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this._renderInitError(message);
            }, { once: true });
        } else {
            this._renderInitError(message);
        }
    }

    /**
     * Отрисовка DOM-элемента ошибки
     */
    _renderInitError(message) {
        const container = document.body || document.documentElement;
        if (!container) return;

        let overlay = document.getElementById('debug-error-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'debug-error-overlay';
            overlay.className = 'debug_error_overlay';
            // Добавим базовые стили скриптом, чтобы не зависеть от CSS
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.85)';
            overlay.style.color = 'red';
            overlay.style.zIndex = '9999';
            overlay.style.padding = '20px';
            overlay.style.whiteSpace = 'pre-wrap';
            overlay.style.fontFamily = 'monospace';
            
            container.appendChild(overlay);
        }

        overlay.textContent = message;
    }

    /**
     * Настройка глобальных перехватчиков ошибок
     */
    _setupGlobalErrorListeners() {
        window.addEventListener('error', (event) => {
            if (!event) return;
            const parts = [];
            if (event.message) parts.push(event.message);
            if (event.filename) parts.push('at ' + event.filename + ':' + event.lineno + ':' + event.colno);
            if (event.error && event.error.stack) {
                parts.push(event.error.stack);
            }
            this.showInitError(parts.join('\n'));
        });

        window.addEventListener('unhandledrejection', (event) => {
            if (!event) return;
            const reason = event.reason || 'unhandledrejection';
            if (reason && reason.stack) {
                this.showInitError(reason.stack);
            } else {
                this.showInitError(String(reason));
            }
        });
    }
}
