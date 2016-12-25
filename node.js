const toMethod = require('to-method')
const functions = require('./')

class Node {
  constructor(value) {
    this.parent = null
    this.children = []
    Object.assign(this, value)
  }

  static create() {
    return new Node()
  }
}

const staticMethods = {
  fromArray: functions.fromArray.bind(null, Node.create),
  fromJSON: functions.fromJSON.bind(null, Node.create),
  fromObject: functions.fromObject.bind(null, Node.create)
}
Object.assign(Node, staticMethods)

const methods = Object.assign({}, functions)
delete methods.fromArray
delete methods.fromJSON
delete methods.fromObject
toMethod(Node, methods)

module.exports = Node
