import test from 'ava'
import { has } from '../lib/has'

test('check child presence', t => {
  const node = seed(null, 'foo')
  const child = node.children[0]

  t.is(has(node, child), true)
})
