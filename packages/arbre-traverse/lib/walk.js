import crawl from 'tree-crawl'

export function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
}
