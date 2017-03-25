import fromObject from './from-object'

/**
 * Convert a **JSON-notation** tree into an tree.
 *
 * @param {String} json JSON-notation tree.
 * @param {Factory} factory Factory function.
 * @return {Node}
 */
export default function fromJSON(json, factory) {
  return fromObject(JSON.parse(json), factory)
}
