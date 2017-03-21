import test from 'ava'
import replace from '../lib/replace'

test('replace given node', t => {
  const root = Tree(0, 1)
  const old = root.children[0]
  const node = Tree(2)
  const ret = replace(old, node)

  t.is(ret, old)
  t.deepEqual(root, Tree(0, 2))
  t.is(old.parent, null)
})

test('replace with existing node', t => {
  const root = Tree(0, [1, 2])
  const old = root.children[0]
  const node = old.children[0]
  const ret = replace(old, node)

  t.is(ret, old)
  t.deepEqual(root, Tree(0, 2))
  t.is(old.parent, null)
  t.is(old.children.length, 0)
})

test('ignore orphan node', t => {
  const old = Tree(0)
  const node = Tree(1)
  const ret = replace(old, node)

  t.is(ret, old)
})

test('ignore itself', t => {
  const node = Tree(0)
  const ret = replace(node, node)

  t.is(ret, node)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})
