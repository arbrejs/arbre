import test from 'ava'
import seed from './helpers/seed'

test('return previous sibling', t => {
  const root = seed(null, 'foo', 'bar', 'baz')
  t.is(root.at(1).previousSibling.value, 'foo')
})

test('return undefined if no previous sibling', t => {
  const root = seed()
  t.is(root.previousSibling, undefined)
})
