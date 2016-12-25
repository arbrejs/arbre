import map from './map'

/**
 * [filter description]
 * @param {[type]} node [description]
 * @param {[type]} predicate [description]
 * @return {[type]} [description]
 */
export default function filter(node, predicate) {
  if ('function' !== typeof predicate) return null
  return map(node, node => (predicate(node) ? node : null))
}
