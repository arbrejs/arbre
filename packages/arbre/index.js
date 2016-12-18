import { Node } from 'arbre-node'
import { mixin } from 'arbre-mixin'

import * as access from 'arbre-query'
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

mixin(Node, access, manipulate, traverse, { toArray, toJSON, toObject })

// manual plumbing for functions using rest parameters
// TODO: create associated test
Node.prototype.at = function(...indices) {
  indices.unshift(this)
  return access.at.apply(this, indices)
}

Object.assign(Node, {
  fromArray: fromArray.bind(null, Node),
  fromJSON: fromJSON.bind(null, Node),
  fromObject: fromObject.bind(null, Node)
})

export default Node
