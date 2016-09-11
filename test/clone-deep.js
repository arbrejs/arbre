import test from 'ava'
import seed from './helpers/seed'

test('clone a node', t => {
  const node = seed('foo')
  const clone = node.cloneDeep()

  t.not(clone, node)
  t.is(clone.value, node.value)
})

test('clone recursively a node', t => {
  const node = seed('foo', 'bar', 'baz')
  const clone = node.cloneDeep()

  t.not(clone.at(0), node.at(0))
  t.not(clone.at(1), node.at(1))
  t.deepEqual(clone, node)
})
