import test from 'ava'
import at from '../lib/at'

test('return a node at the given index', t => {
  const node = Tree(null, 1, 2, 3)

  for (let i = 0; i < 3; i++) {
    const ret = at(node, i)
    t.is(ret.value, i + 1)
  }
})

test('return deeper nodes', t => {
  const node = Tree(null, ['foo', 'bar'])
  const ret = at(node, 0, 0)

  t.is(ret.value, 'bar')
})

test('return undefined if index is out of range', t => {
  const node = Tree()
  const ret = at(node, 0)

  t.is(ret, undefined)
})

test('return undefined if index is too deep', t => {
  const node = Tree()
  const ret = at(node, 0, 0)

  t.is(ret, undefined)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = at()
    t.is(ret, undefined)
  })
})
