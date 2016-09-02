import test from 'ava'
import grapes from '../'

test('remove a child', t => {
  const node = grapes()
  node.add(1)
  node.remove(1)

  t.is(node.at(0), undefined)
})

test('return the removed node', t => {
  const node = grapes()
  const nodeAdded = node.add(1)
  const nodeRemoved = node.remove(1)

  t.is(nodeAdded, nodeRemoved)
})
