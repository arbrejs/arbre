import test from 'ava'
import insert from '../lib/insert'

test('insert a node', t => {
  const parent = Tree()
  const node = Tree(0)
  const ret = insert(parent, node)

  t.is(ret, node)
  t.is(parent.children[0], node)
  t.is(node.value, 0)
})

test('move an existing node', t => {
  const parent = Tree(0, [1, 2])
  const node = parent.children[0].children[0]
  const ret = insert(parent, node)

  t.is(ret, node)
  t.deepEqual(parent, Tree(0, 1, 2))
  t.is(node, parent.children[1])
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insert(node, node)

  t.is(ret, node)
  t.not(node.parent, node)
})
