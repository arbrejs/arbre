import test from 'ava'
import { Node } from '../'

test('clone and merge given value', t => {
  const node = new Node({
    type: 'foo',
    deep: {
      property: {
        bar: 'baz'
      }
    }
  })
  const cloneNode = node.cloneWith({ deep: { property: { bar: 'qux' }}})

  t.not(node, cloneNode)
  t.is(cloneNode.value.type, 'foo')
  t.is(cloneNode.value.deep.property.bar, 'qux')
})
