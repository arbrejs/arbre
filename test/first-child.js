import test from 'ava'
import firstChild from '../lib/first-child'

test('return the first child', t => {
  const root = Tree(null, 'foo')
  const first = firstChild(root)

  t.is(first, root.children[0])
})

test('return undefined if no children', t => {
  const node = Tree()
  const first = firstChild(node)

  t.is(first, undefined)
})
