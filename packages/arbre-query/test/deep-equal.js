import test from 'ava'
import { deepEqual } from '../index'

test('nodes are deep equal at a structural level', t => {
  const node1 = Tree('foo', 'bar')
  const node2 = Tree('foo', 'bar')
  const ret = deepEqual(node1, node2)

  t.true(ret)
})

test('node is equal to itself', t => {
  const node = Tree('foo')
  const ret = deepEqual(node, node)

  t.true(ret)
})

test('nodes are not equal if children count is not the same', t => {
  const node1 = Tree('foo', 'bar')
  const node2 = Tree('foo', 'bar', 'baz')
  const ret = deepEqual(node1, node2)

  t.false(ret)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = deepEqual()
    t.false(ret)
  })
})
