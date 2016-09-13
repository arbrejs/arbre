export function remove(node) {
  const parent = node.parent
  if (null == parent) return false

  const index = parent.children.indexOf(node)
  parent.children.splice(index, 1)
  node.parent = null

  return node
}
