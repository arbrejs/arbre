import test from 'ava'
import grapes from '../'

test('return node at given index', t => {
  const node = grapes({
    children: [
      { type: 'foo' },
      { type: 'bar' },
      { type: 'baz' }
    ]
  })

  t.is(node.at(0).value.type, 'foo')
  t.is(node.at(1).value.type, 'bar')
  t.is(node.at(2).value.type, 'baz')
})

test('accept rest parameters', t => {
  const node = grapes({
    children: [
      {
        type: 'foo',
        children: [
          {
            type: 'bar'
          }
        ]
      }
    ]
  })

  t.is(node.at(0, 0).value.type, 'bar')
})
