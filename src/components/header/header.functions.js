export function createInputElement(table, index, btn) {
  const button = btn
    ? '<div class="header__inputs-button" data-button="delete">Delete</div>'
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
