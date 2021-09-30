import {AbstractComponent} from '@core/AbstractComponent';
import {HeaderTables} from './HeaderTables';
import {createHeader} from './header.template';
import {isAdd, isDelete, isCalculate} from './header.functions';

export class Header extends AbstractComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['mousedown', 'input'],
      ...options
    });
  }

  prepare() {
    this.tables = new HeaderTables(this.$root);
  }

  getTemplate() {
    return createHeader();
  }

  init() {
    super.init();

    this.tables.render();
  }

  onMousedown(e) {
    const data = e.target.dataset;

    if (isAdd(data)) {
      this.tables.addInput(e);
      this.$emit('data:change', this.tables.data);
    } else if (isDelete(data)) {
      this.tables.removeInput(e);
      this.$emit('data:change', this.tables.data);
    } else if (isCalculate(data)) {
      this.tables.calculateValue();
      this.$emit('data:change', this.tables.data);
    }
  }

  onInput(e) {
    this.tables.saveInputValue(e);
    this.$emit('data:change', this.tables.data);
  }
}
