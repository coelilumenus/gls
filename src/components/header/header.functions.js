export function createInput(index, table, btn = true) {
  const button = btn
    ? `<div class="header__inputs-button" 
        data-button="delete">Delete</div>`
    : '';

  return `<div 
              class="header__inputs-elements" 
              data-row="${index}" 
              data-id="${table}:${index}"
              >
                <input type="text" class="header__inputs-input" data-col="X">
                <input type="text" class="header__inputs-input" data-col="Y">
                ${button}
            </div>`;
}

export function initInputs(array, key, $root, btn = true) {
  const inputsArray = [];
  const table = $root.find(`[data-table="${key}"]`);

  array.forEach(({table, index}, num) => {
    if (!table || !index) {
      table = key; index = num;
    }
    inputsArray.push(createInput(index, table, btn));
  });

  table
    .find('[data-type="input"]')
    .checkOverflow(inputsArray, 4)
    .html(inputsArray.join(' '));
}
