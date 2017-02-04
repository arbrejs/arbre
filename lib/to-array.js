import morph from 'tree-morph'
import clone from 'clone'

const dataMutator = (node) => {
  return clone(0 === node.children.length ? node.value : [node.value])
}

const layoutMutator = (item, parentItem) => {
  parentItem.push(item)
}

/**
 * Convert a `Node` tree to an **array-notation** tree.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function toArray(node) {
  return morph(node, dataMutator, layoutMutator)
}