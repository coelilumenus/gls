import {$} from '@core/dom';

export function reIndex(arr) {
  return arr.forEach((item, i) => {
    item.index = i;
  });
}

export function getParsedId(element) {
  const $input = $(element).closest('[data-id]');
  const {table, index} = $input.id(true);
  return {table, index};
}

export function isAdd(data) {
  return (data.button === 'add');
}

export function isDelete(data) {
  return (data.button === 'delete');
}

export function isCalculate(data) {
  return (data.button === 'calculate');
}

export function isObjValue(element, value) {
  if (typeof element === 'object') {
    return Object.prototype.hasOwnProperty.call(element, value);
  } else {
    return false;
  }
}
