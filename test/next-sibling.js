import test from 'ava'
import nextSibling from '../lib/next-sibling'

test('return next sibling', t => {
  const root = Tree(0, 1, 2)
  const first = root.children[0]
  const last = root.children[1]
  const next = nextSibling(first)

  t.is(next, last)
})

test('return null if no next sibling', t => {
  const root = Tree(0, 1)
  const last = root.children[0]
  const next = nextSibling(last)

  t.is(next, null)
})

test('return null if no parent', t => {
  const node = Tree(0)
  const next = nextSibling(node)

  t.is(next, null)
})
