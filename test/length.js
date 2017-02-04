import test from 'ava'
import length from '../lib/length'

test('return number of children', t => {
  const root = Tree(0, 1, 2)
  const ret = length(root)

  t.is(ret, 2)
})

test('return 0 when no children', t => {
  const node = Tree()
  const ret = length(node)

  t.is(ret, 0)
})
