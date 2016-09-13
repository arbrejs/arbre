import test from 'ava'
import { replace } from '../lib/replace'

test('replace given node', t => {
  const node = seed('foo', 'bar')
  const old = node.children[0]
  const replacer = seed('baz')
  const ret = replace(replacer, old)

  t.is(ret, replacer)
  t.deepEqual(node, seed('foo', 'baz'))
  t.is(old.parent, null)
})

test('ignore orphan node', t => {
  const node = seed()
  const replacer = seed()
  const ret = replace(replacer, node)

  t.false(ret)
})

test('ignore itself', t => {
  const node = seed()
  const ret = replace(node, node)

  t.false(ret)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = replace()
    t.false(ret)
  })
})
