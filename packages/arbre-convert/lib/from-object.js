import morph from 'tree-morph'

const dataMutator = (Ctor) => (value) => {
  const node = new Ctor(value)
  delete node.value.children
  return node
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

export function fromObject(obj, Ctor) {
  return morph(obj, dataMutator(Ctor), layoutMutator)
}
