import test from 'ava'
import { fromArray } from '../lib/from-array'

test('create a tree', t => {
  const node = fromArray([
    { type: 'foo' }, [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ], [
      { type: 'quux' },
      { type: 'corge' }
    ]
  ], seedCreate)

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
