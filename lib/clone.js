import insert from './insert'

/**
 * Deep clone a node and its children.
 *
 * @param {Node} node Node to be cloned.
 * @param {Function} factory Factory creating a new node object.
 * @return {Node}
 */
export default function clone(node, factory) {
  const newNode = factory(node.value)
  newNode.children = node.children.map(child =>
    insert(newNode, child.children.length > 0
      ? clone(child, factory)
      : factory(child.value)
    )
  )
  return newNode
}
