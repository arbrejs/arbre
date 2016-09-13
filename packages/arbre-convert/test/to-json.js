import test from 'ava'
import { toJSON } from '../lib/to-json'

test('convert to JSON', t => {
  const node = seed({ type: 'foo' }, { type: 'bar' }, { type: 'baz' })
  const json = toJSON(node)

  t.deepEqual(json, JSON.stringify({
    type: 'foo',
    children: [
      { type: 'bar' },
      { type: 'baz' }
    ]
  }, null, 2))
})

test('add a value property for non-plain objects', t => {
  const node = seed('foo', 'bar', 'baz')
  const json = toJSON(node)

  t.deepEqual(json, JSON.stringify({
    value: 'foo',
    children: [
      { value: 'bar' },
      { value: 'baz' }
    ]
  }, null, 2))
})