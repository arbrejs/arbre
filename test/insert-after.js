import test from 'ava'
import seed from './helpers/seed'

test('insert after a node', t => {
  const node = seed('foo', 'bar', 'qux')
  const after = node.at(0)
  seed('baz').insertAfter(after)

  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore root node', t => {
  const root = seed()
  const insert = seed()
  insert.insertAfter(root)

  t.is(root.length, 0)
  t.not(insert.parent, root)
})

test('do not insert after root node', t => {
  const root = seed()
  const insert = seed()
  insert.insertAfter(root)

  t.is(root.length, 0)
  t.not(insert.parent, root)
})

test('do not insert itself', t => {
  const node = seed()
  node.insertAfter(node)

  t.is(node.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => seed().insertAfter())
})
