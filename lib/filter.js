import map from './map'

/**
 * Filter the tree with the given predicate.
 *
 * When a node is removed, all its children are removed too.
 *
 * @param {Node} root Root node.
 * @param {Predicate} predicate Filter predicate.
 * @return {Node}
 */
export default function filter(root, predicate) {
  return map(root, node => (predicate(node) ? node : null))
}
