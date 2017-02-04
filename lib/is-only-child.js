/**
 * Return `true` if the node is the only child of its parent.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isOnlyChild(node) {
  const parent = node.parent
  if (null == parent) return true
  return (1 === parent.children.length)
}
