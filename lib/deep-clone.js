import morph from 'tree-morph'
import cloneNode from './.internal/clone-node'
import layoutMorpher from './.internal/layout-morpher'

/**
 * Deeply clone the tree.
 *
 * @param {Node} root Root node.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function deepClone(root, creator = cloneNode) {
  return morph(root, creator, layoutMorpher)
}
