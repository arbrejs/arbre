import insertAfter from './insert-after'

export default function hoist(node) {
  const children = node.children
  const ret = children.length
  while (children.length > 0) {
    const child = children[children.length - 1]
    insertAfter(child, node)
  }
  return ret
}
