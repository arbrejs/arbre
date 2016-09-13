import test from 'ava'
import { previousSibling } from '../lib/previous-sibling'

test('return previous sibling', t => {
  const node = seed(null, 'foo', 'bar')
  const first = node.children[0]
  const last = node.children[1]
  const prev = previousSibling(last)

  t.is(prev, first)
})

test('return undefined if no previous sibling', t => {
  const node = seed(null, 'foo')
  const first = node.children[0]
  const prev = previousSibling(first)

  t.is(prev, undefined)
})

test('return undefined if no parent', t => {
  const node = seed()
  const prev = previousSibling(node)

  t.is(prev, undefined)
})
