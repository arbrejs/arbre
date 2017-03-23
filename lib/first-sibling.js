import firstChild from './first-child'

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
  const parent = node.parent
  return (parent ? firstChild(parent) : node)
}
