import test from 'ava'
import grapes from '../'

test('inplace modify values', t => {
  const tree1 = grapes({
    type: 'foo',
    children: [
      { type: 'bar' }
    ]
  })

  const tree2 = tree1.mapValues(value => {
    if ('foo' === value.type) {
      value.type = 'baz'
    }
    else if ('bar' === value.type) {
      value.type = 'qux'
    }
    return value
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

  const tree2 = tree1.mapValues(value => {
    if ('baz' === value.type) {
      return null
    }
    return value
  })

  t.is(tree2.children.length, 2)
  t.is(tree2.at(0).value.type, 'bar')
  t.is(tree2.at(1).value.type, 'qux')
})

test('keep node when nothing is returned', t => {
  const tree1 = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'qux' }
    ]
  })

  const tree2 = tree1.mapValues(value => {
    if ('baz' === value.type) {
      return null
    }
  })

  t.is(tree2.children.length, 2)
  t.is(tree2.at(0).value.type, 'bar')
  t.is(tree2.at(1).value.type, 'qux')
})
