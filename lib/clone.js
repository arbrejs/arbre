import { cloneNode } from './util'

/**
 * Clone a node.
 *
 * @param {Node} node Node to be cloned.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function clone(node, creator = cloneNode) {
  return creator(node)
}
