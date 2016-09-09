import test from 'ava'
import seed from './helpers/seed'

test('return itself', t => {
  const root1 = seed()
  const root2 = root1.mapValues(node => node)
  t.is(root1, root2)
})

test.skip('mutate values', t => {
  const root = seed('foo', 'bar')

  root.mapValues(value => {
    if ('foo' === value) {
      value = 'baz'
    }
    else if ('bar' === value) {
      value = 'qux'
    }
  })

  t.is(root.value, 'baz')
  t.is(root.at(0).value, 'qux')
})

test('skip node when null is returned', t => {
  const root = seed('foo', ['bar', ['baz']], 'qux')

  root.mapValues(value => ('baz' === value ? null : value))

  t.is(root.children.length, 2)
  t.is(root.at(0).value, 'bar')
  t.is(root.at(1).value, 'qux')
})
