import {initInputs} from './header.inputs';
import {reIndex, getParsedId} from './header.functions';
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

  calculateValue() {
    const table = this.$root.find('[data-table="calc"]');

    table.findAll('[data-id]')
      .forEach((item, i) => {
        const {value} = this.getValueCount(i);
        const {X, Y} = value;

        $(item).find('[data-col="X"]').value(X);
        $(item).find('[data-col="Y"]').value(Y);
      });
  }

  clear() {
    this.$root.findAll('[data-type="input"]')
      .forEach((item) => $(item).clear());
  }

  getValueCount(i) {
    const valueLeftX = this.inputs.left[i].value.X;
    const valueRightX = this.inputs.right[i].value.X;
    let X = (+valueLeftX + +valueRightX) / 2;

    const valueLeftY = this.inputs.left[i].value.Y;
    const valueRightY = this.inputs.right[i].value.Y;
    let Y = (+valueLeftY + +valueRightY) / 2;

    if (Number.isNaN(X)) {
      X = 0;
    }

    if (Number.isNaN(Y)) {
      Y = 0;
    }

    return {value: {X, Y}};
  }

  get minRows() {
    return Math.min(
      this.inputs.left.length,
      this.inputs.right.length
    );
  }

  get data() {
    const left = {rows: [], table: 'left'};
    const right = {rows: [], table: 'right'};
    const result = {rows: [], table: 'result'};

    this.inputs.left.forEach((item) => {
      const {X, Y} = item.value;
      left.rows.push([X, Y]);
    });

    this.inputs.right.forEach((item) => {
      const {X, Y} = item.value;
      right.rows.push([X, Y]);
    });

    for (let i = 0; i < this.minRows; i++) {
      const {value} = this.getValueCount(i);
      const {X, Y} = value;
      result.rows.push([X, Y]);
    }

    return [left, right, result];
  }

  render() {
    this.clear();
    this.inputs.calc = new Array(this.minRows).fill('');


    Object.keys(this.inputs)
      .forEach((key) => {
        const isCalc = key !== 'calc';
        initInputs(this.inputs[key], key, this.$root, isCalc);
      });

    this.calculateValue();
  }
}
