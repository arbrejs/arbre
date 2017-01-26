export default function isOnlyChild(node) {
  const parent = node.parent
  if (null == parent) return true
  return (1 === parent.children.length)
}
