/**
 * Return `true` is the object is a `Node`.
 *
 * @param {Object} obj Object to check.
 * @return {Boolean}
 */
export default function isNode(obj) {
  return (
    Array.isArray(obj.children) &&
    undefined !== obj.parent
  )
}
