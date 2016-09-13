import { insertAt } from './insert-at'

export function insertAfter(node, after) {
  if (null == after || null === after.parent) return

  const index = after.parent.children.indexOf(after)
  return insertAt(after.parent, node, index + 1)
}
