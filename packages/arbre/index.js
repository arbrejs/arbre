(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('arbre-node'), require('arbre-mixin'), require('arbre-access'), require('arbre-convert'), require('arbre-manipulate'), require('arbre-traverse')) :
	typeof define === 'function' && define.amd ? define(['arbre-node', 'arbre-mixin', 'arbre-access', 'arbre-convert', 'arbre-manipulate', 'arbre-traverse'], factory) :
	(global.arbre = factory(global.Node,global.mixin,global.access,global.convert,global.manipulate,global.traverse));
}(this, (function (Node,mixin,access,convert,manipulate,traverse) { 'use strict';

Node = 'default' in Node ? Node['default'] : Node;
mixin = 'default' in mixin ? mixin['default'] : mixin;

mixin(Node, access, convert, manipulate, traverse);

return Node;

})));