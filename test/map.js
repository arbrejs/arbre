import test from 'ava'
import grapes from '../'

test('create a deep copy', t => {
  const tree1 = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  const tree2 = tree1.map(node => node.clone())

  t.not(tree2, tree1)
  t.deepEqual(tree2.value, tree1.value)
  t.is(tree2.children.length, tree1.children.length)
  t.not(tree2.at(0), tree1.at(0))
  t.deepEqual(tree2.at(0).value, tree1.at(0).value)
})

test('inplace modify nodes', t => {
  const tree1 = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  const tree2 = tree1.map(node => {
    let overrides
    if ('foo' === node.value.type) {
      overrides = { type: 'baz' }
    }
    else if ('bar' === node.value.type) {
      overrides = { type: 'qux' }
    }
    return node.cloneWith(overrides)
  })

  t.is(tree2.value.type, 'baz')
  t.is(tree2.at(0).value.type, 'qux')
})

test('strip node when null is returned', t => {
  const tree1 = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ]
  })

  const tree2 = tree1.map(node => {
    if ('baz' === node.value.type) {
      return null
    }
    return node.clone()
  })

  t.is(tree2.children.length, 2)
  t.is(tree2.at(0).value.type, 'bar')
  t.is(tree2.at(1).value.type, 'qux')
})

test('strip a node with all its children', t => {
  const tree1 = grapes({
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

  const tree2 = tree1.map(node => {
    if ('bar' === node.value.type) {
      return null
    }
    return node.clone()
  })

  t.is(tree2.at(0).children.length, 0)
})
