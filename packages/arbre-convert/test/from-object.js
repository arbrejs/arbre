import test from 'ava'
import { fromObject } from '../index'

test('create a tree', t => {
  const node = fromObject(Tree, {
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

  t.deepEqual(node, Tree(
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

test('accept a custom children key', t => {
  const node = fromObject(Tree, {
    type: 'foo',
    belovedChildren: [
      {
        type: 'bar',
        belovedChildren: [
          { type: 'baz' },
          { type: 'qux' }
        ]
      },
      {
        type: 'quux',
        belovedChildren: [
          { type: 'corge' }
        ]
      }
    ]
  }, 'belovedChildren')

  t.deepEqual(node, Tree(
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
