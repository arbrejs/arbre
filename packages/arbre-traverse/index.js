(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tree-mutate'), require('tree-crawl')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tree-mutate', 'tree-crawl'], factory) :
  (factory((global.arbreTraverse = global.arbreTraverse || {}),global.mutate,global.crawl));
}(this, (function (exports,mutate,crawl) { 'use strict';

mutate = 'default' in mutate ? mutate['default'] : mutate;
crawl = 'default' in crawl ? crawl['default'] : crawl;

function layoutNode(mutation, node, parent, index) {
  if ('remove' === mutation) {
    parent.children.splice(index, 1)
    node.parent = null
  }
  else if ('replace' === mutation) {
    const old = parent.children[index]
    parent.children[index] = node
    node.parent = old.parent
    old.parent = null
  }
}

function map(node, iteratee) {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode)
}

function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}

function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
}

function find(node, predicate) {
  let found

  walk(node, (node, context) => {
    if (0 === context.depth) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })

  return found
}

function mapValues(node, iteratee) {
  return map(node, (node, context) => {
    const ret = iteratee(node.value)
    if (null === ret) return null
    if (undefined !== ret) {
      node.value = ret
    }
  })
}

exports.filter = filter;
exports.find = find;
exports.mapValues = mapValues;
exports.map = map;
exports.layoutNode = layoutNode;
exports.walk = walk;

Object.defineProperty(exports, '__esModule', { value: true });

})));