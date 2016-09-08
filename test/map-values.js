import test from 'ava'
import grapes from '../'

test('return itself', t => {
  const tree1 = grapes()
  const tree2 = tree1.mapValues(node => node)
  t.is(tree1, tree2)
})

test('mutate values', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  tree.mapValues(value => {
    if ('foo' === value.type) {
      value.type = 'baz'
    }
    else if ('bar' === value.type) {
      value.type = 'qux'
    }
  })

  t.is(tree.value.type, 'baz')
  t.is(tree.at(0).value.type, 'qux')
})

test('skip node when null is returned', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      {
        type: 'bar',
        children: [
          { type: 'baz' }
        ]
      },
      { type: 'qux' }
    ]
  })

  tree.mapValues(value => ('baz' === value.type ? null : value))

  t.is(tree.children.length, 2)
  t.is(tree.at(0).value.type, 'bar')
  t.is(tree.at(1).value.type, 'qux')
})
