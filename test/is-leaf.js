import test from 'ava'
import seed from './helpers/seed'

test('return true if node does not have children', t => {
  const node = seed()

  t.true(node.isLeaf)
})

test('return false if node has children', t => {
  const node = seed(null, 'foo')

  t.false(node.isLeaf)
})
