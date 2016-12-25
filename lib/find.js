import crawl from 'tree-crawl'

/**
 * [find description]
 * @param {[type]} node [description]
 * @param {[type]} predicate [description]
 * @return {[type]} [description]
 */
export default function find(node, predicate) {
  let found
  crawl(node, (node, context) => {
    if (0 === context.depth) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })
  return found
}
