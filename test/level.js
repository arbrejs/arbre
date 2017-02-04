import test from 'ava'
import level from '../lib/level'

test('return the level of a leaf node', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = level(root.children[0].children[0])

  t.is(ret, 3)
})

test('return the level of an inner node', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = level(root.children[0])

  t.is(ret, 2)
})

test('return the level of a root node', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = level(root)

  t.is(ret, 1)
})

test('return the level of a lonely node', t => {
  const node = Tree(0)
  const ret = level(node)

  t.is(ret, 1)
})
