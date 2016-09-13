import test from 'ava'
import { siblings } from '../lib/siblings'

test('return an array of siblings', t => {
  const node = seed(null, 'foo', 'bar', 'baz')
  const second = node.children[1]
  const secondSiblings = siblings(second)

  t.true(Array.isArray(secondSiblings))
  t.is(secondSiblings[0], node.children[0])
  t.is(secondSiblings[1], node.children[2])
})

test('return an empty array if no siblings', t => {
  const node = seed()
  const nodeSiblings = siblings(node)

  t.deepEqual(nodeSiblings, [])
})
