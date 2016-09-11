import test from 'ava'
import seed from './helpers/seed'

test('return number of children', t => {
  const node = seed(null, 'foo', 'bar')

  t.is(node.length, 2)
})

test('return 0 when no children', t => {
  const node = seed()

  t.is(node.length, 0)
})
