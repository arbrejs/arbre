import index from './index'
import removeAt from './remove-at'
import isValidIndex from './.internal/is-valid-index'

/**
 * Remove a node from its parent.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function remove(node) {
  const idx = index(node)
  if (isValidIndex(idx)) {
    removeAt(node.parent, idx)
  }
  return node
}
