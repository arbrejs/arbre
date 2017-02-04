import test from 'ava'
import siblings from '../lib/siblings'

test('return an array of siblings', t => {
  const root = Tree(null, 'foo', 'bar', 'baz')
  const second = root.children[1]
  const secondSiblings = siblings(second)

  t.true(Array.isArray(secondSiblings))
  t.is(secondSiblings[0], root.children[0])
  t.is(secondSiblings[1], root.children[2])
})

test('return an empty array if no siblings', t => {
  const node = Tree()
  const nodeSiblings = siblings(node)

  t.deepEqual(nodeSiblings, [])
})