import test from 'ava'
import clone from '../lib/clone'

test('clone a node', t => {
  const node = Tree()
  const ret = clone(node)

  t.not(ret, node)
  t.is(ret.parent, null)
  t.deepEqual(ret.children, [])
  t.deepEqual(ret.value, node.value)
})

test('does not clone children of a node', t => {
  const root = Tree(0, 1)
  const ret = clone(root)

  t.not(ret, root)
  t.deepEqual(ret.children, [])
})

test('accept a creator function', t => {
  const node = Tree()
  const ret = clone(node, () => ({ value: 1 }))

  t.not(ret, node)
  t.is(ret.value, 1)
})
