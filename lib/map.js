import mutate from 'tree-mutate'
import { layoutMorpher } from './util'

/**
 * Map a node and its descendants.
 *
 * @param {Node} node Node.
 * @param {Iteratee} iteratee Return the altered node or a new node.
 * @param {String} [order='pre'] [description]
 * @return {Node}
 */
export default function map(node, iteratee, order = 'pre') {
  if ('function' !== typeof iteratee) return node
  return mutate(node, iteratee, layoutMorpher, order)
}
