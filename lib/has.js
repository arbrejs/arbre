/**
 * Return `true` if a parent node has the given child node.
 *
 * @param {Node} parent Parent node.
 * @param {Node} node Node to check.
 * @return {Boolean}
 */
export default function has(parent, node) {
  return (node ? parent === node.parent : false)
}
