/**
 * Return the first sibling of the node.
 *
 * The first **sibling** node is the left-most child of a node's parent.
 * If the node is the root node or the only child, it returns the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function firstSibling(node) {
  const parent = node.parent
  if (null == parent || 0 === parent.children.length) return node
  return parent.children[0]
}
