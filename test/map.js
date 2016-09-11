import test from 'ava'
import seed from './helpers/seed'

test('return itself', t => {
  const node1 = seed()
  const node2 = node1.map(node => node)

  t.is(node1, node2)
})

test('mutate nodes', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' })
  node.map(node => {
    node.value.type = 'baz'
  })

  t.deepEqual(node, seed({ type: 'baz' }, { type: 'baz' }))
})

test('replace nodes when new nodes are returned', t => {
  const node = seed('foo', 'bar')
  const newNode = node.map(node => {
    if ('bar' === node.value) return seed('baz', 'qux', 'corge')
  })

  t.is(newNode, node)
  t.deepEqual(node, seed('foo', ['baz', 'qux', 'corge']))
})

test('remove node when null is returned', t => {
  const root = seed('foo', 'bar', 'baz', 'qux')
  root.map(node => ('baz' === node.value ? null : node))

  t.is(root.children.length, 2)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'qux')
})
