import test from 'ava'
import seed from './helpers/seed'

test('return node at given index', t => {
  const node = seed(null, 1, 2, 3)

  for (let i = 0; i < 3; i++) {
    t.is(node.at(i).value, i + 1)
  }
})

test('return deeper nodes', t => {
  const node = seed(null, ['foo', 'bar'])

  t.is(node.at(0, 0).value, 'bar')
})

test('return undefined if index is out of range', t => {
  const node = seed()

  t.is(node.at(0), undefined)
})
