import test from 'ava'
import { isLeaf } from '../lib/is-leaf'

test('return true if node does not have children', t => {
  const node = seed()
  const ret = isLeaf(node)

  t.true(ret)
})

test('return false if node has children', t => {
  const node = seed(null, 'foo')
  const ret = isLeaf(node)

  t.false(ret)
})
