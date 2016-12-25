import insertAt from './insert-at'

/**
 * [insert description]
 * @param {[type]} node [description]
 * @param {[type]} child [description]
 * @return {[type]} [description]
 */
export default function insert(node, child) {
  if (null == node) return
  return insertAt(node, child, node.children.length)
}
