import test from 'ava'
import index from '../lib/index'

test('return node index in parent node', t => {
  const root = Tree(null, 'foo', 'bar', 'baz')

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
