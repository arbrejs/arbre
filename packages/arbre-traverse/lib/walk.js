import crawl from 'tree-crawl'

export function walk(node, iteratee, order) {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order: order || 'pre' })
}
