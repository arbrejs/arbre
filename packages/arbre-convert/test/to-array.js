import test from 'ava'
import { toArray } from '../index'

test('convert to an array', t => {
  const node = seed('foo', ['bar', ['baz', 'qux']], ['quux', 'corge'])
  const array = toArray(node)

  t.deepEqual(array, ['foo', ['bar', ['baz', 'qux']], ['quux', 'corge']])
})
