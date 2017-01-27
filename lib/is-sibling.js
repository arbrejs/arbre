/**
 * Return if nodes a siblings.
 *
 * @param {Node} node Reference node.
 * @param {Node} target Compared node.
 * @return {Number}
 */
export default function isSibling(node, target) {
  return (node.parent === target.parent)
}
