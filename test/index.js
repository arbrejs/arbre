import test from 'ava'
import seed from './helpers/seed'

test('return index in the parent node', t => {
  const root = seed(null, 'foo', 'bar', 'baz')

  t.is(root.at(1).index, 1)
})

test('return -1 if no parent', t => {
  const root = seed()

  t.is(root.index, -1)
})
