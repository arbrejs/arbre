import index from './index'
import isValidIndex from './.internal/is-valid-index'

/**
 * Return the siblings of a node.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function siblings(node) {
  const idx = index(node)
  if (!isValidIndex(idx)) return []
  const ret = node.parent.children.slice()
  ret.splice(idx, 1)
  return ret
}
