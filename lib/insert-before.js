import insertAt from './insert-at'

/**
 * Insert a node before another.
 *
 * @param {Node} node Reference node.
 * @param {Node} target Node to be inserted.
 * @return {Node}
 */
export default function insertBefore(node, target) {
  if (null == node || null === node.parent) return
  const index = node.parent.children.indexOf(node)
  return insertAt(node.parent, target, index)
}
