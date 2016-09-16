import toMethod from 'to-method';

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

export default mixin;