import fromObject from './from-object'
import { cloneNode } from './util'

/**
 * Convert a JSON-notation tree into an `arbre` tree.
 *
 * @param {String} json JSON-notation tree.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function fromJSON(json, creator = cloneNode) {
  return fromObject(creator, JSON.parse(json))
}
