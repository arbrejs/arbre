import test from 'ava'
import { fromObject } from '../lib/from-object'

test('create a tree', t => {
  const node = fromObject({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }, seedCreate)

  t.deepEqual(node, seed({ type: 'foo' }, { type: 'bar' }))
})

test('create a nested tree', t => {
  const node = fromObject({
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
  }, seedCreate)

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
  const node = fromObject({
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
  }, seedCreate)

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
