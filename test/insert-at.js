import test from 'ava'
import grapes, { Node } from '../'

test('insert at the given index', t => {
  const node = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'qux' }
    ]
  })

  const nnode = new Node({ type: 'baz' })
  nnode.insertAt(node, 1)

  t.is(node.children.length, 3)
  t.is(node.at(0).value.type, 'bar')
  t.is(node.at(1).value.type, 'baz')
  t.is(node.at(2).value.type, 'qux')
})
