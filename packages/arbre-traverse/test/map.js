import test from 'ava'
import { map } from '../index'

test('mutate nodes (pre-order)', t => {
  const root = Tree({ type: 'foo' }, { type: 'bar' })
  const ret = map(root, node => {
    node.value.type = 'baz'
  })

  t.is(ret, root)
  t.deepEqual(root, Tree({ type: 'baz' }, { type: 'baz' }))
})

test('replace node when iteratee returns a new one (pre-order)', t => {
  const root = Tree('foo', 'bar')
  const ret = map(root, node => {
    if ('bar' === node.value) return Tree('baz', 'qux', 'corge')
  })

  t.is(ret, root)
  t.deepEqual(root, Tree('foo', ['baz', 'qux', 'corge']))
})

test('remove node when iteratee returns null (pre-order)', t => {
  const root = Tree('foo', 'bar', 'baz', 'qux')
  const ret = map(root, node => ('baz' === node.value ? null : node))

  t.is(ret, root)
  t.deepEqual(root, Tree('foo', 'bar', 'qux'))
})

test('mutate nodes (post-order)', t => {
  const root = Tree({ type: 'foo' }, { type: 'bar' })
  const ret = map(root, node => {
    node.value.type = 'baz'
  }, 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree({ type: 'baz' }, { type: 'baz' }))
})

test('replace node when iteratee returns a new one (post-order)', t => {
  const root = Tree('foo', 'bar')
  const ret = map(root, node => {
    if ('bar' === node.value) return Tree('baz', 'qux', 'corge')
  }, 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree('foo', ['baz', 'qux', 'corge']))
})

//FIXME: seems to have a problem with `tree-mutate`
test.skip('remove node when iteratee returns null (post-order)', t => {
  const root = Tree('foo', ['bar', 'baz', 'qux'])
  const ret = map(root, node => ('bar' === node.value ? null : node), 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree('foo'))
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = map()
    t.is(ret, undefined)
  })
})
