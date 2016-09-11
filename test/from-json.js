import test from 'ava'
import seed from './helpers/seed'
import Node from '../lib/node'

test('create a tree', t => {
  const node = Node.fromJSON(JSON.stringify({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }))

  t.deepEqual(node, seed({ type: 'foo' }, { type: 'bar' }))
})

test('create a nested tree', t => {
  const node = Node.fromJSON(JSON.stringify({
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

  t.deepEqual(node, seed(
    { type: 'foo' }, [
      { type: 'bar' }, [
        { type: 'baz' }, [
          { type: 'qux' }
        ]
      ]
    ]
  ))
})

test('create a complex tree', t => {
  const node = Node.fromJSON(JSON.stringify({
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

  t.deepEqual(node, seed(
    { type: 'foo' }, [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ], [
      { type: 'quux' },
      { type: 'corge' }
    ]
  ))
})
