import {createInput} from './header.functions';

function createTitles(element) {
  return `<div class="header__${element}-titles">
            <div class="header__${element}-title">X</div>
            <div class="header__${element}-title">Y</div>
          </div>`;
}

function createInputsWrapper(table) {
  const btn = table !== 'calc';
  const input = createInput(0, table, btn);

  return `<div 
            class="header__inputs"
            data-type="input"
          >${input}</div>`;
}

function createButton(title) {
  return `<div 
            class="header__coords-button"
            data-button="${title.toLowerCase()}"
          >${title}</div>`;
}

function createTable(name, className, title) {
  const titles = createTitles(className);
  const inputsWrapper = createInputsWrapper(name);
  const button = createButton(title);

  return `<div class="header__${className}" data-table="${name}">
            ${titles}
            ${inputsWrapper}
            ${button}
          </div>`;
}

export function createHeader() {
  const left = createTable('left', 'coords', 'Add');
  const right = createTable('right', 'coords', 'Add');
  const calculate = createTable('calc', 'calculate', 'Calculate');

  return `
    ${left}
    ${right}
    ${calculate}`;
}
