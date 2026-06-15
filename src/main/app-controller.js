import { categories } from '../data/categories';
import { createCategorySession } from '../game/session';
import { applyChoiceResult } from '../game/rating-service';
import {
  applyGuessResult,
  createGuessSession,
  getGuessAvailability,
  getGuessRating,
} from '../game/guess-service';
import { loadGameState, resetGameState, saveGameState } from './storage';
import { t } from '../utils/i18n';

function getInitials(title = '') {
  const parts = title.trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('');
}

function formatUnlockProgress(completedRounds) {
  return `${Math.min(completedRounds, 10)} / 10`;
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
    this.currentSession = null;
    this.currentGuessSession = null;
    this.choiceLocked = false;
    this.guessLocked = false;
    this.guessResultShown = false;
    this.lastCompletedCategoryId = null;
    this.lastGuessCategoryId = null;

    this.elements = {
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
      resetButton: document.querySelector('[data-action="reset_local_progress"]'),
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
        this.showCategories();
      });
    }

    window.addEventListener('locale-changed', () => {
      this.renderCategories();
      this.renderGuessCategories();
      this.renderGuessPlayerStats();
      if (this.currentSession) {
        this.renderCurrentRound();
      }
      if (this.currentGuessSession) {
        this.renderCurrentGuessRound();
      }
    });
  }

  init() {
    this.renderCategories();
    this.renderGuessCategories();
    this.renderGuessPlayerStats();
    this.showMainMenu();
  }

  showMainMenu() {
    this.ui.show('main_screen');
  }

  showCategories() {
    this.renderCategories();
    this.ui.show('categories_screen');
  }

  showGuessCategories() {
    this.renderGuessCategories();
    this.renderGuessPlayerStats();
    this.ui.show('guess_categories_screen');
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
    this.gameContext.emotionsClass.react('pair_presented');
  }

  renderCategories() {
    const container = this.elements.categoriesList;
    if (!container) return;

    container.innerHTML = this.categories.map((category) => {
      const progress = this.state.categoryProgress[category.id] ?? {
        completedRounds: 0,
        guessModeUnlocked: false,
      };
      const roundsPerSession = Math.floor(category.itemIds.length / 2);
      const unlockText = progress.guessModeUnlocked
        ? t('guessModeUnlocked')
        : `${t('guessModeLocked')} ${formatUnlockProgress(progress.completedRounds)}`;

      return `
        <button class="category-card btn-reset" data-action="start_category_session" data-category-id="${category.id}">
          <span class="category-card__badge">${roundsPerSession} ${t('roundsShort')}</span>
          <span class="category-card__title">${category.title}</span>
          <span class="category-card__meta">${category.itemIds.length} ${t('itemsLabel')}</span>
          <span class="category-card__progress">${unlockText}</span>
        </button>
      `;
    }).join('');
  }

  renderGuessPlayerStats() {
    const score = this.state.player.guessScore ?? 0;
    const rating = getGuessRating(score);

    document.querySelectorAll('[data-role="guess-score"]').forEach((element) => {
      element.textContent = `${t('guessScoreLabel')} ${score}`;
    });

    document.querySelectorAll('[data-role="guess-rating"]').forEach((element) => {
      element.textContent = rating.title;
    });
  }

  renderGuessCategories() {
    const container = this.elements.guessCategoriesList;
    if (!container) return;

    container.innerHTML = this.categories.map((category) => {
      const availability = getGuessAvailability(category, this.state);
      const roundsPerSession = Math.floor(availability.availableItemsCount / 2);
      let statusText = `${roundsPerSession} ${t('roundsShort')}`;

      if (availability.reason === 'locked') {
        statusText = `${t('guessModeLocked')} ${formatUnlockProgress(availability.completedRounds)}`;
      } else if (availability.reason === 'not_enough_data') {
        statusText = t('guessNotEnoughData');
      }

      return `
        <button class="category-card category-card--guess btn-reset ${availability.canPlay ? '' : 'is-locked'}"
          data-action="start_guess_session"
          data-category-id="${category.id}"
          ${availability.canPlay ? '' : 'disabled'}>
          <span class="category-card__badge">${availability.canPlay ? t('guessReady') : t('guessLockedBadge')}</span>
          <span class="category-card__title">${category.title}</span>
          <span class="category-card__meta">${availability.availableItemsCount} ${t('itemsWithDataLabel')}</span>
          <span class="category-card__progress">${statusText}</span>
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
    const progressPercent = (roundNumber - 1) / this.currentSession.totalRounds * 100;

    if (this.elements.choiceCategoryTitle) {
      this.elements.choiceCategoryTitle.textContent = this.categoriesById[this.currentSession.categoryId]?.title ?? '';
    }

    if (this.elements.choiceRoundLabel) {
      this.elements.choiceRoundLabel.textContent = `${t('roundLabel')} ${roundNumber} ${t('roundOf')} ${this.currentSession.totalRounds}`;
    }

    if (this.elements.choiceQuestion) {
      this.elements.choiceQuestion.textContent = t('choiceQuestion');
    }

    if (this.elements.progressFill) {
      this.elements.progressFill.style.width = `${progressPercent}%`;
    }

    if (this.elements.progressText) {
      this.elements.progressText.textContent = `${roundNumber - 1}/${this.currentSession.totalRounds}`;
    }

    this.renderChoiceCard(this.elements.leftCard, leftItem, 'left');
    this.renderChoiceCard(this.elements.rightCard, rightItem, 'right');
  }

  renderItemArt(item) {
    const initials = getInitials(item.title);

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

    element.dataset.itemId = item.id;
    element.dataset.side = side;
    element.classList.remove('is-chosen', 'is-loser', 'is-idle');
    element.style.setProperty('--card-accent', item.accent ?? '#ffffff');
    element.innerHTML = `
      <span class="choice-card__art" aria-hidden="true">
        ${this.renderItemArt(item)}
      </span>
      <span class="choice-card__title">${item.title}</span>
      <span class="choice-card__hint">${t('tapToChoose')}</span>
    `;
  }

  renderGuessCard(element, item, side) {
    if (!element || !item) return;

    element.dataset.itemId = item.id;
    element.dataset.side = side;
    element.classList.remove('is-chosen', 'is-loser', 'is-correct', 'is-revealed');
    element.style.setProperty('--card-accent', item.accent ?? '#ffffff');
    element.innerHTML = `
      <span class="choice-card__art" aria-hidden="true">
        ${this.renderItemArt(item)}
      </span>
      <span class="choice-card__title">${item.title}</span>
      <span class="guess-percent" data-role="guess-percent" hidden></span>
    `;
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

    applyChoiceResult(this.state, {
      playerId: this.state.player.id,
      categoryId: this.currentSession.categoryId,
      leftItem,
      rightItem,
      chosenItemId: itemId,
      roundIndex: this.currentSession.currentRoundIndex,
      sessionId: this.currentSession.sessionId,
    });
    this.state = saveGameState(this.state);

    this.gameContext.emotionsClass.react('player_choice', { chosenItemId: itemId });

    await new Promise((resolve) => window.setTimeout(resolve, 420));

    this.currentSession.currentRoundIndex += 1;

    if (this.currentSession.currentRoundIndex >= this.currentSession.totalRounds) {
      this.finishCurrentSession();
      return;
    }

    this.choiceLocked = false;
    this.renderCurrentRound();
    this.gameContext.emotionsClass.react('pair_presented');
  }

  finishCurrentSession() {
    if (!this.currentSession) return;

    this.lastCompletedCategoryId = this.currentSession.categoryId;

    const progress = this.state.categoryProgress[this.currentSession.categoryId] ?? {
      completedRounds: 0,
      guessModeUnlocked: false,
    };

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
        ? t('guessModeUnlocked')
        : `${t('guessModeLocked')} ${formatUnlockProgress(progress.completedRounds)}`;
    }

    this.ui.show('session_complete_screen');
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
    this.renderCurrentGuessRound();
    this.ui.show('guess_screen');
    this.gameContext.emotionsClass.react('pair_presented');
  }

  renderCurrentGuessRound() {
    if (!this.currentGuessSession) return;

    const pair = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    const roundNumber = this.currentGuessSession.currentRoundIndex + 1;
    const progressPercent = (roundNumber - 1) / this.currentGuessSession.totalRounds * 100;

    if (this.elements.guessCategoryTitle) {
      this.elements.guessCategoryTitle.textContent = this.categoriesById[this.currentGuessSession.categoryId]?.title ?? '';
    }

    if (this.elements.guessRoundLabel) {
      this.elements.guessRoundLabel.textContent = `${t('roundLabel')} ${roundNumber} ${t('roundOf')} ${this.currentGuessSession.totalRounds}`;
    }

    if (this.elements.guessQuestion) {
      this.elements.guessQuestion.textContent = t('guessQuestion');
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

    this.renderGuessCard(this.elements.guessLeftCard, leftItem, 'left');
    this.renderGuessCard(this.elements.guessRightCard, rightItem, 'right');
  }

  async chooseGuessItem(itemId) {
    if (!this.currentGuessSession || this.guessLocked) return;

    const pair = this.currentGuessSession.pairs[this.currentGuessSession.currentRoundIndex];
    if (!pair) return;

    const [leftItem, rightItem] = pair;
    if (leftItem.id !== itemId && rightItem.id !== itemId) return;

    this.guessLocked = true;
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
    });
    this.state = saveGameState(this.state);

    await this.animateGuessPercent(chosenElement, chosenSide === 'left' ? result.leftPercent : result.rightPercent);
    this.revealGuessPercent(this.elements.guessLeftCard, result.leftPercent);
    this.revealGuessPercent(this.elements.guessRightCard, result.rightPercent);

    const leftCorrect = result.leftPercent === Math.max(result.leftPercent, result.rightPercent);
    const rightCorrect = result.rightPercent === Math.max(result.leftPercent, result.rightPercent);
    this.elements.guessLeftCard?.classList.toggle('is-correct', leftCorrect);
    this.elements.guessRightCard?.classList.toggle('is-correct', rightCorrect);

    if (this.elements.guessQuestion) {
      this.elements.guessQuestion.textContent = result.isCorrect
        ? `${t('guessCorrect')} +${result.points}`
        : t('guessWrong');
    }

    this.renderGuessPlayerStats();
    this.gameContext.emotionsClass.react(result.isCorrect ? 'guess_correct' : 'guess_wrong');
    await wait(220);

    if (this.elements.guessNextButton) {
      this.elements.guessNextButton.hidden = false;
      this.elements.guessNextButton.textContent = this.isLastGuessRound() ? t('finish') : t('next');
    }

    this.guessResultShown = true;
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

    this.guessLocked = false;
    this.guessResultShown = false;
    this.renderCurrentGuessRound();
    this.gameContext.emotionsClass.react('pair_presented');
  }

  finishGuessSession() {
    if (!this.currentGuessSession) return;

    this.lastGuessCategoryId = this.currentGuessSession.categoryId;
    const score = this.state.player.guessScore ?? 0;
    const rating = getGuessRating(score);

    if (this.elements.guessCompleteTitle) {
      this.elements.guessCompleteTitle.textContent = t('guessCompleteTitle');
    }

    if (this.elements.guessCompleteText) {
      this.elements.guessCompleteText.textContent = `${t('guessCompleteText')} ${rating.title}`;
    }

    if (this.elements.guessCompleteProgress) {
      this.elements.guessCompleteProgress.textContent = `${t('guessScoreLabel')} ${score}`;
    }

    this.currentGuessSession = null;
    this.guessLocked = false;
    this.guessResultShown = false;
    this.ui.show('guess_complete_screen');
    this.gameContext.emotionsClass.react('category_complete');
  }
}
