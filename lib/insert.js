import remove from './remove'
import isEqual from './internal/is-equal'

/**
 * Insert a node.
 *
 * @param {Node} parent Parent node.
 * @param {Node} node Node to be inserted.
 * @return {Node}
 */
export default function insert(parent, node) {
  if (!isEqual(node, parent)) {
    remove(node)
    parent.children.push(node)
    node.parent = parent
  }
  return node
}
