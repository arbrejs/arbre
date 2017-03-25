import morph from 'tree-morph'
import layoutMorpher from './internal/layout-morpher'

/**
 * Convert an **plain-object-notation** tree into a tree.
 *
 * @param {Object} obj Plain-object-notation tree.
 * @param {Factory} factory Factory function.
 * @return {Node}
 */
export default function fromObject(obj, factory) {
  return morph(obj, factory, layoutMorpher)
}
