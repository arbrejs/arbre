import test from 'ava'
import height from '../lib/height'

test('return the height of a root node', t => {
  const root = Tree(0, [1, [2, 3]])
  const ret = height(root)

  t.is(ret, 3)
})

test('return the height of an inner node', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = height(root.children[0])

  t.is(ret, 1)
})

test('return the height of a leaf node', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = height(root.children[0].children[0])

  t.is(ret, 0)
})

test('return the height of a lonely node', t => {
  const node = Tree()
  const ret = height(node)

  t.is(ret, 0)
})
