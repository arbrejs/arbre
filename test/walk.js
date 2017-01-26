import test from 'ava'
import walk from '../lib/walk'

test('walk in depth first pre-order', t => {
  const root = Tree(1, [2, [3, 4]], [5, [6]])
  const values = []
  const ret = walk(root, node => values.push(node.value))

  t.is(ret, root)
  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})

test('walk in depth first post-order', t => {
  const root = Tree(6, [3, 1, 2], [5, 4])
  const values = []
  const ret = walk(root, node => values.push(node.value), 'post')

  t.is(ret, root)
  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = walk()
    t.is(ret, undefined)
  })
})
