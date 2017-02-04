import insertAt from './insert-at'

/**
 * Insert a target node after the node.
 *
 * @param {Node} node Node.
 * @param {Node} target Node to be inserted.
 * @return {Node}
 */
export default function insertAfter(node, target) {
  if (null == node || null === node.parent) return
  const index = node.parent.children.indexOf(node)
  return insertAt(node.parent, target, index + 1)
}
