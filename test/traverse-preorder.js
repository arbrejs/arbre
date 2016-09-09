import test from 'ava'
import seed from './helpers/seed'

test('traverse depth first pre-order', t => {
  const root = seed(1, [2, [3, 4]], [5, [6]])
  const values = []
  root.traversePreorder(node => values.push(node.value))

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})
