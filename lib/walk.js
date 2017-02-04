import crawl from 'tree-crawl'

/**
 * Walk a node and its descendants.
 *
 * @param {Node} node Node.
 * @param {Iteratee} iteratee Called on each node.
 * @param {pre|post} [order='pre'] Traversal mode
 * @return {Node}
 */
export default function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
  return node
}
