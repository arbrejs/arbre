import deepEqualObj from 'not-so-shallow'

export function deepEqual(tree1, tree2) {
  return deepEqualObj(tree1, tree2)
}
