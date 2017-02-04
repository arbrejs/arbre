import test from 'ava'
import remove from '../lib/remove'

test('remove a child', t => {
  const root = Tree(null, 'foo')
  const child = root.children[0]
  const ret = remove(child)

  t.is(ret, child)
  t.is(child.parent, null)
  t.is(root.children.length, 0)
})

test('ignore orphan node', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = remove(node)
    t.is(ret, undefined)
  })
})
