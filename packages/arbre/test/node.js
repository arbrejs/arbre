import test from 'ava'
import { Node } from '../lib/node'

test('mix props into node', t => {
  const node = new Node({ foo: 'bar' })

  t.is(node.foo, 'bar')
})

test('clone props', t => {
  const props = { foo: { bar: 'baz' }}
  const node = new Node(props)

  t.not(node.foo, props.foo)
  t.deepEqual(node.foo, props.foo)
})
