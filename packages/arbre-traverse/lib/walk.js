import crawl from 'tree-crawl'

export default function walk(node, iteratee, order = 'pre') {
  crawl(node, iteratee, { order })
}
