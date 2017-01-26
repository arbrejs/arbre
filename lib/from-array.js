/**
 * Convert an array-notation tree into an `arbre` tree.
 *
 * @param {NodeFactory} factory Function used to create `arbre` nodes.
 * @param {Array} array Array-notation tree.
 * @return {Node}
 */
export default function fromArray(factory, array) {
  const parent = array.shift()
  return array.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromArray(factory, child)
    }
    else {
      child = factory(child)
    }
    parent.children.push(child)
    child.parent = parent
    return parent
  }, factory(parent))
}
