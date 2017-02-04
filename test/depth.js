import test from 'ava'
import depth from '../lib/depth'

test('return the depth of a leaf node', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = depth(root.children[0].children[0])

  t.is(ret, 2)
})

test('return the depth of an inner node', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = depth(root.children[0])

  t.is(ret, 1)
})

test('return the depth of a root node', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = depth(root)

  t.is(ret, 0)
})

test('return the depth of a lonely node', t => {
  const node = Tree('foo')
  const ret = depth(node)

  t.is(ret, 0)
})
