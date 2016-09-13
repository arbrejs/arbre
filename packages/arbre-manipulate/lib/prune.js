export function prune(node) {
  const children = node.children
  const ret = children.length

  while (0 !== children.length) {
    const child = children.shift()
    child.parent = null
  }

  return ret
}
