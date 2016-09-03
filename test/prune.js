import test from 'ava'
import grapes from '../'

test('return an array of removed nodes', t => {
  const root = grapes()
  const firstNode = root.add(1)
  const lastNode = root.add(2)
  const nodes = root.prune()

  t.true(Array.isArray(nodes))
  t.is(nodes[0], firstNode)
  t.is(nodes[1], lastNode)
})

test('remove all children', t => {
  const root = grapes()
  const firstNode = root.add(1)
  const lastNode = root.add(2)
  root.prune()

  t.is(root.length, 0)
  t.true(firstNode.isRoot)
  t.true(lastNode.isRoot)
})
