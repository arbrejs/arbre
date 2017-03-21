import index from './index'

/**
 * Return the siblings of a node.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function siblings(node) {
  const idx = index(node)
  if (-1 === idx) return []
  const ret = node.parent.children.slice()
  ret.splice(idx, 1)
  return ret
}
