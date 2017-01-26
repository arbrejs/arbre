import test from 'ava'
import equal from '../lib/equal'

test('nodes are equal with similar immutable values', t => {
  const node1 = Tree('foo')
  const node2 = Tree('foo')
  const ret = equal(node1, node2)

  t.true(ret)
})

test('nodes are equal with similar values', t => {
  const node1 = Tree({ foo: { bar: 'baz' }})
  const node2 = Tree({ foo: { bar: 'baz' }})
  const ret = equal(node1, node2)

  t.true(ret)
})

test('node is equal to itself', t => {
  const node = Tree('foo')
  const ret = equal(node, node)

  t.true(ret)
})

test('do not check structural equality', t => {
  const node1 = Tree('foo')
  const node2 = Tree('foo', 'bar')
  const ret = equal(node1, node2)

  t.true(ret)
})

test('ignore no arguments', t => {
  t.notThrows(() => {
    const ret = equal()
    t.false(ret)
  })
})
