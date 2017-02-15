import morph from 'tree-morph'
import cloneNode from './internal/clone-node'
import layoutMorpher from './internal/layout-morpher'

/**
 * Deeply clone the node.
 *
 * @param {Node} node Node.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function deepClone(node, creator = cloneNode) {
  return morph(node, creator, layoutMorpher)
}
