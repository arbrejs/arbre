import test from 'ava'
import toObject from '../lib/to-object'

test('convert to object', t => {
  const node = Tree({ type: 'foo' }, { type: 'bar' }, { type: 'baz' })
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
  const node = Tree('foo', 'bar', 'baz')
  const json = toObject(node)

  t.deepEqual(json, {
    value: 'foo',
    children: [
      { value: 'bar' },
      { value: 'baz' }
    ]
  })
})
