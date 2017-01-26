import morph from 'tree-morph'
import clone from 'clone'

const dataMutator = (node) => {
  return clone(0 === node.children.length ? node.value : [node.value])
}

const layoutMutator = (item, parentItem) => {
  parentItem.push(item)
}

/**
 * Convert a tree to an array-notation.
 *
 * @param {Node} node Root node of the tree.
 * @return {Array}
 */
export default function toArray(node) {
  return morph(node, dataMutator, layoutMutator)
}
