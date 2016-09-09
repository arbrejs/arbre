import test from 'ava'
import seed from './helpers/seed'

test('convert a tree to an object', t => {
  const obj = {
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  }
  const tree = seed(obj)

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
  const tree = seed(obj)

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
  const tree = seed(obj)

  t.deepEqual(obj, tree.toObject())
})
