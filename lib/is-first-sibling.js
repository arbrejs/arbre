/**
 * Return `true` if a node is the first sibling.
 *
 * If the node is a root node or the only child, it returns `true`.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isFirstSibling(node) {
  const parent = node.parent
  return (parent ? node === parent.children[0] : true)
}
