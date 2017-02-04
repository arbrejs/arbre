import test from 'ava'
import size from '../lib/size'

test('return total number of nodes', t => {
  const root = Tree(0, [1, [2, 3]], [4, 5])
  const ret = size(root)

  t.is(ret, 6)
})

test('return 1 if no children', t => {
  const node = Tree(0)
  const ret = size(node)

  t.is(ret, 1)
})
