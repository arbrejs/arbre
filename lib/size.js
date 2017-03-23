/**
 * Return the size of a tree.
 *
 * The **size** is the total number of descendants of a root node.
 *
 * @param {Node} root Root node.
 * @return {Number}
 */
export default function size(root) {
  return root.children.reduce((s, node) => s + size(node), 1)
}
