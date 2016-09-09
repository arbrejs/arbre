import test from 'ava'
import seed from './helpers/seed'

test('insert after the given node', t => {
  const root = seed('foo', 'bar', 'qux')
  const node = seed('baz')
  node.insertAfter(root.at(0))

  t.is(root.children.length, 3)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'baz')
  t.is(root.at(2).value, 'qux')
})

test('ignore root', t => {
  const root = seed('foo')
  const node = seed('bar')
  node.insertAfter(root)

  t.is(root.children.length, 0)
})
