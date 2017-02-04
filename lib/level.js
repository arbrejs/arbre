import depth from './depth'

/**
 * Return the level of a node.
 *
 * The **level** of a node is its **depth** + 1.
 *
 * @param {Node} node Node.
 * @return {Number}
 * @see depth
 */
export default function level(node) {
  return (depth(node) + 1)
}
