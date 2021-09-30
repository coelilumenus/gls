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
    this.canvas = new CanvasLogic();
  }

  init() {
    super.init();

    const $canvas = this.$root.find('#canvas');

    this.$on('data:change', (data) => {
      this.canvas.render($canvas, data);
    });
  }

  getTemplate() {
    return `
      <canvas id="canvas"></canvas>
    `;
  }
}
