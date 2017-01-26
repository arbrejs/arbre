import test from 'ava'
import isOnlyChild from '../lib/is-only-child'

test('return true if node is the only child', t => {
  const root = Tree(null, 'foo')
  const node = root.children[0]
  const ret = isOnlyChild(node)

  t.true(ret)
})

test('return false if node is not the only child', t => {
  const root = Tree(null, 'foo', 'bar')
  const node = root.children[0]
  const ret = isOnlyChild(node)

  t.false(ret)
})

test('return true if node is the root', t => {
  const node = Tree()
  const ret = isOnlyChild(node)

  t.true(ret)
})
