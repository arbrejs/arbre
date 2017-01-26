import toObject from './to-object'

/**
 * Converts a tree to JSON-notation.
 *
 * @param {Node} node Root node of the tree.
 * @return {String}
 */
export default function toJSON(node) {
  return JSON.stringify(toObject(node), null, 2)
}
