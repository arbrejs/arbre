/**
 * Return the breadth at the node's level.
 *
 * The **breadth** is the number of siblings to this node + 1.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function breadth(node) {
  const parent = node.parent
  if (null == parent) return 1
  return (parent.children.length)
}
