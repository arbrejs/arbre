import test from 'ava'
import lastSibling from '../lib/last-sibling'

test('return the last sibling', t => {
  const root = Tree(null, 'foo', 'bar')
  const node = root.children[1]
  const last = lastSibling(node)

  t.is(last, root.children[root.children.length - 1])
})

test('return itself if root', t => {
  const node = Tree()
  const last = lastSibling(node)

  t.is(last, node)
})

test('return itself if only child', t => {
  const root = Tree(null, 'foo')
  const node = root.children[0]
  const last = lastSibling(node)

  t.is(last, node)
})
