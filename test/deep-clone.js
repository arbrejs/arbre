import test from 'ava'
import deepClone from '../lib/deep-clone'
import { clone } from './helpers/node'

test.only('deep clone a node', t => {
  const root = Tree(0, [1, 2])
  const ret = deepClone(root, clone)

  t.not(ret, root)
  t.deepEqual(ret, root)
})
