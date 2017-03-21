import crawl from 'tree-crawl'

/**
 * Find a node with the given predicate.
 *
 * @param {Node} root Root node.
 * @param {Predicate} predicate Search predicate.
 * @return {Node|undefined}
 */
export default function find(root, predicate) {
  let found
  crawl(root, (node, context) => {
    if (0 === context.depth) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })
  return found
}
