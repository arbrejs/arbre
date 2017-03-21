/**
 * Return the last child of a parent node.
 *
 * @param {Node} parent Parent node.
 * @return {Node}
 */
export default function lastChild(parent) {
  const children = parent.children
  return children[children.length - 1]
}
