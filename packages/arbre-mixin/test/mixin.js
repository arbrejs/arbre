import test from 'ava'
import { mixin } from '../index'

function mixinMacro(t, input) {
  class Node {}
  mixin.apply(null, [Node].concat(input))

  t.is(typeof Node.prototype.at, 'function')
}
mixinMacro.title = (title, input, type) => `${title} - ${input}`

test('mixin', mixinMacro, require('arbre-query'), 'module')
test('mixin', mixinMacro, { at: () => {} }, 'object')
test('mixin', mixinMacro, [{ at: () => {} }], 'rest parameters')
