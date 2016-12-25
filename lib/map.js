import mutate from 'tree-mutate'

/**
 * [layoutNode description]
 * @param {[type]} mutation [description]
 * @param {[type]} node [description]
 * @param {[type]} parent [description]
 * @param {[type]} index [description]
 * @private
 */
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
 * [map description]
 * @param {[type]} node [description]
 * @param {[type]} iteratee [description]
 * @param {[type]} order [description]
 * @return {[type]} [description]
 */
export default function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode, order)
}
