(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('merge-deep'), require('to-method')) :
  typeof define === 'function' && define.amd ? define(['exports', 'merge-deep', 'to-method'], factory) :
  (factory((global.arbre = global.arbre || {}),global.merge,global.toMethod));
}(this, (function (exports,merge,toMethod) { 'use strict';

merge = 'default' in merge ? merge['default'] : merge;
toMethod = 'default' in toMethod ? toMethod['default'] : toMethod;

class Node {
  constructor(props) {
    merge(this, props);
    this.parent = null;
    this.children = [];
  }
}

function mixin() {
  for (var _len = arguments.length, modules = Array(_len), _key = 0; _key < _len; _key++) {
    modules[_key] = arguments[_key];
  }

  // require modules
  modules.map(moduleName => require(`arbre-${ moduleName }`))
  // mixin each module into `Node` class
  .forEach(module => toMethod(Node, module));
}

mixin('access', 'convert', 'manipulate', 'traverse');

exports.Node = Node;

Object.defineProperty(exports, '__esModule', { value: true });

})));