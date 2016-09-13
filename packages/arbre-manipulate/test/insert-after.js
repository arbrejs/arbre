import test from 'ava'
import { insertAfter } from '../lib/insert-after'

test('insert after a node', t => {
  const node = seed('foo', 'bar', 'qux')
  const after = node.children[0]
  const inserted = seed('baz')
  const ret = insertAfter(inserted, after)

  t.is(ret, inserted)
  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore orphan node', t => {
  const node = seed()
  const inserted = seed()
  const ret = insertAfter(inserted, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(inserted.parent, node)
})

test('ignore itself', t => {
  const node = seed()
  const ret = insertAfter(node, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertAfter()
    t.is(ret, undefined)
  })
})
