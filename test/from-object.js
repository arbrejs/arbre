import test from 'ava'
import { Node } from '../'

test('create a tree', t => {
  const node = Node.fromObject({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  t.is(node.value.type, 'foo')
  t.is(Object.keys(node.value).length, 1)
  t.deepEqual(node.at(0).value.type, 'bar')
})

test('create a nested tree', t => {
  const node = Node.fromObject({
    type: 'foo',
    children: [
      {
        type: 'bar',
        children: [
          {
            type: 'baz',
            children: [
              { type: 'qux' }
            ]
          }
        ]
      }
    ]
  })

  t.is(node.value.type, 'foo')
  t.deepEqual(node.at(0).value.type, 'bar')
  t.deepEqual(node.at(0, 0).value.type, 'baz')
  t.deepEqual(node.at(0, 0, 0).value.type, 'qux')
})

test('create a complex tree', t => {
  const node = Node.fromObject({
    type: 'foo',
    children: [
      {
        type: 'bar',
        children: [
          { type: 'baz' },
          { type: 'qux' }
        ]
      },
      {
        type: 'quux',
        children: [
          { type: 'corge' }
        ]
      }
    ]
  })

  t.is(node.value.type, 'foo')
  t.deepEqual(node.at(0).value.type, 'bar')
  t.deepEqual(node.at(0, 0).value.type, 'baz')
  t.deepEqual(node.at(0, 1).value.type, 'qux')
  t.deepEqual(node.at(1).value.type, 'quux')
  t.deepEqual(node.at(1, 0).value.type, 'corge')
})
