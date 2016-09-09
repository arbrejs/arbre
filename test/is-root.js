import test from 'ava'
import seed from './helpers/seed'

test('return true if node has no parent', t => {
  const tree = seed()

  t.true(tree.isRoot)
})

test('return false if node has a parent', t => {
  const tree = seed(null, 'foo')

  t.false(tree.at(0).isRoot)
})
