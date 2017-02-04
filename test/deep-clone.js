import test from 'ava'
import deepClone from '../lib/deep-clone'

test('deep clone a node', t => {
  const root = Tree(0, [1, 2])
  const ret = deepClone(root)

  t.not(ret, root)
  t.deepEqual(ret, root)
})

test('accept a creator function', t => {
  const root = Tree(0, [1, 2])
  const ret = deepClone(root, () => ({ value: 0, children: [] }))

  t.is(ret.value, 0)
  t.is(ret.children[0].value, 0)
  t.is(ret.children[0].children[0].value, 0)
})
