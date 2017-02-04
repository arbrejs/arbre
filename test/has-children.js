import test from 'ava'
import hasChildren from '../lib/has-children'

test('return true if the node has at least a child', t => {
  const root = Tree(0, 1)
  const ret = hasChildren(root)

  t.true(ret)
})

test('return false if the node does not have any child', t => {
  const node = Tree()
  const ret = hasChildren(node)

  t.false(ret)
})
