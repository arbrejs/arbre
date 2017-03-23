import test from 'ava'
import find from '../lib/find'

test('find a node', t => {
  const root = Tree(0, 1)
  const found = find(root, node => 1 === node.value)

  t.is(found, root.children[0])
})

test('return the first found node', t => {
  const root = Tree(0, 1, 1)
  const found = find(root, node => 1 === node.value)

  t.is(found, root.children[0])
})

test('return null if no node is found', t => {
  const root = Tree(0, 1)
  const found = find(root, node => 2 === node.value)

  t.is(found, null)
})

test('do not find itself', t => {
  const root = Tree(0, 0)
  const found = find(root, node => 0 === node.value)

  t.not(root, found)
  t.is(found, root.children[0])
})
