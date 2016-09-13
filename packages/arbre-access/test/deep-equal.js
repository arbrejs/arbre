import test from 'ava'
import { deepEqual } from '../lib/deep-equal'

test('nodes are deep equal at a structural level', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo', 'bar')

  t.true(deepEqual(node1, node2))
})

test('node is equal to itself', t => {
  const node = seed('foo')

  t.true(deepEqual(node, node))
})

test('nodes are not equal if children count is not the same', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo', 'bar', 'baz')

  t.false(deepEqual(node1, node2))
})
