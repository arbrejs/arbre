import { insertAt } from './insert-at'

export function insert(node, child) {
  if (null == node) return
  return insertAt(node, child, node.children.length)
}
