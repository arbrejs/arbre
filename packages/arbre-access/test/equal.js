import test from 'ava'
import { equal } from '../lib/equal'

test('nodes are equal with similar immutable values', t => {
  const node1 = seed('foo')
  const node2 = seed('foo')
  const ret = equal(node1, node2)

  t.true(ret)
})

test('nodes are equal with similar values', t => {
  const node1 = seed({ foo: { bar: 'baz' }})
  const node2 = seed({ foo: { bar: 'baz' }})
  const ret = equal(node1, node2)

  t.true(ret)
})

test('node is equal to itself', t => {
  const node = seed('foo')
  const ret = equal(node, node)

  t.true(ret)
})

test('do not check structural equality', t => {
  const node1 = seed('foo')
  const node2 = seed('foo', 'bar')
  const ret = equal(node1, node2)

  t.true(ret)
})
