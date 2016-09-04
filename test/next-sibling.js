import test from 'ava'
import grapes from '../'

test('return next sibling', t => {
  const tree = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' },
      { type: 'baz' }
    ]
  })

  t.is(tree.at(1).nextSibling.value.type, 'baz')
})

test('return undefined if no next sibling', t => {
  const tree = grapes()
  t.is(tree.nextSibling, undefined)
})
