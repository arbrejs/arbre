import test from 'ava'
import { walk } from '../lib/walk'

test('walk in depth first pre-order', t => {
  const root = seed(1, [2, [3, 4]], [5, [6]])
  const values = []
  walk(root, node => values.push(node.value))

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})

test('walk in depth first post-order', t => {
  const root = seed(6, [3, 1, 2], [5, 4])
  const values = []
  walk(root, node => values.push(node.value), 'post')

  t.deepEqual(values, [1, 2, 3, 4, 5, 6])
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = walk()
    t.is(ret, undefined)
  })
})
