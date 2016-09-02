import test from 'ava'
import grapes, { Node } from '../'

test('add a child', t => {
  const node = grapes()
  node.add(1)

  t.true(node.at(0) instanceof Node)
  t.is(node.at(0).value, 1)
})

test('return the new child', t => {
  const node = grapes()
  const nodeRef = node.add(1)

  t.is(node.at(0), nodeRef)
})
