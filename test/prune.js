import test from 'ava'
import seed from './helpers/seed'

test('return an array of removed nodes', t => {
  const root = seed()
  const firstNode = root.add('foo')
  const lastNode = root.add('bar')
  const nodes = root.prune()

  t.true(Array.isArray(nodes))
  t.is(nodes[0], firstNode)
  t.is(nodes[1], lastNode)
})

test('remove all children', t => {
  const root = seed()
  const firstNode = root.add('foo')
  const lastNode = root.add('bar')
  root.prune()

  t.is(root.length, 0)
  t.true(firstNode.isRoot)
  t.true(lastNode.isRoot)
})
