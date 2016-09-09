import test from 'ava'
import seed from './helpers/seed'

test('return the first child', t => {
  const root = seed(null, 'foo')

  t.is(root.firstChild.value, 'foo')
})

test('return undefined if no children', t => {
  const root = seed()

  t.is(root.firstChild, undefined)
})
