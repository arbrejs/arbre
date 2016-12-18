import test from 'ava'
import { filter } from '../index'

test('filter with predicate', t => {
  const node = Tree('foo', 'bar', 'baz', 'qux')
  const filtered = filter(node, node => ('baz' !== node.value))

  t.is(filtered, node)
  t.deepEqual(filtered, Tree('foo', 'bar', 'qux'))
})

test('return null if no node statisfy predicate', t => {
  const node = Tree('foo', 'bar', 'baz', 'qux')
  const filtered = filter(node, node => false)

  t.is(filtered, null)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = filter()
    t.is(ret, null)
  })
})
