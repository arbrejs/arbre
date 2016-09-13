import test from 'ava'
import { isRoot } from '../lib/is-root'

test('return true if node has no parent', t => {
  const node = seed()

  t.true(isRoot(node))
})

test('return false if node has a parent', t => {
  const node = seed(null, 'foo')
  const child = node.children[0]

  t.false(isRoot(child))
})
