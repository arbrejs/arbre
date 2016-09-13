export function isNode(node) {
  return (
    Array.isArray(node.children) &&
    undefined !== node.parent
  )
}
