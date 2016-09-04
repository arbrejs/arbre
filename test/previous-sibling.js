import test from 'ava'
import grapes from '../'

test('return previous sibling', t => {
  const tree = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' },
      { type: 'baz' }
    ]
  })

  t.is(tree.at(1).previousSibling.value.type, 'foo')
})

test('return undefined if no previous sibling', t => {
  const tree = grapes()
  t.is(tree.previousSibling, undefined)
})
