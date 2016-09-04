import test from 'ava'
import grapes from '../'

test('return true if node does not have children', t => {
  const tree = grapes()
  t.true(tree.isLeaf)
})

test('return false if node has children', t => {
  const tree = grapes({ children: [{}] })
  t.false(tree.isLeaf)
})
