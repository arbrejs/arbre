import test from 'ava'
import { nextSibling } from '../index'

test('return next sibling', t => {
  const node = Tree(null, 'foo', 'bar')
  const first = node.children[0]
  const last = node.children[1]
  const next = nextSibling(first)

  t.is(next, last)
})

test('return undefined if no next sibling', t => {
  const node = Tree(null, 'foo')
  const last = node.children[0]
  const next = nextSibling(last)

  t.is(next, undefined)
})

test('return undefined if no parent', t => {
  const node = Tree()
  const next = nextSibling(node)

  t.is(next, undefined)
})
