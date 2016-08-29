import test from 'ava'
import oaks, { Node } from '../'

test('insert after the given node', t => {
  const node = oaks({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'qux' }
    ]
  })

  const nnode = new Node({ type: 'baz' })
  nnode.insertAfter(node.at(0), 1)

  t.is(node.children.length, 3)
  t.is(node.at(0).value.type, 'bar')
  t.is(node.at(1).value.type, 'baz')
  t.is(node.at(2).value.type, 'qux')
})

test('ignore root', t => {
  const node = oaks({
    type: 'foo'
  })

  const nnode = new Node({ type: 'bar' })
  nnode.insertAfter(node)

  t.is(node.children.length, 0)
})
