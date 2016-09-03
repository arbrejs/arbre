import test from 'ava'
import grapes from '../'

test('check child presence', t => {
  const root = grapes()
  const node = root.add(1)

  t.is(root.has(node), true)
})

test('check child presence by value', t => {
  const root = grapes()
  root.add(1)

  t.is(root.has(1), true)
})
