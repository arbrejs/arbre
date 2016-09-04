import test from 'ava'
import grapes from '../'

test('return the number of children', t => {
  const tree = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' }
    ]
  })

  t.is(tree.length, 2)
})

test('return 0 when no children', t => {
  const tree = grapes()

  t.is(tree.length, 0)
})
