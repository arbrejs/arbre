import test from 'ava'
import grapes from '../'

test('return the total number of nodes', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      {
        type: 'bar',
        children: [
          { type: 'baz' },
          { type: 'qux' }
        ]
      },
      {
        type: 'quux',
        children: [
          { type: 'corge' }
        ]
      }
    ]
  })

  t.is(tree.size, 6)
})
