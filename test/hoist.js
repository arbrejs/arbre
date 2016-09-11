import test from 'ava'
import seed from './helpers/seed'

test('insert children just after itself', t => {
  const node = seed('foo', ['bar', 'baz'], 'qux')
  node.at(0).hoist()

  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore root node', t => {
  const node = seed()

  t.notThrows(() => node.hoist())
})
