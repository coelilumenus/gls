import {AbstractComponent} from '@core/AbstractComponent';
import {CanvasLogic} from './CanvasLogic';

export class Canvas extends AbstractComponent {
  static className = 'canvas';

  constructor($root, options) {
    super($root, {
      name: 'Canvas',
      ...options
    });
  }

  prepare() {
    const colors = ['#ff0000', '#00ff00', '#61dafb'];
    this.canvas = new CanvasLogic(1200, 600, colors);
  }

  init() {
    super.init();

    const $canvas = document.querySelector('#canvas');

    this.$on('data:change', (data) => {
      this.canvas.init(data, $canvas);
    });
  }

  getTemplate() {
    return `
      <canvas id="canvas"></canvas>
    `;
  }
}
