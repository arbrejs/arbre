import test from 'ava'
import Node from '../node'
import * as fns from '../index'

function methodMacro(t, fnName, fn) {
  t.is(typeof t.context[fnName], 'function')
  t.is(t.context[fnName].length, fn.length - 1)
}
methodMacro.title = (title, fnName) => `Node has ${fnName} method`

function staticMethodMacro(t, fnName, fn) {
  t.is(typeof Node[fnName], 'function')
  t.is(Node[fnName].length, fn.length - 1)
}
staticMethodMacro.title = (title, fnName) => `Node has ${fnName} static method`

test.beforeEach(t => {
  t.context = new Node()
})

Object.keys(fns)
  .filter(fnName => !~'fromArray,fromJSON,fromObject'.indexOf(fnName))
  .forEach(fnName => test(methodMacro, fnName, fns[fnName]))

test(staticMethodMacro, 'fromArray', fns.fromArray)
test(staticMethodMacro, 'fromJSON', fns.fromJSON)
test(staticMethodMacro, 'fromObject', fns.fromObject)
