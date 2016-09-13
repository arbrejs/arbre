import test from 'ava'
import { insertAt } from '../lib/insert-at'

test('insert at given index', t => {
  const node = seed('foo', 'bar', 'qux')
  const inserted = seed('baz')
  const ret = insertAt(node, inserted, 1)

  t.is(ret, inserted)
  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore out of lower-bound index', t => {
  const node = seed()

  t.notThrows(() => {
    const ret = insertAt(seed(), node, -1)
    t.false(ret)
    t.is(node.children.length, 0)
  })
})

test('ignore out of upper-bound index', t => {
  const node = seed()

  t.notThrows(() => {
    const ret = insertAt(seed(), node, 1)
    t.false(ret)
    t.is(node.children.length, 0)
  })
})

test('ignore itself', t => {
  const node = seed()
  const ret = insertAt(node, node, 0)

  t.false(ret)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertAt()
    t.false(ret)
  })
})
