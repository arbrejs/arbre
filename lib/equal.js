import deepEql from 'deep-eql'

/**
 * Check if a node equals another node.
 *
 * @param {Node} node1 First node.
 * @param {Node} node2 Second node.
 * @return {Boolean}
 */
export default function equal(node1, node2) {
  if (null == node1 && null == node2) return false
  return deepEql(node1.value, node2.value)
}
