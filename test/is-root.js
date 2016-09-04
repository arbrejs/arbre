import test from 'ava'
import grapes from '../'

test('return true if node has no parent', t => {
  const tree = grapes()
  t.true(tree.isRoot)
})

test('return false if node has a parent', t => {
  const tree = grapes({ children: [{}] })

  t.false(tree.at(0).isRoot)
})
