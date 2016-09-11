import test from 'ava'
import seed from './helpers/seed'

test('replace given node', t => {
  const node = seed('foo')
  const old = node.add('bar')
  const replace = seed('baz')
  replace.replace(old)

  t.deepEqual(node, seed('foo', 'baz'))
  t.is(old.parent, null)
  t.is(replace.parent, node)
  t.is(replace.index, 0)
})

test('ignore root', t => {
  const node = seed('foo', 'bar')
  const replace = seed('baz', 'qux')
  const ret = replace.replace(node)

  t.is(ret, replace)
})

test('ignore no argument', t => {
  t.notThrows(() => seed().replace())
})
