/**
 * Return the index of a node.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function index(node) {
  return (node.parent ? node.parent.children.indexOf(node) : -1)
}
