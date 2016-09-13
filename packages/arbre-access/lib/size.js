const sizeReduce = (nodes, size) => {
  return nodes.reduce((size, node) => {
    size++
    if (0 !== node.children.length) {
      size = sizeReduce(node.children, size)
    }
    return size
  }, size)
}

export function size(node) {
  if (0 === node.children.length) return 1
  return sizeReduce(node.children, 1)
}
