import test from 'ava'
import seed from './helpers/seed'

test('traverse depth first post-order', t => {
  const root = seed(6, [3, [1, 2]], [5, [4]])
  const values = []
  root.traversePostorder(node => values.push(node.value))

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})
