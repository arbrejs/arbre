import morph from 'tree-morph'
import { cloneNode } from './util'

const dataMutator = (creator) => (value) => {
  return creator(value)
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

export default function deepClone(node, creator = cloneNode) {
  return morph(node, dataMutator(creator), layoutMutator)
}
