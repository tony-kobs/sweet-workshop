import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
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
  }

  _render() {
    const select = document.createElement('select');
    this.container.appendChild(select);

    this._choices = new Choices(select, {
      choices: this.options.map(o => ({
        value: o.value,
        label: o.label,
        selected: o.value === 'all',
      })),
      placeholder: true,
      placeholderValue: this.placeholder,
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: ['choices'],
        containerInner: ['choices__inner'],
        list: ['choices__list'],
        listItems: ['choices__list--multiple'],
        listSingle: ['choices__list--single'],
        listDropdown: ['choices__list--dropdown'],
        item: ['choices__item'],
        itemSelectable: ['choices__item--selectable'],
        selectedState: ['is-selected'],
        placeholder: ['choices__placeholder'],
      },
    });

    const inner = this.container.querySelector('.choices__inner');

    inner.insertAdjacentHTML(
      'beforeend',
      `<span class="sel-chevron" aria-hidden="true">
        <svg class="select-icon" width="24" height="24">
          <use href="${iconsUrl}#icon-keyboard_arrow_down"></use>
        </svg>
      </span>`
    );

    const choicesContainer = this.container.querySelector('.choices');

    if (this._choices.getValue(true) !== 'all') {
      choicesContainer.classList.add('selected-value');
    }

    select.addEventListener('change', () => {
      const val = this._choices.getValue(true);

      const label =
        this.options.find(o => o.value === val)?.label ?? '';

      this.selected = { value: val, label };

      if (val === 'all') {
        choicesContainer.classList.remove('selected-value');
      } else {
        choicesContainer.classList.add('selected-value');
      }

      if (this.onChange) {
        this.onChange(val, label);
      }
    });
  }

  getValue() {
    return this.selected;
  }

  setValue(value) {
    this._choices.setChoiceByValue(value);

    const label =
      this.options.find(o => o.value === value)?.label ?? '';

    this.selected = { value, label };

    const choicesContainer = this.container.querySelector('.choices');

    if (value === 'all') {
      choicesContainer.classList.remove('selected-value');
    } else {
      choicesContainer.classList.add('selected-value');
    }
  }

  reset() {
    this._choices.setChoiceByValue('');
    this.selected = null;

    const choicesContainer = this.container.querySelector('.choices');

    choicesContainer.classList.remove('selected-value');
  }
}