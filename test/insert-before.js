import test from 'ava'
import insertBefore from '../lib/insert-before'

test('insert before a node', t => {
  const parent = Tree('foo', 'baz', 'qux')
  const node = parent.children[0]
  const target = Tree('bar')
  const ret = insertBefore(node, target)

  t.is(ret, target)
  t.deepEqual(node, Tree('foo', 'bar', 'baz', 'qux'))
})

test('ignore orphan node', t => {
  const node = Tree()
  const target = Tree()
  const ret = insertBefore(node, target)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(target.parent, node)
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
