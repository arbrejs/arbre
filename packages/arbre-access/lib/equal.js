import deepEqualObj from 'not-so-shallow'

export function equal(tree1, tree2) {
  if (null == tree1 && null == tree2) return false

  // TODO: simply deepEqual all properties ignoring parent and children
  // properties
  // trees are equal if their values are equal
  return deepEqualObj(tree1.value, tree2.value)
}
