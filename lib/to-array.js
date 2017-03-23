import morph from 'tree-morph'
import clone from 'clone'

function dataMutator(node) {
  return clone(0 === node.children.length ? node.value : [node.value])
}

function layoutMutator(item, parentItem) {
  parentItem.push(item)
}

/**
 * Convert a tree to an **array-notation** tree.
 *
 * @param {Node} node Node.
 * @return {Array}
 */
export default function toArray(node) {
  return morph(node, dataMutator, layoutMutator)
}
