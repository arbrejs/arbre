/**
 * Return the previous sibling of a node.
 *
 * @param {Node} node Reference node.
 * @return {Node|undefined}
 */
export default function previousSibling(node) {
  const parent = node.parent
  if (null == parent) return

  const index = parent.children.indexOf(node)
  return parent.children[index - 1]
}
