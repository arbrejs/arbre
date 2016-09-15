import merge from 'merge-deep'
import toMethod from 'to-method'

export class Node {
  constructor(props) {
    merge(this, props)
    this.parent = null
    this.children = []
  }
}

function mixin(...modules) {
  // require modules
  modules.map(moduleName => require(`arbre-${moduleName}`))
  // mixin each module into `Node` class
  .forEach(module => toMethod(Node, module))
}

mixin('access', 'convert', 'manipulate', 'traverse')
