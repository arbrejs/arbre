import test from 'ava'
import seed from './helpers/seed'

test('find a node', t => {
  const root = seed(null, 'foo')
  const node = root.find('foo')

  t.is(root.at(0), node)
})

test('find the first node', t => {
  const root = seed(null, 'foo', 'foo')
  const node = root.find('foo')

  t.is(root.at(0), node)
})

test('null if no node is found', t => {
  const root = seed(null, 'foo')
  const node = root.find('bar')

  t.is(node, null)
})

test('do not find itself', t => {
  const root = seed('foo', 'foo')
  const node = root.find('foo')

  t.not(root, node)
})
