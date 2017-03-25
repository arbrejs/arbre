import isEqual from './internal/is-equal'

/**
 * Return the path of a node.
 *
 * The **path** is an array of node from the root to the given node.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function path(node) {
  const p = [node]
  while (!isEqual(node.parent, null)) {
    node = node.parent
    p.push(node)
  }
  return p.reverse()
}
