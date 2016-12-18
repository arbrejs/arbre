import test from 'ava'
import { hoist } from '../index'

test('insert children just after itself', t => {
  const node = Tree('foo', ['bar', 'baz', 'quux', 'corge'], 'qux')
  const ret = hoist(node.children[0])

  t.is(ret, 3)
  t.deepEqual(node, Tree('foo', 'bar', 'baz', 'quux', 'corge', 'qux'))
})

test('ignore orphan node', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = hoist(node)
    t.is(ret, 0)
  })
})
