import test from 'ava'
import Node from '../index'

import * as access from 'arbre-access'
import * as manipulate from 'arbre-manipulate'
import * as traverse from 'arbre-traverse'
import {
  toArray,
  toJSON,
  toObject,
  fromArray,
  fromJSON,
  fromObject
} from 'arbre-convert'

// TODO: factorize

[
  access,
  manipulate,
  traverse,
  { toArray, toJSON, toObject }
].forEach(module => {
  for (let methodName in module) {
    test(`node has method ${methodName}`, t => {
      const protoFn = Node.prototype[methodName]
      const moduleFn = module[methodName]

      t.is(typeof Node.prototype[methodName], 'function')
      t.is(protoFn.length, moduleFn.length - 1)
    })
  }
});

[
  { fromArray, fromJSON, fromObject }
].forEach(module => {
  for (let methodName in module) {
    test(`node has static method ${methodName}`, t => {
      const protoFn = Node[methodName]
      const moduleFn = module[methodName]

      t.is(typeof Node[methodName], 'function')
      t.is(protoFn.length, moduleFn.length - 1)
    })
  }
})

test('.at() accept rest parameters', t => {
  const node = Node.fromArray(['foo', ['bar', 'baz']])
  const ret = node.at(0, 0)

  t.is(ret.value, 'baz')
})
