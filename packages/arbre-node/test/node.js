import test from 'ava'
import Node from '../lib/node'

test('set value', t => {
  const value = 'foo'
  const node = new Node(value)

  t.is(node.value, value)
})

test('clone value', t => {
  const value = { foo: { bar: 'baz' }}
  const node = new Node(value)

  t.not(node.value, value)
  t.not(node.value.foo, value.foo)
  t.deepEqual(node.value, value)
})

test('set undefined value by default', t => {
  const node = new Node()

  t.is(node.value, undefined)
})

test('set parent to null', t => {
  const node = new Node()

  t.is(node.parent, null)
})

test('set children to empty array', t => {
  const node = new Node()

  t.true(Array.isArray(node.children))
  t.is(node.children.length, 0)
})
