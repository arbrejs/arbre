import index from './index'
import remove from './remove'

/**
 * Replace a node by another.
 *
 * @param {Node} old Old node.
 * @param {Node} node Replacement node.
 * @return {Node}
 */
export default function replace(old, node) {
  const idx = index(old)
  if (-1 !== idx) {
    remove(node)
    old.parent.children[idx] = node
    node.parent = old.parent
    old.parent = null
  }
  return old
}
