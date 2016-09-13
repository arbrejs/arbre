import test from 'ava'
import seed from './helpers/seed'

test('find a node', t => {
  const node = seed(null, 'foo')
  const found = node.find('foo')

  t.is(found, node.at(0))
})

test('find the first node', t => {
  const node = seed(null, 'foo', 'foo')
  const found = node.find('foo')

  t.is(found, node.at(0))
})

test('null if no node is found', t => {
  const node = seed(null, 'foo')
  const found = node.find('bar')

  t.is(found, null)
})

test('do not find itself', t => {
  const node = seed('foo', 'foo')
  const found = node.find('foo')

  t.not(node, found)
  t.is(found, node.at(0))
})
