import test from 'ava'
import seed from './helpers/seed'

test('clone and merge given value', t => {
  const node = seed({ deep: { property: { bar: 'baz' }}})
  const cloneNode = node.cloneWith({ deep: { property: { bar: 'qux' }}})

  t.not(cloneNode, node)
  t.is(cloneNode.value.deep.property.bar, 'qux')
})
