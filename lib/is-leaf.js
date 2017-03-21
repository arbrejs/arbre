/**
 * Return `true` if a node is a leaf.
 *
 * A **leaf** is a node that does not have any children.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isLeaf(node) {
  return (0 === node.children.length)
}
