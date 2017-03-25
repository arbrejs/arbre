import isEqual from './internal/is-equal'

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
  const len = children.length
  while (!isEqual(children.length, 0)) {
    const child = children.shift()
    child.parent = null
  }
  return len
}
