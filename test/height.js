import test from 'ava'
import height from '../lib/height'

test('return the height of a root node', t => {
  const node = Tree('foo', ['bar', ['baz', 'qux']])
  const ret = height(node)

  t.is(ret, 3)
})

test('return the height of an inner node', t => {
  const node = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = height(node.children[0])

  t.is(ret, 1)
})

test('return the height of a leaf node', t => {
  const node = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = height(node.children[0].children[0])

  t.is(ret, 0)
})

test('return the height of a lonely node', t => {
  const node = Tree('foo')
  const ret = height(node)

  t.is(ret, 0)
})
