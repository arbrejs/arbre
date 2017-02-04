/**
 * Return `true` if the node is a root.
 *
 * a **root** is a node without parent.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isRoot(node) {
  return (null === node.parent)
}
