/**
 * Return `true` if the node has the given node as child.
 *
 * @param {Node} node Node.
 * @param {Node} child Node to check.
 * @return {Boolean}
 */
export default function has(node, child) {
  if (null == child) return false
  return (node === child.parent)
}
