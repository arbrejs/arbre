import fromObject from './from-object'

/**
 * Convert a JSON-notation tree into an `arbre` tree.
 *
 * @param {NodeFactory} factory Function used to create `arbre` nodes.
 * @param {String} json JSON-notation tree.
 * @return {Node} Root of the tree.
 */
export default function fromJSON(factory, json) {
  return fromObject(factory, JSON.parse(json))
}
