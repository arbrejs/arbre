import deepEqualObj from 'not-so-shallow'

export function deepEqual(tree1, tree2) {
  if (null == tree1 && null == tree2) return false
  return deepEqualObj(tree1, tree2)
}
