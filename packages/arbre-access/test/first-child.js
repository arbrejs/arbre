import test from 'ava'
import { firstChild } from '../lib/first-child'

test('return the first child', t => {
  const node = seed(null, 'foo')
  const first = firstChild(node)

  t.is(first, node.children[0])
})

test('return undefined if no children', t => {
  const node = seed()
  const first = firstChild(node)

  t.is(first, undefined)
})
