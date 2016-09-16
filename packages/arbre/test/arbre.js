import test from 'ava'
import Node from '../lib/arbre'

import * as access from 'arbre-access'
import * as convert from 'arbre-convert'
import * as manipulate from 'arbre-manipulate'
import * as traverse from 'arbre-traverse'

[access, convert, manipulate, traverse].forEach(module => {
  for (let methodName in module) {
    test(`node has method ${methodName}`, t => {
      const protoFn = Node.prototype[methodName]
      const moduleFn = module[methodName]

      t.is(typeof Node.prototype[methodName], 'function')
      t.is(protoFn.length, moduleFn.length - 1)
    })
  }
})
