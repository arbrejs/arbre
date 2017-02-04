import test from 'ava'
import index from '../lib/index'

test('return node index in parent node', t => {
  const root = Tree(0, 1, 2, 3)

  for (let i = 0; i < 3; i++) {
    const ret = index(root.children[i])
    t.is(ret, i)
  }
})

test('return -1 if no parent', t => {
  const node = Tree()
  const ret = index(node)

  t.is(ret, -1)
})
