/**
 * **arbre** compatible node.
 *
 * @typedef {Object} Node
 * @property {Node} parent Parent node.
 * @property {Node[]} children Children nodes.
 */

/**
 * Create a new `Node`.
 *
 * @callback Factory
 * @param {*} Node Data.
 * @return {Node}
 */

/**
 * Serialize a `Node`.
 *
 * @callback Serializer
 * @param {Node} node Node to be serialized.
 */

/**
 * Test if a node satisfies a condition.
 *
 * @callback Predicate
 * @param {Node} node Node to be processed.
 * @return {Boolean}
 */

 /**
  * Apply an operation on a node.
  *
  * @callback Iteratee
  * @param {Node} node Node to be processed.
  * @return {Node|undefined}
  */
