import {initInputs} from './header.functions';
import {$} from '@core/dom';

export class HeaderTables {
  constructor($root) {
    this.$root = $root;
    this.inputs = {
      left: [{table: 'left', index: 0, value: {}}],
      right: [{table: 'right', index: 0, value: {}}]
    };
  }

  addInput(e) {
    const $table = $(e.target).closest('[data-table]');
    const tableName = $table.data.table;
    const tableLength = this.inputs[tableName].length;
    const lastIndex = tableLength - 1 >= 0 ? tableLength : 0;

    this.inputs[tableName]
      .push({table: tableName, index: lastIndex, value: {}});

    this.render();
  }

  getInputValue(e) {
    const $input = $(e.target).closest('[data-id]');
    const {table, index} = $input.id(true);

    const value = $(e.target).text();
    const col = $(e.target).data.col;

    this.inputs[table][index].value[col] = value;
  }

  removeInput(e) {
    const $input = $(e.target).closest('[data-id]');
    const {table, index} = $input.id(true);
    const newArr = this.inputs[table].filter((item) => item.index !== +index);

    reIndex(newArr);
    this.inputs[table] = newArr;

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

function reIndex(arr) {
  return arr.forEach((item, i) => {
    item.index = i;
  });
}
