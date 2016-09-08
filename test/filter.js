import test from 'ava'
import grapes from '../'

test('filter using given predicate', t => {
  const tree = grapes({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' },
      { type: 'bar' }
    ]
  })

  tree.filter(node => (
    'foo' === node.value.type ||
    'bar' === node.value.type
  ))

  t.is(tree.children.length, 2)
  t.is(tree.at(0).value.type, 'bar')
  t.is(tree.at(1).value.type, 'bar')
})

test.todo('hoist orphan children')
