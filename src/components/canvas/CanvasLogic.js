import {calcConsts, calcLimits} from './canvas.functions';
import {drawLine} from './canvas.draw';

export class CanvasLogic {
  constructor() {
    this.context = null;
    this.WIDTH = 1200;
    this.HEIGHT = 600;
    this.DPI_WIDTH = this.WIDTH * 2;
    this.DPI_HEIGHT = this.HEIGHT * 2;
    this.indent = 0.5;
  }

  render($element, data) {
    this.context = $element.getContext('2d');
    this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.custom($element, this.context);

    const limits = calcLimits(data);
    const consts = calcConsts(limits, this.indent, this.WIDTH, this.HEIGHT);
    console.log(consts);
  }

  custom($canvas, ctx) {
    $canvas.css({
      width: this.WIDTH + 'px',
      height: this.HEIGHT + 'px'
    });

    ctx.width = this.DPI_WIDTH;
    ctx.height = this.DPI_HEIGHT;
  }
}
