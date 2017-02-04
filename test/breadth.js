import test from 'ava'
import breadth from '../lib/breadth'

test('return the tree breadth of a leaf node', t => {
  const root = Tree('foo', 'bar', 'baz', 'qux')
  const ret = breadth(root.children[0])

  t.is(ret, 3)
})

test('return the tree breadth of an inner node', t => {
  const root = Tree('foo', ['bar', 'baz'], 'qux')
  const ret = breadth(root.children[0])

  t.is(ret, 2)
})

test('return the tree breadth of a root node', t => {
  const root = Tree('foo', 'bar', 'baz', 'qux')
  const ret = breadth(root)

  t.is(ret, 1)
})

test('return the tree breadth of a lonely node', t => {
  const node = Tree('foo')
  const ret = breadth(node)

  t.is(ret, 1)
})
