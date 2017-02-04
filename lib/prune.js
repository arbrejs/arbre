/**
 * Prune the node.
 *
 * It remove all the node's children making it a leaf node.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function prune(node) {
  const children = node.children
  const ret = children.length
  while (0 !== children.length) {
    const child = children.shift()
    child.parent = null
  }
  return ret
}
