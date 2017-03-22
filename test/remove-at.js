import test from 'ava'
import removeAt from '../lib/remove-at'

test('remove a child at given index', t => {
  const parent = Tree(0, 1)
  const node = parent.children[0]
  const ret = removeAt(parent, 0)

  t.is(ret, node)
  t.is(node.parent, null)
  t.is(parent.children.length, 0)
})

test('ignore unexisting node', t => {
  const node = Tree(0, 1)

  t.notThrows(() => {
    const ret = removeAt(node, 1)
    t.is(ret, null)
  })
})
