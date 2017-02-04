import { cloneNode } from './util'

/**
 * Convert an **array-notation** tree into a `Node` tree.
 *
 * @param {Array} array Array-notation tree.
 * @param {Creator} [creator=cloneNode] Function that creates new node object.
 * @return {Node}
 */
export default function fromArray(array, creator = cloneNode) {
  const parent = array.shift()
  return array.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromArray(child, creator)
    }
    else {
      child = creator(child)
    }
    parent.children.push(child)
    child.parent = parent
    return parent
  }, creator(parent))
}
