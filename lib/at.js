/**
 * Return a descendant node at the given indices.
 *
 * @example <caption>Return the first child</caption>
 * at(node, 0)
 *
 * @example <caption>Return the first grandchild</caption>
 * at(node, 0, 0)
 *
 * @param {Node} node Node.
 * @param {...Number} indices List of indices of each child.
 * @return {Node}
 */
export default function at(node, ...indices) {
  for (let i = 0, len = indices.length; i < len && null != node; i++) {
    node = node.children[indices[i]]
  }
  return node
}
