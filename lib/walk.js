import crawl from 'tree-crawl'

/**
 * Walk a tree.
 *
 * @param {Node} root Root node.
 * @param {Iteratee} iteratee Called on each node.
 * @param {pre|post} [order='pre'] Traversal mode
 * @return {Node}
 */
export default function walk(root, iteratee, order = 'pre') {
  crawl(root, iteratee, { order })
  return root
}
