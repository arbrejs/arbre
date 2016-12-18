import crawl from 'tree-crawl'
import mutate from 'tree-mutate'

/**
 * [filter description]
 * @param {[type]} node [description]
 * @param {[type]} predicate [description]
 * @return {[type]} [description]
 */
export function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}

/**
 * [find description]
 * @param {[type]} node [description]
 * @param {[type]} predicate [description]
 * @return {[type]} [description]
 */
export function find(node, predicate) {
  let found
  walk(node, (node, context) => {
    if (0 === context.depth) return
    if (predicate(node)) {
      found = node
      context.break()
    }
  })
  return found
}

/**
 * [map description]
 * @param {[type]} node [description]
 * @param {[type]} iteratee [description]
 * @param {[type]} order [description]
 * @return {[type]} [description]
 */
export function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode, order)
}

/**
 * [walk description]
 * @param {[type]} node [description]
 * @param {[type]} iteratee [description]
 * @param {[type]} order [description]
 * @return {[type]} [description]
 */
export function walk(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order })
}

/**
 * [layoutNode description]
 * @param {[type]} mutation [description]
 * @param {[type]} node [description]
 * @param {[type]} parent [description]
 * @param {[type]} index [description]
 * @private
 */
function layoutNode(mutation, node, parent, index) {
  if ('remove' === mutation) {
    parent.children.splice(index, 1)
    node.parent = null
  }
  else if ('replace' === mutation) {
    const old = parent.children[index]
    parent.children[index] = node
    node.parent = old.parent
    old.parent = null
  }
}
