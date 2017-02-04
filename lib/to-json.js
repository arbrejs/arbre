import toObject from './to-object'

/**
 * Convert a `Node` tree to an **JSON-notation** tree.
 *
 * @param {Node} node Node.
 * @return {String}
 */
export default function toJSON(node) {
  return JSON.stringify(toObject(node), null, 2)
}
