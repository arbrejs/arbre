/**
 * Return the first sibling of a node.
 *
 * The first **sibling** node is the left-most child of a node's parent.
 * If the node is the root node or the only child, it returns the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function firstSibling(node) {
  const children = node.parent ? node.parent.children : null
  return (children ? children[0] : node)
}
