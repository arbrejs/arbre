import test from 'ava'
import { clone } from '../index'

test('clone a node', t => {
  const node = Tree('foo')
  const ret = clone(Tree, node)

  t.not(ret, node)
  t.deepEqual(ret, node)
})

test('clone a node recursively', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = clone(Tree, node)

  t.deepEqual(ret, node)
  t.not(ret.children[0], node.children[0])
  t.is(ret.children[0].parent, ret)
  t.not(ret.children[0].children[0], node.children[0].children[0])
  t.is(ret.children[0].children[0].parent, ret.children[0])
})
