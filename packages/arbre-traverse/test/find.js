import test from 'ava'
import { find } from '../index'

test('find a node', t => {
  const node = Tree(null, 'foo')
  const found = find(node, node => 'foo' === node.value)

  t.is(found, node.children[0])
})

test('return the first found node', t => {
  const node = Tree(null, 'foo', 'foo')
  const found = find(node, node => 'foo' === node.value)

  t.is(found, node.children[0])
})

test('return undefined if no node is found', t => {
  const node = Tree(null, 'foo')
  const found = find(node, node => 'bar' === node.value)

  t.is(found, undefined)
})

test('do not find itself', t => {
  const node = Tree('foo', 'foo')
  const found = find(node, node => 'foo' === node.value)

  t.not(node, found)
  t.is(found, node.children[0])
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = find()
    t.is(ret, undefined)
  })
})
