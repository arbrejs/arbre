import test from 'ava'
import find from '../lib/find'

test('find a node', t => {
  const root = Tree(null, 'foo')
  const found = find(root, node => 'foo' === node.value)

  t.is(found, root.children[0])
})

test('return the first found node', t => {
  const root = Tree(null, 'foo', 'foo')
  const found = find(root, node => 'foo' === node.value)

  t.is(found, root.children[0])
})

test('return undefined if no node is found', t => {
  const root = Tree(null, 'foo')
  const found = find(root, node => 'bar' === node.value)

  t.is(found, undefined)
})

test('do not find itself', t => {
  const root = Tree('foo', 'foo')
  const found = find(root, node => 'foo' === node.value)

  t.not(root, found)
  t.is(found, root.children[0])
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = find()
    t.is(ret, undefined)
  })
})
