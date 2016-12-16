import test from 'ava'
import { mapValues } from '../lib/map-values'

test('mutate values', t => {
  const root = seed({ type: 'foo' }, { type: 'bar' })
  const ret = mapValues(root, (value, node) => {
    value.type = 'baz'
    // TODO: assert that values and node are correct
  })

  t.is(ret, root)
  t.deepEqual(root, seed({ type: 'baz' }, { type: 'baz' }))
})

test('replace values when iteratee returns something', t => {
  const root = seed('foo', 'bar')
  const ret = mapValues(root, value => {
    if ('foo' === value) return 'baz'
    if ('bar' === value) return 'qux'
  })

  t.is(ret, root)
  t.deepEqual(root, seed('baz', 'qux'))
})

test('replace has precedence over mutation', t => {
  const root = seed({ type: 'foo' }, { type: 'bar' })
  const ret = mapValues(root, value => {
    value.type = 'baz'
    return { type: 'qux' }
  })

  t.is(ret, root)
  t.deepEqual(root, seed({ type: 'qux' }, { type: 'qux' }))
})

test('remove node when null is returned', t => {
  const root = seed('foo', ['bar', 'baz'], 'qux')
  const ret = mapValues(root, value => ('bar' === value ? null : value))

  t.is(ret, root)
  t.deepEqual(root, seed('foo', 'qux'))
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = mapValues()
    t.is(ret, undefined)
  })
})
