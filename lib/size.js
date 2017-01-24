function computeSize(nodes, size) {
  return nodes.reduce((size, node) => {
    size++
    if (0 !== node.children.length) {
      size = computeSize(node.children, size)
    }
    return size
  }, size)
}

/**
 * Return the size of a tree.
 *
 * @param {Node} node Root node of the tree.
 * @return {Number}
 */
export default function size(node) {
  if (0 === node.children.length) return 1
  return computeSize(node.children, 1)
}
