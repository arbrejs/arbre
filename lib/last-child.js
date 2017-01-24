/**
 * Get the last child of a node.
 *
 * @param {Node} node Parent node.
 * @return {Node}
 */
export default function lastChild(node) {
  return node.children[node.children.length - 1]
}
