import test from 'ava'
import isSibling from '../lib/is-sibling'

test('return true if a node is a sibling', t => {
  const node = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = isSibling(
    node.children[0].children[0], node.children[0].children[1])

  t.is(ret, true)
})

test('return false if a node is a cousin', t => {
  const node = Tree('foo', ['bar', 'baz', 'qux'], ['quux', 'corge'])
  const ret = isSibling(
    node.children[0].children[0], node.children[1].children[0])

  t.is(ret, false)
})
