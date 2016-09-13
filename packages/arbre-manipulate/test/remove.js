import test from 'ava'
import { remove } from '../lib/remove'

test('remove a child', t => {
  const node = seed(null, 'foo')
  const child = node.children[0]
  const ret = remove(child)

  t.is(ret, child)
  t.is(child.parent, null)
  t.is(node.children.length, 0)
})

test('ignore orphan node', t => {
  const node = seed()

  t.notThrows(() => remove(node))
})
