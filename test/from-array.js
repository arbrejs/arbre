import test from 'ava'
import fromArray from '../lib/from-array'

test('create a tree', t => {
  const root = fromArray([0, [1, 2, 3], [4, 5]], Tree)

  t.deepEqual(root, Tree(0, [1, 2, 3], [4, 5]))
})
