import test from 'ava'
import { length } from '../lib/length'

test('return number of children', t => {
  const node = seed(null, 'foo', 'bar')

  t.is(length(node), 2)
})

test('return 0 when no children', t => {
  const node = seed()

  t.is(length(node), 0)
})
