import crawl from 'tree-crawl'
import mutate from 'tree-mutate'

export function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}

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

export function mapValues(node, iteratee) {
  return map(node, (node, context) => {
    const ret = iteratee(node.value, node)
    if (null === ret) return null
    if (undefined !== ret) {
      node.value = ret
    }
  })
}

export function map(node, iteratee, order) {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode, order)
}

export function walk(node, iteratee, order) {
  if ('function' !== typeof iteratee) return node
  crawl(node, iteratee, { order: order || 'pre' })
}

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
