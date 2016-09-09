import test from 'ava'
import seed from './helpers/seed'

test('return true if node does not have children', t => {
  const tree = seed()
  t.true(tree.isLeaf)
})

test('return false if node has children', t => {
  const tree = seed(null, 'foo')
  t.false(tree.isLeaf)
})
