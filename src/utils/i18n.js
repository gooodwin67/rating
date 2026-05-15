const messages = {
    ru: {
        ui: { langToggle: "EN" },
        title: "Рейтинг всего!",
        menuEyebrow: "Игра вкуса и интуиции",
        menuSubtitle: "Сначала выбирай, что нравится тебе. Потом пробуй угадать, что любят другие.",
        btnChoiceMode: "Что любишь ты?",
        btnChoiceModeSub: "Выбирай пары и открывай категории для угадывания",
        settings: "Настройки",
        settingsSub: "Язык и локальный прогресс",
        settingsEyebrow: "Сервис",
        settingsSubtitle: "Пока здесь только локальные данные и язык интерфейса.",
        settingsStorageTitle: "Локальный прогресс",
        settingsStorageText: "Можно сбросить все сохранённые рейтинги и начать тест заново.",
        resetProgress: "Сбросить прогресс",
        back: "Назад",
        categoriesEyebrow: "Первый режим",
        categoriesTitle: "Выбери категорию",
        categoriesSubtitle: "Проходи пары, сохраняй вкус и открывай категории для режима угадывания.",
        roundLabel: "Раунд",
        roundOf: "из",
        roundsShort: "раундов",
        itemsLabel: "элементов",
        choiceQuestion: "Что тебе нравится больше?",
        tapToChoose: "Нажми, чтобы выбрать",
        guessModeLocked: "Открытие угадывания:",
        guessModeUnlocked: "Категория открыта для угадывания",
        sessionCompleteEyebrow: "Сессия завершена",
        sessionCompleteTitle: "Категория пройдена",
        sessionCompleteSaved: "Твой выбор сохранён. Продолжай собирать данные для угадывания.",
        sessionCompleteUnlocked: "Категория открыта. Во втором режиме теперь можно будет угадывать вкусы других.",
        playAgain: "Пройти ещё раз",
        backToCategories: "К категориям",
        loader: {
            loading: "Загрузка..."
        },
    },
    en: {
        ui: { langToggle: "RU" },
        title: "Rating of Everything!",
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
        },
    }
};

function get(obj, path) {
    return path.split('.').reduce((o, k) => o && o[k], obj);
}

export function applyTranslations(locale = 'ru', root = document) {
    const dict = messages[locale] || messages.ru;

    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = get(dict, key);
        if (val != null) el.textContent = val;
    });

    root.querySelectorAll('[data-text]').forEach((el) => {
        const key = el.dataset.i18n;
        const val = get(dict, key);
        if (val != null) {
            el.dataset.text = val;
        }
    });

    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);

    const btn = document.getElementById('lang-toggle');

    if (btn) {
        const flag = document.getElementById('flag');
        if (get(dict, 'ui.langToggle') === 'ru' || locale === 'ru') {
            flag.classList.remove('us');
            flag.classList.add('ru');
            flag.src = "images/ru.svg";
            flag.alt = "Русский флаг";
        }
        else {
            flag.classList.remove('ru');
            flag.classList.add('us');
            flag.src = "images/us.svg";
            flag.alt = "US flag";
        }
    }
}

export function initI18n(lang) {
    if (lang !== undefined) {
        applyTranslations(lang);
    }
    else {
        const saved = localStorage.getItem('locale') || 'ru';
        applyTranslations(saved);
    }
    const toggle = document.getElementById('lang-toggle');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const curr = localStorage.getItem('locale') || 'ru';
            const next = curr === 'ru' ? 'en' : 'ru';
            applyTranslations(next);
            window.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale: next } }));
        });
    }
}

export function t(path, fallback = "") {
    const locale = localStorage.getItem('locale') || 'ru';
    const dict = messages[locale] || messages.ru;
    const val = path.split('.').reduce((o, k) => (o && o[k]), dict);
    return (val ?? fallback);
}
