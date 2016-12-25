import insertAt from './insert-at'

/**
 * [insertBefore description]
 * @param {[type]} node [description]
 * @param {[type]} before [description]
 * @return {[type]} [description]
 */
export default function insertBefore(node, before) {
  if (null == before || null === before.parent) return
  const index = before.parent.children.indexOf(before)
  return insertAt(before.parent, node, index)
}
