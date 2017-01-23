import morph from 'tree-morph'

const dataMutator = (factory) => (value) => {
  return factory(value)
}

const layoutMutator = (node, parent) => {
  parent.children.push(node)
  node.parent = parent
}

/**
 * Convert an plain-object-notation tree into an `arbre` tree.
 *
 * @param {NodeFactory} factory Function used to create `arbre` nodes.
 * @param {Object} obj Plain-object-notation tree.
 * @return {Node} Root of the tree.
 */
export default function fromObject(factory, obj) {
  return morph(obj, dataMutator(factory), layoutMutator)
}
