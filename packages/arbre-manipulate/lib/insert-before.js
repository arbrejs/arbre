import { insertAt } from './insert-at'

export function insertBefore(node, before) {
  if (null == before || null === before.parent) return

  const index = before.parent.children.indexOf(before)
  return insertAt(before.parent, node, index)
}
