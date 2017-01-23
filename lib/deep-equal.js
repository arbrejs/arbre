import deepEqualObj from 'not-so-shallow'

/**
 * Check if a node deep equals another node.
 *
 * @param {Node} node1 First node to be compaired.
 * @param {Node} node2 Second node to be compaired.
 * @return {Boolean} Either if they are deep equal or not.
 */
export default function deepEqual(node1, node2) {
  if (null == node1 && null == node2) return false
  return deepEqualObj(node1, node2)
}
