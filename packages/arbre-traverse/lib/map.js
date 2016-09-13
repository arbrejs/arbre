import mutate from 'tree-mutate'
import { layoutNode } from './mutators'

export function map(node, iteratee) {
  return mutate(node, iteratee, layoutNode)
}
