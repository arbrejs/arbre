import merge from 'merge-deep'
import * as access from 'arbre-access'

export class Node {
  constructor(props) {
    merge(this, props)
    this.parent = null
    this.children = []
  }
}

Object.assign(Node.prototype, access)
