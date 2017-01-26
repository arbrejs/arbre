/**
 * Check if a node is a root: it has no parent.
 *
 * @param {Node} node Node to check.
 * @return {Boolean}
 */
export default function isRoot(node) {
  return (null === node.parent)
}
