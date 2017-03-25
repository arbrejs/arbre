import index from './index'
import remove from './remove'
import isValidIndex from './internal/is-valid-index'

/**
 * Replace a node by another.
 *
 * @param {Node} old Old node.
 * @param {Node} node Replacement node.
 * @return {Node}
 */
export default function replace(old, node) {
  const idx = index(old)
  if (isValidIndex(idx)) {
    remove(node)
    old.parent.children[idx] = node
    node.parent = old.parent
    old.parent = null
  }
  return old
}
