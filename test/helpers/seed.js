import clone from 'clone'

global.Node = class Node {
  constructor(value) {
    this.value = clone(value || '')
    this.parent = null
    this.children = []
  }

  valueOf() {
    return this.value
  }
}

function insert(node, child) {
  node.children.push(child)
  child.parent = node
}

global.seedCreate = Node

global.seed = function seed(value, ...children) {
  return children.reduce((node, value) => {
    let child
    if (Array.isArray(value)) {
      child = seed(value.shift(), ...value)
    }
    else {
      child = new Node(value)
    }

    insert(node, child)

    return node
  }, new Node(value))
}
