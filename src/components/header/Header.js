import {AbstractComponent} from '@core/AbstractComponent';
import {createHeader} from './header.template';

export class Header extends AbstractComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['mousedown'],
      ...options
    });
  }

  getTemplate() {
    return createHeader(1, 1);
  }

  onMousedown(e) {
    const data = e.target.dataset;

    if (data.button === 'add') {
      console.log(this.$root);
    }
  }
}
