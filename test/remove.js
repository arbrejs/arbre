import test from 'ava'
import oaks from '../'

test('remove a child', t => {
  const node = oaks()
  node.add(1)
  node.remove(1)

  t.is(node.at(0), undefined)
})

test('return the removed node', t => {
  const node = oaks()
  const nodeAdded = node.add(1)
  const nodeRemoved = node.remove(1)

  t.is(nodeAdded, nodeRemoved)
})
