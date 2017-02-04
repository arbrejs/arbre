import test from 'ava'
import lastChild from '../lib/last-child'

test('return last child', t => {
  const root = Tree(0, 1)
  const last = lastChild(root)

  t.is(last, root.children[0])
})

test('return undefined if no children', t => {
  const node = Tree()
  const last = lastChild(node)

  t.is(last, undefined)
})
