import crawl from 'tree-crawl'

/**
 * Walk a node and its descendants.
 *
 * @param {Node} root Root node.
 * @param {Iteratee} iteratee Called on each node.
 * @param {pre|post} [order='pre'] Traversal mode
 * @return {Node}
 */
export default function walk(root, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return root
  crawl(root, iteratee, { order })
  return root
}
