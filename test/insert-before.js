import test from 'ava'
import insertBefore from '../lib/insert-before'

test('insert before a node', t => {
  const parent = Tree(0, 2, 3)
  const sibling = parent.children[0]
  const node = Tree(1)
  const ret = insertBefore(sibling, node)

  t.is(ret, node)
  t.deepEqual(parent, Tree(0, 1, 2, 3))
})

test('ignore orphan node', t => {
  const sibling = Tree()
  const node = Tree()
  const ret = insertBefore(sibling, node)

  t.is(ret, node)
  t.is(sibling.children.length, 0)
  t.not(node.parent, sibling)
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertBefore(node, node)

  t.is(ret, node)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})
