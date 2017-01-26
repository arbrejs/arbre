import insertAt from './insert-at'

/**
 * Insert a node.
 *
 * @param {Node} parent Parent node.
 * @param {Node} target Node to be inserted.
 * @return {Node}
 */
export default function insert(parent, target) {
  if (null == parent) return
  return insertAt(parent, target, parent.children.length)
}
