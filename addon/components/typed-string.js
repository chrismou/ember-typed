import Component from '@ember/component';
import layout from '../templates/components/typed-string';

export default Component.extend({
  layout,
  tagName: 'span',
  strings: ['first sentence', 'last sentence'],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 0,
  backDelay: 500,
  loop: false,
  loopCount: false,
  showCursor: true,
  cursorChar: '|',
  attr: null,
  contentType: 'html',
  callback: () => {},
  preStringTyped: () => {},
  onStringTyped: () => {},
  resetCallback: () => {},

  didInsertElement() {
    const { strings, stringsElement, typeSpeed, startDelay, backSpeed, backDelay, loop, loopCount, showCursor, cursorChar, attr, contentType, callback, preStringTyped, onStringTyped, resetCallback } = this.getProperties('strings', 'stringsElement', 'typeSpeed', 'startDelay', 'backSpeed', 'backDelay', 'loop', 'loopCount', 'showCursor', 'cursorChar', 'attr', 'contentType', 'callback', 'preStringTyped', 'onStringTyped', 'resetCallback');
    let typed = new Typed('#' + this.elementId, {
      strings,
      stringsElement,
      typeSpeed,
      startDelay,
      backSpeed,
      backDelay,
      loop,
      loopCount,
      showCursor,
      cursorChar,
      attr,
      contentType,
      callback,
      preStringTyped,
      onStringTyped,
      resetCallback
    });
  }
});
