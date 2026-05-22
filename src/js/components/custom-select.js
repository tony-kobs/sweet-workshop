import '../../css/custom-select.css';
import iconsUrl from '../../img/icons.svg';
export class CustomSelect {
  /**
   * @param {HTMLElement} container
   * @param {{ options: {value: string, label: string}[], placeholder?: string, onChange?: (value: string, label: string) => void }} config
   */
  constructor(
    container,
    { options = [], placeholder = 'Оберіть один...', onChange } = {}
  ) {
    this.container = container;
    this.options = options;
    this.placeholder = placeholder;
    this.onChange = onChange;
    this.selected = null;

    this._render();
    this._bindEvents();
  }

  _render() {
    this.container.innerHTML = `
      <div class="sel-wrap">
        <div class="sel-box" tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox">
          <span class="sel-label sel-placeholder">${this.placeholder}</span>
          <span class="sel-chevron" aria-hidden="true">
            <svg class="select-icon" width="24" height="24">
          <use href="${iconsUrl}#icon-keyboard_arrow_down"></use>
        </svg>
          </span>
        </div>
        <div class="sel-dropdown" role="listbox">
          ${this.options
            .map(
              o => `
            <div class="sel-opt" role="option" data-value="${o.value}">${o.label}</div>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    this._box = this.container.querySelector('.sel-box');
    this._label = this.container.querySelector('.sel-label');
    this._chevron = this.container.querySelector('.sel-chevron');
    this._dropdown = this.container.querySelector('.sel-dropdown');
    this._opts = this.container.querySelectorAll('.sel-opt');
  }

  _bindEvents() {
    this._box.addEventListener('click', e => {
      e.stopPropagation();
      this._isOpen() ? this._close() : this._open();
    });

    this._opts.forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        this._select(opt.dataset.value, opt.textContent);
        this._close();
      });
    });

    // Keyboard navigation
    this._box.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._isOpen() ? this._close() : this._open();
      }
      if (e.key === 'Escape') this._close();
    });

    document.addEventListener('click', () => this._close());
  }

  _isOpen() {
    return this._dropdown.classList.contains('open');
  }

  _open() {
    this._box.classList.add('open');
    this._dropdown.classList.add('open');
    this._chevron.classList.add('rotated');
    this._box.setAttribute('aria-expanded', 'true');
  }

  _close() {
    this._box.classList.remove('open');
    this._dropdown.classList.remove('open');
    this._chevron.classList.remove('rotated');
    this._box.setAttribute('aria-expanded', 'false');
  }

  _select(value, label) {
    this._opts.forEach(o => o.classList.remove('selected'));
    const opt = this.container.querySelector(`[data-value="${value}"]`);
    if (opt) opt.classList.add('selected');

    this._label.textContent = label;
    this._label.classList.remove('sel-placeholder');
    this.selected = { value, label };

    if (this.onChange) this.onChange(value, label);
  }

  // Публічні методи
  getValue() {
    return this.selected;
  }

  setValue(value) {
    const opt = this.options.find(o => o.value === value);
    if (opt) this._select(opt.value, opt.label);
  }

  reset() {
    this._opts.forEach(o => o.classList.remove('selected'));
    this._label.textContent = this.placeholder;
    this._label.classList.add('sel-placeholder');
    this.selected = null;
  }
}
