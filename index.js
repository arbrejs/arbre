const Node = require('./lib/node')

module.exports = function grapes(value) {
  if (null != value) {
    if ('object' !== typeof value) {
      return new Node(value)
    }
    return Node.fromObject(value)
  }
  return new Node()
}

module.exports.Node = Node
