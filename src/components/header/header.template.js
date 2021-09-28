function createTitles(element) {
  return `<div class="header__${element}-titles">
            <div class="header__${element}-title">X</div>
            <div class="header__${element}-title">Y</div>
          </div>`;
}

function createInputElements(btn) {
  return function() {
    const button = btn
      ? '<div class="header__inputs-button">Delete</div>'
      : '';

    return `<div class="header__inputs-elements">
                <input type="text" class="header__inputs-input">
                <input type="text" class="header__inputs-input">
                ${button}
            </div>`;
  };
}

function createInputs(count, btn) {
  const className = count > 4 ? '_overfilled' : '';
  const inputs = new Array(count)
    .fill('')
    .map(createInputElements(btn))
    .join(' ');

  return `<div class="header__inputs ${className}">
            ${inputs}
          </div>`;
}

function createButton(title) {
  return `<div class="header__coords-button">${title}</div>`;
}

function createCoords(rowsCount) {
  const titles = createTitles('coords');
  const inputs = createInputs(rowsCount, true);
  const button = createButton('Add');

  return `<div class="header__coords">
            ${titles}
            ${inputs}
            ${button}
          </div>`;
}

function createCalculate(rowsCount) {
  const titles = createTitles('calculate');
  const inputs = createInputs(rowsCount, false);
  const button = createButton('Calculate');

  return `<div class="header__calculate">
            ${titles}
            ${inputs}
            ${button}
          </div>`;
}

export function createHeader(left, right) {
  const calcRows = left > right ? right : left;

  const coords = {
    left: (rows) => createCoords(rows),
    right: (rows) => createCoords(rows),
    calculte: (rows) => createCalculate(rows)
  };

  return `
    ${coords.left(left)}
    ${coords.right(right)}
    ${coords.calculte(calcRows)}`;
}
