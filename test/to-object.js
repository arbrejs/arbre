import test from 'ava'
import grapes from '../'

test('convert a tree to an object', t => {
  const obj = {
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }
  const tree = grapes(obj)

  t.deepEqual(obj, tree.toObject())
})

test('convert a nested tree to an object', t => {
  const obj = {
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
  }
  const tree = grapes(obj)

  t.deepEqual(obj, tree.toObject())
})

test('convert a complex tree to an object', t => {
  const obj = {
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
  }
  const tree = grapes(obj)

  t.deepEqual(obj, tree.toObject())
})
