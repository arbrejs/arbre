import test from 'ava'
import seed from './helpers/seed'

test('return itself', t => {
  const node1 = seed()
  const node2 = node1.mapValues(value => value)

  t.is(node1, node2)
})

test('mutate values', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' })
  node.mapValues(value => {
    value.type = 'baz'
  })

  t.deepEqual(node, seed({ type: 'baz' }, { type: 'baz' }))
})

test('replace values when not null is returned', t => {
  const node = seed('foo', 'bar')
  node.mapValues(value => {
    if ('foo' === value) return 'baz'
    if ('bar' === value) return 'qux'
  })

  t.deepEqual(node, seed('baz', 'qux'))
})

test('replace has precedence over mutation', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' })
  node.mapValues(value => {
    value.type = 'baz'
    return { type: 'qux' }
  })

  t.deepEqual(node, seed({ type: 'qux' }, { type: 'qux' }))
})

test('remove node when null is returned', t => {
  const node = seed('foo', ['bar', 'baz'], 'qux')
  node.mapValues(value => ('bar' === value ? null : value))

  t.deepEqual(node, seed('foo', 'qux'))
})
