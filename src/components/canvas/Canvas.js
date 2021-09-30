import {AbstractComponent} from '@core/AbstractComponent';

export class Canvas extends AbstractComponent {
  static className = 'canvas';

  constructor($root, options) {
    super($root, {
      name: 'Canvas',
      ...options
    });
  }

  init() {
    super.init();

    this.$on('data:change', (data) => {
      console.log(data);
    });
  }

  getTemplate() {
    return `
      <canvas id="canvas"></canvas>
    `;
  }
}
