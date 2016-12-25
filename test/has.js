import test from 'ava'
import has from '../lib/has'

test('check child presence', t => {
  const node = Tree(null, 'foo')
  const child = node.children[0]
  const ret = has(node, child)

  t.true(ret)
})

test('return false if no child is present', t => {
  const node = Tree(null, 'foo')
  const unknown = Tree()
  const ret = has(node, unknown)

  t.false(ret)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = has()
    t.false(ret)
  })
})
