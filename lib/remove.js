import index from './index'
import removeAt from './remove-at'

/**
 * Remove a node from its parent.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function remove(node) {
  const idx = index(node)
  if (-1 !== idx) {
    removeAt(node.parent, idx)
  }
  return node
}
