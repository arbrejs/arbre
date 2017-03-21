import insertAt from './insert-at'
import index from './index'

/**
 * Insert a node before a sibling node.
 *
 * @param {Node} sibling Sibling node.
 * @param {Node} node Node to be inserted.
 * @return {Node}
 */
export default function insertBefore(sibling, node) {
  const idx = index(sibling)
  return (-1 !== idx ? insertAt(sibling.parent, node, idx) : node)
}
