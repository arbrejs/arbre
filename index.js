const Node = require('./lib/node')

module.exports = function grapes(value) {
  if (null != value) {
    return Node.fromObject(value)
  }
  return new Node()
}

module.exports.Node = Node
