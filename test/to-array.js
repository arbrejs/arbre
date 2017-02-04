import test from 'ava'
import toArray from '../lib/to-array'

test('convert to an array', t => {
  const root = Tree(0, [1, [2, 3]], [4, 5])
  const array = toArray(root)

  t.deepEqual(array, [0, [1, [2, 3]], [4, 5]])
})
