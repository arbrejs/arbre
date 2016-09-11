import test from 'ava'
import seed from './helpers/seed'

test('return previous sibling', t => {
  const node = seed(null, 'foo', 'bar')
  const prev = node.at(1).previousSibling

  t.is(prev, node.at(0))
})

test('return undefined if no previous sibling', t => {
  const node = seed()
  const prev = node.previousSibling

  t.is(prev, undefined)
})
