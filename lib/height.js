import walk from './walk'

/**
 * Return the height of the node.
 *
 * The **height** is the length of the longest path from a node to its deepest
 * ancestor.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function height(node) {
  let maxDepth = 0
  walk(node, (node, context) => {
    if (context.depth > maxDepth) {
      maxDepth = context.depth
    }
  })
  return maxDepth
}
