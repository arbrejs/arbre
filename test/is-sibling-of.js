import test from 'ava'
import isSiblingOf from '../lib/is-sibling-of'

test('return true if a node is a sibling', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = isSiblingOf(
    root.children[0].children[0], root.children[0].children[1])

  t.is(ret, true)
})

test('return false if a node is a cousin', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'], ['quux', 'corge'])
  const ret = isSiblingOf(
    root.children[0].children[0], root.children[1].children[0])

  t.is(ret, false)
})
