import test from 'ava'
import { size } from '../index'

test('return total number of nodes', t => {
  const node = seed('foo', ['bar', ['baz', 'qux']], ['quux', 'corge'])
  const ret = size(node)

  t.is(ret, 6)
})

test('return 1 if no children', t => {
  const node = seed()
  const ret = size(node)

  t.is(ret, 1)
})
