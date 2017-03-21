export default function removeAt(parent, index) {
  const node = parent.children.splice(index, 1)[0]
  node.parent = null
  return node
}
