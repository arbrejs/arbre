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

test('ignore an non-existing parent', t => {
  const node = grapes()
  t.notThrows(() => node.insertAt())
})

test('ignore out of bounds indices', t => {
  const tree = grapes()
  const node = tree.add(1)

  t.notThrows(() => node.insertAt(tree, -1))
  t.notThrows(() => node.insertAt(tree, 1))
})

test('do not insert itself', t => {
  const tree = grapes()
  const node = tree.add(1)
  node.insertAt(node, 0)

  t.not(node.parent, node)
})
