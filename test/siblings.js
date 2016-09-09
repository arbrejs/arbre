import test from 'ava'
import seed from './helpers/seed'
import { Node } from '../'

test('return an array of siblings', t => {
  const root = seed(null, 'foo', 'bar', 'baz')
  const siblings = root.at(1).siblings

  t.true(Array.isArray(siblings))
  t.is(siblings.length, 2)
  t.true(siblings[0] instanceof Node)
  t.is(siblings[0].value, 'foo')
  t.true(siblings[1] instanceof Node)
  t.is(siblings[1].value, 'baz')
})

test('return an empty array if no siblings', t => {
  const root = seed()

  t.deepEqual(root.siblings, [])
})
