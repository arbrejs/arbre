import insert from './insert'

/**
 * Deep clone a node and its children.
 *
 * @param {Function} factory Factory creating a new node object.
 * @param {Node} node Node to be cloned.
 * @return {Node}
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
