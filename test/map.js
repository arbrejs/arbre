import test from 'ava'
import map from '../lib/map'

test('mutate nodes (pre-order)', t => {
  const root = Tree(0, 1)
  const ret = map(root, node => { node.value = 2 })

  t.is(ret, root)
  t.deepEqual(root, Tree(2, 2))
})

test('replace node when iteratee returns a new one (pre-order)', t => {
  const root = Tree(0, 1)
  const ret = map(root, node => {
    if (1 === node.value) return Tree(2, 3, 5)
  })

  t.is(ret, root)
  t.deepEqual(root, Tree(0, [2, 3, 5]))
})

test('remove node when iteratee returns null (pre-order)', t => {
  const root = Tree(0, 1, 2, 3)
  const ret = map(root, node => (2 === node.value ? null : node))

  t.is(ret, root)
  t.deepEqual(root, Tree(0, 1, 3))
})

test('mutate nodes (post-order)', t => {
  const root = Tree(0, 1)
  const ret = map(root, node => { node.value = 2 }, 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree(2, 2))
})

test('replace node when iteratee returns a new one (post-order)', t => {
  const root = Tree(0, 1)
  const ret = map(root, node => {
    if (1 === node.value) return Tree(2, 3, 5)
  }, 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree(0, [2, 3, 5]))
})

test('remove node when iteratee returns null (post-order)', t => {
  const root = Tree(0, [1, 2, 3])
  const ret = map(root, node => (1 === node.value ? null : node), 'post')

  t.is(ret, root)
  t.deepEqual(root, Tree(0))
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = map()
    t.is(ret, undefined)
  })
})
