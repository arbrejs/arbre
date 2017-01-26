import test from 'ava'
import path from '../lib/path'

test('return the path of a leaf node', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = path(node.children[0].children[0])

  t.deepEqual(ret, [node, node.children[0], node.children[0].children[0]])
})

test('return the path of an inner node', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = path(node.children[0])

  t.deepEqual(ret, [node, node.children[0]])
})

test('return the path of a root node', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = path(node)

  t.deepEqual(ret, [node])
})

test('return the path of a lonely node', t => {
  const node = Tree('foo')
  const ret = path(node)

  t.deepEqual(ret, [node])
})
