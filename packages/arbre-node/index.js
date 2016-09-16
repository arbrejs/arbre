(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('clone')) :
  typeof define === 'function' && define.amd ? define(['clone'], factory) :
  (global.arbreNode = factory(global.clone));
}(this, (function (clone) { 'use strict';

clone = 'default' in clone ? clone['default'] : clone;

class Node {
  constructor(value) {
    this.value = clone(value);
    this.parent = null;
    this.children = [];
  }
}

return Node;

})));