import test from 'ava'
import { Node } from '../lib/node'

const modules = {
  access: require('arbre-access'),
  convert: require('arbre-convert'),
  manipulate: require('arbre-manipulate'),
  traverse: require('arbre-traverse')
}

for (let moduleName in modules) {
  const module = modules[moduleName]

  for (let methodName in module) {
    test(`node has method ${methodName}`, t => {
      const protoFn = Node.prototype[methodName]
      const moduleFn = module[methodName]

      t.is(typeof Node.prototype[methodName], 'function')
      t.is(protoFn.length, moduleFn.length - 1)
    })
  }
}
