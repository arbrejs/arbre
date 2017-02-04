import test from 'ava'
import previousSibling from '../lib/previous-sibling'

test('return previous sibling', t => {
  const root = Tree(0, 1, 2)
  const first = root.children[0]
  const last = root.children[1]
  const prev = previousSibling(last)

  t.is(prev, first)
})

test('return undefined if no previous sibling', t => {
  const root = Tree(0, 1)
  const first = root.children[0]
  const prev = previousSibling(first)

  t.is(prev, undefined)
})

test('return undefined if no parent', t => {
  const node = Tree()
  const prev = previousSibling(node)

  t.is(prev, undefined)
})
