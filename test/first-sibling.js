import test from 'ava'
import firstSibling from '../lib/first-sibling'

test('return the first sibling', t => {
  const root = Tree(0, 1, 2)
  const node = root.children[1]
  const first = firstSibling(node)

  t.is(first, root.children[0])
})

test('return itself if root', t => {
  const node = Tree()
  const first = firstSibling(node)

  t.is(first, node)
})

test('return itself if only child', t => {
  const root = Tree(0, 1)
  const node = root.children[0]
  const first = firstSibling(node)

  t.is(first, node)
})
