import test from 'ava'
import { isLeaf } from '../index'

test('return true if node does not have children', t => {
  const node = Tree()
  const ret = isLeaf(node)

  t.true(ret)
})

test('return false if node has children', t => {
  const node = Tree(null, 'foo')
  const ret = isLeaf(node)

  t.false(ret)
})
