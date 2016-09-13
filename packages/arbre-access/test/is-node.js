import test from 'ava'
import { isNode } from '../lib/is-node'

test('return true if value is node-like', t => {
  const node = seed()

  t.true(isNode(node))
})

test('return false if value is not', t => {
  const obj = { parent: null, children: {}}

  t.false(isNode(obj))
})
