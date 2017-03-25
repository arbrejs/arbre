import morph from 'tree-morph'

function dataMutatorWith(serialize) {
  return (node) => {
    const serialized = serialize(node)
    return (0 === node.children.length ? serialized : [serialized])
  }
}

function layoutMutator(item, parentItem) {
  parentItem.push(item)
}

/**
 * Convert a tree to an **array-notation** tree.
 *
 * @param {Node} node Node.
 * @param {Serializer} serialize Serializer function.
 * @return {Array}
 */
export default function toArray(node, serialize) {
  return morph(node, dataMutatorWith(serialize), layoutMutator)
}
