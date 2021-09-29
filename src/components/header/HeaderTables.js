import {initInputs} from './header.functions';
import {$} from '@core/dom';

export class HeaderTables {
  constructor($root) {
    this.$root = $root;
    this.inputs = {
      left: [{table: 'left', index: 0}],
      right: [{table: 'right', index: 0}]
    };
  }

  addInput(e) {
    const $table = $(e.target).closest('[data-table]');
    const tableName = $table.data.table;
    const tableLength = this.inputs[tableName].length;
    const lastIndex = tableLength - 1 >= 0 ? tableLength : 0;
    this.inputs[tableName].push({table: tableName, index: lastIndex});

    this.render();
  }

  removeInput(e) {
    const $input = $(e.target).closest('[data-id]');
    const {table} = $input.id(true);
    this.inputs[table].pop();

    this.render();
  }

  clear() {
    this.$root.findAll('[data-type="input"]')
      .forEach((item) => $(item).clear());
  }

  render() {
    this.clear();

    Object.keys(this.inputs)
      .forEach((key) => {
        initInputs(this.inputs[key], key, this.$root);
      });

    const calcCount = Math.min(
      this.inputs.left.length,
      this.inputs.right.length
    );

    const calcArray = new Array(calcCount).fill('');
    initInputs(calcArray, 'calc', this.$root, false);
  }
}
