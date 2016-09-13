import test from 'ava'
import { clone } from '../lib/clone'

test('clone a node', t => {
  const node = seed('foo')
  const clone = node.clone()

  t.not(clone, node)
  t.is(clone.value, node.value)
})

test('deep clone an object node value', t => {
  const node = seed({ foo: { bar: [] }})
  const clone = node.clone()

  t.not(clone.value, node.value)
  t.not(clone.value.foo, node.value.foo)
  t.not(clone.value.foo.bar, node.value.foo.bar)
  t.deepEqual(clone.value, node.value)
})
