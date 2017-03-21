/**
 * Return `true` if a node is a root node.
 *
 * a **root** is a node without parent.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isRoot(node) {
  return (null === node.parent)
}
