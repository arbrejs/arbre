import test from 'ava'
import grapes from '../'

test('node is deep equal to itself', t => {
  const node = grapes(1)

  t.true(node.deepEquals(node))
})

test('nodes are deep equal at a structural level', t => {
  const node1 = grapes({ type: 'foo', children: [ { type: 'bar' } ] })
  const node2 = grapes({ type: 'foo', children: [ { type: 'bar' } ] })

  t.true(node1.equals(node2))
})
