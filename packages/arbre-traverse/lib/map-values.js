import { map } from './map'

export function mapValues(node, iteratee) {
  return map(node, (node, context) => {
    const ret = iteratee(node.value)
    if (null === ret) return null
    if (undefined !== ret) {
      node.value = ret
    }
  })
}
