import mutate from 'tree-mutate'
import { layoutNode } from './mutators'

export function map(node, iteratee) {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutNode)
}
