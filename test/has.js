import test from 'ava'
import seed from './helpers/seed'

test('check child presence', t => {
  const parent = seed(null, 'foo')
  const node = parent.at(0)

  t.is(parent.has(node), true)
})

test('check child presence by value', t => {
  const parent = seed(null, 'foo')

  t.is(parent.has('foo'), true)
})
