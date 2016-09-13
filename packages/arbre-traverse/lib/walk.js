import crawl from 'tree-crawl'

export function walk(node, iteratee, order = 'pre') {
  crawl(node, iteratee, { order })
}
