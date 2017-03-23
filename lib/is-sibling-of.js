import isEqual from './.internal/is-equal'

/**
 * Return `true` if a target node is a sibling of the node.
 *
 * @param {Node} sibling Sibling node.
 * @param {Node} node Node ot check.
 * @return {Number}
 */
export default function isSiblingOf(sibling, node) {
  return isEqual(sibling.parent, node.parent)
}
