/**
 * Return the depth of a node.
 *
 * The `depth` is the number of edges from the node to the root.
 *
 * @param {Node} node Node.
 * @return {Number}
 * @see level
 */
export default function depth(node) {
  let d = 0
  while (null != node.parent) {
    node = node.parent
    d++
  }
  return d
}
