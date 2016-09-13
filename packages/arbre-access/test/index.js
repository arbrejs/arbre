import test from 'ava'
import { index } from '../lib/index'

test('return node index in parent node', t => {
  const node = seed(null, 'foo', 'bar', 'baz')

  for (let i = 0; i < 3; i++) {
    t.is(index(node.children[i]), i)
  }
})

test('return -1 if no parent', t => {
  const node = seed()

  t.is(index(node), -1)
})
