import test from 'ava'
import seed from './helpers/seed'

test('filter using given predicate', t => {
  const root = seed('foo', 'bar', 'baz', 'bar')
  root.filter(node => ('foo' === node.value || 'bar' === node.value))

  t.is(root.children.length, 2)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'bar')
})

test.todo('hoist orphan children')
