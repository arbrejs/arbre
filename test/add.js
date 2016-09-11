import test from 'ava'
import seed from './helpers/seed'
import Node from '../lib/node'

test('add a node', t => {
  const node = seed()
  const child = node.add(new Node('foo'))

  t.is(node.at(0), child)
  t.is(child.value, 'foo')
})

test('add a value', t => {
  const node = seed()
  const child = node.add('foo')

  t.is(node.at(0), child)
  t.true(child instanceof Node)
  t.is(child.value, 'foo')
})

test('add a nil value', t => {
  const node = seed()
  const child = node.add()

  t.is(node.at(0), child)
  t.true(child instanceof Node)
  t.is(child.value, undefined)
})

test('move an existing node', t => {
  const node = seed()
  const child1 = node.add('foo')
  const child2 = child1.add('bar')
  const child3 = node.add(child2)

  t.is(child1, node.at(0))
  t.is(child1.length, 0)
  t.is(child3, node.at(1))
  t.is(child1.value, 'foo')
  t.is(child2.value, 'bar')
})

test('do not add itself', t => {
  const node = seed()
  const child = node.add(node)

  t.is(node, child)
  t.not(node.parent, node)
})
