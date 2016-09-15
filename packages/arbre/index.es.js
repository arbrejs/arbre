import merge from 'merge-deep';
import toMethod from 'to-method';

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

export { Node };