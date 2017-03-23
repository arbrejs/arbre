import index from './index'
import isRoot from './is-root'
import length from './length'

const nativeSplice = Array.prototype.splice

function spliceArray(array, idx, remove, items) {
  return nativeSplice.apply(array, [idx, remove].concat(items))
}

/**
 * Hoist a parent node's children.
 *
 * **Hoisting** a node is an operation that insert all children of a node after
 * the node itself.
 *
 * @param {Node} parent Parent node.
 * @return {Number}
 */
export default function hoist(parent) {
  if (isRoot(parent)) return 0
  const len = length(parent)
  for (let i = 0, children = parent.children; i < len; i++) {
    children[i].parent = parent.parent
  }
  spliceArray(parent.parent.children, index(parent) + 1, 0, parent.children)
  parent.children = []
  return len
}
