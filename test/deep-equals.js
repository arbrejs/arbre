import test from 'ava'
import seed from './helpers/seed'

test('nodes are deep equal at a structural level', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo', 'bar')

  t.true(node1.equals(node2))
})

test('node is equal to itself', t => {
  const node = seed('foo')

  t.true(node.deepEquals(node))
})

test('nodes are not equal if children count is not the same', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo', 'bar', 'baz')

  t.false(node1.deepEquals(node2))
})
