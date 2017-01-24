import map from './map'

/**
 * Filter a node and its children given a predicate.
 *
 * When a node is removed, all its children are removed too.
 *
 * @param {Node} node Node to be filtered.
 * @param {Predicate} predicate Filter predicate.
 * @return {Node}
 */
export default function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}
