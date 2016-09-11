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

test('return an array of removed nodes', t => {
  const node = seed()
  const first = node.add('foo')
  const last = node.add('bar')
  const nodes = node.prune()

  t.true(Array.isArray(nodes))
  t.is(nodes[0], first)
  t.is(nodes[1], last)
})
