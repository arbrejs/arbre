import test from 'ava'
import fromObject from '../lib/from-object'

test('create a tree', t => {
  const node = fromObject({
    value: 'foo',
    children: [
      {
        value: 'bar',
        children: [
          { value: 'baz' },
          { value: 'qux' }
        ]
      },
      {
        value: 'quux',
        children: [
          { value: 'corge' }
        ]
      }
    ]
  })

  t.deepEqual(node, Tree(
    'foo', [
      'bar',
      'baz',
      'qux'
    ], [
      'quux',
      'corge'
    ]
  ))
})
