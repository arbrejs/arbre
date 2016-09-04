import test from 'ava'
import grapes from '../'

test('return the last child', t => {
  const tree = grapes({ children: [ { type: 'foo' } ] })
  t.is(tree.lastChild.value.type, 'foo')
})

test('return undefined if no children', t => {
  const tree = grapes()
  t.is(tree.lastChild, undefined)
})
