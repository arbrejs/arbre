import test from 'ava'
import { length } from '../lib/length'

test('return number of children', t => {
  const node = seed(null, 'foo', 'bar')
  const ret = length(node)

  t.is(ret, 2)
})

test('return 0 when no children', t => {
  const node = seed()
  const ret = length(node)

  t.is(ret, 0)
})
