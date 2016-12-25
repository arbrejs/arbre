import test from 'ava'
import replace from '../lib/replace'

test('replace given node', t => {
  const node = Tree('foo', 'bar')
  const old = node.children[0]
  const replacer = Tree('baz')
  const ret = replace(replacer, old)

  t.is(ret, replacer)
  t.deepEqual(node, Tree('foo', 'baz'))
  t.is(old.parent, null)
})

test('ignore orphan node', t => {
  const node = Tree()
  const replacer = Tree()
  const ret = replace(replacer, node)

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
