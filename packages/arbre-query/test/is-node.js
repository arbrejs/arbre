import test from 'ava'
import { isNode } from '../index'

test('return true if value is node-like', t => {
  const node = Tree()
  const ret = isNode(node)

  t.true(ret)
})

test('return false if value is not', t => {
  const obj = { parent: null, children: {}}
  const ret = isNode(obj)

  t.false(ret)
})
