function createTitles(element) {
  return `<div class="header__${element}-titles">
            <div class="header__${element}-title">X</div>
            <div class="header__${element}-title">Y</div>
          </div>`;
}

function createInputsWrapper() {
  return `<div 
            class="header__inputs"
            data-type="input"
          ></div>`;
}

function createButton(title, className) {
  return `<div 
            class="header__coords-button ${className}"
            data-button="${title.toLowerCase()}"
          >${title}</div>`;
}

function createTable(name, className, title, buttonColor) {
  const titles = createTitles(className);
  const inputsWrapper = createInputsWrapper(name);
  const button = createButton(title, buttonColor);

  return `<div class="header__${className}" data-table="${name}">
            ${titles}
            ${inputsWrapper}
            ${button}
          </div>`;
}

export function createHeader() {
  const left = createTable('left', 'coords', 'Add', 'red');
  const right = createTable('right', 'coords', 'Add', 'green');
  const calculate = createTable('calc', 'calculate', 'Calculate', 'blue');

  return `
    ${left}
    ${right}
    ${calculate}`;
}
