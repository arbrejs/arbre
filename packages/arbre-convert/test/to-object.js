import test from 'ava'
import { toObject } from '../index'

test('convert to object', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' }, { type: 'baz' })
  const json = toObject(node)

  t.deepEqual(json, {
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' }
    ]
  })
})

test('add a value property for non-plain objects', t => {
  const node = seed('foo', 'bar', 'baz')
  const json = toObject(node)

  t.deepEqual(json, {
    value: 'foo',
    children: [
      { value: 'bar' },
      { value: 'baz' }
    ]
  })
})
