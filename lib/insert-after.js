import insertAt from './insert-at'
import index from './index'
import isValidIndex from './internal/is-valid-index'

/**
 * Insert a node after a sibling node.
 *
 * @param {Node} sibling Sibling node.
 * @param {Node} node Node to be inserted.
 * @return {Node}
 */
export default function insertAfter(sibling, node) {
  const idx = index(sibling)
  return (isValidIndex(idx) ? insertAt(sibling.parent, node, idx + 1) : node)
}
