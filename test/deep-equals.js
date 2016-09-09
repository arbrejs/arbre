import test from 'ava'
import seed from './helpers/seed'

test('node is deep equal to itself', t => {
  const node = seed('foo')
  t.true(node.deepEquals(node))
})

test('nodes are deep equal at a structural level', t => {
  const node1 = seed('foo', 'bar')
  const node2 = seed('foo', 'bar')
  t.true(node1.equals(node2))
})
