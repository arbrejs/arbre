import test from 'ava'
import { prune } from '../lib/prune'

test('remove all children', t => {
  const node = seed(null, 'foo', 'bar')
  const first = node.children[0]
  const last = node.children[1]
  const ret = prune(node)

  t.is(ret, 2)
  t.is(node.children.length, 0)
  t.is(first.parent, null)
  t.is(last.parent, null)
})

test('return 0 if no children', t => {
  const node = seed()
  const ret = prune(node)

  t.is(ret, 0)
})
