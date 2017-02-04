import test from 'ava'
import has from '../lib/has'

test('check child presence', t => {
  const root = Tree(null, 'foo')
  const child = root.children[0]
  const ret = has(root, child)

  t.true(ret)
})

test('return false if no child is present', t => {
  const root = Tree(null, 'foo')
  const orphan = Tree()
  const ret = has(root, orphan)

  t.false(ret)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = has()
    t.false(ret)
  })
})
