/**
 * Return `true` if a node is the last sibling.
 *
 * If the node is a root node or the only child, it returns `true`.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isLastSibling(node) {
  const parent = node.parent
  return (parent ? node === parent.children[parent.children.length - 1] : true)
}
