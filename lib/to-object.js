import morph from 'tree-morph'

function dataMutatorWith(serialize) {
  return (node) => {
    return serialize(node)
  }
}

function layoutMutator(obj, parentObj) {
  if (!parentObj.children) {
    parentObj.children = []
  }
  parentObj.children.push(obj)
}

/**
 * Convert a tree to an **object-notation** tree.
 *
 * @param {Node} node Node.
 * @param {Serializer} serialize Serializer function.
 * @return {Object}
 */
export default function toObject(node, serialize) {
  return morph(node, dataMutatorWith(serialize), layoutMutator)
}
