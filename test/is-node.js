import test from 'ava'
import seed from './helpers/seed'
import { Node } from '../'

test('return true if instance of node', t => {
  const tree = seed()

  t.true(Node.isNode(tree))
})

test('return false if no instance of node', t => {
  const alike = { value: null, parent: null, children: [] }

  t.false(Node.isNode(alike))
})
