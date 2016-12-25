import remove from './remove'

/**
 * [insertAt description]
 * @param {[type]} node [description]
 * @param {[type]} child [description]
 * @param {[type]} index [description]
 * @return {[type]} [description]
 */
export default function insertAt(node, child, index) {
  if (null == node || child === node) return
  if (index < 0 || index > node.children.length) return
  remove(child)
  node.children.splice(index, 0, child)
  child.parent = node
  return child
}
