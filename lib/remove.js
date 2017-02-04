/**
 * Remove the node from its parent.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function remove(node) {
  const parent = node.parent
  if (null == parent) return
  const index = parent.children.indexOf(node)
  parent.children.splice(index, 1)
  node.parent = null
  return node
}
