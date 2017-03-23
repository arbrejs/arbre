/**
 * Return the depth of the node.
 *
 * The **depth** is the number of edges from a node to the root.
 *
 * @param {Node} node Node.
 * @return {Number}
 * @see level
 */
export default function depth(node) {
  let d = 0
  while (node.parent) {
    node = node.parent
    d++
  }
  return d
}
