import {AbstractComponent} from '@core/AbstractComponent';
import {createHeader} from './header.template';
import {HeaderTables} from './HeaderTables';

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

  onMousedown(e) {
    const data = e.target.dataset;

    if (data.button === 'add') {
      this.tables.addInput(e);
    } else if (data.button === 'delete') {
      this.tables.removeInput(e);
    }
  }

  onInput(e) {
    this.tables.getInputValue(e);
  }
}
