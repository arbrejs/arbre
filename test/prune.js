import test from 'ava'
import prune from '../lib/prune'

test('remove all children', t => {
  const root = Tree(0, 1, 2)
  const first = root.children[0]
  const last = root.children[1]
  const ret = prune(root)

  t.is(ret, 2)
  t.is(root.children.length, 0)
  t.is(first.parent, null)
  t.is(last.parent, null)
})

test('return 0 if no children', t => {
  const node = Tree()
  const ret = prune(node)

  t.is(ret, 0)
})
