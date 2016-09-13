import map from './map'

export default function filter(node, predicate) {
  if ('function' !== typeof predicate) return this
  return map(node, node => (predicate(node) ? node : null))
}
