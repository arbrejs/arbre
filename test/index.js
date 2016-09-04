import test from 'ava'
import grapes from '../'

test('return index in the parent node', t => {
  const tree = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' },
      { type: 'baz' }
    ]
  })

  t.is(tree.at(1).index, 1)
})

test('return -1 if no parent', t => {
  const tree = grapes()
  t.is(tree.index, -1)
})
