import test from 'ava'
import seed from './helpers/seed'

test('return the first child', t => {
  const node = seed(null, 'foo')
  const first = node.firstChild

  t.is(first, node.at(0))
})

test('return undefined if no children', t => {
  const node = seed()
  const first = node.firstChild

  t.is(first, undefined)
})
