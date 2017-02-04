import test from 'ava'
import deepClone from '../lib/deep-clone'

test('deep clone a node', t => {
  const root = Tree('foo', ['bar', 'baz'])
  const ret = deepClone(root)

  t.not(ret, root)
  t.deepEqual(ret, root)
})

test('accept a creator function', t => {
  const root = Tree('foo', ['bar', 'baz'])
  const ret = deepClone(root, () => ({ value: 'foo', children: [] }))

  t.is(ret.value, 'foo')
  t.is(ret.children[0].value, 'foo')
  t.is(ret.children[0].children[0].value, 'foo')
})
