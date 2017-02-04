/**
 * Return the next sibling of the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function nextSibling(node) {
  const parent = node.parent
  if (null == parent) return

  const index = parent.children.indexOf(node)
  return parent.children[index + 1]
}
