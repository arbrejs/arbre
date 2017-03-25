import cloneNode from '../../lib/internal/clone-node'

function Node(value) {
  return cloneNode({ value })
}

global.Tree = function Tree(value, ...children) {
  return children.reduce((node, value) => {
    let child
    if (Array.isArray(value)) {
      child = Tree(value.shift(), ...value)
    }
    else {
      child = Node(value)
    }
    node.children.push(child)
    child.parent = node
    return node
  }, Node(value))
}
