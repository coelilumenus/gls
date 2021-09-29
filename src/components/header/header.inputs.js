import {isObjValue} from './header.functions';

export function initInputs(array, key, $root, btn) {
  const inputsArray = [];
  const table = $root.find(`[data-table="${key}"]`);

  array.forEach((item) => {
    let {index, table, value} = item;

    if (!table || !value) {
      table = key; value = {};
    }

    if (!isObjValue(value, 'X')) {
      value.X = '';
    }

    if (!isObjValue(value, 'Y')) {
      value.Y = '';
    }

    inputsArray.push(createInput(index, table, btn, value));
  });

  table
    .find('[data-type="input"]')
    .checkOverflow(inputsArray, 4)
    .html(inputsArray.join(' '));
}

export function createInput(index, table, btn, value) {
  const {X, Y} = value;

  const button = btn
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
          >
          <input 
            type="text" 
            class="header__inputs-input" 
            data-col="Y"
            value="${Y}"
          >
          ${button}</div>`;
}
