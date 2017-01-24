import test from 'ava'
import { isRoot } from '../index'

test('return true if node has no parent', t => {
  const node = Tree()
  const ret = isRoot(node)

  t.true(ret)
})

test('return false if node has a parent', t => {
  const node = Tree(null, 'foo')
  const child = node.children[0]
  const ret = isRoot(child)

  t.false(ret)
})
