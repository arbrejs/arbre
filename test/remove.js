import test from 'ava'
import seed from './helpers/seed'

test('remove a child', t => {
  const node = seed()
  const child = node.add('foo')
  node.remove(child)

  t.true(child.isRoot)
  t.is(node.length, 0)
})

test('return the removed node', t => {
  const node = seed()
  const added = node.add('foo')
  const removed = node.remove('foo')

  t.is(added, removed)
})

test('remove a child by value', t => {
  const node = seed()
  const child = node.add('foo')
  node.remove('foo')

  t.true(child.isRoot)
  t.is(node.length, 0)
})

test('remove first child found with given value', t => {
  const node = seed()
  const child = node.add('foo')
  const otherNode = node.add('foo')
  node.remove('foo')

  t.true(child.isRoot)
  t.is(node.length, 1)
  t.is(node.at(0), otherNode)
})

test('remove itself when no node is specified', t => {
  const node = seed()
  const child = node.add('foo')
  child.remove()

  t.true(child.isRoot)
  t.is(node.length, 0)
})

test('ignore orphan node', t => {
  const node = seed()
  const child = node.add('foo')
  child.remove()

  t.notThrows(() => node.remove(child))
})

test('ignore when self-removing root', t => {
  const node = seed()

  t.notThrows(() => node.remove())
})

test('ignore no argument', t => {
  t.notThrows(() => seed().remove())
})
