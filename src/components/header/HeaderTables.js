import {initInputs} from './header.inputs';
import {reIndex, getParsedId} from './header.functions';
import {$} from '@core/dom';

export class HeaderTables {
  constructor($root) {
    this.$root = $root;

    this.inputs = {
      left: [{table: 'left', index: 0, value: {}}],
      right: [{table: 'right', index: 0, value: {}}],
      calc: []
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

  removeInput(e) {
    const {table, index} = getParsedId(e.target);
    const newArr = this.inputs[table].filter((item) => item.index !== +index);
    reIndex(newArr);
    this.inputs[table] = newArr;

    this.render();
  }

  saveInputValue(e) {
    const {table, index} = getParsedId(e.target);

    const value = $(e.target).text();
    const col = $(e.target).data.col;

    this.inputs[table][index].value[col] = value;
  }

  clear() {
    this.$root.findAll('[data-type="input"]')
      .forEach((item) => $(item).clear());
  }

  get minRows() {
    return Math.min(
      this.inputs.left.length,
      this.inputs.right.length
    );
  }

  render() {
    this.clear();
    this.inputs.calc = new Array(this.minRows).fill('');
    Object.keys(this.inputs)
      .forEach((key) => {
        const btn = key !== 'calc';
        initInputs(this.inputs[key], key, this.$root, btn);
      });
  }
}
