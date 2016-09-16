import toMethod from 'to-method';

function mixin(nodeClass) {
  for (var _len = arguments.length, modules = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    modules[_key - 1] = arguments[_key];
  }

  // mixin each module into `nodeClass` prototype
  modules.forEach(module => toMethod(nodeClass, module));
}

export default mixin;