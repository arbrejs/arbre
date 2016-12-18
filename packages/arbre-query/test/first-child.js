import test from 'ava'
import { firstChild } from '../index'

test('return the first child', t => {
  const node = Tree(null, 'foo')
  const first = firstChild(node)

  t.is(first, node.children[0])
})

test('return undefined if no children', t => {
  const node = Tree()
  const first = firstChild(node)

  t.is(first, undefined)
})
