import length from './length'

/**
 * Return the breadth at the node's level.
 *
 * The **breadth** is the number of siblings to a node + 1.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function breadth(node) {
  const parent = node.parent
  return (parent ? length(parent) : 1)
}
