import test from 'ava'
import grapes from '../'

test('traverse depth first pre-order', t => {
  const node = grapes({
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 3 },
          { value: 4 }
        ]
      },
      {
        value: 5,
        children: [
          { value: 6 }
        ]
      }
    ]
  })
  const values = []
  node.traversePreorder(node => values.push(node.value.value))

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})
