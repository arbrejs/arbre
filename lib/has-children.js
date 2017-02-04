/**
 * Return `true` if the node has at least one child.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function hasChildren(node) {
  return (0 !== node.children.length)
}
