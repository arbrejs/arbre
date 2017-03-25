import test from 'ava'
import toJSON from '../lib/to-json'
import { serialize } from './helpers/node'

test('convert to JSON', t => {
  const root = Tree(0, [1, 2, 3], [4, 5])
  const json = toJSON(root, serialize)

  t.deepEqual(json, JSON.stringify({
    value: 0,
    children: [
      {
        value: 1,
        children: [
          { value: 2 },
          { value: 3 }
        ]
      },
      {
        value: 4,
        children: [
          { value: 5 }
        ]
      }
    ]
  }, null, 2))
})
