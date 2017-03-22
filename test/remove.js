import test from 'ava'
import remove from '../lib/remove'

test('remove a child', t => {
  const parent = Tree(0, 1)
  const node = parent.children[0]
  const ret = remove(node)

  t.is(ret, node)
  t.is(node.parent, null)
  t.is(parent.children.length, 0)
})

test('ignore orphan node', t => {
  const node = Tree(0)

  t.notThrows(() => {
    const ret = remove(node)
    t.is(ret, node)
  })
})
