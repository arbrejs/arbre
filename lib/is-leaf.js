/**
 * Check if a node is a leaf: it has no children.
 *
 * @param {Node} node Node to check.
 * @return {Boolean}
 */
export default function isLeaf(node) {
  return (0 === node.children.length)
}
