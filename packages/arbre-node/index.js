(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('merge-deep')) :
  typeof define === 'function' && define.amd ? define(['merge-deep'], factory) :
  (global.arbreNode = factory(global.merge));
}(this, (function (merge) { 'use strict';

merge = 'default' in merge ? merge['default'] : merge;

class Node {
  constructor(props) {
    merge(this, props);
    this.parent = null;
    this.children = [];
  }
}

return Node;

})));