import test from 'ava'
import grapes from '../'

test('traverse depth first post-order', t => {
  const node = grapes({
    value: 6,
    children: [
      {
        value: 3,
        children: [
          { value: 1 },
          { value: 2 }
        ]
      },
      {
        value: 5,
        children: [
          { value: 4 }
        ]
      }
    ]
  })
  const values = []
  node.traversePostorder(node => values.push(node.value.value))

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})
