import test from 'ava'
import seed from './helpers/seed'

test('insert before a node', t => {
  const node = seed('foo', 'baz', 'qux')
  const before = node.at(0)
  const insert = seed('bar')
  insert.insertBefore(before)

  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore root node', t => {
  const root = seed()
  const insert = seed()
  insert.insertBefore(root)

  t.is(root.length, 0)
  t.not(insert.parent, root)
})

test('do not insert after root node', t => {
  const root = seed()
  const insert = seed()
  insert.insertBefore(root)

  t.is(root.length, 0)
  t.not(insert.parent, root)
})

test('do not insert itself', t => {
  const node = seed()
  node.insertBefore(node)

  t.is(node.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => seed().insertBefore())
})
