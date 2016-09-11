import test from 'ava'
import seed from './helpers/seed'

test('return the last child', t => {
  const node = seed(null, 'foo')
  const last = node.lastChild

  t.is(last, node.at(0))
})

test('return undefined if no children', t => {
  const node = seed()
  const last = node.lastChild

  t.is(last, undefined)
})
