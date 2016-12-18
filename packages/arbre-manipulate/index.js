/**
 * [clone description]
 * @param {[type]} factory [description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
 */
export function clone(factory, node) {
  const newNode = factory(node.value)
  newNode.children = node.children.map(child =>
    insert(newNode, child.children.length > 0
      ? clone(factory, child)
      : factory(child.value)
    )
  )
  return newNode
}

/**
 * [hoist description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
 */
export function hoist(node) {
  const children = node.children
  const ret = children.length
  while (children.length > 0) {
    const child = children[children.length - 1]
    insertAfter(child, node)
  }
  return ret
}

/**
 * [insertAt description]
 * @param {[type]} node [description]
 * @param {[type]} child [description]
 * @param {[type]} index [description]
 * @return {[type]} [description]
 */
export function insertAt(node, child, index) {
  if (null == node || child === node) return
  if (index < 0 || index > node.children.length) return
  remove(child)
  node.children.splice(index, 0, child)
  child.parent = node
  return child
}

/**
 * [insertAfter description]
 * @param {[type]} node [description]
 * @param {[type]} after [description]
 * @return {[type]} [description]
 * @todo: jsperf if push/unshift are need for edge cases
 */
export function insertAfter(node, after) {
  if (null == after || null === after.parent) return
  const index = after.parent.children.indexOf(after)
  return insertAt(after.parent, node, index + 1)
}

/**
 * [insertBefore description]
 * @param {[type]} node [description]
 * @param {[type]} before [description]
 * @return {[type]} [description]
 */
export function insertBefore(node, before) {
  if (null == before || null === before.parent) return
  const index = before.parent.children.indexOf(before)
  return insertAt(before.parent, node, index)
}

/**
 * [insert description]
 * @param {[type]} node [description]
 * @param {[type]} child [description]
 * @return {[type]} [description]
 */
export function insert(node, child) {
  if (null == node) return
  return insertAt(node, child, node.children.length)
}

/**
 * [prune description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
 */
export function prune(node) {
  const children = node.children
  const ret = children.length
  while (0 !== children.length) {
    const child = children.shift()
    child.parent = null
  }
  return ret
}

/**
 * [remove description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
 */
export function remove(node) {
  const parent = node.parent
  if (null == parent) return
  const index = parent.children.indexOf(node)
  parent.children.splice(index, 1)
  node.parent = null
  return node
}

/**
 * [replace description]
 * @param {[type]} node [description]
 * @param {[type]} replace [description]
 * @return {[type]} [description]
 */
export function replace(node, replace) {
  if (null == replace || this === replace || null === replace.parent) return
  const index = replace.parent.children.indexOf(replace)
  insertAt(replace.parent, node, index)
  remove(replace)
  return node
}
