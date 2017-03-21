import at from './at'
import index from './index'

/**
 * Return the previous sibling of the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function previousSibling(node) {
  const idx = index(node)
  return at(node.parent, idx - 1)
}
