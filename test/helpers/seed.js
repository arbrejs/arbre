import clone from 'clone'

class Node {
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

const seedCreate = global.seedCreate = function(value) {
  return new Node(value)
}

global.seed = function seed(value, ...children) {
  return children.reduce((node, value) => {
    let child
    if (Array.isArray(value)) {
      child = seed(value.shift(), ...value)
    }
    else {
      child = seedCreate(value)
    }

    insert(node, child)

    return node
  }, seedCreate(value))
}
