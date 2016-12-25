import test from 'ava'
import length from '../lib/length'

test('return number of children', t => {
  const node = Tree(null, 'foo', 'bar')
  const ret = length(node)

  t.is(ret, 2)
})

test('return 0 when no children', t => {
  const node = Tree()
  const ret = length(node)

  t.is(ret, 0)
})
