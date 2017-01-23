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
 * @callback NodeFactory
 * @param {*} Node data.
 * @return {Node} New node.
 */

/**
 * Test if a node satifies a condition.
 *
 * @callback Predicate
 * @param {Node} node Node to be processed.
 * @return {Boolean} Return if the node passed the condition.
 */
