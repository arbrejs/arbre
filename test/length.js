import test from 'ava'
import seed from './helpers/seed'

test('return the number of children', t => {
  const root = seed(null, 'foo', 'bar')

  t.is(root.length, 2)
})

test('return 0 when no children', t => {
  const root = seed()

  t.is(root.length, 0)
})
