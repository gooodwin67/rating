export class ScreenManager {
  constructor(gameContext) {
    this.events = gameContext.events;
    this.gameContext = gameContext;
    this.screens = document.querySelectorAll('.screen');
    this.currentScreen = null;

    document.querySelector('body').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const action = btn.dataset.action;
      const categoryId = btn.dataset.categoryId;
      const itemId = btn.dataset.itemId;

      switch (action) {
        case 'open_categories':
        case 'open_main_mode':
          gameContext.appController?.showCategories();
          break;
        case 'open_guess_mode':
          gameContext.appController?.showCategories();
          break;
        case 'open_settings':
          gameContext.appController?.showSettings();
          break;
        case 'back_main':
          gameContext.appController?.showMainMenu();
          break;
        case 'back_to_categories':
          gameContext.appController?.showCategories();
          break;
        case 'back_to_guess_categories':
          gameContext.appController?.showCategories();
          break;
        case 'start_category_session':
          if (categoryId) {
            gameContext.appController?.startCategorySession(categoryId);
          }
          break;
        case 'start_guess_session':
          if (categoryId) {
            gameContext.appController?.startGuessSession(categoryId);
          }
          break;
        case 'start_tutorial':
          gameContext.appController?.startTutorial();
          break;
        case 'continue_tutorial_guess':
          gameContext.appController?.continueTutorialGuess();
          break;
        case 'purchase_category_statistics':
          if (categoryId) {
            gameContext.appController?.purchaseCategoryStatistics(categoryId);
          }
          break;
        case 'open_category_statistics':
          if (categoryId) {
            gameContext.appController?.showCategoryStatistics(categoryId);
          }
          break;
        case 'choose_item':
          if (btn.dataset.itemId) {
            gameContext.appController?.chooseItem(btn.dataset.itemId);
          }
          break;
        case 'open_item_description':
          if (categoryId && itemId) {
            gameContext.appController?.showItemDescription(categoryId, itemId);
          }
          break;
        case 'close_item_description':
          gameContext.appController?.hideItemDescription();
          break;
        case 'choose_guess_item':
          if (btn.dataset.itemId) {
            gameContext.appController?.chooseGuessItem(btn.dataset.itemId);
          }
          break;
        case 'request_guess_hint':
          gameContext.appController?.requestGuessHint();
          break;
        case 'next_guess_round':
          gameContext.appController?.nextGuessRound();
          break;
        case 'replay_last_category':
          if (gameContext.appController?.lastCompletedCategoryId) {
            gameContext.appController.startCategorySession(gameContext.appController.lastCompletedCategoryId);
          }
          break;
        case 'start_guess_after_collection':
          if (gameContext.appController?.lastCompletedCategoryId) {
            gameContext.appController.startGuessSession(gameContext.appController.lastCompletedCategoryId);
          }
          break;
        case 'replay_last_guess_category':
          if (gameContext.appController?.lastGuessCategoryId) {
            gameContext.appController.startGuessSession(gameContext.appController.lastGuessCategoryId);
          }
          break;
        case 'pause':
          break;
      }
    });

    document.querySelector('body').addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;

      const card = e.target.closest('.category-card[data-action]');
      if (!card || e.target !== card) return;

      e.preventDefault();
      card.click();
    });

    this.initListeners();
  }


  initListeners() {
    // Слушаем событие из DataClass
    this.events.on('player_auth_checked', (isAuthorized) => {
      this.updateAuthUI(isAuthorized);
    });
  }

  updateAuthUI(isAuthorized) {
    const autorizElement = document.querySelector('.autoriz');
    if (autorizElement) {
      autorizElement.classList.toggle('hidden_screen', isAuthorized === true);

      if (isAuthorized === true) {
        autorizElement.setAttribute('aria-hidden', 'true');
        autorizElement.style.display = 'none';
      } else {
        // Если вдруг разлогинились или не авторизованы
        autorizElement.setAttribute('aria-hidden', 'false');
        autorizElement.style.display = ''; // или block/flex
      }
    }
  }


  show(screenId) {
    const targetScreen = document.getElementById(screenId);

    if (!targetScreen) {
      console.warn(`Screen ${screenId} not found`);
      return;
    }

    this.screens.forEach(s => s.classList.remove('active'));

    targetScreen.scrollTop = 0;
    targetScreen.classList.add('active');
    this.currentScreen = screenId;
    document.body.classList.toggle('is-categories-screen', screenId === 'categories_screen');
    this.gameContext.appController?.animateScreenAttentionHints(screenId);
    document.getElementById('lang-toggle')?.toggleAttribute('hidden', screenId !== 'main_screen');
    this.gameContext.gameClass?.applySceneLayout(screenId);
    this.gameContext.sdkManager?.setGameplayActive(
      screenId === 'choice_screen' || screenId === 'guess_screen',
    );
    requestAnimationFrame(() => {
      this.gameContext.gameClass?.applySceneLayout(screenId);
    });
  }

  hideAll() {
    this.screens.forEach(s => s.classList.remove('active'));
    this.currentScreen = null;
    document.body.classList.remove('is-categories-screen');
    this.gameContext.sdkManager?.setGameplayActive(false);
    document.getElementById('lang-toggle')?.setAttribute('hidden', '');
  }
}
