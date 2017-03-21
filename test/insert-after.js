import test from 'ava'
import insertAfter from '../lib/insert-after'

test('insert after a node', t => {
  const root = Tree(0, 1, 3)
  const sibling = root.children[0]
  const node = Tree(2)
  const ret = insertAfter(sibling, node)

  t.is(ret, node)
  t.deepEqual(root, Tree(0, 1, 2, 3))
})

test('ignore orphan node', t => {
  const sibling = Tree()
  const node = Tree()
  const ret = insertAfter(sibling, node)

  t.is(ret, node)
  t.is(sibling.children.length, 0)
  t.not(node.parent, sibling)
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertAfter(node, node)

  t.is(ret, node)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})
