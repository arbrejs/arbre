import test from 'ava'
import insertBefore from '../lib/insert-before'

test('insert before a node', t => {
  const node = Tree('foo', 'baz', 'qux')
  const before = node.children[0]
  const inserted = Tree('bar')
  const ret = insertBefore(inserted, before)

  t.is(ret, inserted)
  t.deepEqual(node, Tree('foo', 'bar', 'baz', 'qux'))
})

test('ignore orphan node', t => {
  const node = Tree()
  const inserted = Tree()
  const ret = insertBefore(inserted, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(inserted.parent, node)
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertBefore(node, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertBefore()
    t.is(ret, undefined)
  })
})
