import { create } from './node'

function Tree(value, ...children) {
  return children.reduce((node, value) => {
    let child
    if (Array.isArray(value)) {
      child = Tree(value.shift(), ...value)
    }
    else {
      child = create(value)
    }
    node.children.push(child)
    child.parent = node
    return node
  }, create(value))
}

global.Tree = Tree
