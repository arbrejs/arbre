import test from 'ava'
import { fromArray } from '../index'

test('create a tree', t => {
  const node = fromArray(seed, [
    { type: 'foo' }, [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ], [
      { type: 'quux' },
      { type: 'corge' }
    ]
  ])

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
