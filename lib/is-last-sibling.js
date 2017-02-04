/**
 * Return `true` if the node is the last sibling.
 *
 * If the node is the root node or the only child, it returns `true`.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isLastSibling(node) {
  const parent = node.parent
  if (null == parent) return true
  return (node === parent.children[parent.children.length - 1])
}
