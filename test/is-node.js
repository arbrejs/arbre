import test from 'ava'
import seed from './helpers/seed'
import Node from '../lib/node'

test('return true if instance of node', t => {
  const node = seed()

  t.true(Node.isNode(node))
})

test('return false if not instance of node', t => {
  const obj = { value: null, parent: null, children: [] }

  t.false(Node.isNode(obj))
})
