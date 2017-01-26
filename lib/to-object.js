import morph from 'tree-morph'
import clone from 'clone'
import isPlainObject from 'is-plain-obj'

const dataMutator = (node) => {
  return clone(isPlainObject(node.value) ? node.value : { value: node.value })
}

const layoutMutator = (obj, parentObj) => {
  if (null == parentObj.children) {
    parentObj.children = []
  }
  parentObj.children.push(obj)
}

/**
 * Convert a tree to object-notation.
 *
 * @param {Node} node Root node of the tree.
 * @return {Object}
 */
export default function toObject(node) {
  return morph(node, dataMutator, layoutMutator)
}
