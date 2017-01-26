/**
 * Return the path of the node.
 *
 * The **path** is an array of node from the root to the given node.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function path(node) {
  const p = [node]
  while (null != node.parent) {
    node = node.parent
    p.unshift(node)
  }
  return p
}
