import test from 'ava'
import seed from './helpers/seed'

test('check child presence', t => {
  const root = seed(null, 1)
  const node = root.at(0)

  t.is(root.has(node), true)
})

test('check child presence by value', t => {
  const root = seed(null, 1)

  t.is(root.has(1), true)
})
