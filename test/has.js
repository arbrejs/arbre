import test from 'ava'
import has from '../lib/has'

test('check child presence', t => {
  const root = Tree(0, 1)
  const child = root.children[0]
  const ret = has(root, child)

  t.true(ret)
})

test('return false if no child is present', t => {
  const root = Tree(0, 1)
  const orphan = Tree()
  const ret = has(root, orphan)

  t.false(ret)
})
