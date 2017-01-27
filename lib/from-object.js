import morph from 'tree-morph'
import { cloneNode, dataMutatorWith, layoutMutator } from './util'

/**
 * Convert an plain-object-notation tree into an `arbre` tree.
 *
 * @param {Object} obj Plain-object-notation tree.
 * @param {Creator} [creator=cloneNode] Function used to create `arbre` nodes.
 * @return {Node}
 */
export default function fromObject(obj, creator = cloneNode) {
  return morph(obj, dataMutatorWith(creator), layoutMutator)
}
