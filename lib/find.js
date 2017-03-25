import crawl from 'tree-crawl'
import isEqual from './internal/is-equal'

/**
 * Find a node with the given predicate.
 *
 * @param {Node} root Root node.
 * @param {Predicate} predicate Search predicate.
 * @return {Node|undefined}
 */
export default function find(root, predicate) {
  let found = null
  crawl(root, (node, context) => {
    if (isEqual(context.depth, 0)) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })
  return found
}
