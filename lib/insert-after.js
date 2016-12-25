import insertAt from './insert-at'

/**
 * [insertAfter description]
 * @param {[type]} node [description]
 * @param {[type]} after [description]
 * @return {[type]} [description]
 * @todo: jsperf if push/unshift are need for edge cases
 */
export default function insertAfter(node, after) {
  if (null == after || null === after.parent) return
  const index = after.parent.children.indexOf(after)
  return insertAt(after.parent, node, index + 1)
}
