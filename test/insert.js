import test from 'ava'
import insert from '../lib/insert'

test('insert a node', t => {
  const node = Tree()
  const child = Tree('foo')
  const ret = insert(node, child)

  t.is(ret, child)
  t.is(node.children[0], child)
  t.is(child.value, 'foo')
})

test('move an existing node', t => {
  const root = Tree(null, ['foo', 'bar'])
  const moved = root.children[0].children[0]
  const ret = insert(root, moved)

  t.is(ret, moved)
  t.deepEqual(root, Tree(null, 'foo', 'bar'))
  t.is(moved, root.children[1])
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insert(node, node)

  t.is(ret, undefined)
  t.not(node.parent, node)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = insert()
    t.is(ret, undefined)
  })
})
