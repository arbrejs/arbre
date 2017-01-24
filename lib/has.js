/**
 * Check if a node has another node as child.
 *
 * @param {Node} node Parent node.
 * @param {Node} child Node to check.
 * @return {Boolean}
 */
export default function has(node, child) {
  if (null == child) return false
  return (node === child.parent)
}
