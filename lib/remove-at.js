import withinBounds from './.internal/within-bounds'

export default function removeAt(parent, index) {
  if (!withinBounds(parent, index)) return null
  const node = parent.children.splice(index, 1)[0]
  node.parent = null
  return node
}
