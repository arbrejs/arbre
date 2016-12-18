import test from 'ava'
import { mapValues } from '../index'

test('mutate values', t => {
  const root = Tree({ type: 'foo' }, { type: 'bar' })
  const ret = mapValues(root, (value, node) => {
    value.type = 'baz'
    // TODO: assert that values and node are correct
  })

  t.is(ret, root)
  t.deepEqual(root, Tree({ type: 'baz' }, { type: 'baz' }))
})

test('replace values when iteratee returns something', t => {
  const root = Tree('foo', 'bar')
  const ret = mapValues(root, value => {
    if ('foo' === value) return 'baz'
    if ('bar' === value) return 'qux'
  })

  t.is(ret, root)
  t.deepEqual(root, Tree('baz', 'qux'))
})

test('replace has precedence over mutation', t => {
  const root = Tree({ type: 'foo' }, { type: 'bar' })
  const ret = mapValues(root, value => {
    value.type = 'baz'
    return { type: 'qux' }
  })

  t.is(ret, root)
  t.deepEqual(root, Tree({ type: 'qux' }, { type: 'qux' }))
})

test('remove node when null is returned', t => {
  const root = Tree('foo', ['bar', 'baz'], 'qux')
  const ret = mapValues(root, value => ('bar' === value ? null : value))

  t.is(ret, root)
  t.deepEqual(root, Tree('foo', 'qux'))
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = mapValues()
    t.is(ret, undefined)
  })
})
