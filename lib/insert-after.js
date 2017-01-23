import insertAt from './insert-at'

/**
 * Insert a node after another.
 *
 * @param {Node} node Reference node.
 * @param {Node} target Node to be inserted after.
 * @return {Node} The target node.
 */
export default function insertAfter(node, target) {
  if (null == node || null === node.parent) return
  const index = node.parent.children.indexOf(node)
  return insertAt(node.parent, target, index + 1)
}
