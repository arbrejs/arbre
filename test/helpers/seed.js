import clone from 'clone'

function Node(value) {
  const nodeValue = clone(value || '')
  delete nodeValue.children
  return {
    value: nodeValue,
    parent: null,
    children: []
  }
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
