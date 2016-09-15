import test from 'ava'
import { fromAncestors } from '../lib/from-ancestors'

test('create a tree', t => {
  const node = fromAncestors([
    [0, null, 'foo'],
    [1, 0, 'bar'],
    [2, 1, 'baz'],
    [3, 1, 'qux'],
    [4, 0, 'quux'],
    [5, 4, 'corge']
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
