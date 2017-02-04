import test from 'ava'
import toArray from '../lib/to-array'

test('convert to an array', t => {
  const root = Tree('foo', ['bar', ['baz', 'qux']], ['quux', 'corge'])
  const array = toArray(root)

  t.deepEqual(array, ['foo', ['bar', ['baz', 'qux']], ['quux', 'corge']])
})
