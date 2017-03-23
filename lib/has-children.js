import isLeaf from './is-leaf'

/**
 * Return `true` if the node has at least one child.
 *
 * @param {Node} node Node.
 * @return {Boolean}
 */
export default function hasChildren(node) {
  return !isLeaf(node)
}
