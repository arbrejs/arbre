import insert from './insert'

/**
 * [clone description]
 * @param {[type]} factory [description]
 * @param {[type]} node [description]
 * @return {[type]} [description]
 */
export default function clone(factory, node) {
  const newNode = factory(node.value)
  newNode.children = node.children.map(child =>
    insert(newNode, child.children.length > 0
      ? clone(factory, child)
      : factory(child.value)
    )
  )
  return newNode
}
