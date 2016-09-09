import test from 'ava'
import seed from './helpers/seed'

test('insert at the given index', t => {
  const root = seed('foo', 'bar', 'qux')
  const node = seed('baz')
  node.insertAt(root, 1)

  t.is(root.children.length, 3)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'baz')
  t.is(root.at(2).value, 'qux')
})

test('ignore an non-existing parent', t => {
  const node = seed()
  t.notThrows(() => node.insertAt())
})

test('ignore out of bounds indices', t => {
  const root = seed()
  const node = root.add(1)

  t.notThrows(() => node.insertAt(root, -1))
  t.notThrows(() => node.insertAt(root, 1))
})

test('do not insert itself', t => {
  const root = seed()
  const node = root.add(1)
  node.insertAt(node, 0)

  t.not(node.parent, node)
})
