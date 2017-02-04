import test from 'ava'
import insert from '../lib/insert'

test('insert a node', t => {
  const node = Tree()
  const child = Tree(0)
  const ret = insert(node, child)

  t.is(ret, child)
  t.is(node.children[0], child)
  t.is(child.value, 0)
})

test('move an existing node', t => {
  const root = Tree(0, [1, 2])
  const moved = root.children[0].children[0]
  const ret = insert(root, moved)

  t.is(ret, moved)
  t.deepEqual(root, Tree(0, 1, 2))
  t.is(moved, root.children[1])
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insert(node, node)

  t.is(ret, undefined)
  t.not(node.parent, node)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = insert()
    t.is(ret, undefined)
  })
})
