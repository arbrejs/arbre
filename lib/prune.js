/**
 * Prune a node: remove all its children.
 *
 * @param {Node} node Node to prune.
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
