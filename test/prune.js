import test from 'ava'
import seed from './helpers/seed'

test('remove all children', t => {
  const node = seed()
  const first = node.add('foo')
  const last = node.add('bar')
  node.prune()

  t.is(node.length, 0)
  t.true(first.isRoot)
  t.true(last.isRoot)
})
