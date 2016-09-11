import test from 'ava'
import seed from './helpers/seed'

test('return true if node has no parent', t => {
  const node = seed()

  t.true(node.isRoot)
})

test('return false if node has a parent', t => {
  const node = seed(null, 'foo')

  t.false(node.at(0).isRoot)
})
