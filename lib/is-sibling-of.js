/**
 * Return `true` if a target node is a sibling of the node.
 *
 * @param {Node} node Node.
 * @param {Node} target Compared node.
 * @return {Number}
 */
export default function isSiblingOf(node, target) {
  return (node.parent === target.parent)
}
