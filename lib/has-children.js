/**
 * Return `true` if the node has ny child node.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function hasChildren(node) {
  return (0 !== node.children.length)
}
