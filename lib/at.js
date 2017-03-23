/**
 * Return a descendant node of a tree at the given indices.
 *
 * @example <caption>Return the first child</caption>
 * at(node, 0)
 *
 * @example <caption>Return the first grandchild</caption>
 * at(node, 0, 0)
 *
 * @param {Node} root Root node.
 * @param {...Number} indices List of indices of each child.
 * @return {Node}
 */
export default function at(root, ...indices) {
  let node = root
  for (let i = 0, len = indices.length; i < len && node; i++) {
    node = node.children[indices[i]]
  }
  return (node || null)
}
