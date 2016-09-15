(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tree-morph')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tree-morph'], factory) :
  (factory((global.arbreCompute = global.arbreCompute || {}),global.morph));
}(this, (function (exports,morph) { 'use strict';

morph = 'default' in morph ? morph['default'] : morph;

// TODO: use tree-fold

const dataMutator = ancestors => {
  let nextId = 0;

  return (node, context) => {
    const entry = [nextId++, null, node.valueOf()];

    if (0 === context.depth) {
      ancestors.push(entry);
      return ancestors;
    }

    return entry;
  };
};

const layoutMutator = ancestors => (entry, parent) => {
  entry[1] = parent === ancestors ? parent[0][0] : parent[0];
  ancestors.push(entry);
};

function toAncestors(node) {
  const ancestors = [];

  return morph(node, dataMutator(ancestors), layoutMutator(ancestors));
}

exports.toAncestors = toAncestors;

Object.defineProperty(exports, '__esModule', { value: true });

})));