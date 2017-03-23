import morph from 'tree-morph'
import clone from 'clone'

function dataMutator(node) {
  return clone('object' === typeof node.value ? node.value : { value: node.value })
}

function layoutMutator(obj, parentObj) {
  if (null == parentObj.children) {
    parentObj.children = []
  }
  parentObj.children.push(obj)
}

/**
 * Convert a `Node` tree to an **object-notation** tree.
 *
 * @param {Node} node Node.
 * @return {Object}
 */
export default function toObject(node) {
  return morph(node, dataMutator, layoutMutator)
}
