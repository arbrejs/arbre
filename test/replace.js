import test from 'ava'
import replace from '../lib/replace'

test('replace given node', t => {
  const root = Tree(0, 1)
  const old = root.children[0]
  const target = Tree(2)
  const ret = replace(target, old)

  t.is(ret, target)
  t.deepEqual(root, Tree(0, 2))
  t.is(old.parent, null)
})

test('ignore orphan node', t => {
  const node = Tree(0)
  const target = Tree(1)
  const ret = replace(target, node)

  t.is(ret, undefined)
})

test('ignore itself', t => {
  const node = Tree(0)
  const ret = replace(node, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = replace()
    t.is(ret, undefined)
  })
})
