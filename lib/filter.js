import map from './map'

/**
 * Filter the node given a predicate.
 *
 * When a node is removed, all its children are removed too.
 *
 * @param {Node} node Node.
 * @param {Predicate} predicate Filter predicate.
 * @return {Node}
 */
export default function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}
