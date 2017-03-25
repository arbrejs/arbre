import isEqual from './internal/is-equal'

/**
 * Return `true` if a node is the only child of its parent.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function isOnlyChild(node) {
  const parent = node.parent
  return (parent ? isEqual(parent.children.length, 1) : true)
}
