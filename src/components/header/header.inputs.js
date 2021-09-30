import {isObjValue} from './header.functions';

export function initInputs(array, key, $root, isCalc) {
  const inputsArray = [];
  const table = $root.find(`[data-table="${key}"]`);

  array.forEach((item, num) => {
    const {index, table, value} = fixData(item, key, num);
    inputsArray.push(createInput(index, table, isCalc, value));
  });

  table
    .find('[data-type="input"]')
    .checkOverflow(inputsArray, 4)
    .html(inputsArray.join(' '));
}

export function createInput(index, table, isCalc, value) {
  const {X, Y} = value;

  const isReadonly = isCalc
    ? ''
    : 'readonly';

  const button = isCalc
    ? `<div class="header__inputs-button" data-button="delete">Delete</div>`
    : '';

  return `<div 
            class="header__inputs-elements" 
            data-row="${index}" 
            data-id="${table}:${index}"
          >
          <input 
            type="text" 
            class="header__inputs-input" 
            data-col="X"
            value="${X}"
            ${isReadonly}
          >
          <input 
            type="text" 
            class="header__inputs-input" 
            data-col="Y"
            value="${Y}"
            ${isReadonly}
          >
          ${button}</div>`;
}

function fixData(item, key, num) {
  let {index, table, value} = item;

  if (!table) {
    table = key;
  }

  if (!value) {
    value = {};
  }

  if (!index) {
    index = num;
  }

  if (!isObjValue(value, 'X')) {
    value.X = '';
  }

  if (!isObjValue(value, 'Y')) {
    value.Y = '';
  }

  return {index, table, value};
}
