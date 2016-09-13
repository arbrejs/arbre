import { insertAt } from './insert-at'

export function insert(node, child) {
  if (null == node) return false
  return insertAt(node, child, node.children.length)
}
