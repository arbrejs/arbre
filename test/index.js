import test from 'ava'
import seed from './helpers/seed'

test('return node index in parent node', t => {
  const node = seed(null, 'foo', 'bar', 'baz')

  for (let i = 0; i < 3; i++) {
    t.is(node.at(i).index, i)
  }
})

test('return -1 if no parent', t => {
  const node = seed()

  t.is(node.index, -1)
})
