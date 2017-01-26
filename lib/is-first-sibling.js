/**
 * Return `true` if the node is the first sibling.
 *
 * If the node is the root node or the only child, it returns the `true`.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isFirstSibling(node) {
  const parent = node.parent
  if (null == parent) return true
  return (node === parent.children[0])
}
