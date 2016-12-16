import test from 'ava'
import { insert } from '../index'

test('insert a node', t => {
  const node = seed()
  const child = seed('foo')
  const ret = insert(node, child)

  t.is(ret, child)
  t.is(node.children[0], child)
  t.is(child.value, 'foo')
})

test('move an existing node', t => {
  const node = seed(null, ['foo', 'bar'])
  const moved = node.children[0].children[0]
  const ret = insert(node, moved)

  t.is(ret, moved)
  t.deepEqual(node, seed(null, 'foo', 'bar'))
  t.is(moved, node.children[1])
})

test('ignore itself', t => {
  const node = seed()
  const ret = insert(node, node)

  t.is(ret, undefined)
  t.not(node.parent, node)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = insert()
    t.is(ret, undefined)
  })
})
