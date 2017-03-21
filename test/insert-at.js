import test from 'ava'
import insertAt from '../lib/insert-at'

test('insert at given index', t => {
  const parent = Tree(0, 1, 3)
  const node = Tree(2)
  const ret = insertAt(parent, node, 1)

  t.is(ret, node)
  t.deepEqual(parent, Tree(0, 1, 2, 3))
})

test('ignore out of lower-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, -1)
    t.is(ret, node)
    t.is(node.children.length, 0)
  })
})

test('ignore out of upper-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, 1)
    t.is(ret, node)
    t.is(node.children.length, 0)
  })
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertAt(node, node, 0)

  t.is(ret, node)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})
