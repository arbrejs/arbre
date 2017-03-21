import test from 'ava'
import filter from '../lib/filter'

test('filter with predicate', t => {
  const root = Tree(0, 1, 2, 3)
  const filtered = filter(root, node => (2 !== node.value))

  t.is(filtered, root)
  t.deepEqual(filtered, Tree(0, 1, 3))
})

test('return null if no node statisfy predicate', t => {
  const root = Tree(0, 1, 2, 3)
  const filtered = filter(root, node => false)

  t.is(filtered, null)
})
