import test from 'ava'
import fromArray from '../lib/from-array'
import { create } from './helpers/node'

test('create a tree', t => {
  const root = fromArray([0, [1, 2, 3], [4, 5]], create)

  t.deepEqual(root, Tree(0, [1, 2, 3], [4, 5]))
})
