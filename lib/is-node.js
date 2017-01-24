/**
 * Check if an object is an arbre-compatible node.
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
