import test from 'ava'
import grapes from '../'

test('return the first child', t => {
  const tree = grapes({ children: [ { type: 'foo' } ] })
  t.is(tree.firstChild.value.type, 'foo')
})

test('return undefined if no children', t => {
  const tree = grapes()
  t.is(tree.firstChild, undefined)
})
