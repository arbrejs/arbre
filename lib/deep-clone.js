import morph from 'tree-morph'
import layoutMorpher from './internal/layout-morpher'

/**
 * Deeply clone the tree.
 *
 * @param {Node} root Root node.
 * @param {Factory} clone Function that clones a node.
 * @return {Node}
 */
export default function deepClone(root, clone) {
  return morph(root, clone, layoutMorpher)
}
