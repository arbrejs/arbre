import test from 'ava'
import grapes from '../'

test('filter using given predicate', t => {
  const snode = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'bar' }
    ]
  })

  const dnode = snode.filter(node => (
    'foo' === node.value.type ||
    'bar' === node.value.type
  ))

  t.is(dnode.children.length, 2)
  t.is(dnode.at(0).value.type, 'bar')
  t.is(dnode.at(1).value.type, 'bar')
})

test.todo('hoist orphan children')
