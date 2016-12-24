import toMethod from 'to-method'
import * as functions from './index'

class Node {
  constructor() {
    this.parent = null
    this.children = []
  }
}

const staticMethods = {
  fromArray: functions.fromArray.bind(null, Node),
  fromJSON: functions.fromJSON.bind(null, Node),
  fromObject: functions.fromObject.bind(null, Node)
}
Object.assign(Node, staticMethods)

const methods = Object.assign({}, functions)
delete methods.fromArray
delete methods.fromJSON
delete methods.fromObject
toMethod(Node, methods)

export default Node
