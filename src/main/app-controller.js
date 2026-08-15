import { categories } from '../data/categories';
import { createCategorySession } from '../game/session';
import { applyChoiceResult } from '../game/rating-service';
import {
  applyGuessResult,
  createGuessSession,
  getGuessAvailability,
  getGuessHint,
  getGuessRating,
} from '../game/guess-service';
import { loadGameState, resetGameState, saveGameState } from './storage';
import { t } from '../utils/i18n';
import { getItemDescription } from '../data/item-descriptions';
import { getLocalizedCategoryTitle, getLocalizedItemTitle } from '../data/titles-en';
import {
  addPlayerStars,
  CHOICE_SESSION_REWARD,
  getPlayerAccuracy,
  getPlayerRank,
  getPlayerStars,
  getUnlockedCategoriesCount,
} from '../game/player-progression';
import { GAME_SOUNDS } from '../assets/audio';
import { RESULT_VOICE_ROLES } from '../data/character-voice-lines';

const CATEGORY_STATISTICS_PRODUCT_ID = 'category_statistics';

function getInitials(title = '') {
  const parts = title.trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('');
}

function getCurrentLocale() {
  return localStorage.getItem('locale') || 'ru';
}

function formatUnlockProgress(completedRounds) {
  return `${Math.min(completedRounds, 10)} / 10`;
}

function renderGuessQuestionReveal(element, text) {
  element.textContent = '';
  element.setAttribute('aria-label', text);
  element.classList.add('is-letter-reveal');

  const fragment = document.createDocumentFragment();
  let letterIndex = 0;

  text.split(/(\s+)/).forEach((part) => {
    if (!part) return;

    if (/^\s+$/.test(part)) {
      fragment.append(document.createTextNode(' '));
      return;
    }

    const word = document.createElement('span');
    word.className = 'guess-question-word';
    word.setAttribute('aria-hidden', 'true');

    Array.from(part).forEach((letter) => {
      const letterElement = document.createElement('span');
      letterElement.className = 'guess-question-letter';
      letterElement.style.setProperty('--letter-index', letterIndex);
      letterElement.textContent = letter;
      word.append(letterElement);
      letterIndex += 1;
    });

    fragment.append(word);
  });

  element.append(fragment);
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export class AppController {
  constructor(gameContext) {
    this.gameContext = gameContext;
    this.ui = gameContext.ui;
    this.events = gameContext.events;

    this.categories = categories;
    this.categoriesById = Object.fromEntries(categories.map((category) => [category.id, category]));

    this.state = loadGameState();
    this.lastKnownRankLevel = getPlayerRank(getPlayerStars(this.state.player)).level;
    this.rankUpCelebrationTimer = null;
    this.currentSession = null;
    this.currentGuessSession = null;
    this.choiceLocked = false;
    this.guessLocked = false;
    this.guessResultShown = false;
    this.guessHintPending = false;
    this.guessHintUsedRounds = new Set();
    this.characterDialogueToken = 0;
    this.lastResultVoiceRole = {
      supportive: null,
      adversarial: null,
    };
    this.lastCompletedCategoryId = null;
    this.lastGuessCategoryId = null;
    this.currentStatisticsCategoryId = null;
    this.currentHudContext = 'collection';

    this.elements = {
      categoriesList: document.querySelector('[data-role="categories-list"]'),
      categoriesProgressFill: document.querySelector('[data-role="categories-progress-fill"]'),
      categoriesProgressText: document.querySelector('[data-role="categories-progress-text"]'),
      guessCategoriesList: document.querySelector('[data-role="guess-categories-list"]'),
      categoryStatisticsTitle: document.querySelector('[data-role="category-statistics-title"]'),
      categoryStatisticsItems: document.querySelector('[data-role="category-statistics-items"]'),
      categoryStatisticsVotes: document.querySelector('[data-role="category-statistics-votes"]'),
      categoryStatisticsBody: document.querySelector('[data-role="category-statistics-body"]'),
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
      guessHintButton: document.querySelector('[data-action="request_guess_hint"]'),
      guessHintTitle: document.querySelector('[data-role="guess-hint-title"]'),
      guessHintSubtitle: document.querySelector('[data-role="guess-hint-subtitle"]'),
      guessNextButton: document.querySelector('[data-action="next_guess_round"]'),
      guessResultModal: document.querySelector('[data-role="guess-result-modal"]'),
      guessResultDialog: document.querySelector('.guess-result-dialog'),
      guessResultIcon: document.querySelector('[data-role="guess-result-icon"]'),
      guessResultTitle: document.querySelector('[data-role="guess-result-title"]'),
      guessResultReward: document.querySelector('[data-role="guess-result-reward"]'),
      guessResultRewardPoints: document.querySelector('[data-role="guess-result-reward-points"]'),
      guessResultLeft: document.querySelector('[data-role="guess-result-left"]'),
      guessResultRight: document.querySelector('[data-role="guess-result-right"]'),
      guessResultLeftImage: document.querySelector('[data-role="guess-result-left-image"]'),
      guessResultRightImage: document.querySelector('[data-role="guess-result-right-image"]'),
      guessResultLeftTitle: document.querySelector('[data-role="guess-result-left-title"]'),
      guessResultRightTitle: document.querySelector('[data-role="guess-result-right-title"]'),
      guessResultGauge: document.querySelector('[data-role="guess-result-gauge"]'),
      guessResultFill: document.querySelector('[data-role="guess-result-fill"]'),
      guessResultPercent: document.querySelector('[data-role="guess-result-percent"]'),
      guessResultLeftChoice: document.querySelector('[data-role="guess-result-left-choice"]'),
      guessResultRightChoice: document.querySelector('[data-role="guess-result-right-choice"]'),
      guessStreakCelebration: document.querySelector('[data-role="guess-streak-celebration"]'),
      guessStreakLabel: document.querySelector('[data-role="guess-streak-label"]'),
      guessStreakCount: document.querySelector('[data-role="guess-streak-count"]'),
      guessStreakRoad: document.querySelector('[data-role="guess-streak-road"]'),
      guessStreakRoadFill: document.querySelector('[data-role="guess-streak-road-fill"]'),
      guessStreakPoints: document.querySelector('[data-role="guess-streak-points"]'),
      guessCompleteTitle: document.querySelector('[data-role="guess-complete-title"]'),
      guessCompleteText: document.querySelector('[data-role="guess-complete-text"]'),
      guessCompleteProgress: document.querySelector('[data-role="guess-complete-progress"]'),
      completeTitle: document.querySelector('[data-role="complete-title"]'),
      completeText: document.querySelector('[data-role="complete-text"]'),
      completeProgress: document.querySelector('[data-role="complete-progress"]'),
      resetButton: document.querySelector('[data-action="reset_local_progress"]'),
      playerHud: document.querySelector('[data-role="player-hud"]'),
      playerRank: document.querySelector('[data-role="player-rank"]'),
      playerStars: document.querySelector('[data-role="player-stars"]'),
      playerContext: document.querySelector('[data-role="player-context"]'),
      playerRankProgress: document.querySelector('[data-role="player-rank-progress"]'),
      playerRankNext: document.querySelector('[data-role="player-rank-next"]'),
      rankUpCelebration: document.querySelector('[data-role="rank-up-celebration"]'),
      rankUpTitle: document.querySelector('[data-role="rank-up-title"]'),
      rankUpLevel: document.querySelector('[data-role="rank-up-level"]'),
      leaderboardPlayerStars: document.querySelector('[data-role="leaderboard-player-stars"]'),
      completeStars: document.querySelector('[data-role="complete-stars"]'),
      completeUnlocked: document.querySelector('[data-role="complete-unlocked"]'),
      completeRank: document.querySelector('[data-role="complete-rank"]'),
      guessCompleteStars: document.querySelector('[data-role="guess-complete-stars"]'),
      guessCompleteCorrect: document.querySelector('[data-role="guess-complete-correct"]'),
      guessCompleteStreak: document.querySelector('[data-role="guess-complete-streak"]'),
      guessCompleteAccuracy: document.querySelector('[data-role="guess-complete-accuracy"]'),
      itemDescriptionModal: document.querySelector('[data-role="item-description-modal"]'),
      itemDescriptionImage: document.querySelector('[data-role="item-description-image"]'),
      itemDescriptionTitle: document.querySelector('[data-role="item-description-title"]'),
      itemDescriptionText: document.querySelector('[data-role="item-description-text"]'),
    };

    this.bindEvents();
  }

  bindEvents() {
    this.events.on('show_main_menu', () => {
      this.showMainMenu();
    });

    if (this.elements.resetButton) {
      this.elements.resetButton.addEventListener('click', () => {
        this.state = resetGameState();
        this.renderCategories();
        this.renderGuessCategories();
        this.renderGuessPlayerStats();
        this.renderPlayerHud('collection');
        this.showCategories();
      });
    }

    window.addEventListener('locale-changed', () => {
      this.renderCategories();
      this.renderGuessCategories();
      this.renderGuessPlayerStats();
      this.renderPlayerHud();
      if (this.currentSession) {
        this.renderCurrentRound();
      }
      if (this.currentGuessSession) {
        this.renderCurrentGuessRound();
      }
      if (this.currentStatisticsCategoryId) {
        this.renderCategoryStatistics(this.currentStatisticsCategoryId);
      }
    });
  }

  init() {
    this.renderCategories();
    this.renderGuessCategories();
    this.renderGuessPlayerStats();
    this.elements.playerHud?.removeAttribute('hidden');
    this.renderPlayerHud('collection');
    this.showMainMenu();
    void this.restorePendingCategoryStatisticsPurchases();
  }

  showMainMenu() {
    this.renderPlayerHud('collection');
    this.ui.show('main_screen');
  }

  showCategories() {
    this.renderCategories();
    this.renderPlayerHud('collection');
    this.ui.show('categories_screen');
  }

  showGuessCategories() {
    this.showCategories();
  }

  showSettings() {
    this.renderPlayerHud('collection');
    this.ui.show('settings_screen');
  }

  renderPlayerHud(context = this.currentHudContext) {
    this.currentHudContext = context;
    const stars = getPlayerStars(this.state.player);
    const locale = localStorage.getItem('locale') || 'ru';
    const rank = getPlayerRank(stars, locale);
    const unlocked = getUnlockedCategoriesCount(this.state.categoryProgress);

    if (this.elements.playerRank) {
      this.elements.playerRank.textContent = `${rank.title} · ${rank.level}`;
    }
    if (this.elements.playerStars) {
      this.elements.playerStars.textContent = `★ ${stars}`;
    }
    if (this.elements.leaderboardPlayerStars) {
      this.elements.leaderboardPlayerStars.textContent = `${new Intl.NumberFormat(locale).format(stars)} ★`;
    }
    if (this.elements.playerRankProgress) {
      this.elements.playerRankProgress.style.width = `${rank.progress}%`;
    }
    if (this.elements.playerRankNext) {
      this.elements.playerRankNext.textContent = rank.nextThreshold
        ? `${rank.starsToNext} ${t('starsToNextRank')}`
        : t('maxRank');
    }
    if (this.elements.playerContext) {
      if (context === 'streak') {
        const streak = this.currentGuessSession?.currentStreak ?? 0;
        this.elements.playerContext.textContent = `🔥 ${streak}`;
        this.elements.playerContext.title = t('currentStreak');
      } else {
        this.elements.playerContext.textContent = `🔓 ${unlocked}/${this.categories.length}`;
        this.elements.playerContext.title = t('unlockedCategories');
      }
    }

    const previousRankLevel = this.lastKnownRankLevel;
    this.lastKnownRankLevel = rank.level;
    if (rank.level > previousRankLevel) {
      this.showRankUpCelebration(rank);
    }
  }

  showRankUpCelebration(rank) {
    const celebration = this.elements.rankUpCelebration;
    if (!celebration) return;

    if (this.elements.rankUpTitle) {
      this.elements.rankUpTitle.textContent = rank.title;
    }
    if (this.elements.rankUpLevel) {
      this.elements.rankUpLevel.textContent = String(rank.level);
    }

    window.clearTimeout(this.rankUpCelebrationTimer);
    celebration.hidden = false;
    celebration.classList.remove('is-animating');
    this.elements.playerHud?.classList.remove('is-ranking-up');
    void celebration.offsetWidth;
    celebration.classList.add('is-animating');
    this.elements.playerHud?.classList.add('is-ranking-up');

    this.rankUpCelebrationTimer = window.setTimeout(() => {
      celebration.classList.remove('is-animating');
      celebration.hidden = true;
      this.elements.playerHud?.classList.remove('is-ranking-up');
    }, 3600);
  }

  startCategorySession(categoryId) {
    const category = this.categoriesById[categoryId];
    if (!category) return;

    this.currentSession = createCategorySession(category);

    if (!this.currentSession.totalRounds) {
      this.showCategories();
      return;
    }

    this.choiceLocked = false;
    this.renderCurrentRound();
    this.ui.show('choice_screen');
    this.gameContext.audioClass.playEffect(GAME_SOUNDS.SESSION_START);
    this.renderPlayerHud('collection');
    this.gameContext.emotionsClass.react('pair_presented');
  }

  renderCategories() {
    const container = this.elements.categoriesList;
    if (!container) return;

    const unlockedCount = getUnlockedCategoriesCount(this.state.categoryProgress);
    const overallProgress = this.categories.length
      ? (unlockedCount / this.categories.length) * 100
      : 0;
    if (this.elements.categoriesProgressFill) {
      this.elements.categoriesProgressFill.style.width = `${overallProgress}%`;
    }
    if (this.elements.categoriesProgressText) {
      this.elements.categoriesProgressText.textContent = `${unlockedCount}/${this.categories.length}`;
    }

    const visibleCategories = this.categories;

    if (!visibleCategories.length) {
      container.innerHTML = `<div class="categories-empty">${t('noCategoriesInFilter')}</div>`;
      return;
    }

    container.innerHTML = visibleCategories.map((category) => {
      const categoryIndex = this.categories.indexOf(category);
      const progress = this.state.categoryProgress[category.id] ?? {
        completedRounds: 0,
        guessModeUnlocked: false,
      };
      const roundsPerSession = Math.floor(category.itemIds.length / 2);
      const completedRounds = Math.min(progress.completedRounds ?? 0, roundsPerSession);
      const progressPercent = roundsPerSession
        ? (completedRounds / roundsPerSession) * 100
        : 0;
      const cover = category.items[0]?.image;
      const cardState = progress.guessModeUnlocked
        ? 'is-complete'
        : (completedRounds > 0 ? 'is-in-progress' : 'is-new');
      const categoryGuesses = this.state.guessHistory.filter((entry) => entry.categoryId === category.id);
      const correctGuesses = categoryGuesses.filter((entry) => entry.isCorrect).length;
      const categoryAccuracy = categoryGuesses.length
        ? Math.round((correctGuesses / categoryGuesses.length) * 100)
        : 0;
      const hasStatistics = Boolean(this.state.categoryStatisticsPurchases?.[category.id]);
      const categoryTitle = getLocalizedCategoryTitle(category, getCurrentLocale());
      const primaryAction = progress.guessModeUnlocked ? 'start_guess_session' : 'start_category_session';
      const primaryLabel = progress.guessModeUnlocked
        ? t('playGuess')
        : (completedRounds > 0
          ? t('continueCategory')
          : `${t('startCategory')} · +${CHOICE_SESSION_REWARD} ★`);

      return `
        <article class="category-card ${cardState}"
          data-action="${primaryAction}" data-category-id="${category.id}"
          tabindex="0" aria-label="${categoryTitle}: ${primaryLabel}"
          style="--category-index: ${categoryIndex % 8}">
          <span class="category-card__cover">
            <img src="${cover}" alt="" draggable="false" loading="lazy" decoding="async">
            <span class="category-card__state">${progress.guessModeUnlocked ? '✓' : `${completedRounds}/${roundsPerSession}`}</span>
          </span>
          <span class="category-card__body">
            <span class="category-card__title">${categoryTitle}</span>
            <span class="category-card__status">
              <span class="category-card__progress-label">
                <span>${t('myTaste')}</span>
                <strong>${completedRounds} ${t('roundOf')} ${roundsPerSession}</strong>
              </span>
              <span class="category-card__progress-track" aria-hidden="true">
                <span class="category-card__progress-fill" style="width: ${progressPercent}%"></span>
              </span>
              <span class="category-card__progress-label">
                <span>${t('guessAccuracy')}</span>
                <strong>${categoryAccuracy}%</strong>
              </span>
              <span class="category-card__progress-track" aria-hidden="true">
                <span class="category-card__progress-fill category-card__progress-fill--accuracy" style="width: ${categoryAccuracy}%"></span>
              </span>
            </span>
            <span class="category-card__action-row">
              <button class="category-card__primary-action btn-reset" data-action="${primaryAction}"
                data-category-id="${category.id}">${primaryLabel}</button>
              ${progress.guessModeUnlocked ? `
                <button class="category-card__purchase-action${hasStatistics ? ' is-purchased' : ''} btn-reset"
                  data-action="${hasStatistics ? 'open_category_statistics' : 'purchase_category_statistics'}"
                  data-category-id="${category.id}"
                  aria-label="${hasStatistics ? t('viewStatistics') : t('buyStatistics')}">
                  <img class="category-card__purchase-icon" src="/images/stats.png" alt="" aria-hidden="true">
                  ${hasStatistics ? '' : `<span>${t('buyStatistics')}</span>`}
                </button>
              ` : ''}
            </span>
          </span>
        </article>
      `;
    }).join('');
  }

  renderGuessPlayerStats() {
    const score = getPlayerStars(this.state.player);
    const rating = getGuessRating(score);

    document.querySelectorAll('[data-role="guess-score"]').forEach((element) => {
      element.textContent = `★ ${score}`;
    });

    document.querySelectorAll('[data-role="guess-rating"]').forEach((element) => {
      element.textContent = rating.title;
    });
  }

  renderGuessCategories() {
    const container = this.elements.guessCategoriesList;
    if (!container) return;

    container.innerHTML = this.categories.map((category, categoryIndex) => {
      const availability = getGuessAvailability(category, this.state);
      const roundsPerSession = Math.floor(availability.availableItemsCount / 2);
      const categoryProgress = this.state.categoryProgress[category.id] ?? {};
      const completedRounds = Math.min(categoryProgress.completedRounds ?? 0, 10);
      const progressPercent = completedRounds * 10;
      const cover = category.items[0]?.image;
      let statusText = `${roundsPerSession} ${t('roundsShort')}`;

      if (availability.reason === 'locked') {
        statusText = `${t('guessModeLocked')} ${formatUnlockProgress(availability.completedRounds)}`;
      } else if (availability.reason === 'not_enough_data') {
        statusText = t('guessNotEnoughData');
      }

      return `
        <button class="category-card category-card--guess btn-reset ${availability.canPlay ? 'is-complete' : 'is-locked'}"
          data-action="start_guess_session"
          data-category-id="${category.id}"
          style="--category-index: ${categoryIndex % 8}"
          ${availability.canPlay ? '' : 'disabled'}>
          <span class="category-card__cover">
            <img src="${cover}" alt="" draggable="false" loading="lazy" decoding="async">
            <span class="category-card__badge">${availability.canPlay ? t('guessReady') : t('guessLockedBadge')}</span>
            <span class="category-card__state-icon" aria-hidden="true">${availability.canPlay ? '▶' : '🔒'}</span>
          </span>
          <span class="category-card__body">
            <span class="category-card__title">${getLocalizedCategoryTitle(category, getCurrentLocale())}</span>
            <span class="category-card__meta">${availability.availableItemsCount} ${t('itemsWithDataLabel')}</span>
            <span class="category-card__progress-track" aria-hidden="true">
              <span class="category-card__progress-fill" style="width: ${progressPercent}%"></span>
            </span>
            <span class="category-card__action">${statusText}</span>
          </span>
        </button>
      `;
    }).join('');
  }

  renderCurrentRound() {
    if (!this.currentSession) return;

    const pair = this.currentSession.pairs[this.currentSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    const roundNumber = this.currentSession.currentRoundIndex + 1;
    const progressPercent = roundNumber / this.currentSession.totalRounds * 100;

    if (this.elements.choiceCategoryTitle) {
      const category = this.categoriesById[this.currentSession.categoryId];
      this.elements.choiceCategoryTitle.textContent = getLocalizedCategoryTitle(category, getCurrentLocale());
    }

    if (this.elements.choiceRoundLabel) {
      this.elements.choiceRoundLabel.innerHTML = `
        <span class="guess-round-title__word">${t('roundLabel')}</span>
        <strong class="guess-round-title__current">${roundNumber}</strong>
        <span class="guess-round-title__of">${t('roundOf')}</span>
        <strong class="guess-round-title__total">${this.currentSession.totalRounds}</strong>
      `;
    }

    if (this.elements.choiceQuestion) {
      this.elements.choiceQuestion.textContent = t('choiceQuestion');
    }

    if (this.elements.progressFill) {
      this.elements.progressFill.style.width = `${progressPercent}%`;
    }

    if (this.elements.progressText) {
      this.elements.progressText.textContent = `${roundNumber}/${this.currentSession.totalRounds}`;
    }

    this.renderChoiceCard(this.elements.leftCard, leftItem, 'left');
    this.renderChoiceCard(this.elements.rightCard, rightItem, 'right');
  }

  renderItemArt(item) {
    const initials = getInitials(getLocalizedItemTitle(item, getCurrentLocale()));

    if (!item.image) {
      return `<span class="choice-card__initials">${initials}</span>`;
    }

    return `
      <img
        class="choice-card__image"
        src="${item.image}"
        alt=""
        draggable="false"
        decoding="async"
        onerror="this.hidden=true;this.nextElementSibling.hidden=false"
      >
      <span class="choice-card__initials" hidden>${initials}</span>
    `;
  }

  renderChoiceCard(element, item, side) {
    if (!element || !item) return;

    const itemTitle = getLocalizedItemTitle(item, getCurrentLocale());
    element.dataset.itemId = item.id;
    element.dataset.side = side;
    element.classList.remove('is-chosen', 'is-loser', 'is-idle');
    element.style.setProperty('--card-accent', item.accent ?? '#ffffff');
    element.style.setProperty('--card-bg-image', `url("${item.image}")`);
    element.innerHTML = `
      <span class="choice-card__art" aria-hidden="true">
        ${this.renderItemArt(item)}
      </span>
      <span class="choice-card__title">${itemTitle}</span>
      <span class="choice-card__description" role="button" tabindex="0"
        data-action="open_item_description" data-category-id="${item.categoryId}"
        data-item-id="${item.id}">${t('description')}</span>
      <span class="choice-card__confirmation" aria-hidden="true">
        <span class="choice-card__confirmation-icon">✓</span>
        <span>${t('voteRecorded')}</span>
      </span>
    `;
  }

  renderGuessCard(element, item, side) {
    if (!element || !item) return;

    const itemTitle = getLocalizedItemTitle(item, getCurrentLocale());
    element.dataset.itemId = item.id;
    element.dataset.side = side;
    element.classList.remove('is-chosen', 'is-loser', 'is-correct', 'is-revealed', 'is-hint');
    element.style.setProperty('--card-accent', item.accent ?? '#ffffff');
    element.style.setProperty('--card-bg-image', `url("${item.image}")`);
    element.innerHTML = `
      <span class="choice-card__art" aria-hidden="true">
        ${this.renderItemArt(item)}
      </span>
      <span class="choice-card__title">${itemTitle}</span>
      <span class="choice-card__description" role="button" tabindex="0"
        data-action="open_item_description" data-category-id="${item.categoryId}"
        data-item-id="${item.id}">${t('description')}</span>
    `;
  }

  async purchaseCategoryStatistics(categoryId) {
    const category = this.categoriesById[categoryId];
    if (!category) return;

    if (this.state.categoryStatisticsPurchases?.[categoryId]) {
      this.showCategoryStatistics(categoryId);
      return;
    }

    const button = document.querySelector(
      `[data-action="purchase_category_statistics"][data-category-id="${categoryId}"]`,
    );
    if (button) button.disabled = true;
    this.gameContext.events.emit('category_statistics_purchase_started', { categoryId });

    try {
      const purchase = await this.gameContext.sdkManager.purchase(
        CATEGORY_STATISTICS_PRODUCT_ID,
        JSON.stringify({ categoryId }),
      );

      this.unlockCategoryStatistics(categoryId);
      this.gameContext.events.emit('category_statistics_purchase_completed', { categoryId });
      this.showCategoryStatistics(categoryId);

      try {
        await this.gameContext.sdkManager.consumePurchase(purchase?.purchaseToken);
      } catch (consumeError) {
        console.warn('Category statistics purchase was granted but not consumed', consumeError);
      }
    } catch (error) {
      console.warn('Category statistics purchase was not completed', error);
      this.gameContext.events.emit('category_statistics_purchase_failed', { categoryId, error });
      if (button) button.disabled = false;
    }
  }

  unlockCategoryStatistics(categoryId) {
    this.state.categoryStatisticsPurchases = {
      ...(this.state.categoryStatisticsPurchases ?? {}),
      [categoryId]: true,
    };
    this.state = saveGameState(this.state);
    this.renderCategories();
  }

  async restorePendingCategoryStatisticsPurchases() {
    try {
      const purchases = await this.gameContext.sdkManager.getPendingPurchases();
      for (const purchase of purchases) {
        if (purchase.productID !== CATEGORY_STATISTICS_PRODUCT_ID) continue;

        let payload = null;
        try {
          payload = JSON.parse(purchase.developerPayload || '{}');
        } catch {
          payload = null;
        }
        if (!payload?.categoryId || !this.categoriesById[payload.categoryId]) continue;

        this.unlockCategoryStatistics(payload.categoryId);
        try {
          await this.gameContext.sdkManager.consumePurchase(purchase.purchaseToken);
        } catch (consumeError) {
          console.warn('Restored category statistics purchase was not consumed', consumeError);
        }
      }
    } catch (error) {
      console.warn('Pending category statistics purchases could not be restored', error);
    }
  }

  showCategoryStatistics(categoryId) {
    if (!this.state.categoryStatisticsPurchases?.[categoryId]) return;
    this.currentStatisticsCategoryId = categoryId;
    this.renderCategoryStatistics(categoryId);
    this.renderPlayerHud('collection');
    this.ui.show('category_statistics_screen');
  }

  renderCategoryStatistics(categoryId) {
    const category = this.categoriesById[categoryId];
    if (!category || !this.elements.categoryStatisticsBody) return;

    const locale = getCurrentLocale();
    const categoryRatings = this.state.itemRatings?.[categoryId] ?? {};
    const rows = category.items.map((item) => {
      const stats = categoryRatings[item.id] ?? { chosen: 0, shown: 0 };
      const popularity = stats.shown > 0 ? (stats.chosen / stats.shown) * 100 : 0;
      return { item, chosen: stats.chosen ?? 0, shown: stats.shown ?? 0, popularity };
    }).sort((left, right) => (
      right.popularity - left.popularity
      || right.chosen - left.chosen
      || getLocalizedItemTitle(left.item, locale).localeCompare(getLocalizedItemTitle(right.item, locale))
    ));

    const totalVotes = rows.reduce((sum, row) => sum + row.chosen, 0);
    if (this.elements.categoryStatisticsTitle) {
      this.elements.categoryStatisticsTitle.textContent = getLocalizedCategoryTitle(category, locale);
    }
    if (this.elements.categoryStatisticsItems) {
      this.elements.categoryStatisticsItems.textContent = String(rows.length);
    }
    if (this.elements.categoryStatisticsVotes) {
      this.elements.categoryStatisticsVotes.textContent = new Intl.NumberFormat(locale).format(totalVotes);
    }

    this.elements.categoryStatisticsBody.innerHTML = rows.map((row, index) => {
      const percent = Math.round(row.popularity);
      const title = getLocalizedItemTitle(row.item, locale);
      return `
        <tr class="category-statistics-row ${index < 3 ? `is-top-${index + 1}` : ''}">
          <td><span class="category-statistics-place">${index + 1}</span></td>
          <td>
            <span class="category-statistics-item">
              <img src="${row.item.image}" alt="" loading="lazy" decoding="async">
              <strong>${title}</strong>
            </span>
          </td>
          <td>
            <span class="category-statistics-rating">
              <span><i style="width:${percent}%"></i></span>
              <strong>${percent}%</strong>
            </span>
          </td>
          <td><strong>${new Intl.NumberFormat(locale).format(row.chosen)}</strong></td>
        </tr>
      `;
    }).join('');
  }

  showItemDescription(categoryId, itemId) {
    const item = this.categoriesById[categoryId]?.items.find((entry) => entry.id === itemId);
    if (!item || !this.elements.itemDescriptionModal) return;

    const locale = getCurrentLocale();
    const itemTitle = getLocalizedItemTitle(item, locale);
    if (this.elements.itemDescriptionImage) {
      this.elements.itemDescriptionImage.src = item.image;
      this.elements.itemDescriptionImage.alt = itemTitle;
    }
    if (this.elements.itemDescriptionTitle) {
      this.elements.itemDescriptionTitle.textContent = itemTitle;
    }
    if (this.elements.itemDescriptionText) {
      this.elements.itemDescriptionText.textContent = getItemDescription(item, locale);
    }
    this.elements.itemDescriptionModal.hidden = false;
  }

  hideItemDescription() {
    if (this.elements.itemDescriptionModal) {
      this.elements.itemDescriptionModal.hidden = true;
    }
  }

  async chooseItem(itemId) {
    if (!this.currentSession || this.choiceLocked) return;

    const pair = this.currentSession.pairs[this.currentSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    if (leftItem.id !== itemId && rightItem.id !== itemId) return;

    this.choiceLocked = true;
    const chosenSide = leftItem.id === itemId ? 'left' : 'right';
    const loserSide = chosenSide === 'left' ? 'right' : 'left';
    const chosenElement = chosenSide === 'left' ? this.elements.leftCard : this.elements.rightCard;
    const loserElement = loserSide === 'left' ? this.elements.leftCard : this.elements.rightCard;

    chosenElement?.classList.add('is-chosen');
    loserElement?.classList.add('is-loser');
    this.gameContext.audioClass.playEffect(GAME_SOUNDS.CHOICE_RECORDED);

    const choiceResult = applyChoiceResult(this.state, {
      playerId: this.state.player.id,
      categoryId: this.currentSession.categoryId,
      leftItem,
      rightItem,
      chosenItemId: itemId,
      roundIndex: this.currentSession.currentRoundIndex,
      sessionId: this.currentSession.sessionId,
    });
    this.currentSession.earnedStars += choiceResult.starsEarned;
    this.currentSession.unlockedCategory ||= choiceResult.unlockedNow;
    this.state = saveGameState(this.state);
    this.renderPlayerHud('collection');

    this.gameContext.emotionsClass.react('player_choice', { chosenItemId: itemId });

    await new Promise((resolve) => window.setTimeout(resolve, 1440));

    this.currentSession.currentRoundIndex += 1;

    if (this.currentSession.currentRoundIndex >= this.currentSession.totalRounds) {
      this.finishCurrentSession();
      return;
    }

    this.choiceLocked = false;
    this.renderCurrentRound();
    this.gameContext.emotionsClass.reactAfter('pair_presented', 600);
  }

  finishCurrentSession() {
    if (!this.currentSession) return;

    this.lastCompletedCategoryId = this.currentSession.categoryId;

    const progress = this.state.categoryProgress[this.currentSession.categoryId] ?? {
      completedRounds: 0,
      guessModeUnlocked: false,
    };
    const bonus = addPlayerStars(
      this.state,
      Math.max(0, CHOICE_SESSION_REWARD - this.currentSession.earnedStars),
    );
    this.currentSession.earnedStars += bonus;
    this.state.player.sessionsCompleted = (this.state.player.sessionsCompleted ?? 0) + 1;
    this.state = saveGameState(this.state);
    const stars = getPlayerStars(this.state.player);
    const locale = localStorage.getItem('locale') || 'ru';
    const rank = getPlayerRank(stars, locale);
    const unlockedCount = getUnlockedCategoriesCount(this.state.categoryProgress);

    if (this.elements.completeTitle) {
      this.elements.completeTitle.textContent = t('sessionCompleteTitle');
    }

    if (this.elements.completeText) {
      this.elements.completeText.textContent = progress.guessModeUnlocked
        ? t('sessionCompleteUnlocked')
        : t('sessionCompleteSaved');
    }

    if (this.elements.completeProgress) {
      this.elements.completeProgress.textContent = progress.guessModeUnlocked
        ? t('categoryOpenedShort')
        : `${t('guessModeLocked')} ${formatUnlockProgress(progress.completedRounds)}`;
    }

    if (this.elements.completeStars) {
      this.elements.completeStars.textContent = `+${this.currentSession.earnedStars} ★`;
    }
    if (this.elements.completeUnlocked) {
      this.elements.completeUnlocked.textContent = `${t('unlockedShort')} ${unlockedCount}/${this.categories.length}`;
    }
    if (this.elements.completeRank) {
      this.elements.completeRank.textContent = rank.nextThreshold
        ? `${rank.starsToNext} ${t('starsToNextRank')}`
        : t('maxRank');
    }

    this.ui.show('session_complete_screen');
    this.gameContext.audioClass.playEffect(GAME_SOUNDS.SESSION_COMPLETE);
    this.renderPlayerHud('collection');
    this.gameContext.emotionsClass.react(
      progress.guessModeUnlocked ? 'category_complete' : 'guess_correct',
      { categoryId: this.currentSession.categoryId },
    );
    this.currentSession = null;
    this.choiceLocked = false;
  }

  startGuessSession(categoryId) {
    const category = this.categoriesById[categoryId];
    if (!category) return;

    const availability = getGuessAvailability(category, this.state);
    if (!availability.canPlay) {
      this.showGuessCategories();
      return;
    }

    this.currentGuessSession = createGuessSession(category, this.state);

    if (!this.currentGuessSession.totalRounds) {
      this.showGuessCategories();
      return;
    }

    this.lastGuessCategoryId = categoryId;
    this.guessLocked = false;
    this.guessResultShown = false;
    this.guessHintPending = false;
    this.guessHintUsedRounds = new Set();
    this.renderCurrentGuessRound({ animateQuestion: true });
    this.ui.show('guess_screen');
    this.gameContext.audioClass.playEffect(GAME_SOUNDS.SESSION_START);
    this.renderPlayerHud('streak');
    this.gameContext.emotionsClass.react('pair_presented');
  }

  renderCurrentGuessRound({ animateQuestion = false } = {}) {
    if (!this.currentGuessSession) return;

    const pair = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    const roundNumber = this.currentGuessSession.currentRoundIndex + 1;
    const progressPercent = (roundNumber - 1) / this.currentGuessSession.totalRounds * 100;

    if (this.elements.guessCategoryTitle) {
      const category = this.categoriesById[this.currentGuessSession.categoryId];
      this.elements.guessCategoryTitle.textContent = getLocalizedCategoryTitle(category, getCurrentLocale());
    }

    if (this.elements.guessRoundLabel) {
      this.elements.guessRoundLabel.innerHTML = `
        <span class="guess-round-title__word">${t('roundLabel')}</span>
        <strong class="guess-round-title__current">${roundNumber}</strong>
        <span class="guess-round-title__of">${t('roundOf')}</span>
        <strong class="guess-round-title__total">${this.currentGuessSession.totalRounds}</strong>
      `;
    }

    if (this.elements.guessQuestion) {
      const question = t('guessQuestion');
      this.elements.guessQuestion.classList.remove('is-letter-reveal');
      this.elements.guessQuestion.removeAttribute('aria-label');

      if (animateQuestion) {
        renderGuessQuestionReveal(this.elements.guessQuestion, question);
      } else {
        this.elements.guessQuestion.textContent = question;
      }
    }

    if (this.elements.guessProgressFill) {
      this.elements.guessProgressFill.style.width = `${progressPercent}%`;
    }

    if (this.elements.guessProgressText) {
      this.elements.guessProgressText.textContent = `${roundNumber - 1}/${this.currentGuessSession.totalRounds}`;
    }

    if (this.elements.guessNextButton) {
      this.elements.guessNextButton.hidden = true;
    }

    if (this.elements.guessResultModal) {
      this.elements.guessResultModal.hidden = true;
    }

    this.renderGuessCard(this.elements.guessLeftCard, leftItem, 'left');
    this.renderGuessCard(this.elements.guessRightCard, rightItem, 'right');
    this.updateGuessHintButton();
  }

  updateGuessHintButton() {
    const button = this.elements.guessHintButton;
    if (!button || !this.currentGuessSession) return;

    const roundIndex = this.currentGuessSession.currentRoundIndex;
    const isUsed = this.guessHintUsedRounds.has(roundIndex);
    button.disabled = this.guessLocked || this.guessHintPending || isUsed;
    button.classList.toggle('is-loading', this.guessHintPending);
    button.classList.toggle('is-used', isUsed);
    button.setAttribute('aria-busy', this.guessHintPending ? 'true' : 'false');

    if (this.elements.guessHintTitle) {
      this.elements.guessHintTitle.textContent = this.guessHintPending
        ? t('guessHintLoading')
        : (isUsed ? t('guessHintReady') : t('guessHint'));
    }
    if (this.elements.guessHintSubtitle) {
      this.elements.guessHintSubtitle.textContent = isUsed
        ? t('guessHintUsed')
        : t('guessHintAd');
    }
  }

  requestGuessHint() {
    if (!this.currentGuessSession || this.guessLocked || this.guessHintPending) return;

    const roundIndex = this.currentGuessSession.currentRoundIndex;
    if (this.guessHintUsedRounds.has(roundIndex)) return;

    const sessionId = this.currentGuessSession.sessionId;
    let rewarded = false;
    this.guessHintPending = true;
    this.updateGuessHintButton();

    const isSameRound = () => (
      this.currentGuessSession?.sessionId === sessionId
      && this.currentGuessSession.currentRoundIndex === roundIndex
    );
    const grantHint = () => {
      if (rewarded || !isSameRound()) return;
      rewarded = true;
      this.revealGuessHint();
    };
    const finish = () => {
      this.guessHintPending = false;
      this.gameContext.audioClass.setVisibilityPaused(false);
      if (isSameRound()) this.updateGuessHintButton();
    };

    const adStarted = this.gameContext.sdkManager?.showRewardedVideo({
      onOpen: () => this.gameContext.audioClass.setVisibilityPaused(true),
      onRewarded: grantHint,
      onClose: finish,
      onError: finish,
    });

    if (!adStarted) {
      window.setTimeout(() => {
        grantHint();
        finish();
      }, 350);
    }
  }

  revealGuessHint() {
    if (!this.currentGuessSession || this.guessLocked) return;

    const roundIndex = this.currentGuessSession.currentRoundIndex;
    const pair = this.currentGuessSession.pairs[roundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    const hint = getGuessHint(
      this.state,
      this.currentGuessSession.categoryId,
      leftItem,
      rightItem,
    );
    this.guessHintUsedRounds.add(roundIndex);

    if (hint.isTie) {
      this.elements.guessLeftCard?.classList.add('is-hint');
      this.elements.guessRightCard?.classList.add('is-hint');
    } else {
      const hintedCard = hint.itemId === leftItem.id
        ? this.elements.guessLeftCard
        : this.elements.guessRightCard;
      hintedCard?.classList.add('is-hint');
    }

    this.updateGuessHintButton();
  }

  async chooseGuessItem(itemId) {
    if (!this.currentGuessSession || this.guessLocked) return;

    const pair = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    if (leftItem.id !== itemId && rightItem.id !== itemId) return;

    this.guessLocked = true;
    this.updateGuessHintButton();
    const chosenSide = leftItem.id === itemId ? 'left' : 'right';
    const chosenElement = chosenSide === 'left' ? this.elements.guessLeftCard : this.elements.guessRightCard;
    const otherElement = chosenSide === 'left' ? this.elements.guessRightCard : this.elements.guessLeftCard;
    chosenElement?.classList.add('is-chosen');
    otherElement?.classList.add('is-loser');

    const result = applyGuessResult(this.state, {
      categoryId: this.currentGuessSession.categoryId,
      leftItem,
      rightItem,
      chosenItemId: itemId,
      roundIndex: this.currentGuessSession.currentRoundIndex,
      sessionId: this.currentGuessSession.sessionId,
      currentStreak: this.currentGuessSession.currentStreak,
    });
    this.currentGuessSession.earnedStars += result.points;
    this.currentGuessSession.currentStreak = result.isCorrect
      ? this.currentGuessSession.currentStreak + 1
      : 0;
    this.currentGuessSession.correctAnswers += result.isCorrect ? 1 : 0;
    this.currentGuessSession.bestStreak = Math.max(
      this.currentGuessSession.bestStreak,
      this.currentGuessSession.currentStreak,
    );
    this.state.player.bestStreak = Math.max(
      this.state.player.bestStreak ?? 0,
      this.currentGuessSession.bestStreak,
    );
    this.state = saveGameState(this.state);

    const resultSound = !result.isCorrect
      ? GAME_SOUNDS.GUESS_WRONG
      : (this.currentGuessSession.currentStreak > 1
        ? GAME_SOUNDS.STREAK_UP
        : GAME_SOUNDS.GUESS_CORRECT);
    this.gameContext.audioClass.playEffect(resultSound);
    this.playResultCharacterDialogue(result.isCorrect);

    const leftCorrect = result.leftPercent === Math.max(result.leftPercent, result.rightPercent);
    const rightCorrect = result.rightPercent === Math.max(result.leftPercent, result.rightPercent);
    this.elements.guessLeftCard?.classList.toggle('is-correct', leftCorrect);
    this.elements.guessRightCard?.classList.toggle('is-correct', rightCorrect);
    this.showGuessResultModal(leftItem, rightItem, chosenSide, result);

    if (this.elements.guessQuestion) {
      this.elements.guessQuestion.textContent = result.isCorrect
        ? `${t('guessCorrect')} +${result.points}`
        : t('guessWrong');
    }

    this.renderGuessPlayerStats();
    this.renderPlayerHud('streak');
    this.gameContext.emotionsClass.react(
      result.isCorrect && this.currentGuessSession.currentStreak > 1
        ? 'streak_up'
        : (result.isCorrect ? 'guess_correct' : 'guess_wrong'),
      { streak: this.currentGuessSession.currentStreak },
    );
    await wait(1280);

    if (this.elements.guessNextButton) {
      this.elements.guessNextButton.hidden = false;
      this.elements.guessNextButton.textContent = this.isLastGuessRound() ? t('finish') : t('next');
    }

    this.guessResultShown = true;
  }

  playResultCharacterDialogue(isCorrect) {
    if (this.gameContext.emotionsClass.isAnyoneSpeaking()) {
      // Let the current line finish, but discard both its queued reply and the
      // dialogue for this result so several rounds never pile up voices.
      this.characterDialogueToken += 1;
      return;
    }

    const dialogueToken = ++this.characterDialogueToken;
    const roles = RESULT_VOICE_ROLES[isCorrect ? 'correct' : 'wrong'];
    const getTeam = (role) => (
      role === 'kind' || role === 'coward' ? 'supportive' : 'adversarial'
    );
    const pickAlternating = (items) => {
      const team = getTeam(items[0]);
      const previousRole = this.lastResultVoiceRole[team];
      const switchedRoles = items.filter((role) => role !== previousRole);
      const role = previousRole && switchedRoles.length
        ? (Math.random() < 0.8
          ? switchedRoles[Math.floor(Math.random() * switchedRoles.length)]
          : previousRole)
        : items[Math.floor(Math.random() * items.length)];
      return {
        role,
        team,
      };
    };
    const happySpeaker = pickAlternating(roles.happy);
    const unhappySpeaker = pickAlternating(roles.unhappy);
    const speakers = [
      { ...happySpeaker, mood: 'happy' },
      { ...unhappySpeaker, mood: 'unhappy' },
    ];

    const playSpeaker = (index) => {
      if (dialogueToken !== this.characterDialogueToken || index >= speakers.length) return;

      const speaker = speakers[index];
      const selectedVoice = this.gameContext.audioClass.playCharacterVoice(
        speaker.role,
        speaker.mood,
        {
          onStart: () => {
            if (dialogueToken !== this.characterDialogueToken) return;
            this.lastResultVoiceRole[speaker.team] = speaker.role;
            this.gameContext.emotionsClass.startSpeaking(speaker.role, speaker.mood);
          },
          onEnd: () => {
            this.gameContext.emotionsClass.stopSpeaking(speaker.role);
            if (dialogueToken !== this.characterDialogueToken) return;
            window.setTimeout(() => playSpeaker(index + 1), 100);
          },
          shouldPlay: () => dialogueToken === this.characterDialogueToken,
        },
      );

      if (!selectedVoice) {
        playSpeaker(index + 1);
      }
    };

    window.setTimeout(() => playSpeaker(0), 320);
  }

  showGuessResultModal(leftItem, rightItem, chosenSide, result) {
    const modal = this.elements.guessResultModal;
    if (!modal) return;

    const isLeftWinner = result.leftPercent >= result.rightPercent;
    const isRightWinner = result.rightPercent >= result.leftPercent;
    const hasStreakCelebration = result.isCorrect
      && (this.currentGuessSession?.currentStreak ?? 0) > 1;

    if (this.elements.guessResultTitle) {
      this.elements.guessResultTitle.textContent = result.isCorrect
        ? t('guessCorrect')
        : t('guessResultMissed');
    }
    if (this.elements.guessResultReward) {
      this.elements.guessResultReward.hidden = !result.isCorrect || hasStreakCelebration;
    }
    if (this.elements.guessResultRewardPoints) {
      this.elements.guessResultRewardPoints.textContent = `+${result.points}`;
    }
    if (this.elements.guessResultIcon) {
      this.elements.guessResultIcon.textContent = result.isCorrect ? '✓' : '×';
    }

    this.elements.guessResultDialog?.classList.toggle('is-correct', result.isCorrect);
    this.elements.guessResultDialog?.classList.toggle('is-wrong', !result.isCorrect);
    this.elements.guessResultLeft?.classList.toggle('is-winner', isLeftWinner);
    this.elements.guessResultRight?.classList.toggle('is-winner', isRightWinner);
    this.elements.guessResultLeft?.classList.toggle('is-selected', chosenSide === 'left');
    this.elements.guessResultRight?.classList.toggle('is-selected', chosenSide === 'right');
    this.elements.guessResultLeft?.classList.toggle(
      'is-choice-correct',
      chosenSide === 'left' && result.isCorrect,
    );
    this.elements.guessResultRight?.classList.toggle(
      'is-choice-correct',
      chosenSide === 'right' && result.isCorrect,
    );
    this.elements.guessResultLeft?.classList.toggle(
      'is-choice-wrong',
      chosenSide === 'left' && !result.isCorrect,
    );
    this.elements.guessResultRight?.classList.toggle(
      'is-choice-wrong',
      chosenSide === 'right' && !result.isCorrect,
    );

    if (this.elements.guessResultLeftImage) {
      this.elements.guessResultLeftImage.src = leftItem.image;
      this.elements.guessResultLeftImage.alt = getLocalizedItemTitle(leftItem, getCurrentLocale());
    }
    if (this.elements.guessResultRightImage) {
      this.elements.guessResultRightImage.src = rightItem.image;
      this.elements.guessResultRightImage.alt = getLocalizedItemTitle(rightItem, getCurrentLocale());
    }
    if (this.elements.guessResultLeftTitle) {
      this.elements.guessResultLeftTitle.textContent = getLocalizedItemTitle(leftItem, getCurrentLocale());
    }
    if (this.elements.guessResultRightTitle) {
      this.elements.guessResultRightTitle.textContent = getLocalizedItemTitle(rightItem, getCurrentLocale());
    }
    if (this.elements.guessResultLeftChoice) {
      this.elements.guessResultLeftChoice.hidden = chosenSide !== 'left';
      this.elements.guessResultLeftChoice.textContent = t('yourChoice');
    }
    if (this.elements.guessResultRightChoice) {
      this.elements.guessResultRightChoice.hidden = chosenSide !== 'right';
      this.elements.guessResultRightChoice.textContent = t('yourChoice');
    }

    const selectedPercent = chosenSide === 'left' ? result.leftPercent : result.rightPercent;
    if (this.elements.guessResultFill) {
      this.elements.guessResultFill.style.height = '0%';
      this.elements.guessResultFill.style.opacity = '0';
    }
    this.elements.guessResultGauge?.classList.remove('is-over-half');
    modal.hidden = false;
    this.showGuessStreakCelebration(result);
    this.animateResultPercent(this.elements.guessResultPercent, selectedPercent);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.elements.guessResultFill) {
          this.elements.guessResultFill.style.height = `${selectedPercent}%`;
          this.elements.guessResultFill.style.opacity = selectedPercent > 0 ? '1' : '0';
        }
      });
    });
  }

  showGuessStreakCelebration(result) {
    const celebration = this.elements.guessStreakCelebration;
    if (!celebration) return;

    const streak = this.currentGuessSession?.currentStreak ?? 0;
    const shouldShow = result.isCorrect && streak > 1;
    celebration.hidden = !shouldShow;
    celebration.classList.remove('is-animating');
    if (!shouldShow) return;

    if (this.elements.guessStreakLabel) {
      this.elements.guessStreakLabel.textContent = t('currentStreak');
    }
    if (this.elements.guessStreakCount) {
      this.elements.guessStreakCount.textContent = '0';
    }
    if (this.elements.guessStreakPoints) {
      this.elements.guessStreakPoints.textContent = '+0';
    }
    if (this.elements.guessStreakRoadFill) {
      this.elements.guessStreakRoadFill.style.width = '0%';
    }

    const milestones = [1, 2, 3, 4, 5];
    const visibleFlames = Math.min(streak, milestones.length);
    const roadProgress = Math.max(0, visibleFlames - 1) * 20;
    const flames = [...celebration.querySelectorAll('[data-streak-step]')];
    const nextMilestone = milestones.find((milestone) => streak < milestone);
    flames.forEach((flame, index) => {
      const milestone = Number(flame.dataset.streakStep);
      flame.classList.toggle('is-lit', streak >= milestone);
      flame.classList.toggle('is-next', milestone === nextMilestone);
      flame.style.setProperty('--ignite-delay', `${260 + index * 220}ms`);
    });

    // Reflow restarts the burst, counter and milestone ignition on every new streak step.
    void celebration.offsetWidth;
    celebration.classList.add('is-animating');
    requestAnimationFrame(() => {
      if (this.elements.guessStreakRoadFill) {
        this.elements.guessStreakRoadFill.style.width = `${roadProgress}%`;
      }
    });

    const duration = 1400;
    const start = performance.now();
    const animateCounters = (now) => {
      const ratio = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - ratio) ** 3;
      if (this.elements.guessStreakCount) {
        this.elements.guessStreakCount.textContent = `${Math.max(1, Math.round(streak * eased))}`;
      }
      if (this.elements.guessStreakPoints) {
        this.elements.guessStreakPoints.textContent = `+${Math.round(result.points * eased)}`;
      }
      if (ratio < 1) requestAnimationFrame(animateCounters);
    };
    requestAnimationFrame(animateCounters);
  }

  animateResultPercent(element, targetPercent) {
    if (!element) return;

    const duration = 1350;
    const start = performance.now();
    element.textContent = '0%';

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const currentPercent = Math.round(targetPercent * eased);
      element.textContent = `${currentPercent}%`;
      this.elements.guessResultGauge?.classList.toggle('is-over-half', currentPercent > 50);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  async animateGuessPercent(cardElement, targetPercent) {
    const percentElement = cardElement?.querySelector('[data-role="guess-percent"]');
    if (!percentElement) return;

    percentElement.hidden = false;
    const duration = 900;
    const start = performance.now();

    return new Promise((resolve) => {
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        percentElement.textContent = `${Math.round(targetPercent * eased)}%`;

        if (progress < 1) {
          requestAnimationFrame(tick);
          return;
        }

        resolve();
      };

      requestAnimationFrame(tick);
    });
  }

  revealGuessPercent(cardElement, percent) {
    const percentElement = cardElement?.querySelector('[data-role="guess-percent"]');
    if (!percentElement) return;

    cardElement.classList.add('is-revealed');
    percentElement.hidden = false;
    percentElement.textContent = `${percent}%`;
  }

  isLastGuessRound() {
    if (!this.currentGuessSession) return true;
    return this.currentGuessSession.currentRoundIndex >= this.currentGuessSession.totalRounds - 1;
  }

  nextGuessRound() {
    if (!this.currentGuessSession || !this.guessResultShown) return;

    this.currentGuessSession.currentRoundIndex += 1;

    if (this.currentGuessSession.currentRoundIndex >= this.currentGuessSession.totalRounds) {
      this.finishGuessSession();
      return;
    }

    this.gameContext.emotionsClass.holdCurrentStates();
    this.guessLocked = false;
    this.guessResultShown = false;
    this.renderCurrentGuessRound();
    this.gameContext.emotionsClass.react('pair_presented');
  }

  finishGuessSession() {
    if (!this.currentGuessSession) return;

    this.lastGuessCategoryId = this.currentGuessSession.categoryId;
    this.state.player.sessionsCompleted = (this.state.player.sessionsCompleted ?? 0) + 1;
    this.state = saveGameState(this.state);
    const completedSession = this.currentGuessSession;
    const score = getPlayerStars(this.state.player);
    const rating = getGuessRating(score);

    if (this.elements.guessCompleteTitle) {
      this.elements.guessCompleteTitle.textContent = t('guessCompleteTitle');
    }

    if (this.elements.guessCompleteText) {
      this.elements.guessCompleteText.textContent = `${t('guessCompleteText')} ${rating.title}`;
    }

    if (this.elements.guessCompleteProgress) {
      this.elements.guessCompleteProgress.textContent = `${rating.title} · ★ ${score}`;
    }
    if (this.elements.guessCompleteStars) {
      this.elements.guessCompleteStars.textContent = `+${completedSession.earnedStars} ★`;
    }
    if (this.elements.guessCompleteCorrect) {
      this.elements.guessCompleteCorrect.textContent = `${completedSession.correctAnswers}/${completedSession.totalRounds} ${t('correctShort')}`;
    }
    if (this.elements.guessCompleteStreak) {
      this.elements.guessCompleteStreak.textContent = `🔥 ${completedSession.bestStreak}`;
    }
    if (this.elements.guessCompleteAccuracy) {
      this.elements.guessCompleteAccuracy.textContent = `${t('accuracy')} ${getPlayerAccuracy(this.state.player)}%`;
    }

    this.currentGuessSession = null;
    this.guessLocked = false;
    this.guessResultShown = false;
    this.ui.show('guess_complete_screen');
    this.gameContext.audioClass.playEffect(GAME_SOUNDS.SESSION_COMPLETE);
    this.renderPlayerHud('collection');
    this.gameContext.emotionsClass.react('category_complete');
  }
}
