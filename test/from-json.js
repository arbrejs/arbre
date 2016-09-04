import test from 'ava'
import { Node } from '../'

test('create a tree', t => {
  const tree = Node.fromJSON(JSON.stringify({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }))

  t.is(tree.value.type, 'foo')
  t.is(Object.keys(tree.value).length, 1)
  t.deepEqual(tree.at(0).value.type, 'bar')
})

test('create a nested tree', t => {
  const tree = Node.fromJSON(JSON.stringify({
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

  t.is(tree.value.type, 'foo')
  t.deepEqual(tree.at(0).value.type, 'bar')
  t.deepEqual(tree.at(0, 0).value.type, 'baz')
  t.deepEqual(tree.at(0, 0, 0).value.type, 'qux')
})

test('create a complex tree', t => {
  const tree = Node.fromJSON(JSON.stringify({
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

  t.is(tree.value.type, 'foo')
  t.deepEqual(tree.at(0).value.type, 'bar')
  t.deepEqual(tree.at(0, 0).value.type, 'baz')
  t.deepEqual(tree.at(0, 1).value.type, 'qux')
  t.deepEqual(tree.at(1).value.type, 'quux')
  t.deepEqual(tree.at(1, 0).value.type, 'corge')
})
