(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('arbre-node'), require('arbre-mixin'), require('arbre-access'), require('arbre-manipulate'), require('arbre-traverse'), require('arbre-convert')) :
  typeof define === 'function' && define.amd ? define(['arbre-node', 'arbre-mixin', 'arbre-access', 'arbre-manipulate', 'arbre-traverse', 'arbre-convert'], factory) :
  (global.arbre = factory(global.Node,global.mixin,global.access,global.manipulate,global.traverse,global.arbreConvert));
}(this, (function (Node,mixin,access,manipulate,traverse,arbreConvert) { 'use strict';

Node = 'default' in Node ? Node['default'] : Node;
mixin = 'default' in mixin ? mixin['default'] : mixin;

mixin(Node, access, manipulate, traverse, { toArray: arbreConvert.toArray, toJSON: arbreConvert.toJSON, toObject: arbreConvert.toObject });

// manual plumbing for functions using rest parameters
// TODO: create associated test
Node.prototype.at = function () {
  for (var _len = arguments.length, indices = Array(_len), _key = 0; _key < _len; _key++) {
    indices[_key] = arguments[_key];
  }

  indices.unshift(this);
  return access.at.apply(this, indices);
};

Object.assign(Node, {
  fromArray: arbreConvert.fromArray.bind(null, Node),
  fromJSON: arbreConvert.fromJSON.bind(null, Node),
  fromObject: arbreConvert.fromObject.bind(null, Node)
});

return Node;

})));