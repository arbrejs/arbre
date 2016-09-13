import test from 'ava'
import { hoist } from '../lib/hoist'

test('insert children just after itself', t => {
  const node = seed('foo', ['bar', 'baz'], 'qux')
  const ret = hoist(node.children[0])

  t.is(ret, 1)
  t.deepEqual(node, seed('foo', 'bar', 'baz', 'qux'))
})

test('ignore root node', t => {
  const node = seed()

  t.notThrows(() => {
    const ret = hoist(node)
    t.is(ret, 0)
  })
})
