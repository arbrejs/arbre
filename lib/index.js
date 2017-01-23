/**
 * Return the index of a node.
 *
 * @param {Node} node Node.
 * @return {Number} Index of the node.
 */
export default function index(node) {
  if (null !== node.parent) {
    return node.parent.children.indexOf(node)
  }
  return -1
}
