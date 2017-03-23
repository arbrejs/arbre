import test from 'ava'
import firstChild from '../lib/first-child'

test('return the first child', t => {
  const root = Tree(0, 1)
  const first = firstChild(root)

  t.is(first, root.children[0])
})

test('return null if no children', t => {
  const node = Tree()
  const first = firstChild(node)

  t.is(first, null)
})
