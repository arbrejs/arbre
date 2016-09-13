import { insertAt } from './insert-at'

export function insertBefore(node, before) {
  if (null == before || node === before || null === before.parent) return false

  const index = before.parent.children.indexOf(before)
  return insertAt(before.parent, node, index)
}
