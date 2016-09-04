import test from 'ava'
import grapes, { Node } from '../'

test('return an array of siblings', t => {
  const tree = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' },
      { type: 'baz' }
    ]
  })
  const siblings = tree.at(1).siblings

  t.true(Array.isArray(siblings))
  t.is(siblings.length, 2)
  t.true(siblings[0] instanceof Node)
  t.is(siblings[0].value.type, 'foo')
  t.true(siblings[1] instanceof Node)
  t.is(siblings[1].value.type, 'baz')
})

test('return an empty array if no siblings', t => {
  const tree = grapes()
  t.deepEqual(tree.siblings, [])
})
