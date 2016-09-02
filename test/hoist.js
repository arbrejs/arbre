import test from 'ava'
import grapes from '../'

test('insert all children just after itself', t => {
  const node = grapes({
    type: 'foo',
    children: [
      {
        type: 'bar',
        children: [
          { type: 'baz' }
        ]
      },
      { type: 'qux' }
    ]
  })

  node.at(0).hoist()

  t.is(node.children.length, 3)
  t.is(node.at(0).value.type, 'bar')
  t.is(node.at(1).value.type, 'baz')
  t.is(node.at(2).value.type, 'qux')
})

test('ignore root', t => {
  const node = grapes({
    type: 'foo'
  })

  t.notThrows(() => node.hoist())
})
