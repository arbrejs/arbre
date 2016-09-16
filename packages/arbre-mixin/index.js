(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('to-method')) :
  typeof define === 'function' && define.amd ? define(['to-method'], factory) :
  (global.arbreMixin = factory(global.toMethod));
}(this, (function (toMethod) { 'use strict';

toMethod = 'default' in toMethod ? toMethod['default'] : toMethod;

function mixin(nodeClass) {
  for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    modules[_key - 1] = arguments[_key];
  }

  // require modules if needed
  modules.map(moduleName => {
    if ('string' === typeof moduleName) {
      return require(moduleName);
    }
    return moduleName;
  })
  // mixin each module into `nodeClass` prototype
  .forEach(module => toMethod(nodeClass, module));
}

return mixin;

})));