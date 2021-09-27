import {AbstractComponent} from '@core/AbstractComponent';

export class Canvas extends AbstractComponent {
  static className = 'canvas';

  constructor($root, options) {
    super($root, {
      name: 'Canvas',
      ...options
    });
  }

  getTemplate() {
    return `
      <canvas id="canvas"></canvas>
    `;
  }
}
