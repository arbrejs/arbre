import test from 'ava'
import { Node } from '../'

test('return the new child', t => {
  const tree = new Node()
  const node = tree.add(1)

  t.is(tree.at(0), node)
})

test('add a node', t => {
  const tree = new Node()
  tree.add(new Node(1))

  t.true(tree.at(0) instanceof Node)
  t.is(tree.at(0).value, 1)
})

test('add a value', t => {
  const tree = new Node()
  tree.add(1)

  t.true(tree.at(0) instanceof Node)
  t.is(tree.at(0).value, 1)
})

test('move an existing node', t => {
  const tree = new Node()
  const node = tree.add(1).add(2)
  tree.add(node)

  t.is(tree.at(0).value, 1)
  t.is(tree.at(1).value, 2)
})

test('do not add itself', t => {
  const tree = new Node()
  const node = tree.add(tree)

  t.is(tree, node)
  t.not(tree.parent, tree)
})
