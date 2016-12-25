import test from 'ava'
import lastChild from '../lib/last-child'

test('return last child', t => {
  const node = Tree(null, 'foo')
  const last = lastChild(node)

  t.is(last, node.children[0])
})

test('return undefined if no children', t => {
  const node = Tree()
  const last = lastChild(node)

  t.is(last, undefined)
})
