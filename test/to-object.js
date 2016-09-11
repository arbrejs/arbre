import test from 'ava'
import seed from './helpers/seed'

test('convert to object', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' }, { type: 'baz' })
  const json = node.toObject()

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
  const json = node.toObject()

  t.deepEqual(json, {
    value: 'foo',
    children: [
      { value: 'bar' },
      { value: 'baz' }
    ]
  })
})
