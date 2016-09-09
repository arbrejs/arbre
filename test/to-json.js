import test from 'ava'
import seed from './helpers/seed'

test('convert a tree to JSON', t => {
  const obj = {
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }
  const tree = seed(obj)

  t.deepEqual(JSON.stringify(obj, null, 2), tree.toJSON())
})

test('convert a nested tree to JSON', t => {
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
  const tree = seed(obj)

  t.deepEqual(JSON.stringify(obj, null, 2), tree.toJSON())
})

test('convert a complex tree to JSON', t => {
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
  const tree = seed(obj)

  t.deepEqual(JSON.stringify(obj, null, 2), tree.toJSON())
})
