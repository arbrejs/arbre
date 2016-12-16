import test from 'ava'
import { has } from '../index'

test('check child presence', t => {
  const node = seed(null, 'foo')
  const child = node.children[0]
  const ret = has(node, child)

  t.true(ret)
})

test('return false if no child is present', t => {
  const node = seed(null, 'foo')
  const unknown = seed()
  const ret = has(node, unknown)

  t.false(ret)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = has()
    t.false(ret)
  })
})
