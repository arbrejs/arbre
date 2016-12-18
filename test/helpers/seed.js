import clone from 'clone'

function Node(value) {
  return {
    value: clone(value || ''),
    parent: null,
    children: []
  }
}

function insert(node, child) {
  node.children.push(child)
  child.parent = node
}

global.Node = Node

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
