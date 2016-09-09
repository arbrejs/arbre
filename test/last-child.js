import test from 'ava'
import seed from './helpers/seed'

test('return the last child', t => {
  const tree = seed(null, 'foo')

  t.is(tree.lastChild.value, 'foo')
})

test('return undefined if no children', t => {
  const tree = seed()

  t.is(tree.lastChild, undefined)
})
