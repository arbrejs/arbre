import test from 'ava'
import isLastSibling from '../lib/is-last-sibling'

test('return true if it is the last sibling', t => {
  const root = Tree(0, 1, 2)
  const node = root.children[1]
  const ret = isLastSibling(node)

  t.true(ret)
})

test('return false if it is not the last sibling', t => {
  const root = Tree(0, 1, 2)
  const node = root.children[0]
  const ret = isLastSibling(node)

  t.false(ret)
})

test('return true if it is the root', t => {
  const node = Tree()
  const ret = isLastSibling(node)

  t.true(ret)
})

test('return true if it is the only child', t => {
  const root = Tree(0, 1)
  const node = root.children[0]
  const ret = isLastSibling(node)

  t.true(ret)
})
