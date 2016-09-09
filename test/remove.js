import test from 'ava'
import seed from './helpers/seed'

test('return the removed node', t => {
  const root = seed()
  const nodeAdded = root.add('foo')
  const nodeRemoved = root.remove('foo')

  t.is(nodeAdded, nodeRemoved)
})

test('remove a child', t => {
  const root = seed()
  const childNode = root.add('foo')
  root.remove(childNode)

  t.true(childNode.isRoot)
  t.is(root.length, 0)
})

test('remove a child by value', t => {
  const root = seed()
  const childNode = root.add('foo')
  root.remove('foo')

  t.true(childNode.isRoot)
  t.is(root.length, 0)
})

test('remove the first child found with the given value', t => {
  const root = seed()
  const childNode = root.add('foo')
  const otherNode = root.add('foo')
  root.remove('foo')

  t.true(childNode.isRoot)
  t.is(root.length, 1)
  t.is(root.at(0), otherNode)
})

test('remove itself when no node is specified', t => {
  const root = seed()
  const childNode = root.add('foo')
  childNode.remove()

  t.true(childNode.isRoot)
  t.is(root.length, 0)
})
