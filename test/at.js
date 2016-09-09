import test from 'ava'
import seed from './helpers/seed'

test('return node at given index', t => {
  const node = seed(null, 1, 2, 3)
  for (let i = 0; i < 3; i++) {
    t.is(node.at(i).value, i + 1)
  }
})

test('accept rest parameters', t => {
  const node = seed(null, ['foo', ['bar']])
  t.is(node.at(0, 0).value, 'bar')
})
