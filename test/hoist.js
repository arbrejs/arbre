import test from 'ava'
import seed from './helpers/seed'

test('insert all children just after itself', t => {
  const root = seed('foo', ['bar', ['baz']], 'qux')

  root.at(0).hoist()

  t.is(root.children.length, 3)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'baz')
  t.is(root.at(2).value, 'qux')
})

test('ignore root', t => {
  const root = seed('foo')
  t.notThrows(() => root.hoist())
})
