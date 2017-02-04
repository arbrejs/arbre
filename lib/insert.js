import insertAt from './insert-at'

/**
 * Insert a node.
 *
 * @param {Node} node Node.
 * @param {Node} target Node to be inserted.
 * @return {Node}
 */
export default function insert(node, target) {
  if (null == node) return
  return insertAt(node, target, node.children.length)
}
