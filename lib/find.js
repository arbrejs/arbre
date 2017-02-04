import crawl from 'tree-crawl'

/**
 * Find the node with the given predicate.
 *
 * @param {Node} node Node.
 * @param {Predicate} predicate Search predicate.
 * @return {Node|undefined}
 */
export default function find(node, predicate) {
  let found
  crawl(node, (node, context) => {
    if (0 === context.depth) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })
  return found
}
