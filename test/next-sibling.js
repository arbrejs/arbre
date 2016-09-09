import test from 'ava'
import seed from './helpers/seed'

test('return next sibling', t => {
  const root = seed(null, 'foo', 'bar', 'baz')

  t.is(root.at(1).nextSibling.value, 'baz')
})

test('return undefined if no next sibling', t => {
  const root = seed()

  t.is(root.nextSibling, undefined)
})
