import test from 'ava'
import fromObject from '../lib/from-object'
import { clone } from './helpers/node'

test('create a tree', t => {
  const root = fromObject({
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
  }, clone)

  t.deepEqual(root, Tree(0, [1, 2, 3], [4, 5]))
})
