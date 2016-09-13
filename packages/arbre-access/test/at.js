import test from 'ava'
import { at } from '../lib/at'

test('return a node at the given index', t => {
  const node = seed(null, 1, 2, 3)

  for (let i = 0; i < 3; i++) {
    t.is(at(node, i).value, i + 1)
  }
})

test('return deeper nodes', t => {
  const node = seed(null, ['foo', 'bar'])

  t.is(at(node, 0, 0).value, 'bar')
})

test('return undefined if index is out of range', t => {
  const node = seed()

  t.is(at(node, 0), undefined)
})
