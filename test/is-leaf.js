import test from 'ava'
import isLeaf from '../lib/is-leaf'

test('return true if node does not have children', t => {
  const node = Tree()
  const ret = isLeaf(node)

  t.true(ret)
})

test('return false if node has children', t => {
  const root = Tree(0, 1)
  const ret = isLeaf(root)

  t.false(ret)
})
