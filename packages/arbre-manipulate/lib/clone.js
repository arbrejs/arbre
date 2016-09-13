import { insert } from './insert'

const cloneDeep = (node) => {
  const Ctor = node.constructor
  const newNode = new Ctor(node.value)

  newNode.children = node.children.map(child => {
    return insert(newNode,
      child.children.length > 0 ? cloneDeep(child) : new Ctor(child.value)
    )
  })

  return newNode
}

export function clone(node) {
  return cloneDeep(node)
}
