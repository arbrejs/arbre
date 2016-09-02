import test from 'ava'
import grapes from '../'

test('find a node', t => {
  const node = grapes()
  node.add(1)
  const nodeFound = node.find(1)

  t.is(node.at(0), nodeFound)
})

test('find the first node', t => {
  const node = grapes()
  node.add(1)
  node.add(1)
  const nodeFound = node.find(1)

  t.is(node.at(0), nodeFound)
})

test('null if no node is found', t => {
  const node = grapes()
  node.add(1)
  const nodeFound = node.find(2)

  t.is(nodeFound, null)
})

test('do not find itself', t => {
  const node = grapes(1)
  node.add(1)
  const nodeFound = node.find(1)

  t.not(node, nodeFound)
})
