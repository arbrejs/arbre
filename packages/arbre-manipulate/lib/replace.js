import { insertAt } from './insert-at'
import { remove } from './remove'

export function replace(node, replace) {
  if (null == replace || this === replace || null === replace.parent) return

  const index = replace.parent.children.indexOf(replace)
  insertAt(replace.parent, node, index)
  remove(replace)

  return node
}
