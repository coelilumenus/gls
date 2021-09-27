import {$} from '@core/dom';
import {Emitter} from '@core/Emitter';

export class Main {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
  }

  getRoot() {
    const $root = $.create('div', 'app');

    const componentOptions = {
      emitter: this.emitter
    };

    this.components = this.components.map((Component) => {
      const $element = $.create('div', Component.className);
      const component = new Component($element, componentOptions);
      $element.html(component.getTemplate());
      $root.append($element);
      return component;
    });

    return $root;
  }

  render() {
    this.$element.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }

  destroy() {
    this.components.forEach((componnent) => componnent.destroy());
  }
}
