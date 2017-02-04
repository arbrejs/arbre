import test from 'ava'
import remove from '../lib/remove'

test('remove a child', t => {
  const root = Tree(0, 1)
  const child = root.children[0]
  const ret = remove(child)

  t.is(ret, child)
  t.is(child.parent, null)
  t.is(root.children.length, 0)
})

test('ignore orphan node', t => {
  const node = Tree(0)

  t.notThrows(() => {
    const ret = remove(node)
    t.is(ret, undefined)
  })
})
