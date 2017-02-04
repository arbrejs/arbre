import insertAfter from './insert-after'

/**
 * Hoist the node's children.
 *
 * **Hoisting** a node is an operation that insert all children of node after
 * the node itself.
 *
 * @param {Node} node Node.
 * @return {Number}
 */
export default function hoist(node) {
  const children = node.children
  const ret = children.length
  while (children.length > 0) {
    const child = children[children.length - 1]
    insertAfter(node, child)
  }
  return ret
}
