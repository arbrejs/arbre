import { insert } from './insert'

const cloneDeep = (node, Ctor) => {
  const newNode = new Ctor(node.value)

  newNode.children = node.children.map(child => {
    return insert(newNode, child.children.length > 0 ?
      cloneDeep(child, Ctor) :
      new Ctor(child.value)
    )
  })

  return newNode
}

export function clone(node, Ctor) {
  return cloneDeep(node, Ctor || node.constructor)
}
