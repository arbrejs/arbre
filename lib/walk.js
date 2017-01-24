import crawl from 'tree-crawl'

/**
 * Walk a tree, visiting each node.
 *
 * @param {Node} node Root node of thee tree.
 * @param {Iteratee} iteratee Called on each node.
 * @param {pre|post} [order='pre'] Traversal mode
 * @return {[type]} [description]
 */
export default function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
}
