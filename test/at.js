import test from 'ava'
import at from '../lib/at'

test('return a node at the given index', t => {
  const root = Tree(0, 1, 2, 3)

  for (let i = 0; i < 3; i++) {
    const ret = at(root, i)
    t.is(ret.value, i + 1)
  }
})

test('return deeper nodes', t => {
  const root = Tree(0, [1, 2])
  const ret = at(root, 0, 0)

  t.is(ret.value, 2)
})

test('return null if index is out of range', t => {
  const root = Tree()
  const ret = at(root, 0)

  t.is(ret, null)
})

test('return null if index is too deep', t => {
  const root = Tree()
  const ret = at(root, 0, 0)

  t.is(ret, null)
})
