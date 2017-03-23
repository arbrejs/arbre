import cloneNode from './.internal/clone-node'

/**
 * Clone the node.
 *
 * @param {Node} node Node.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function clone(node, creator = cloneNode) {
  return creator(node)
}
