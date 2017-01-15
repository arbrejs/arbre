import mutate from 'tree-mutate'

function layoutNode(mutation, node, parent, index) {
  if ('remove' === mutation) {
    parent.children.splice(index, 1)
    node.parent = null
  }
  else if ('replace' === mutation) {
    const old = parent.children[index]
    parent.children[index] = node
    node.parent = old.parent
    old.parent = null
  }
}

export default function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode, order)
}
