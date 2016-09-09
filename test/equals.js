import test from 'ava'
import seed from './helpers/seed'

test('node is equal to itself', t => {
  const node = seed('foo')
  t.true(node.equals(node))
})

test('nodes are equal with similar values', t => {
  const node1 = seed('foo')
  const node2 = seed('foo')
  t.true(node1.equals(node2))
})

test('nodes are equal with deep similar values', t => {
  const node1 = seed({ deep: { property: { bar: 'baz' }}})
  const node2 = seed({ deep: { property: { bar: 'baz' }}})
  t.true(node1.equals(node2))
})

test('nodes are equal with similar primitive values', t => {
  const node1 = seed('foo')
  const node2 = seed('foo')
  t.true(node1.equals(node2))
})

test('do not check structural equality', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo')
  t.true(node1.equals(node2))
})
