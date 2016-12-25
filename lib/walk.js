import crawl from 'tree-crawl'

/**
 * [walk description]
 * @param {[type]} node [description]
 * @param {[type]} iteratee [description]
 * @param {[type]} order [description]
 * @return {[type]} [description]
 */
export default function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
}
