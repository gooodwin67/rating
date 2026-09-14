export class That3DLetter {
  constructor(character, layers, container, index) {
    this.character = character;
    this.container = container;
    this.index = index;
    this.elements = [];
    this.mainElement = null;
    this.createLayers(layers);
  }

  createLayers(layers) {
    for (let layerIndex = 0; layerIndex < layers; layerIndex += 1) {
      const element = document.createElement('span');
      element.setAttribute('aria-hidden', 'true');
      element.classList.add('that-3d-letter', layerIndex === 0 ? 'front' : 'under');

      if (layerIndex === layers - 1) element.classList.add('back');

      element.textContent = this.character === ' ' ? '\u00a0' : this.character;
      element.dataset.depth = String(layerIndex);
      element.dataset.index = String(this.index);
      element.dataset.character = this.character;

      for (let modulo = 2; modulo < 9; modulo += 1) {
        if (layerIndex % modulo === 0) element.dataset[`mod-${modulo}`] = 'true';
      }

      element.style.setProperty('--layer', String(layers - layerIndex));
      element.style.setProperty('--index', String(this.index));
      element.style.setProperty(
        '--centerOffset',
        String((layerIndex - (layers - 1) * 0.5) / ((layers - 1) * 0.5)),
      );

      this.elements.push(element);
      if (layerIndex === 0) this.mainElement = element;
      this.container.appendChild(element);
    }
  }

  resize() {
    if (!this.mainElement) return;

    const x = this.mainElement.offsetLeft;
    const y = this.mainElement.offsetTop;

    this.elements.forEach((element) => {
      element.style.setProperty('--xPos', String(x));
      element.style.setProperty('--yPos', String(y));
    });
  }
}

export class That3DWord {
  constructor(element, layers) {
    this.element = element;
    this.layers = layers || Number(getComputedStyle(element).getPropertyValue('--layers')) || 8;
    this.letters = [];
    this.wordString = '';
    this.element.style.setProperty('--layers', String(this.layers));

    if (navigator.vendor?.startsWith('Apple')) this.element.classList.add('safari');
    this.init();
  }

  init() {
    this.wordString = this.element.textContent || '';
    this.element.replaceChildren();
    this.element.setAttribute('aria-label', this.wordString);
    this.element.classList.add('that-3d-word');
    const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const mobileBreakIndex = Number(
      locale === 'en'
        ? this.element.dataset.mobileBreakIndexEn
        : this.element.dataset.mobileBreakIndexRu,
    );
    this.letters = [...this.wordString].map((character, index) => {
      if (Number.isInteger(mobileBreakIndex) && index === mobileBreakIndex) {
        const lineBreak = document.createElement('br');
        lineBreak.className = 'that-3d-mobile-break';
        lineBreak.setAttribute('aria-hidden', 'true');
        this.element.appendChild(lineBreak);
      }
      return new That3DLetter(character, this.layers, this.element, index);
    });
    this.resize();

    window.setTimeout(() => {
      this.resize();
      this.element.setAttribute('data-text-ready', 'true');
    }, 100);
  }

  reset() {
    this.element.removeAttribute('data-text-ready');
    this.init();
  }

  resize() {
    if (this.element.matches('.logo-duck')) {
      // Start from the responsive CSS size, then fit the actual font glyphs.
      // Measure layout positions, not animated transforms, to avoid jitter.
      this.element.style.removeProperty('font-size');
      const available = this.element.clientWidth;
      const fronts = this.letters.map((letter) => letter.mainElement).filter(Boolean);
      if (available > 0 && fronts.length) {
        const left = Math.min(...fronts.map((letter) => letter.offsetLeft));
        const right = Math.max(...fronts.map((letter) => letter.offsetLeft + letter.offsetWidth));
        const fontSize = parseFloat(getComputedStyle(this.element).fontSize);
        // Leave room for rotated letters and the depth of the 3D layers.
        const required = right - left + fontSize * 1.2;
        if (required > available) {
          this.element.style.fontSize = `${fontSize * available / required}px`;
        }
      }
    }
    this.element.style.setProperty('--width', String(this.element.clientWidth));
    this.element.style.setProperty('--height', String(this.element.clientHeight));
    this.letters.forEach((letter) => letter.resize());
  }
}

export class Those3DTexts {
  constructor(selector = '[data-3d-text]') {
    this.words = [...document.querySelectorAll(selector)].map((element) => new That3DWord(element));
    window.addEventListener('resize', () => this.resize());
    window.visualViewport?.addEventListener('resize', () => this.resize());
    document.fonts?.ready.then(() => this.resize());
    if (typeof ResizeObserver !== 'undefined') {
      const widths = new WeakMap();
      this.resizeObserver = new ResizeObserver((entries) => {
        if (entries.some(({ target, contentRect }) => {
          if (widths.get(target) === contentRect.width) return false;
          widths.set(target, contentRect.width);
          return true;
        })) this.resize();
      });
      this.words.forEach((word) => {
        if (word.element.parentElement) this.resizeObserver.observe(word.element.parentElement);
      });
    }
  }

  resize() {
    this.words.forEach((word) => word.resize());
  }
}
