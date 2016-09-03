import test from 'ava'
import grapes from '../'

test('return the removed node', t => {
  const node = grapes()
  const nodeAdded = node.add(1)
  const nodeRemoved = node.remove(1)

  t.is(nodeAdded, nodeRemoved)
})

test('remove a child', t => {
  const node = grapes()
  const childNode = node.add(1)
  node.remove(childNode)

  t.true(childNode.isRoot)
  t.is(node.length, 0)
})

test('remove a child by value', t => {
  const node = grapes()
  const childNode = node.add(1)
  node.remove(1)

  t.true(childNode.isRoot)
  t.is(node.length, 0)
})

test('remove the first child found with the given value', t => {
  const node = grapes()
  const childNode = node.add(1)
  const otherNode = node.add(1)
  node.remove(1)

  t.true(childNode.isRoot)
  t.is(node.length, 1)
  t.is(node.at(0), otherNode)
})

test('remove itself when no node is specified', t => {
  const node = grapes()
  const childNode = node.add(1)
  childNode.remove()

  t.true(childNode.isRoot)
  t.is(node.length, 0)
})
