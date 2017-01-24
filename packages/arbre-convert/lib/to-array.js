import morph from 'tree-morph'
import clone from 'clone'

const dataMutator = (node) => {
  return clone(0 === node.children.length ? node.value : [node.value])
}

const layoutMutator = (item, parentItem) => {
  parentItem.push(item)
}

export function toArray(node) {
  return morph(node, dataMutator, layoutMutator)
}
