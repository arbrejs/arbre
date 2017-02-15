import mutate from 'tree-mutate'

function layoutMutator(operation, node, parent, index) {
  if ('remove' === operation) {
    parent.children.splice(index, 1)
    node.parent = null
  }
  else if ('replace' === operation) {
    const old = parent.children[index]
    parent.children[index] = node
    node.parent = old.parent
    old.parent = null
  }
}

/**
 * Map a node and its descendants.
 *
 * @param {Node} node Node.
 * @param {Iteratee} iteratee Return the altered node or a new node.
 * @param {String} [order='pre'] [description]
 * @return {Node}
 */
export default function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutMutator, order)
}
