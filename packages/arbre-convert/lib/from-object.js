import morph from 'tree-morph'

const dataMutator = (Ctor, childrenKey) => (value) => {
  if (childrenKey) {
    value.children = value[childrenKey]
    delete value[childrenKey]
  }

  const node = new Ctor(value)
  delete node.value.children
  return node
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

export function fromObject(Ctor, obj, childrenKey) {
  return morph(obj, dataMutator(Ctor, childrenKey), layoutMutator)
}
