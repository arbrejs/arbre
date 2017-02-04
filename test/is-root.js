import test from 'ava'
import isRoot from '../lib/is-root'

test('return true if node has no parent', t => {
  const node = Tree()
  const ret = isRoot(node)

  t.true(ret)
})

test('return false if node has a parent', t => {
  const root = Tree(0, 1)
  const child = root.children[0]
  const ret = isRoot(child)

  t.false(ret)
})
