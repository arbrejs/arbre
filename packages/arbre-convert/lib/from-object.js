import morph from 'tree-morph'

const dataMutator = (factory) => (value) => {
  return factory(value)
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

export function fromObject(factory, obj) {
  return morph(obj, dataMutator(factory), layoutMutator)
}
