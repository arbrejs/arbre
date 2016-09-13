import test from 'ava'
import { isLeaf } from '../lib/is-leaf'

test('return true if node does not have children', t => {
  const node = seed()

  t.true(isLeaf(node))
})

test('return false if node has children', t => {
  const node = seed(null, 'foo')

  t.false(isLeaf(node))
})
