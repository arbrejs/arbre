import test from 'ava'
import nextSibling from '../lib/next-sibling'

test('return next sibling', t => {
  const root = Tree(null, 'foo', 'bar')
  const first = root.children[0]
  const last = root.children[1]
  const next = nextSibling(first)

  t.is(next, last)
})

test('return undefined if no next sibling', t => {
  const root = Tree(null, 'foo')
  const last = root.children[0]
  const next = nextSibling(last)

  t.is(next, undefined)
})

test('return undefined if no parent', t => {
  const node = Tree()
  const next = nextSibling(node)

  t.is(next, undefined)
})
