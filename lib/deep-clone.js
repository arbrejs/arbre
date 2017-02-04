import morph from 'tree-morph'
import { cloneNode } from './util'

function dataMutator(creator) {
  return (value) => creator(value)
}

function layoutMutator(node, parent) {
  parent.children.push(node)
  node.parent = parent
}

/**
 * Deeply clone the node.
 *
 * @param {Node} node Node.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function deepClone(node, creator = cloneNode) {
  return morph(node, dataMutator(creator), layoutMutator)
}
