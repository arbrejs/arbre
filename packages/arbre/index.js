(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('arbre-node'), require('arbre-mixin')) :
	typeof define === 'function' && define.amd ? define(['arbre-node', 'arbre-mixin'], factory) :
	(global.arbre = factory(global.Node,global.mixin));
}(this, (function (Node,mixin) { 'use strict';

Node = 'default' in Node ? Node['default'] : Node;
mixin = 'default' in mixin ? mixin['default'] : mixin;

mixin(Node, 'arbre-access', 'arbre-convert', 'arbre-manipulate', 'arbre-traverse');

return Node;

})));