import test from 'ava'
import { toAncestors } from '../lib/to-ancestors'

test('convert to an ancestors list', t => {
  const root = seed('foo', 'bar', ['baz', 'qux'])
  const ancestors = toAncestors(root)

  t.deepEqual(ancestors, [
    [0, null, 'foo'],
    [1, 0, 'bar'],
    [2, 0, 'baz'],
    [3, 2, 'qux']
  ])
})
