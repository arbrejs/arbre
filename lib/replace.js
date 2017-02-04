import insertAt from './insert-at'
import remove from './remove'

/**
 * Replace the node by a target node.
 *
 * @param {Node} node Node.
 * @param {Node} target Replacement node.
 * @return {Node}
 */
export default function replace(node, target) {
  if (null == target || this === target || null === target.parent) return
  const index = target.parent.children.indexOf(target)
  insertAt(target.parent, node, index)
  remove(target)
  return node
}
