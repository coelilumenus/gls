import {createInputElement} from './header.functions';
import {$} from '@core/dom';

export class HeaderTables {
  constructor($root) {
    this.$root = $root;
    this.inputs = {};
  }

  addNewInput(e) {
    const $element = $(e.target).closest('[data-coords]');
    const $inputs = $element.find('[data-type="input"]');
    console.log($inputs);
    const $newInput = createInputElement();
    console.log($newInput);
  }
}
