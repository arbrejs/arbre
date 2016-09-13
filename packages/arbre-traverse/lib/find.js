import { walk } from './walk'

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
