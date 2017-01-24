import test from 'ava'
import replace from '../lib/replace'

test('replace given node', t => {
  const node = Tree('foo', 'bar')
  const old = node.children[0]
  const target = Tree('baz')
  const ret = replace(target, old)

  t.is(ret, target)
  t.deepEqual(node, Tree('foo', 'baz'))
  t.is(old.parent, null)
})

test('ignore orphan node', t => {
  const node = Tree()
  const target = Tree()
  const ret = replace(target, node)

  t.is(ret, undefined)
})

test('ignore itself', t => {
  const node = Tree()
  const ret = replace(node, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = replace()
    t.is(ret, undefined)
  })
})
