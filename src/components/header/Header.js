import {AbstractComponent} from '@core/AbstractComponent';
import {createHeader} from './header.template';

export class Header extends AbstractComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });

    this.coords = {};
  }

  getTemplate() {
    return createHeader(1, 1);
  }
}
