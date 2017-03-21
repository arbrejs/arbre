import at from './at'
import index from './index'

/**
 * Return the next sibling of the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function nextSibling(node) {
  const idx = index(node)
  return at(node.parent, idx + 1)
}
