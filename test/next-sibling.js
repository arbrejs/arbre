import test from 'ava'
import seed from './helpers/seed'

test('return next sibling', t => {
  const node = seed(null, 'foo', 'bar')
  const next = node.at(0).nextSibling

  t.is(next, node.at(1))
})

test('return undefined if no next sibling', t => {
  const node = seed()
  const next = node.nextSibling

  t.is(next, undefined)
})
