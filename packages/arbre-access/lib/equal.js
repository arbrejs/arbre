import deepEqualObj from 'not-so-shallow'

export function equal(tree1, tree2) {
  // shortcut for identity
  if (tree1 === tree2) return true

  // TODO: simply deepEqual all properties ignoring parent and children
  // properties
  // trees are equal if their values are equal
  return deepEqualObj(tree1.value, tree2.value)
}
