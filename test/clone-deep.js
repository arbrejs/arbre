import test from 'ava'
import { Node } from '../'

test('deep clone a node', t => {
  const node = new Node({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' }
    ]
  })
  const cloneNode = node.cloneDeep()

  t.not(node, cloneNode)
  t.deepEqual(node, cloneNode)
})
