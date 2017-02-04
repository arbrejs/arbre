import test from 'ava'
import path from '../lib/path'

test('return the path of a leaf node', t => {
  const root = Tree(0, [1, 2])
  const ret = path(root.children[0].children[0])

  t.deepEqual(ret, [root, root.children[0], root.children[0].children[0]])
})

test('return the path of an inner node', t => {
  const root = Tree(0, [1, 2])
  const ret = path(root.children[0])

  t.deepEqual(ret, [root, root.children[0]])
})

test('return the path of a root node', t => {
  const root = Tree(0, [1, 2])
  const ret = path(root)

  t.deepEqual(ret, [root])
})

test('return the path of a lonely node', t => {
  const node = Tree(0)
  const ret = path(node)

  t.deepEqual(ret, [node])
})
