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

/**
 * Maps over each node recursively.
 *
 * @param {Node} node Node to be mapped over.
 * @param {Iteratee} iteratee Return the altered node or a new node.
 * @param {String} [order='pre'] [description]
 * @return {Node}
 */
export default function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode, order)
}
