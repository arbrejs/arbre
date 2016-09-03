import test from 'ava'
import grapes from '../'

test('deep clone a node value', t => {
  const node = grapes({ deep: { property: { bar: 'baz' }}})
  const cloneNode = node.clone()

  t.not(node, cloneNode)
  t.deepEqual(node.value, cloneNode.value)
})

test('clone a node primitive value', t => {
  const node = grapes(1)
  const cloneNode = node.clone()

  t.not(node, cloneNode)
  t.is(node.value, cloneNode.value)
})
