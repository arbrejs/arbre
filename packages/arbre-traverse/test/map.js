import test from 'ava'
import { map } from '../lib/map'

test('mutate nodes', t => {
  const root = seed({ type: 'foo' }, { type: 'bar' })
  const ret = map(root, node => {
    node.value.type = 'baz'
  })

  t.is(ret, root)
  t.deepEqual(root, seed({ type: 'baz' }, { type: 'baz' }))
})

test('replace node when iteratee returns a new one', t => {
  const root = seed('foo', 'bar')
  const ret = map(root, node => {
    if ('bar' === node.value) return seed('baz', 'qux', 'corge')
  })

  t.is(ret, root)
  t.deepEqual(root, seed('foo', ['baz', 'qux', 'corge']))
})

test('remove node when iteratee returns null', t => {
  const root = seed('foo', 'bar', 'baz', 'qux')
  const ret = map(root, node => ('baz' === node.value ? null : node))

  t.is(ret, root)
  t.deepEqual(root, seed('foo', 'bar', 'qux'))
})
