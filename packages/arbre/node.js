import toMethod from 'to-method'
import * as functions from './index'

class Node {
  constructor(value) {
    this.parent = null
    this.children = []
    Object.assign(this, value)
  }
}

function createNode() {
  return new Node()
}

const staticMethods = {
  fromArray: functions.fromArray.bind(null, createNode),
  fromJSON: functions.fromJSON.bind(null, createNode),
  fromObject: functions.fromObject.bind(null, createNode)
}
Object.assign(Node, staticMethods)

const methods = Object.assign({}, functions)
delete methods.fromArray
delete methods.fromJSON
delete methods.fromObject
toMethod(Node, methods)

export default Node
