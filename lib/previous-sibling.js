/**
 * Return the previous sibling of the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function previousSibling(node) {
  const parent = node.parent
  if (null == parent) return

  const index = parent.children.indexOf(node)
  return parent.children[index - 1]
}
