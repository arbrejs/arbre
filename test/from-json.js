import test from 'ava'
import { Node } from '../'

test('create a tree', t => {
  const root = Node.fromJSON(JSON.stringify({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }))

  t.is(root.value.type, 'foo')
  t.is(Object.keys(root.value).length, 1)
  t.deepEqual(root.at(0).value.type, 'bar')
})

test('create a nested tree', t => {
  const root = Node.fromJSON(JSON.stringify({
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
  }))

  t.is(root.value.type, 'foo')
  t.deepEqual(root.at(0).value.type, 'bar')
  t.deepEqual(root.at(0, 0).value.type, 'baz')
  t.deepEqual(root.at(0, 0, 0).value.type, 'qux')
})

test('create a complex tree', t => {
  const root = Node.fromJSON(JSON.stringify({
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
  }))

  t.is(root.value.type, 'foo')
  t.deepEqual(root.at(0).value.type, 'bar')
  t.deepEqual(root.at(0, 0).value.type, 'baz')
  t.deepEqual(root.at(0, 1).value.type, 'qux')
  t.deepEqual(root.at(1).value.type, 'quux')
  t.deepEqual(root.at(1, 0).value.type, 'corge')
})
