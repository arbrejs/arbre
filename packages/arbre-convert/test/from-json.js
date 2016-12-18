import test from 'ava'
import { fromJSON } from '../index'

test('create a tree', t => {
  const node = fromJSON(seed, JSON.stringify({
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
