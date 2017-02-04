import walk from './walk'

/**
 * Return the height of a tree.
 *
 * @param {Node} root Root node.
 * @return {Number}
 */
export default function height(root) {
  let maxDepth = 0
  walk(root, (node, context) => {
    if (context.depth > maxDepth) {
      maxDepth = context.depth
    }
  })
  return maxDepth
}
