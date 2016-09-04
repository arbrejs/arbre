import test from 'ava'
import grapes, { Node } from '../'

test('add a node', t => {
  const tree = grapes()
  tree.add(grapes(1))

  t.true(tree.at(0) instanceof Node)
  t.is(tree.at(0).value, 1)
})

test('add a value', t => {
  const tree = grapes()
  tree.add(1)

  t.true(tree.at(0) instanceof Node)
  t.is(tree.at(0).value, 1)
})

test('return the new child', t => {
  const tree = grapes()
  const nodeRef = tree.add(1)

  t.is(tree.at(0), nodeRef)
})
