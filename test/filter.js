import test from 'ava'
import filter from '../lib/filter'

test('filter with predicate', t => {
  const root = Tree('foo', 'bar', 'baz', 'qux')
  const filtered = filter(root, node => ('baz' !== node.value))

  t.is(filtered, root)
  t.deepEqual(filtered, Tree('foo', 'bar', 'qux'))
})

test('return null if no node statisfy predicate', t => {
  const root = Tree('foo', 'bar', 'baz', 'qux')
  const filtered = filter(root, node => false)

  t.is(filtered, null)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = filter()
    t.is(ret, null)
  })
})
