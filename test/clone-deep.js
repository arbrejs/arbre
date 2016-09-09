import test from 'ava'
import seed from './helpers/seed'

test('deep clone a node', t => {
  const node = seed('foo', 'bar', 'baz')
  const cloneNode = node.cloneDeep()

  t.not(cloneNode, node)
  t.deepEqual(cloneNode, node)
})
