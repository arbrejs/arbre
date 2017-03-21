import isLeaf from './is-leaf'

/**
 * Return the size of the node.
 *
 * The **size** is the total number of descendants of a node.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function size(node) {
  if (isLeaf(node)) return 1
  return node.children.reduce((s, node) => s + size(node), 1)
}
