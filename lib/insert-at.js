import remove from './remove'

/**
 * Insert a target node at the given index.
 *
 * @param {Node} node Node.
 * @param {Node} target Node to be inserted.
 * @param {Number} index Index where to insert the target node.
 * @return {Node}
 */
export default function insertAt(node, target, index) {
  if (null == node || target === node) return
  if (index < 0 || index > node.children.length) return
  remove(target)
  node.children.splice(index, 0, target)
  target.parent = node
  return target
}
