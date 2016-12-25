import deepEqualObj from 'not-so-shallow'

export default function equal(tree1, tree2) {
  if (null == tree1 && null == tree2) return false
  return deepEqualObj(tree1.value, tree2.value)
}
