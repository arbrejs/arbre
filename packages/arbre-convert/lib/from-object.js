import morph from 'tree-morph'

const dataMutator = (constructor) => (value) => {
  const node = constructor(value)
  delete node.value.children
  return node
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

export function fromObject(obj, constructor) {
  return morph(obj, dataMutator(constructor), layoutMutator)
}
