import test from 'ava'
import seed from './helpers/seed'

test('nodes are equal with similar immutable values', t => {
  const node1 = seed('foo')
  const node2 = seed('foo')

  t.true(node1.equals(node2))
})

test('nodes are equal with similar values', t => {
  const node1 = seed({ foo: { bar: 'baz' }})
  const node2 = seed({ foo: { bar: 'baz' }})

  t.true(node1.equals(node2))
})

test('node is equal to itself', t => {
  const node = seed('foo')

  t.true(node.equals(node))
})

test('do not check structural equality', t => {
  const node1 = seed('foo')
  const node2 = seed('foo', 'bar')

  t.true(node1.equals(node2))
})
