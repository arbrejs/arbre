import test from 'ava'
import isFirstSibling from '../lib/is-first-sibling'

test('return true if it is the first sibling', t => {
  const root = Tree(0, 1, 2)
  const node = root.children[0]
  const ret = isFirstSibling(node)

  t.true(ret)
})

test('return false if it is not the first sibling', t => {
  const root = Tree(0, 1, 2)
  const node = root.children[1]
  const ret = isFirstSibling(node)

  t.false(ret)
})

test('return true if it is the root', t => {
  const node = Tree()
  const ret = isFirstSibling(node)

  t.true(ret)
})

test('return true if it is the only child', t => {
  const root = Tree(0, 1)
  const node = root.children[0]
  const ret = isFirstSibling(node)

  t.true(ret)
})
