import test from 'ava'
import { insertAt } from '../index'

test('insert at given index', t => {
  const node = Tree('foo', 'bar', 'qux')
  const inserted = Tree('baz')
  const ret = insertAt(node, inserted, 1)

  t.is(ret, inserted)
  t.deepEqual(node, Tree('foo', 'bar', 'baz', 'qux'))
})

test('ignore out of lower-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, -1)
    t.is(ret, undefined)
    t.is(node.children.length, 0)
  })
})

test('ignore out of upper-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, 1)
    t.is(ret, undefined)
    t.is(node.children.length, 0)
  })
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertAt(node, node, 0)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertAt()
    t.is(ret, undefined)
  })
})
