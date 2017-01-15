/**
 * Get the last child or a node.
 *
 * @param {Node} node Parent node.
 * @return {Node} Last child.
 */
export default function lastChild(node) {
  return node.children[node.children.length - 1]
}
