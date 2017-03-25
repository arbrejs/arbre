function reducerWith(factory) {
  return (parent, child) => {
    if (Array.isArray(child)) {
      child = fromArray(child, factory)
    }
    else {
      child = factory(child)
    }
    parent.children.push(child)
    child.parent = parent
    return parent
  }
}

/**
 * Convert an **array-notation** tree into a tree.
 *
 * @param {Array} array Array-notation tree.
 * @param {Factory} factory Factory function.
 * @return {Node}
 */
export default function fromArray(array, factory) {
  const parent = array.shift()
  return array.reduce(reducerWith(factory), factory(parent))
}
