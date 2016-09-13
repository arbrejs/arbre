import test from 'ava'
import { index } from '../lib/index'

test('return node index in parent node', t => {
  const node = seed(null, 'foo', 'bar', 'baz')

  for (let i = 0; i < 3; i++) {
    const ret = index(node.children[i])
    t.is(ret, i)
  }
})

test('return -1 if no parent', t => {
  const node = seed()
  const ret = index(node)

  t.is(ret, -1)
})
