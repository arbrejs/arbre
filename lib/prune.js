/**
 * [prune description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
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
