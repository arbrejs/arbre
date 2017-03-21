import insertAfter from './insert-after'

/**
 * Hoist a parent node's children.
 *
 * **Hoisting** a node is an operation that insert all children of node after
 * the node itself.
 *
 * @param {Node} parent Parent node.
 * @return {Number}
 */
export default function hoist(parent) {
  const children = parent.children
  const ret = children.length
  while (children.length > 0) {
    const child = children[children.length - 1]
    insertAfter(parent, child)
  }
  return ret
}
