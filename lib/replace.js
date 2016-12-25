import insertAt from './insert-at'
import remove from './remove'

/**
 * [replace description]
 * @param {[type]} node [description]
 * @param {[type]} replace [description]
 * @return {[type]} [description]
 */
export default function replace(node, replace) {
  if (null == replace || this === replace || null === replace.parent) return
  const index = replace.parent.children.indexOf(replace)
  insertAt(replace.parent, node, index)
  remove(replace)
  return node
}
