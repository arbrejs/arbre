import test from 'ava'
import siblings from '../lib/siblings'

test('return an array of siblings', t => {
  const parent = Tree(0, 1, 2, 3)
  const second = parent.children[1]
  const secondSiblings = siblings(second)

  t.true(Array.isArray(secondSiblings))
  t.is(secondSiblings[0], parent.children[0])
  t.is(secondSiblings[1], parent.children[2])
})

test('return an empty array if no siblings', t => {
  const node = Tree(0)
  const nodeSiblings = siblings(node)

  t.deepEqual(nodeSiblings, [])
})
