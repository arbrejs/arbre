import toObject from './to-object'

/**
 * Convert a tree to an **JSON-notation** tree.
 *
 * @param {Node} node Node.
 * @param {Serializer} serialize Serializer function.
 * @return {String}
 */
export default function toJSON(node, serialize) {
  return JSON.stringify(toObject(node, serialize), null, 2)
}
