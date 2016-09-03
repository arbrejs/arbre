import test from 'ava'
import grapes from '../'

test('node is equal to itself', t => {
  const node = grapes(1)

  t.true(node.equals(node))
})

test('nodes are equal with similar values', t => {
  const node1 = grapes({ type: 'foo' })
  const node2 = grapes({ type: 'foo' })

  t.true(node1.equals(node2))
})

test('nodes are equal with deep similar values', t => {
  const node1 = grapes({ deep: { property: { bar: 'baz' }}})
  const node2 = grapes({ deep: { property: { bar: 'baz' }}})

  t.true(node1.equals(node2))
})

test('nodes are equal with similar primitive values', t => {
  const node1 = grapes(1)
  const node2 = grapes(1)

  t.true(node1.equals(node2))
})

test('do not check structural equality', t => {
  const node1 = grapes({ type: 'foo', children: [ { type: 'bar' } ] })
  const node2 = grapes({ type: 'foo', children: [] })

  t.true(node1.equals(node2))
})
