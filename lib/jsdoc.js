/**
 * `arbre` compatible node.
 *
 * @typedef {Object} Node
 * @property {Node} parent Parent node.
 * @property {Node[]} children Children nodes.
 */

/**
 * Create a new `arbre` node.
 *
 * @callback Creator
 * @param {*} Node data.
 * @return {Node}
 */

/**
 * Test if a node satifies a condition.
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
