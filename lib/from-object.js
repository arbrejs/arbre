import morph from 'tree-morph'
import cloneNode from './internal/clone-node'
import layoutMorpher from './internal/layout-morpher'

/**
 * Convert an **plain-object-notation** tree into a tree.
 *
 * @param {Object} obj Plain-object-notation tree.
 * @param {Creator} [creator=cloneNode] Function used to create `arbre` nodes.
 * @return {Node}
 */
export default function fromObject(obj, creator = cloneNode) {
  return morph(obj, creator, layoutMorpher)
}
