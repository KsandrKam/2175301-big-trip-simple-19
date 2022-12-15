import {createElement} from '../render.js';

function createFormEditTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class LoadingView {
  getTemplate() {
    return createFormEditTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
