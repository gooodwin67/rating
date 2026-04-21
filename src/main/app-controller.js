import { categories } from '../data/categories';
import { items } from '../data/items';
import { createCategorySession } from '../game/session';
import { applyChoiceResult } from '../game/rating-service';
import { loadGameState, resetGameState, saveGameState } from './storage';
import { t } from '../utils/i18n';

function getInitials(title = '') {
  const parts = title.trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('');
}

function formatUnlockProgress(completedRounds) {
  return `${Math.min(completedRounds, 10)} / 10`;
}

export class AppController {
  constructor(gameContext) {
    this.gameContext = gameContext;
    this.ui = gameContext.ui;
    this.events = gameContext.events;

    this.categories = categories;
    this.items = items;
    this.itemsById = Object.fromEntries(items.map((item) => [item.id, item]));
    this.categoriesById = Object.fromEntries(categories.map((category) => [category.id, category]));

    this.state = loadGameState();
    this.currentSession = null;
    this.choiceLocked = false;
    this.lastCompletedCategoryId = null;

    this.elements = {
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
        this.showCategories();
      });
    }

    window.addEventListener('locale-changed', () => {
      this.renderCategories();
      if (this.currentSession) {
        this.renderCurrentRound();
      }
    });
  }

  init() {
    this.renderCategories();
    this.showMainMenu();
  }

  showMainMenu() {
    this.ui.show('main_screen');
  }

  showCategories() {
    this.renderCategories();
    this.ui.show('categories_screen');
  }

  startCategorySession(categoryId) {
    const category = this.categoriesById[categoryId];
    if (!category) return;

    this.currentSession = createCategorySession(category, this.itemsById);

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

  renderChoiceCard(element, item, side) {
    if (!element || !item) return;

    element.dataset.itemId = item.id;
    element.dataset.side = side;
    element.classList.remove('is-chosen', 'is-loser', 'is-idle');
    element.style.setProperty('--card-accent', item.accent ?? '#ffffff');
    element.innerHTML = `
      <span class="choice-card__art" aria-hidden="true">
        <span class="choice-card__initials">${getInitials(item.title)}</span>
      </span>
      <span class="choice-card__title">${item.title}</span>
      <span class="choice-card__hint">${t('tapToChoose')}</span>
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
}
