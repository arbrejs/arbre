export function at(node, ...indices) {
  for (let i = 0, len = indices.length; i < len; i++) {
    node = node.children[indices[i]]
  }
  return node
}
