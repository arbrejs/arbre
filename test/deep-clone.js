import test from 'ava'
import deepClone from '../lib/deep-clone'

test('deep clone a node', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = deepClone(node)

  t.not(ret, node)
  t.deepEqual(ret, node)
})

test('accept a creator function', t => {
  const node = Tree('foo', ['bar', 'baz'])
  const ret = deepClone(node, () => ({ value: 'foo', children: [] }))

  t.is(ret.value, 'foo')
  t.is(ret.children[0].value, 'foo')
  t.is(ret.children[0].children[0].value, 'foo')
})
