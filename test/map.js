import test from 'ava'
import seed from './helpers/seed'

test('return itself', t => {
  const root1 = seed()
  const root2 = root1.map(node => node)

  t.is(root1, root2)
})

test('mutate nodes', t => {
  const root = seed('foo', 'bar')
  root.map(node => {
    if ('foo' === node.value) {
      node.value = 'baz'
    }
    else if ('bar' === node.value) {
      node.value = 'qux'
    }
  })

  t.is(root.value, 'baz')
  t.is(root.at(0).value, 'qux')
})

test('remove node when null is returned', t => {
  const root = seed('foo', 'bar', 'baz', 'qux')
  root.map(node => ('baz' === node.value ? null : node))

  t.is(root.children.length, 2)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'qux')
})
