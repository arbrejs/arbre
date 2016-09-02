import test from 'ava'
import grapes from '../'

test('create a deep copy', t => {
  const snode = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  const dnode = snode.map(node => node.clone())

  t.not(dnode, snode)
  t.deepEqual(dnode.value, snode.value)
  t.is(dnode.children.length, snode.children.length)
  t.not(dnode.at(0), snode.at(0))
  t.deepEqual(dnode.at(0).value, snode.at(0).value)
})

test('inplace modify nodes', t => {
  const snode = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  const dnode = snode.map(node => {
    let overrides

    if ('foo' === node.value.type) {
      overrides = { type: 'baz' }
    }

    if ('bar' === node.value.type) {
      overrides = { type: 'qux' }
    }

    return node.clone(overrides)
  })

  t.is(dnode.value.type, 'baz')
  t.is(dnode.at(0).value.type, 'qux')
})

test('strip node when null is returned', t => {
  const snode = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ]
  })

  const dnode = snode.map(node => {
    if ('baz' === node.value.type) {
      return null
    }
    return node.clone()
  })

  t.is(dnode.children.length, 2)
  t.is(dnode.at(0).value.type, 'bar')
  t.is(dnode.at(1).value.type, 'qux')
})

test('strip a node with all its children', t => {
  const snode = grapes({
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

  const dnode = snode.map(node => {
    if ('bar' === node.value.type) {
      return null
    }
    return node.clone()
  })

  t.is(dnode.at(0).children.length, 0)
})
