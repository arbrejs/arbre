import test from 'ava'
import seed from './helpers/seed'

test('insert at given index', t => {
  const node = seed('foo', 'bar', 'qux')
  const insert = seed('baz')
  insert.insertAt(node, 1)

  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore root node', t => {
  const root = seed()
  const insert = seed()
  insert.insertAt(root, 0)

  t.is(root.length, 0)
  t.not(insert.parent, root)
})

test('ignore out of bounds indices', t => {
  const node = seed()

  t.notThrows(() => seed().insertAt(node, -1))
  t.notThrows(() => seed().insertAt(node, 1))
  t.is(node.length, 0)
})

test('do not insert itself', t => {
  const node = seed()
  node.insertAt(node, 0)

  t.is(node.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => seed().insertAt())
})
