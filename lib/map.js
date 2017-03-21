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
 * Map all the nodes of a tree.
 *
 * @param {Node} root Root node.
 * @param {Iteratee} iteratee Return the altered node or a new node.
 * @param {String} [order='pre'] [description]
 * @return {Node}
 */
export default function map(root, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return root
  return mutate(root, iteratee, layoutMutator, order)
}
