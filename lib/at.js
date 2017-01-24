/**
 * Return a node at the given position.
 *
 * @param {Node} node Node
 * @param {...Number} indices Nested indices of the node.
 * @return {Node}
 */
export default function at(node, ...indices) {
  for (let i = 0, len = indices.length; i < len; i++) {
    node = node.children[indices[i]]
  }
  return node
}
