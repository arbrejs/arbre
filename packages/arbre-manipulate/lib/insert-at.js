import { remove } from './remove'

export function insertAt(node, child, index) {
  if (null == node || child === node) return false
  if (index < 0 || index > node.children.length) return false

  remove(child)
  node.children.splice(index, 0, child)
  child.parent = node

  return child
}

// TODO: jsperf if push/unshift are need for edge cases
