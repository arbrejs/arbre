/**
 * Prune a parent node.
 *
 * It removes all node's children making it a leaf node.
 *
 * @param {Node} parent Parent node.
 * @return {Number}
 */
export default function prune(parent) {
  const children = parent.children
  const ret = children.length
  while (0 !== children.length) {
    const child = children.shift()
    child.parent = null
  }
  return ret
}
