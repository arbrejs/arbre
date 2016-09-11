import test from 'ava'
import seed from './helpers/seed'

test('filter with predicate', t => {
  const node = seed('foo', 'bar', 'baz', 'qux')
  const filtered = node.filter(node => ('baz' !== node.value))

  t.is(filtered, node)
  t.deepEqual(filtered, seed('foo', 'bar', 'qux'))
})

test('return null if no node statisfy predicate', t => {
  const node = seed('foo', 'bar', 'baz', 'qux')
  const filtered = node.filter(node => false)

  t.is(filtered, null)
})

test('do nothing if no predicate', t => {
  const node = seed('foo', 'bar', 'baz', 'qux')
  const filtered = node.filter()

  t.is(filtered, node)
  t.deepEqual(filtered, node)
})
