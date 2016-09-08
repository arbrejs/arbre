import test from 'ava'
import grapes from '../'

test('return itself', t => {
  const tree1 = grapes()
  const tree2 = tree1.map(node => node)
  t.is(tree1, tree2)
})

test('mutate nodes', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  tree.map(node => {
    if ('foo' === node.value.type) {
      node.value.type = 'baz'
    }
    else if ('bar' === node.value.type) {
      node.value.type = 'qux'
    }
  })

  t.is(tree.value.type, 'baz')
  t.is(tree.at(0).value.type, 'qux')
})

test('remove node when null is returned', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ]
  })

  tree.map(node => ('baz' === node.value.type ? null : node))

  t.is(tree.children.length, 2)
  t.is(tree.at(0).value.type, 'bar')
  t.is(tree.at(1).value.type, 'qux')
})
