import { insertAfter } from './insert-after'

export function hoist(node) {
  const children = node.children
  for (var i = 0; i < children.length; i++) {
    insertAfter(children[i], node)
  }
  return i
}
