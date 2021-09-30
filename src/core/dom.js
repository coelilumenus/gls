class Dom {
  constructor(selector) {
    this.$element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html;
      return this;
    }

    return this.$element.outerHTML.trim();
  }

  text(text) {
    if (typeof text === 'string') {
      this.$element.textContent = text;
      return this;
    }
    if (this.$element.tagName.toLowerCase() === 'input') {
      return this.$element.value.trim();
    }
    return this.$element.textContent.trim();
  }

  value(text) {
    if (this.$element.tagName.toLowerCase() === 'input') {
      return this.$element.value = text;
    }
  }

  clear() {
    this.html('');
    return this;
  }

  remove() {
    this.$element.remove();
    return this;
  }

  on(eventType, callback) {
    this.$element.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$element.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$element;
    }

    if (Element.prototype.append) {
      this.$element.append(node);
    } else {
      this.$element.appendChild(node);
    }
    // for chaning ability
    return this;
  }

  closest(selector) {
    return $(this.$element.closest(selector));
  }

  get data() {
    return this.$element.dataset;
  }

  findAll(selector) {
    return this.$element.querySelectorAll(selector);
  }

  find(selector) {
    return $(this.$element.querySelector(selector));
  }

  css(styles = {}) {
    Object
      .keys(styles)
      .forEach((key) => {
        this.$element.style[key] = styles[key];
      });
  }

  addClass(className) {
    this.$element.classList.add(className);
    return this;
  }

  containsClass(className) {
    return this.$element.classList.contains(className);
  }

  removeClass(className) {
    this.$element.classList.remove(className);
  }

  setAttribute(name, value) {
    this.$element.setAttribute(name, value);
  }

  removeAttribute(name) {
    this.$element.removeAttribute(name);
  }

  focus() {
    this.$element.focus();
    return this;
  }

  checkOverflow(array, maxLength) {
    const className = '_overfilled';

    if (array.length > maxLength) {
      $(this.$element).addClass(className);
    } else if (this.containsClass(className)) {
      $(this.$element).removeClass(className);
    }
    return $(this.$element);
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        table: parsed[0],
        index: parsed[1]
      };
    }
    return this.data.id;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const element = document.createElement(tagName);

  if (classes) {
    element.classList.add(classes);
  }

  return $(element);
};
